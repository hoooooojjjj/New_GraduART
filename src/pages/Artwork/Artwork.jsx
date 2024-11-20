import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import Footer from "../../components/footer/Footer";
import {
  BacktoDepartment,
  DeptName,
  Container,
  Main,
  Title,
  Top,
  Placeholder,
  Middle,
  ImagesWrap,
  DetailWrap,
  Image,
  DetailComponent,
  Artist,
  Description,
  PricingComponent,
  Price,
  SellStatus,
  PriceWrap,
  ButtonsWrap,
  PurchaseButton,
  ImageDescriptions,
  BacktoDepartmentWrap,
  Overlay,
  FloatingWrapper,
  Tooltip,
} from "./ArtworkStyle.js";
import React, { createContext, useEffect, useState } from "react";
import art from "./Artwork.json";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/axios";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";

const Images = ({ targetArt }) => {
  return (
    <ImagesWrap>
      {/* 각 이미지 및 설명 출력 */}
      {targetArt.image_original && (
        <React.Fragment key="image_original">
          <Image src={targetArt.image_original} />
          <ImageDescriptions>Original View</ImageDescriptions>
        </React.Fragment>
      )}
      {targetArt.image_side_1 && (
        <React.Fragment key="image_side_1">
          <Image src={targetArt.image_side_1} />
          <ImageDescriptions>Side View 1</ImageDescriptions>
        </React.Fragment>
      )}
      {targetArt.image_side_2 && (
        <React.Fragment key="image_side_2">
          <Image src={targetArt.image_side_2} />
          <ImageDescriptions>Side View 2</ImageDescriptions>
        </React.Fragment>
      )}
      {targetArt.image_enlarged && (
        <React.Fragment key="image_enlarged">
          <Image src={targetArt.image_enlarged} />
          <ImageDescriptions>Enlarged View</ImageDescriptions>
        </React.Fragment>
      )}
    </ImagesWrap>
  );
};

const SideFloatingModals = ({
  targetArt,
  artworkYear,
  handleCart,
  handlePurchase,
}) => {
  // State for each modal
  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);

  // Toggle functions for each modal
  const toggleModal1 = () => setModal1Open(!isModal1Open);
  const toggleModal2 = () => setModal2Open(!isModal2Open);

  return (
    <>
      <Overlay
        isVisible={isModal1Open || isModal2Open}
        onClick={() => {
          setModal1Open(false);
          setModal2Open(false);
        }}
      />

      <FloatingWrapper
        className={isModal1Open ? "active" : ""}
        onClick={toggleModal1}
        color={"var(--purple)"}
        top={"40%"}
      >
        <Tooltip isActive={isModal1Open}>탭해서 작품 캡션 보기</Tooltip>
        <DetailComponent>
          <Artist>
            {targetArt.name}, {artworkYear}
          </Artist>
          <Description>{targetArt.description}</Description>
        </DetailComponent>
      </FloatingWrapper>

      <FloatingWrapper
        className={isModal2Open ? "active" : ""}
        onClick={toggleModal2}
        color={"var(--light-gray)"}
        top={"calc(40% + 200px)"}
      >
        <SellStatus>
          {targetArt.onSale ? "" : "판매가 완료된 작품입니다"}
        </SellStatus>
        <PriceWrap>
          <Price color={"var(--purple)"}>판매 가격</Price>{" "}
          <Price color={"var(--white)"}>{targetArt.price}</Price>
        </PriceWrap>
        <PriceWrap>
          <Price color={"var(--purple)"}>수령 방법</Price>{" "}
          <Price color={"var(--white)"}>택배</Price>
        </PriceWrap>
        <PriceWrap>
          <Price color={"var(--purple)"}>배송 기간</Price>{" "}
          <Price color={"var(--white)"}>영업일 기준 6~7일 소요됩니다.</Price>
        </PriceWrap>
        <ButtonsWrap>
          <PurchaseButton
            color={"var(--white)"}
            bgColor={`transparent`}
            onClick={handleCart}
          >
            장바구니에 담기
          </PurchaseButton>
          <PurchaseButton
            color={"var(--white)"}
            bgColor={`var(--purple)`}
            onClick={handlePurchase}
          >
            구매하기
          </PurchaseButton>
        </ButtonsWrap>
      </FloatingWrapper>
    </>
  );
};

function Artwork() {
  //url에서 artwork_id 받아옴, 이걸로 DB에 GET 요청 날려서 setTargetArt에 넣어주면 됨
  const { artwork_id } = useParams();
  const [targetArt, setTargetArt] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/items/${artwork_id}/`);
        console.log(response);
        setTargetArt(response.data);
      } catch (err) {
        setError(
          err.response?.data?.error || "작품 정보를 불러오는데 실패했습니다.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchArtwork();
  }, [artwork_id]);

  const handleBacktoDepartment = () => {
    navigate(`/dept_detail/${targetArt.department}`);
  };

  // 로그인 상태는 true로 설정 (로그인 기능 구현 전 )
  const isLoggedIn = true;
  const handleCart = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      await api.post("/cart/insert/", { item_id: artwork_id });
      alert("장바구니에 추가되었습니다.");
    } catch (err) {
      alert(err.response?.data?.error || "장바구니 추가 실패");
    }
  };

  //구매하기 버튼
  const handlePurchase = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      // 장바구니에 담겨있지 않은 경우에만 장바구니에 추가
      const cartResponse = await api.get("/cart/items/");
      const isInCart = cartResponse.data.some(
        (item) => item.item_id === artwork_id,
      );

      if (!isInCart) {
        await api.post("/cart/insert/", { item_id: artwork_id });
      }
    } catch (err) {
      if (err.response?.status !== 409) {
        // 409 에러가 아닌 경우만 알림 표시
        alert(err.response?.data?.error || "구매 처리 실패");
        return;
      }
    }
    // 결제 페이지로 이동하면서 작품 정보 전달
    navigate("/payment", {
      state: {
        selectedItems: [targetArt], // 작품 정보를 배열 형태로 전달
      },
    });
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!targetArt) return null; // targetArt가 아직 없으면 아무것도 렌더링하지 않습니다.

  const artworkYear = targetArt?.made_at
    ? new Date(targetArt.made_at).getFullYear()
    : "";
  return (
    <>
      <SideFloatingModals
        targetArt={targetArt}
        artworkYear={artworkYear}
        handleCart={handleCart}
        handlePurchase={handlePurchase}
      ></SideFloatingModals>
      <Container>
        <DepartmentHeader></DepartmentHeader>
        <Main>
          <Top>
            <BacktoDepartmentWrap>
              <BacktoDepartment onClick={handleBacktoDepartment}>
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.32258 0.622348C9.45993 0.818343 9.56889 1.05115 9.64324 1.30743C9.71759 1.56372 9.75586 1.83846 9.75586 2.11592C9.75586 2.39338 9.71759 2.66812 9.64324 2.92441C9.56889 3.1807 9.45993 3.4135 9.32258 3.6095L3.57408 11.8294L9.32258 20.0494C9.5996 20.4455 9.75523 20.9828 9.75523 21.543C9.75523 22.1032 9.5996 22.6404 9.32258 23.0365C9.04556 23.4327 8.66984 23.6552 8.27807 23.6552C7.8863 23.6552 7.51058 23.4327 7.23356 23.0365L0.433137 13.3124C0.29579 13.1164 0.186823 12.8836 0.112475 12.6273C0.0381279 12.3711 -0.00014019 12.0963 -0.00014019 11.8189C-0.00014019 11.5414 0.0381279 11.2667 0.112475 11.0104C0.186823 10.7541 0.29579 10.5213 0.433137 10.3253L7.23356 0.601162C7.79656 -0.203884 8.74477 -0.203884 9.32258 0.622348Z"
                    fill="#A348F6"
                  />
                </svg>
                <DeptName>{targetArt.department}</DeptName>
              </BacktoDepartment>
            </BacktoDepartmentWrap>
            <Title>{targetArt.title}</Title>
            <Placeholder></Placeholder>
          </Top>
          <Middle>
            <Images targetArt={targetArt}></Images>
            <DetailWrap>
              <DetailComponent>
                <Artist>
                  {targetArt.name}, {artworkYear}
                </Artist>
                <Description>{targetArt.description}</Description>
              </DetailComponent>
              <PricingComponent>
                <SellStatus>
                  {targetArt.onSale ? "" : "판매가 완료된 작품입니다"}
                </SellStatus>
                <PriceWrap>
                  <Price color={"var(--purple)"}>판매 가격</Price>{" "}
                  <Price color={"var(--white)"}>{targetArt.price}</Price>
                </PriceWrap>
                <PriceWrap>
                  <Price color={"var(--purple)"}>수령 방법</Price>{" "}
                  <Price color={"var(--white)"}>택배</Price>
                </PriceWrap>
                <PriceWrap>
                  <Price color={"var(--purple)"}>배송기간</Price>{" "}
                  <Price color={"var(--white)"}>영업일 기준 6~7일 소요됩니다.</Price>
                </PriceWrap>
                <ButtonsWrap>
                  <PurchaseButton
                    color={"var(--white)"}
                    bgColor={`transparent`}
                    onClick={handleCart}
                  >
                    장바구니에 담기
                  </PurchaseButton>
                  <PurchaseButton
                    color={"var(--white)"}
                    bgColor={`var(--purple)`}
                    onClick={handlePurchase}
                  >
                    구매하기
                  </PurchaseButton>
                </ButtonsWrap>
              </PricingComponent>
            </DetailWrap>
          </Middle>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Artwork;
