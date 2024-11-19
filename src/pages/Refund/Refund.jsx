import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Wrap,
  MainFrame,
  RectangleImage,
  OrderInfoWrapper,
  OrderDescription,
  ValueWrapper,
  AmountValue,
  Currency,
  PaymentText,
  TextWrapper,
  PurpleText,
  OrderInformation,
  MiddleWrapper,
  LabelValueWrapper,
  PageText,
  Line,
  ApprovalTimeText,
  ButtonWrapper,
  RefundButton,
  MobileWrap,
} from "./RefundStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import api from "../../utils/axios";

function Refund() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { state } = useLocation();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refundStatus, setRefundStatus] = useState(null);
  const [error, setError] = useState(null);

  const itemId = state?.itemId; // 마이페이지에서 넘어온 itemId

  useEffect(() => {
    if (!itemId) {
      setError("유효하지 않은 접근입니다.");
      setLoading(false);
      return;
    }

    const fetchItemDetails = async () => {
      try {
        setLoading(true);

        // 환불 상태 조회
        const refundResponse = await api.get(`/refunds/${itemId}/`);
        setRefundStatus(refundResponse.data.refund_status);

        // 구매 상품 정보 가져오기
        const itemResponse = await api.get(`/purchases/${itemId}/`);
        setItem(itemResponse.data);
      } catch (err) {
        setError("상품 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleRefundRequest = async () => {
    if (!window.confirm("환불을 신청하시는 것이 맞으신가요?")) return; // UX 라이팅 레퍼런스 찾아서 바꾸기

    try {
      const response = await api.post("/refunds/request/", { item_id: itemId });
      alert(
        response.data.message ||
          "고객님의 환불 요청이 정상적으로 접수되었습니다."
      );
      setRefundStatus(true);
      navigate("/my");
    } catch (err) {
      alert(err.response?.data?.error || "환불 요청 중 오류가 발생했습니다.");
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>로딩 중</div>;

  return (
    <Wrap>
      <DepartmentHeader />
      <PageText>취소|환불 신청</PageText>
      <Line />
      <MainFrame>
        {isMobile ? (
          <MobileWrap>
            <RectangleImage src={item?.image_original} alt={item?.title} />
            <TextWrapper>
              <OrderInfoWrapper>
                <OrderInformation>주문 정보</OrderInformation>
                <OrderDescription>
                  {item?.title} | {item?.name} | {item?.size} | {item?.material}
                </OrderDescription>
              </OrderInfoWrapper>
            </TextWrapper>
          </MobileWrap>
        ) : (
          <>
            <RectangleImage src={item?.image_original} alt={item?.title} />
            <TextWrapper>
              <OrderInfoWrapper>
                <OrderInformation>주문 정보</OrderInformation>
                <OrderDescription>
                  {item?.title} | {item?.name} | {item?.size} | {item?.material}
                </OrderDescription>
              </OrderInfoWrapper>
              <MiddleWrapper>
                <LabelValueWrapper>
                  <PurpleText>금액</PurpleText>
                  <ValueWrapper>
                    <AmountValue>{item?.price.toLocaleString()}</AmountValue>
                    <Currency>원</Currency>
                  </ValueWrapper>
                </LabelValueWrapper>
                <LabelValueWrapper>
                  <PurpleText>결제수단</PurpleText>
                  <ValueWrapper>
                    <PaymentText>
                      {item?.payment_method || "카카오페이"}
                    </PaymentText>
                  </ValueWrapper>
                </LabelValueWrapper>
                <LabelValueWrapper>
                  <PurpleText>제작 시기</PurpleText>
                  <ValueWrapper>
                    <ApprovalTimeText>{item?.made_at}</ApprovalTimeText>
                  </ValueWrapper>
                </LabelValueWrapper>
              </MiddleWrapper>
            </TextWrapper>
          </>
        )}
      </MainFrame>
      <ButtonWrapper>
        <RefundButton onClick={handleRefundRequest} disabled={refundStatus}>
          {refundStatus ? "환불 진행 중" : "취소/환불 신청하기"}
        </RefundButton>
      </ButtonWrapper>
    </Wrap>
  );
}

export default Refund;
