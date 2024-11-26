import styled from "@emotion/styled";

// 레이아웃

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
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  align-items: flex-start;
  padding-top: 100px;

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    width: 100dvw;
    padding-top: 40px;
  }
`;

export const SmallWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 3px;
  }
`;

// 주문정보
export const OrderInformationWrap = styled.div`
  width: 38%;
  border-radius: 20px;
  background: var(--purple);
  padding: 30px 29px 20px 29px;

  @media (max-width: 768px) and (min-width: 320px) {
    width: calc(100% - 108px);
    margin-left: 25px;
    margin-right: 25px;
    padding: 17px 29px 13px 17px;
  }
`;

export const OrderInformationText = styled.div`
  color: var(--white);
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
`;

export const DeliveryAddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 인풋필드

export const PaymentText = styled.div`
  color: var(--white);
  font-family: KoddiUDOnGothic, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 50px;
  margin-top: 25px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 25px;
  }
`;

export const TextWrapper = styled.input`
  display: flex;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  width: ${({ width }) => width}%;
  padding-left: 15px;
  align-items: center;
  color: var(--purple);
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
    color: #D7D7D7;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 8px;
    height: 25px;
    margin-bottom: 8px;
  }
`;

export const TwoTextWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
    
`;

export const OneTextWrapper = styled.input`
  display: flex;
  border-radius: 20px;
  background: #D7D7D74D;
  padding-left: 15px;
  color: #d7d7d7;
  font-size: 13px;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 400;
  height: 43px;
  border: none;
  outline: none;
  margin-bottom: 12px;

  &::placeholder {
    color: #d7d7d7;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 8px;
    height: 25px;
    margin-bottom: 8px;
  }
`;

export const MiddleText = styled.div`
  color: var(--ambient-white);
  font-size: 20px;
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  line-height: 100%;
  margin-left: 10px;
  margin-bottom: 13px;
  margin-top: 15px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

// 주문상세 상품 정보
export const OrderDetailWrap = styled.div`
  width: 43%;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  box-sizing: border-box;

  @media (max-width: 768px) and (min-width: 320px) {
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const OrderText = styled.div`
  color: var(--purple);
  font-size: 24px;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  margin-left: 28px;
  margin-top: 34px;
  margin-bottom: 10px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
    color: white;
    margin-top: 17px;
  }
`;

export const OrderMidWrap = styled.div`
  display: flex;
  margin-left: 28px;
  margin-right: 60px;
  margin-bottom: 10px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin-right: 18px;
    margin-left: 18px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 5px;
  }
`;

export const ArtImage = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 768px) and (min-width: 320px) {
    height: 50px;
    width: 50px;
    border-radius: 10px;
  }
`;

export const ArtTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const ArtText = styled.span`
  color: #ddd;
  font-size: 16px;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;

export const ArtInfo = styled.span`
  color: #ddd;
  font-size: 12px;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 400;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 8px;
  }
`;

export const ArtPrice = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 3px;
`;

export const TotalWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 60px;
  gap: 15px;
  margin-bottom: 39px;
  margin-top: 4px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin-right: 26px;
    margin-bottom: 15px;
    margin-top: 15px;
    gap: 3px;
  }
`;

export const Line = styled.div`
  background: var(--purple);
  margin: 18px 28px;
  height: 2px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 10px 16px;
  }
`;

export const PurpleText = styled.span`
  color: var(--purple);
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const WhiteText = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;
