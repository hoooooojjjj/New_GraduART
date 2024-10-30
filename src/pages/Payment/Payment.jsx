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
  TextWrapper,
  TwoTextWrapper,
} from "./PaymentStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";

function Payment() {
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
              <TextWrapper width={30}>이름을 입력해주세요</TextWrapper>
              <TextWrapper width={50}>전화번호를 입력해주세요</TextWrapper>
            </TwoTextWrapper>
            <TextWrapper width={100}>이메일 주소를 입력해주세요</TextWrapper>
          </OrdererWrap>
          <DeliveryAddressWrap>
            <MiddleText>배송지 정보</MiddleText>
            <TwoTextWrapper>
              <TextWrapper width={30}>이름을 입력해주세요</TextWrapper>
              <TextWrapper width={50}>전화번호를 입력해주세요</TextWrapper>
            </TwoTextWrapper>
            <TextWrapper width={100}>
              지번/도로명 주소를 입력해주세요
            </TextWrapper>
            <TextWrapper width={100}>상세 주소를 입력해주세요</TextWrapper>
          </DeliveryAddressWrap>
        </OrderInformationWrap>
        <OrderDetailWrap>dd</OrderDetailWrap>
      </MiddleWrapper>
      <PaymentButton>카카오페이로 결제하기</PaymentButton>
    </Wrap>
  );
}

export default Payment;
