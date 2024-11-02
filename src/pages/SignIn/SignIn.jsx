import React, { useEffect, useState } from "react";
import {
  Wrap,
  PageText,
  Line,
  MainWrapper,
  MainFrame,
  TextFrame,
  ImageFrame,
} from "./SignInStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";

function SignIn() {
  return (
    <Wrap>
      <DepartmentHeader />
      <MainWrapper>
        <MainFrame>
          <TextFrame>
            <PageText>로그인</PageText>
          </TextFrame>
          <Line />
          <ImageFrame src="/google-signin-icon.png" />
        </MainFrame>
      </MainWrapper>
    </Wrap>
  );
}

export default SignIn;


