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
  Tooltip, SocialButtons,
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
        </React.Fragment>
      )}
      {targetArt.image_1 && (
        <React.Fragment key="image_1">
          <Image src={targetArt.image_1} />
        </React.Fragment>
      )}
      {targetArt.image_2 && (
        <React.Fragment key="image_2">
          <Image src={targetArt.image_2} />
        </React.Fragment>
      )}
      {targetArt.image_3 && (
        <React.Fragment key="image_3">
          <Image src={targetArt.image_3} />
        </React.Fragment>
      )}
      {targetArt.image_4 && (
        <React.Fragment key="image_4">
          <Image src={targetArt.image_4} />
        </React.Fragment>
      )}
      {targetArt.image_5 && (
        <React.Fragment key="image_5">
          <Image src={targetArt.image_5} />
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
          <Price color={"var(--white)"}>
            {targetArt.price.toLocaleString("ko-KR")}
          </Price>
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
        setTargetArt(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "새로고침 후 이용 가능합니다.");
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
      alert(
        err.response?.data?.error ||
          "로그인 후에만 상품 구매가 가능하니 먼저 로그인해주세요."
      );
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
        (item) => item.item_id === artwork_id
      );

      if (!isInCart) {
        await api.post("/cart/insert/", { item_id: artwork_id });
      }
    } catch (err) {
      if (err.response?.status !== 409) {
        // 409 에러가 아닌 경우만 알림 표시
        alert(
          err.response?.data?.error ||
            "로그인 후에만 상품 구매가 가능하니 먼저 로그인해주세요."
        );
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
                    fill="#4e5a5b"
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
                <SocialButtons>
                  {targetArt.facebook_url ?
                      <a href={targetArt.facebook_url}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.4 12C2.40017 10.1525 2.93342 8.34437 3.93575 6.79246C4.93808 5.24055 6.36691 4.01081 8.05081 3.25082C9.7347 2.49082 11.6021 2.23285 13.429 2.50785C15.2559 2.78285 16.9646 3.57915 18.3501 4.80119C19.7357 6.02323 20.7392 7.61911 21.2402 9.39733C21.7412 11.1755 21.7185 13.0606 21.1748 14.8262C20.6311 16.5918 19.5895 18.1631 18.1749 19.3514C16.7604 20.5397 15.033 21.2947 13.2 21.5256V14.4H15.6C15.9183 14.4 16.2235 14.2736 16.4485 14.0485C16.6736 13.8235 16.8 13.5183 16.8 13.2C16.8 12.8817 16.6736 12.5765 16.4485 12.3515C16.2235 12.1264 15.9183 12 15.6 12H13.2V9.6C13.2 9.28174 13.3264 8.97652 13.5515 8.75147C13.7765 8.52643 14.0817 8.4 14.4 8.4H15C15.3183 8.4 15.6235 8.27357 15.8485 8.04853C16.0736 7.82348 16.2 7.51826 16.2 7.2C16.2 6.88174 16.0736 6.57652 15.8485 6.35147C15.6235 6.12643 15.3183 6 15 6H14.4C13.4452 6 12.5295 6.37928 11.8544 7.05442C11.1793 7.72955 10.8 8.64522 10.8 9.6V12H8.4C8.08174 12 7.77652 12.1264 7.55147 12.3515C7.32643 12.5765 7.2 12.8817 7.2 13.2C7.2 13.5183 7.32643 13.8235 7.55147 14.0485C7.77652 14.2736 8.08174 14.4 8.4 14.4H10.8V21.5256C8.47994 21.2333 6.34633 20.1042 4.7997 18.3504C3.25308 16.5965 2.39978 14.3384 2.4 12ZM12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24Z"
                              fill="white"/>
                      </svg></a>
                      :""}
                  {targetArt.instagram_url ?
                      <a href={targetArt.instagram_url}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57427 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57427 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z"
                            fill="white"/>
                      </svg></a>
                      : ""}
                  {targetArt.email ?
                      <a href={targetArt.email}>
                      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.8 0H19.2C20.473 0 21.6939 0.505713 22.5941 1.40589C23.4943 2.30606 24 3.52696 24 4.8V13.2C24 14.473 23.4943 15.6939 22.5941 16.5941C21.6939 17.4943 20.473 18 19.2 18H4.8C3.52696 18 2.30606 17.4943 1.40589 16.5941C0.505713 15.6939 0 14.473 0 13.2V4.8C0 3.52696 0.505713 2.30606 1.40589 1.40589C2.30606 0.505713 3.52696 0 4.8 0ZM4.8 2.4C4.16348 2.4 3.55303 2.65286 3.10294 3.10294C2.65286 3.55303 2.4 4.16348 2.4 4.8V13.2C2.4 13.8365 2.65286 14.447 3.10294 14.8971C3.55303 15.3471 4.16348 15.6 4.8 15.6H19.2C19.8365 15.6 20.447 15.3471 20.8971 14.8971C21.3471 14.447 21.6 13.8365 21.6 13.2V4.8C21.6 4.16348 21.3471 3.55303 20.8971 3.10294C20.447 2.65286 19.8365 2.4 19.2 2.4H4.8Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.200775 4.49551C0.295272 4.38064 0.419867 4.28047 0.567443 4.20072C0.71502 4.12097 0.882689 4.06321 1.06088 4.03072C1.23906 3.99823 1.42428 3.99165 1.60595 4.01137C1.78763 4.03109 1.96219 4.07671 2.11969 4.14563L11.1688 8.10549C11.3863 8.20081 11.6353 8.25117 11.8891 8.25117C12.1429 8.25117 12.3919 8.20081 12.6094 8.10549L21.6585 4.14563C21.816 4.07664 21.9906 4.03095 22.1723 4.01118C22.354 3.9914 22.5393 3.99792 22.7175 4.03036C22.8958 4.0628 23.0635 4.12053 23.2112 4.20025C23.3588 4.27998 23.4835 4.38013 23.5781 4.495C23.6727 4.60987 23.7353 4.7372 23.7625 4.86972C23.7896 5.00224 23.7806 5.13737 23.7362 5.26737C23.6917 5.39737 23.6125 5.51972 23.5032 5.62741C23.3939 5.7351 23.2566 5.82604 23.0991 5.89503L14.0472 9.85489C13.3952 10.1401 12.6493 10.2907 11.8891 10.2907C11.1289 10.2907 10.383 10.1401 9.73101 9.85489L0.677707 5.89503C0.359859 5.75567 0.130913 5.52995 0.0412132 5.2675C-0.0484866 5.00506 0.00980332 4.72737 0.200775 4.49551Z"
                              fill="white"/>
                      </svg></a>
                      : ""}
                </SocialButtons>
                <Description>{targetArt.description}</Description>
              </DetailComponent>
              <PricingComponent>
                <SellStatus>
                  {targetArt.onSale ? "" : "판매가 완료된 작품입니다"}
                </SellStatus>
                <PriceWrap>
                  <Price color={"var(--purple)"}>판매 가격</Price>{" "}
                  <Price color={"var(--white)"}>
                    {" "}
                    {targetArt.price.toLocaleString("ko-KR")}원
                  </Price>
                </PriceWrap>
                <PriceWrap>
                  <Price color={"var(--purple)"}>수령 방법</Price>{" "}
                  <Price color={"var(--white)"}>택배</Price>
                </PriceWrap>
                <PriceWrap>
                  <Price color={"var(--purple)"}>배송기간</Price>{" "}
                  <Price color={"var(--white)"}>
                    영업일 기준 6~7일 소요됩니다.
                  </Price>
                </PriceWrap>
                {targetArt.onSale && (
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
                )}
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
