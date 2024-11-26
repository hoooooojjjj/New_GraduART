import styled from "@emotion/styled";

export const Wrap = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  margin: 0;
  padding: 0;
  background-color: var(--light-green);
  box-sizing: border-box;
  overflow-y: auto;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    align-items: center;
  }
`;

export const PageText = styled.div`
  color: #4e5a5b;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-left: 5dvw;
  margin-bottom: 20px;
  margin-top: 30px;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 25px;
    color: white;
  }
`;

export const Line = styled.div`
  background-color: #909090;
  height: 2px;
  margin-left: 5dvw;
  margin-right: 5dvw;
`;

export const MainFrame = styled.div`
  background-color: #d7d7d7;
  border-radius: 20px;
  padding: 25px 40px;
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  @media (min-width: 768px) {
    min-width: 750px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    margin-left: 18px;
    margin-right: 18px;
    width: calc(100% - 76px);
    margin-top: 20px;
    padding: 25px 20px;
    flex-direction: column;
  }
`;

export const MobileWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

// 이미지 스타일
export const RectangleImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 20px;
  flex-shrink: 0;
  background: rgba(217, 217, 217, 0.3);
  object-fit: cover;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100px;
    height: 100px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20dvw;
  flex-grow: 1;
  width: auto;
  @media (max-width: 768px) and (min-width: 320px) {
    height: 100px;
  }
`;

export const OrderInformation = styled.span`
  color: #4e5a5b;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const PurpleText = styled.span`
  color: #4e5a5b;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 25px */
  min-width: 30px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
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
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const MiddleWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    margin-left: 5px;
  }
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
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

// 원화 표시 스타일
export const Currency = styled.span`
  color: #a348f6;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

// 결제수단 텍스트 스타일
export const PaymentText = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-weight: 400;
  line-height: 25px;
  white-space: nowrap;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

// 결제 승인 시각 텍스트 스타일
export const ApprovalTimeText = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-weight: 400;
  line-height: 25px;
  white-space: nowrap;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RefundButton = styled.button`
  border-radius: 100px;
  background: #4e5a5b;
  backdrop-filter: blur(50px);
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  padding: 20px;
  margin-top: 70px;
  font-family: KoddiUDOnGothic, sans-serif;
  display: flex;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
    padding: 10px;
    margin-top: 40px;
  }
`;
