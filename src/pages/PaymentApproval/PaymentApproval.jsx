import React from "react";
import {
  PaymentApprovalContainer,
  MainContainer,
  MainText,
  FinishBtnWrap,
  ArrowIcon,
} from "./PaymentApprovalStyles";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import { useNavigate } from "react-router-dom";

function PaymentApproval() {
  const navigate = useNavigate();

  const handleFinishClick = () => {
    navigate("/payment-success");
  };

  return (
    <PaymentApprovalContainer>
      <header>
        <DepartmentHeader />
      </header>
      <main>
        <MainContainer>
          <MainText>결제를 완료하셨나요?</MainText>
          <FinishBtnWrap onClick={handleFinishClick}>
            주문 완료하기
            <ArrowIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                fill="#FFF"
              />
            </ArrowIcon>
          </FinishBtnWrap>
        </MainContainer>
      </main>
    </PaymentApprovalContainer>
  );
}

export default PaymentApproval;
