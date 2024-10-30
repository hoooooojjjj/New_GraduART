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
  align-items: center;
`;

export const PaymentText = styled.div`
  color: #fff;
  font-family: "KoddiUD OnGothic";
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 50px */
  margin-bottom: 50px;
  margin-top: 25px;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const OrderInformationWrap = styled.div`
  width: 38%;
  border-radius: 20px;
  background: rgba(163, 72, 246, 0.8);
  padding: 30px 29px 20px 29px;
`;

export const OrderInformationText = styled.div`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const OrdererWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DeliveryAddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MiddleText = styled.div`
  color: #dadada;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  margin-left: 10px;
  margin-bottom: 13px;
  margin-top: 15px;
`;

export const TwoTextWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  width: ${({ width }) => width}%;
  padding-left: 15px;
  align-items: center;
  color: #d7d7d7;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 12px;
  height: 43px;
`;

export const OrderDetailWrap = styled.div`
  width: 43%;
  height: 100px;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
`;

export const PaymentButton = styled.button`
  border-radius: 15px;
  border: 5px solid #fae100;
  display: flex;
  width: auto;
  height: 60px;
  padding: 17px 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #fff;
  font-family: "KoddiUD OnGothic";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  background-color: var(--black);
  margin-top: 50px;
`;
