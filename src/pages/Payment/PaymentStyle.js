import styled from "@emotion/styled";
import { useState } from "react";

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
  align-items: flex-start;
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
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 12px;
  height: 43px;
  &::placeholder {
    color: #d7d7d7;
  }
  border: none;
  outline: none;
`;

export const OrderDetailWrap = styled.div`
  width: 43%;
  height: auto;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  display: block;
  box-sizing: border-box;
`;

export const OrderText = styled.div`
  color: #a348f6;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-left: 28px;
  margin-top: 34px;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  background: #a348f6;
  margin: 18px 28px;
  height: 2px;
`;

export const OrderMidWrap = styled.div`
  display: flex;
  margin-left: 55px;
  margin-right: 60px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ArtImage = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(50px);
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
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
export const ArtInfo = styled.span`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const ArtPrice = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 3px;
`;

export const PurpleText = styled.span`
  color: #a348f6;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export const WhiteText = styled.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export const TotalWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 102px;
  gap: 5px;
  margin-bottom: 39px;
  margin-top: 4px;
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
  color: ${({ isComplete }) => (isComplete ? "black" : "white")};
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  background-color: ${({ isComplete }) =>
    isComplete ? "#fae100" : "var(--black)"};
  margin-top: 50px;
`;
