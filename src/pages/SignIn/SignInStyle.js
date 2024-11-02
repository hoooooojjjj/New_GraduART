import styled from "@emotion/styled";
import { useState } from "react";

export const Wrap = styled('div')`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 100dvh;
    margin: 0;
    padding: 0;
    background-color: var(--black);
    box-sizing: border-box;
`

export const TextFrame = styled.div`
  width : 100%;
  align-self: stretch;
  height: 79px;
  // padding : 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 29px;
`;

export const PageText = styled.p`
  align-self: stretch;
  color: #a348f6;
  font-size: 50px;
  font-family: "KoddiUD OnGothic", sans-serif;
  font-weight: 700;
  line-height: 50px;
  word-wrap: break-word;
`;

export const Line = styled.div`
  width: 750px;
  height: 0;
  border: 2px solid #A348F6;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  display : flex;
  flex-wrap: wrap;
`;

export const MainFrame = styled.div`
  width: 750px;
  height: 320px;
  padding : 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 47px;
`;

export const ImageFrame = styled.img`
  width: 500px;
  height: 105.82px;
`;