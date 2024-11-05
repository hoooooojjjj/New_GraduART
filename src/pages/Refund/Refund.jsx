import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Wrap,
  MainFrame,
  RectangleImage,
  OrderInfoWrapper,
  OrderDescription,
  ValueWrapper,
  AmountValue,
  Currency,
  PaymentText,
  TextWrapper,
  PurpleText,
  OrderInformation,
  MiddleWrapper,
  LabelValueWrapper,
  PageText,
  Line,
  ApprovalTimeText,
  ButtonWrapper,
  RefundButton,
  MobileWrap,
} from "./RefundStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import rightArrow from "../../assests/right-arrow.svg";

function Refund() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Wrap>
      <DepartmentHeader></DepartmentHeader>
      <PageText>취소|환불 신청</PageText>
      <Line></Line>
      <MainFrame>
        {isMobile ? (
          <>
            <MobileWrap>
              <RectangleImage />
              <TextWrapper>
                <OrderInfoWrapper>
                  <OrderInformation>주문 정보</OrderInformation>
                  <OrderDescription>
                    작품명 | 홍길동 | 작품 크기 | 작품 재료
                  </OrderDescription>
                </OrderInfoWrapper>
              </TextWrapper>
            </MobileWrap>

            <MiddleWrapper>
              <LabelValueWrapper>
                <PurpleText>금액</PurpleText>
                <ValueWrapper>
                  <AmountValue>360,000</AmountValue>
                  <Currency>원</Currency>
                </ValueWrapper>
              </LabelValueWrapper>
              <LabelValueWrapper>
                <PurpleText>결제수단</PurpleText>
                <ValueWrapper>
                  <PaymentText>카카오페이</PaymentText>
                </ValueWrapper>
              </LabelValueWrapper>
              <LabelValueWrapper>
                <PurpleText>결제 승인 시각</PurpleText>
                <ValueWrapper>
                  <ApprovalTimeText>2024. 10. 20. 23:12</ApprovalTimeText>
                </ValueWrapper>
              </LabelValueWrapper>
            </MiddleWrapper>
          </>
        ) : (
          <>
            <RectangleImage />
            <TextWrapper>
              <OrderInfoWrapper>
                <OrderInformation>주문 정보</OrderInformation>
                <OrderDescription>
                  작품명 | 홍길동 | 작품 크기 | 작품 재료
                </OrderDescription>
              </OrderInfoWrapper>
              <MiddleWrapper>
                <LabelValueWrapper>
                  <PurpleText>금액</PurpleText>
                  <ValueWrapper>
                    <AmountValue>360,000</AmountValue>
                    <Currency>원</Currency>
                  </ValueWrapper>
                </LabelValueWrapper>
                <LabelValueWrapper>
                  <PurpleText>결제수단</PurpleText>
                  <ValueWrapper>
                    <PaymentText>카카오페이</PaymentText>
                  </ValueWrapper>
                </LabelValueWrapper>
                <LabelValueWrapper>
                  <PurpleText>결제 승인 시각</PurpleText>
                  <ValueWrapper>
                    <ApprovalTimeText>2024. 10. 20. 23:12</ApprovalTimeText>
                  </ValueWrapper>
                </LabelValueWrapper>
              </MiddleWrapper>
            </TextWrapper>
          </>
        )}
      </MainFrame>
      <ButtonWrapper>
        <RefundButton>
          취소/환불 신청하기{" "}
          <img
            src={rightArrow}
            alt="Right arrow"
            style={{ marginLeft: "8px" }}
          />
        </RefundButton>
      </ButtonWrapper>
    </Wrap>
  );
}

export default Refund;
