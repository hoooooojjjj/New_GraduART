import React from "react";
import {
  PaymentApprovalContainer,
  MainContainer,
  MainText,
  FinishBtnWrap,
  ArrowIcon,
} from "./PaymentApprovalStyles";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import { useEffect, useRef } from 'react';
import api from '../../utils/axios';
import Loading from '../../components/common/Loading';
import { useNavigate } from "react-router-dom";

function PaymentApproval() {
  const navigate = useNavigate();
    const isProcessing = useRef(false);

    useEffect(() => {
      const approvePurchase = async () => {
        if (isProcessing.current) return;
        isProcessing.current = true;

        try {
          const url = new URL(window.location.href);
          const pg_token = url.searchParams.get("pg_token");
          const oid = url.searchParams.get("oid");
          const storedFormData = localStorage.getItem('purchaseFormData');

          if (!pg_token || !oid || !storedFormData) {
            throw new Error('Invalid parameters');
          }

          const formData = JSON.parse(storedFormData);

          await api.post('/purchases/approve/', {
            pg_token,
            oid,
            ...formData
          });

          localStorage.removeItem('purchaseFormData');
          alert('결제가 완료되었습니다.');
          navigate('/payment-success');
        } catch (error) {
          alert(error.response?.data?.error || '결제 승인 중 오류가 발생했습니다.');
          navigate('/payment-fail');
        }
      };

      approvePurchase()
    }, []);

  return (
    <PaymentApprovalContainer>
      <header>
        <DepartmentHeader />
      </header>
      <main>
        <MainContainer>
        </MainContainer>
      </main>
    </PaymentApprovalContainer>
  );
}

export default PaymentApproval;
