import styled from "@emotion/styled";

export const Wrap = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  margin: 0;
  padding: 0;
  background-color: var(--black);
  box-sizing: border-box;
  overflow-y: auto;
`;

export const PageText = styled.p`
  color: #a348f6;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-left: 5dvw;
`;

export const Line = styled.div`
  background-color: #909090;
  height: 2px;
  margin-left: 5dvw;
  margin-right: 5dvw;
`;

export const MainFrame = styled.div`
  background-color: #d6d6d64c;
  border-radius: 20px;
  padding: 2dvh 3dvw;
  margin-right: 20dvw;
  margin-left: 20dvw;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
`;

// 이미지 스타일
export const RectangleImage = styled.div`
  height: 20dvw;
  width: 20dvw;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(50px);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20dvw;
  flex-grow: 1;
  width: auto;
`;

export const OrderInformation = styled.span`
  color: #fff;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export const PurpleText = styled.span`
  color: #a348f6;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 25px */
  min-width: 30px;
`;

// 주문 정보 컴포넌트 스타일
export const OrderInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

// 주문 설명 텍스트 스타일
export const OrderDescription = styled.p`
  align-self: stretch;
  color: #d6d6d6;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
`;

export const MiddleWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LabelValueWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

// 금액 텍스트 스타일
export const AmountValue = styled.span`
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  line-height: 25px;
  white-space: nowrap;
`;

// 원화 표시 스타일
export const Currency = styled.span`
  color: #a348f6;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

// 결제수단 텍스트 스타일
export const PaymentText = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-weight: 400;
  line-height: 25px;
  white-space: nowrap;
`;

// 결제 승인 시각 텍스트 스타일
export const ApprovalTimeText = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-weight: 400;
  line-height: 25px;
  white-space: nowrap;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RefundButton = styled.button`
  border-radius: 100px;
  background: #a348f6;
  backdrop-filter: blur(50px);
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  padding: 23px;
  margin-top: 70px;
`;