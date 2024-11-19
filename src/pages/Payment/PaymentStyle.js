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

export const OrderDetailWrap = styled.div`
  width: 43%;
  height: auto;
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  display: block;
  box-sizing: border-box;

  @media (max-width: 768px) and (min-width: 320px) {
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const OrderText = styled.div`
  color: #a348f6;
  font-size: 24px;
  font-style: normal;
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

export const Line = styled.div`
  background: #a348f6;
  margin: 18px 28px;
  height: 2px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 10px 16px;
  }
`;

export const OrderMidWrap = styled.div`
  display: flex;
  margin-left: 28px;
  margin-right: 60px;

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
  background: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(50px);
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
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;
export const ArtInfo = styled.span`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 400;
  line-height: 100%;

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

export const PurpleText = styled.span`
  color: #a348f6;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  font-family: KoddiUDOnGothic, sans-serif;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;

export const WhiteText = styled.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;

export const TotalWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
  gap: 5px;
  margin-bottom: 39px;
  margin-top: 4px;
  @media (max-width: 768px) and (min-width: 320px) {
    margin-right: 26px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export const PaymentButton = styled.button`
  border-radius: 20px;
  border: 5px solid #fae100;
  display: flex;
  width: auto;
  padding: 17px 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${({ isComplete }) => (isComplete ? "black" : "white")};
  font-size: 25px;
  font-style: normal;
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  background-color: ${({ isComplete }) =>
    isComplete ? "#fae100" : "var(--black)"};
  margin-top: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;
    display: flex;
    flex-direction: column;
`;

export const AgreeText = styled.span`
    color: var(--white);
    font-family: KoddiUDOnGothic sans-serif;
    font-size: 14px;
    margin-left: 12px;
`;

export const AgreeTextWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    flex-direction: row;
`