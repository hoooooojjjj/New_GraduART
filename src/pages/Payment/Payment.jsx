import React, { useEffect, useState } from "react";
import {
  Wrap,
  PaymentText,
  MiddleWrapper,
  PaymentButton,
  OrderInformationWrap,
  OrderDetailWrap,
  OrderInformationText,
  OrdererWrap,
  DeliveryAddressWrap,
  MiddleText,
  TwoTextWrapper,
  OrderText,
  OrderMidWrap,
  Line,
  ArtImage,
  ArtTextWrap,
  ArtPrice,
  LeftWrapper,
  PurpleText,
  WhiteText,
  ArtText,
  ArtInfo,
  TotalWrap,
  TextInput,
  TextWrapper,
} from "./PaymentStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";

function Payment() {
  const [formData, setFormData] = useState({
    orderName: "",
    orderPhone: "",
    orderEmail: "",
    addressName: "",
    addressPhone: "",
    address: "",
    detailAddress: "",
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleFocus = (e) => {
    e.target.placeholder = ""; // 포커스 시 placeholder 제거
  };

  const handleBlur = (e, placeholderText) => {
    if (!e.target.value) {
      e.target.placeholder = placeholderText; // 포커스 해제 시 원래 placeholder로 복원
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // 모든 입력 필드가 채워졌는지 확인
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormComplete(allFieldsFilled);
  }, [formData]);

  return (
    <Wrap>
      <DepartmentHeader></DepartmentHeader>
      <PaymentText>결제하기</PaymentText>
      <MiddleWrapper>
        <OrderInformationWrap>
          <OrderInformationText>주문/배송 정보</OrderInformationText>
          <OrdererWrap>
            <MiddleText>주문자</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={30}
                placeholder="이름을 입력해주세요"
                name="orderName"
                value={formData.orderName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "이름을 입력해주세요")}
              />
              <TextWrapper
                width={50}
                placeholder="전화번호를 입력해주세요"
                name="orderPhone"
                value={formData.orderPhone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "전화번호를 입력해주세요")}
              />
            </TwoTextWrapper>
            <TextWrapper
              width={100}
              placeholder="이메일 주소를 입력해주세요"
              name="orderEmail"
              value={formData.orderEmail}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, "이메일 주소를 입력해주세요")}
            />
          </OrdererWrap>
          <DeliveryAddressWrap>
            <MiddleText>배송지 정보</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={30}
                placeholder="이름을 입력해주세요"
                name="addressName"
                value={formData.addressName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "이름을 입력해주세요")}
              />
              <TextWrapper
                width={50}
                placeholder="전화번호를 입력해주세요"
                name="addressPhone"
                value={formData.addressPhone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "전화번호를 입력해주세요")}
              />
            </TwoTextWrapper>
            <TextWrapper
              width={100}
              placeholder="지번/도로명 주소를 입력해주세요"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, "지번/도로명 주소를 입력해주세요")}
            />
            <TextWrapper
              width={100}
              placeholder="상세 주소를 입력해주세요"
              name="detailAddress"
              value={formData.detailAddress}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, "상세 주소를 입력해주세요")}
            />
          </DeliveryAddressWrap>
        </OrderInformationWrap>
        <OrderDetailWrap>
          <OrderText>주문 내역</OrderText>
          <Line></Line>
          <OrderMidWrap>
            <LeftWrapper>
              <ArtImage></ArtImage>
              <ArtTextWrap>
                <ArtText>작품명 블라블라</ArtText>
                <ArtInfo>홍길동 | 200*200 | 종이, 작업복</ArtInfo>
              </ArtTextWrap>
            </LeftWrapper>
            <ArtPrice>
              <PurpleText>360,000 </PurpleText>
              <WhiteText> 원</WhiteText>
            </ArtPrice>
          </OrderMidWrap>
          <Line></Line>
          <OrderMidWrap>
            <LeftWrapper>
              <ArtImage></ArtImage>
              <ArtTextWrap>
                <ArtText>작품명 블라블라</ArtText>
                <ArtInfo>홍길동 | 200*200 | 종이, 작업복</ArtInfo>
              </ArtTextWrap>
            </LeftWrapper>
            <ArtPrice>
              <PurpleText>360,000</PurpleText>
              <WhiteText>원</WhiteText>
            </ArtPrice>
          </OrderMidWrap>
          <Line></Line>
          <TotalWrap>
            <WhiteText>총 주문상품</WhiteText>
            <PurpleText> 2</PurpleText>
            <WhiteText>건</WhiteText>
            <PurpleText> |</PurpleText>
            <WhiteText> 주문금액</WhiteText>
            <PurpleText> 720,000</PurpleText>
            <WhiteText>원</WhiteText>
          </TotalWrap>
        </OrderDetailWrap>
      </MiddleWrapper>
      <PaymentButton isComplete={isFormComplete}>
        카카오페이로 결제하기
      </PaymentButton>
    </Wrap>
  );
}

export default Payment;
