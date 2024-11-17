import React, { useEffect, useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
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
import {useNavigate} from "react-router-dom";
import api from "../../utils/axios"; 

function My() {
  const { user, logout } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  // 상태 관리
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // 구매 내역 불러오기
   useEffect(() => {
    const fetchPurchases = async () => {
      try {
        setLoading(true);
        const response = await api.get('/purchases/');
        setPurchases(response.data);
      } catch (err) {
        setError(err.response?.data?.error || '구매 내역을 불러오는 중 오류가 발생했습니다.');
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
        window.open(response.data.redirect_url, '_blank');
      } else {
        alert('배송 정보를 찾을 수 없습니다.');
      }
    } catch (err) {
      alert(err.response?.data?.error || '배송 조회에 실패했습니다.');
    }
  };

   // 환불 신청 핸들러
   const handleRefundRequest = async (itemId) => {
    if (!window.confirm('환불을 신청하시겠습니까?')) return;

    try {
      const response = await api.post('/refunds/request/', { item_id: itemId });
      alert(response.data.message || '환불 요청이 접수되었습니다.');

      // 환불 요청 후 구매 내역 갱신
      const updatedResponse = await api.get('/purchases/');
      setPurchases(updatedResponse.data);
    } catch (err) {
      alert(err.response?.data?.error || '환불 요청 처리 중 오류가 발생했습니다.');
    }
  };

  //주문 상세 페이지로 이동
  const handlePaymentInfo = (itemId) => {
    navigate("/payment-info", { state: { itemId } });
  }

  // 로그아웃 핸들러
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };
  
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

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
                <div>구매 내역이 없습니다.</div>
              ) : (
                purchases.map((item) =>
                  isMobile ? (
                    <MobileWrapper key={item.item_id}>
                      <Product1>
                        <Left>
                          <ProductImage src={item.image_original} alt={item.title} />
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
                        <RefundButton onClick={() => handlePaymentInfo(item.item_id)}>결제 정보</RefundButton>
                        <DeliveryTrackingButton onClick={() => handleDeliveryCheck(item.item_id)}>
                          배송 조회
                        </DeliveryTrackingButton>
                        <RefundButton
                          onClick={() => !item.refund && handleRefundRequest(item.item_id)}
                          disabled={item.refund}
                          style={{
                            backgroundColor: item.refund ? 'gray' : '#ff4d4f',
                            cursor: item.refund ? 'not-allowed' : 'pointer',
                          }}
                        >
                          {item.refund ? '환불 처리됨' : '취소|환불신청'}
                        </RefundButton>
                      </Bottom>
                    </MobileWrapper>
                  ) : (
                    <Product1 key={item.item_id}>
                      <Left>
                        <ProductImage src={item.image_original} alt={item.title} />
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
                        <RefundButton onClick={() => handlePaymentInfo(item.item_id)}>결제 정보</RefundButton>
                        <DeliveryTrackingButton onClick={() => handleDeliveryCheck(item.item_id)}>
                          배송 조회
                        </DeliveryTrackingButton>
                        <RefundButton
                          onClick={() => !item.refund && handleRefundRequest(item.item_id)}
                          disabled={item.refund}
                          style={{
                            backgroundColor: item.refund ? 'gray' : '#ff4d4f',
                            cursor: item.refund ? 'not-allowed' : 'pointer',
                          }}
                        >
                          {item.refund ? '환불 처리됨' : '취소|환불신청'}
                        </RefundButton>
                      </Right>
                    </Product1>
                  )
                )
              )}
            </Products>
            <TotalProducts>
              총 구매상품 
              <PurpleText>
                {purchases.length}
              </PurpleText> 
              건
            </TotalProducts>
          </RectangleImage>
        </MainFrame>
      </Frame>
      <SignOutButton onClick={handleLogout}>로그아웃</SignOutButton>
    </Wrap>
  );
}

export default My;