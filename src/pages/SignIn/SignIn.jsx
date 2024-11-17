import React, { useEffect, useState } from "react";
//import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
//import { useNavigate, Link } from 'react-router-dom';
import {
  Wrap,
  PageText,
  Line,
  MainWrapper,
  MainFrame,
  TextFrame,
  ImageFrame,
  BackgroundCircle,
} from "./SignInStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";

function SignIn() {
  const { googleLogin } = useAuth();

  return (
    <Wrap>
      <DepartmentHeader />
      <MainWrapper>
        <MainFrame>
          <TextFrame>
            <PageText>로그인</PageText>
          </TextFrame>
          <Line />
          <ImageFrame src="/google-signin-icon.png" onClick={googleLogin}/>
        </MainFrame>
      </MainWrapper>
      <BackgroundCircle />
    </ Wrap>
  );
}

export default SignIn;


