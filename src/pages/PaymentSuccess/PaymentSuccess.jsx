import React from "react";
import {
  BackgroundCircle,
  InfoBtnGoMain,
  InfoBtnGoMainWrap,
  InfoBtnGoPay,
  InfoBtnGoPayWrap,
  InfoBtnWrap,
  InfoText,
  InfoWrap,
  PaymentSuccessContainer,
  MainContainer,
} from "./PaymentSuccessStyles";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();
  const handleNavigateMy = () => {
    navigate("/my");
  };
  const handleNavigateMain = () => {
    navigate("/");
  };

  return (
    <PaymentSuccessContainer>
      <header>
        <DepartmentHeader />
      </header>
      <main>
        <MainContainer>
          <BackgroundCircle></BackgroundCircle>
          <InfoWrap>
            <InfoText>결제가 완료되었습니다</InfoText>
            <InfoBtnWrap>
              <InfoBtnGoPayWrap onClick={handleNavigateMy}>
                <InfoBtnGoPay>구매내역으로 이동</InfoBtnGoPay>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={window.innerWidth > 768 ? 38 : 18}
                  height="28"
                  viewBox="0 0 38 28"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                    fill="#4e5a5b"
                  />
                </svg>
              </InfoBtnGoPayWrap>
              <InfoBtnGoMainWrap onClick={handleNavigateMain}>
                {window.innerWidth > 768 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={window.innerWidth > 768 ? 38 : 18}
                    height="28"
                    viewBox="0 0 38 28"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2011 0.512563C14.5444 -0.170854 13.4795 -0.170854 12.8227 0.512563L1.04996 12.7626C0.393177 13.446 0.393177 14.554 1.04996 15.2374L12.8227 27.4874C13.4795 28.1709 14.5444 28.1709 15.2011 27.4874C15.8579 26.804 15.8579 25.696 15.2011 25.0126L6.29946 15.75H35.8756C36.8044 15.75 37.5574 14.9665 37.5574 14C37.5574 13.0335 36.8044 12.25 35.8756 12.25H6.29946L15.2011 2.98744C15.8579 2.30402 15.8579 1.19598 15.2011 0.512563Z"
                      fill="#4e5a5b"
                    />
                  </svg>
                )}
                <InfoBtnGoMain>메인페이지로 이동</InfoBtnGoMain>
                {window.innerWidth <= 768 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={window.innerWidth > 768 ? 38 : 18}
                    height="28"
                    viewBox="0 0 38 28"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                      fill="#4e5a5b"
                    />
                  </svg>
                )}
              </InfoBtnGoMainWrap>
            </InfoBtnWrap>
          </InfoWrap>
        </MainContainer>
      </main>
    </PaymentSuccessContainer>
  );
}

export default PaymentSuccess;
