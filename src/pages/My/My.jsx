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

function My() {
  const { user, logout } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const handlePaymentInfo = () => {
    navigate("/PaymentInfo")
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

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
              {isMobile ? (
                <MobileWrapper>
                  <Product1>
                    <Left>
                      <ProductImage></ProductImage>
                      <ProductDescription>
                        <Title>작품명 블라블라</Title>
                        <DetailDescription>
                          홍길동
                          <SmallLine></SmallLine>
                          200*200
                          <SmallLine></SmallLine>
                          종이, 작업복
                        </DetailDescription>
                      </ProductDescription>
                    </Left>
                    <Right>
                      <ProductPrice>360,000
                        <WhiteText>원</WhiteText>
                      </ProductPrice>
                    </Right>
                  </Product1>
                  <Bottom> {/* MobileWrapper 내에서 Product1과 Bottom을 수직으로 배치 */}
                    <DeliveryTrackingButton>배송조회</DeliveryTrackingButton>
                    <RefundButton>취소|환불신청</RefundButton>
                  </Bottom>
                </MobileWrapper>
              ) : (
                <Product1>
                  <Left>
                    <ProductImage></ProductImage>
                    <ProductDescription>
                      <Title>작품명 블라블라</Title>
                      <DetailDescription>
                        홍길동
                        <SmallLine></SmallLine>
                        200*200
                        <SmallLine></SmallLine>
                        종이, 작업복
                      </DetailDescription>
                    </ProductDescription>
                  </Left>
                  <Right>
                    <ProductPrice>360,000
                      <WhiteText>원</WhiteText>
                    </ProductPrice>
                    <RefundButton onClick={handlePaymentInfo}>결제 정보</RefundButton>
                    <DeliveryTrackingButton>배송 조회</DeliveryTrackingButton>
                    <RefundButton>취소|환불신청</RefundButton>
                  </Right>
                </Product1>
              )}
            </Products>
            <TotalProducts>
              총 구매상품 
              <PurpleText>
                2
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