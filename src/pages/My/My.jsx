import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "react-responsive";
import {
  Wrap,
  Frame,
  MainFrame,
  PageText,
  RectangleImage,
  SubText,
  Line,
  Products,
  Product1,
  Left,
  ProductImage,
  ProductDescription,
  Title,
  DetailDescription,
  SmallLine,
  Right,
  ProductPrice,
  DeliveryTrackingButton,
  RefundButton,
  TotalProducts,
  WhiteText,
  PurpleText,
  Bottom,
  MobileWrapper,
  SignOutButton,
} from "./MyStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import { useNavigate } from "react-router-dom";
import api from "../../utils/axios";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";

function My() {
  const { user, logout } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const handleRefundNavigation = (itemId) => {
    navigate(`/refund/${itemId}`);
  };

  // 상태 관리
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 구매 내역 불러오기
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        setLoading(true);
        const response = await api.get("/purchases/");
        const updatedPurchases = response.data.map((item) => {
          const purchaseDate = new Date(item.purchase_date);
          const now = new Date();
          const twoWeeks = 14 * 24 * 60 * 60 * 1000;

          if (now - purchaseDate > twoWeeks) {
            // 2주 지나면 자동으로 구매 확정
            item.confirmed = true;
          }

          return item;
        });

        setPurchases(updatedPurchases);
      } catch (err) {
        setError(
          err.response?.data?.error ||
            "구매 내역을 불러오는 중 오류가 발생했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  // 배송 조회 핸들러
  const handleDeliveryCheck = async (itemId) => {
    try {
      const response = await api.get(`/delivery/${itemId}/`);
      if (response.data.redirect_url) {
        window.open(response.data.redirect_url, "_blank");
      } else {
        alert("배송 정보를 찾을 수 없습니다.");
      }
    } catch (err) {
      alert(
        err.response?.data?.error ||
          "배송 조회에 실패했습니다. 아직 운송장이 입력되지 않았을 수 있습니다."
      );
    }
  };

  //주문 상세 페이지로 이동
  const handlePaymentInfo = (itemId) => {
    navigate("/payment-info", { state: { itemId } });
  };

  // 로그아웃 핸들러
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error}></ErrorMessage>;

  return (
    <Wrap>
      <DepartmentHeader />
      <Frame>
        <MainFrame>
          <PageText>마이페이지</PageText>
          <RectangleImage>
            <SubText>구매 내역</SubText>
            <Line />
            <Products>
              {purchases.length === 0 ? (
                <div
                  style={{
                    color: "rgb(78, 90, 91)",
                    fontFamily: "KoddiUD OnGothic",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "100%",
                    marginTop: "20px",
                  }}
                >
                  구매 내역이 존재하지 않습니다.
                </div>
              ) : (
                purchases.map((item) =>
                  isMobile ? (
                    <MobileWrapper key={item.item_id}>
                      <Product1>
                        <Left>
                          <ProductImage
                            src={item.image_original}
                            alt={item.title}
                          />
                          <ProductDescription>
                            <Title>{item.title}</Title>
                            <DetailDescription>
                              {item.name}
                              <SmallLine />
                              {item.size}
                              <SmallLine />
                              {item.material}
                            </DetailDescription>
                          </ProductDescription>
                        </Left>
                        <Right>
                          <ProductPrice>
                            {item.price.toLocaleString()}
                            <WhiteText>원</WhiteText>
                          </ProductPrice>
                        </Right>
                      </Product1>
                      <Bottom>
                        <RefundButton
                          onClick={() =>
                            navigate(`/payment-info/${item.item_id}`)
                          }
                        >
                          결제 정보
                        </RefundButton>
                        <DeliveryTrackingButton
                          onClick={() => handleDeliveryCheck(item.item_id)}
                        >
                          배송 조회
                        </DeliveryTrackingButton>
                        {!item.confirmed && (
                          <RefundButton
                            onClick={() => handleRefundNavigation(item.item_id)}
                            disabled={item.refund}
                            style={{
                              backgroundColor: item.refund ? "gray" : "#ff4d4f",
                              cursor: item.refund ? "not-allowed" : "pointer",
                            }}
                          >
                            {item.refund ? "환불 처리됨" : "취소|환불신청"}
                          </RefundButton>
                        )}
                      </Bottom>
                    </MobileWrapper>
                  ) : (
                    <Product1 key={item.item_id}>
                      <Left>
                        <ProductImage
                          src={item.image_original}
                          alt={item.title}
                        />
                        <ProductDescription>
                          <Title>{item.title}</Title>
                          <DetailDescription>
                            {item.name}
                            <SmallLine />
                            {item.size}
                            <SmallLine />
                            {item.material}
                          </DetailDescription>
                        </ProductDescription>
                      </Left>
                      <Right>
                        <ProductPrice>
                          {item.price.toLocaleString()}
                          <WhiteText>원</WhiteText>
                        </ProductPrice>
                        <RefundButton
                          onClick={() =>
                            navigate(`/payment-info/${item.item_id}`)
                          }
                        >
                          결제 정보
                        </RefundButton>
                        <DeliveryTrackingButton
                          onClick={() => handleDeliveryCheck(item.item_id)}
                        >
                          배송 조회
                        </DeliveryTrackingButton>
                        {!item.confirmed && (
                          <RefundButton
                            onClick={() => handleRefundNavigation(item.item_id)}
                            disabled={item.refund}
                            style={{
                              backgroundColor: item.refund ? "gray" : "#ff4d4f",
                              cursor: item.refund ? "not-allowed" : "pointer",
                            }}
                          >
                            {item.refund ? "환불 처리됨" : "취소|환불신청"}
                          </RefundButton>
                        )}
                      </Right>
                    </Product1>
                  )
                )
              )}
            </Products>
            <TotalProducts>
              총 구매상품
              <PurpleText>{purchases.length}</PurpleText> 건
            </TotalProducts>
          </RectangleImage>
        </MainFrame>
      </Frame>
      <SignOutButton onClick={handleLogout}>로그아웃</SignOutButton>
    </Wrap>
  );
}

export default My;
