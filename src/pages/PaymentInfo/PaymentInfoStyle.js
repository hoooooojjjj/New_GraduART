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
  font-family: KoddiUDOnGothic, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 50px */
  margin-bottom: 50px;
  margin-top: 25px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 25px;
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    width: 100dvw;
  }
`;

export const OrderInformationWrap = styled.div`
  width: 38%;
  border-radius: 20px;
  background: rgba(163, 72, 246, 0.8);
  padding: 30px 29px 20px 29px;
  @media (max-width: 768px) and (min-width: 320px) {
    width: calc(100% - 108px);
    margin-left: 25px;
    margin-right: 25px;
    padding: 17px 29px 13px 17px;
  }
`;

export const OrderInformationText = styled.div`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const OrdererWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
  }
`;

export const DeliveryAddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
  }
`;

export const MiddleText = styled.div`
  color: #dadada;
  font-size: 20px;
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  line-height: 100%; /* 20px */
  margin-left: 10px;
  margin-bottom: 13px;
  margin-top: 15px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const TwoTextWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TextWrapper = styled.input`
  display: flex;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  width: ${({ width }) => width}%;
  padding-left: 15px;
  align-items: center;
  color: #d7d7d7;
  font-size: 13px;
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 12px;
  height: 43px;
  border: none;
  outline: none;
  &::placeholder {
    color: #d7d7d7;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 8px;
    height: 25px;
    margin-bottom: 8px;
  }
`;
