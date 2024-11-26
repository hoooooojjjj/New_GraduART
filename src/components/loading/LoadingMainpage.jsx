/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React from "react";

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #afb7b9;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loaderStyle = css`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #4e5a5b;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

function Loading() {
  return (
    <div css={containerStyle}>
      <div css={loaderStyle}></div>
    </div>
  );
}

export default Loading;
