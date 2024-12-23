import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import Loading from "../../components/common/Loading";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import api from "../../utils/axios";

function formatDate(isoString) {
  // Parse the ISO datetime string into a Date object
  const utcDate = new Date(isoString);

  // Adjust to UTC+9 (Korea Standard Time)
  const localDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  // Format the adjusted date
  const year = localDate.getFullYear();
  const month = String(localDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(localDate.getDate()).padStart(2, '0');
  const hours = String(localDate.getHours()).padStart(2, '0');
  const minutes = String(localDate.getMinutes()).padStart(2, '0');
  const seconds = String(localDate.getSeconds()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
}


function Refund() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [orderInfo, setOrderInfo] = useState(null);
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refundStatus, setRefundStatus] = useState(false);
  const [error, setError] = useState(null);
  const [dbRefundStatus, setDBRefundStatus] = useState(null);

  useEffect(() => {
    if (!itemId) {
      setError("유효하지 않은 접근입니다.");
      setLoading(false);
      return;
    }

    const fetchItemDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/items/${itemId}`);
        setItem(response.data);
      } catch (err) {
        setError(
          err.response?.data?.error ||
            "상품 정보를 불러오는 중 오류가 발생했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    const fetchOrderInfo = async () => {
      try {
        setLoading(true);
        // 주문 정보 조회
        const orderResponse = await api.get(`/purchases/${itemId}/`);
        setOrderInfo(orderResponse.data);
      } finally {
        setLoading(false);
      }
    };

    const fetchRefundState = async () => {
      try{
        const dbRefund = await api.get(`/refunds/${itemId}`);
        setDBRefundStatus(dbRefund.data.refund_status);
      } catch (e) {
        console.log(e);
      }
    };

    fetchItemDetails();
    fetchOrderInfo();
    fetchRefundState()
  }, [itemId]);

  const handleRefundRequest = async () => {
    console.log(refundStatus);
    console.log(dbRefundStatus);

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
  if (loading) return <Loading />;

  return (
    <Wrap>
      <DepartmentHeader />
      <PageText>취소|환불 신청</PageText>
      <Line />
      <MainFrame>
        {isMobile ? (
          <>
            <MobileWrap>
              <RectangleImage src={item?.image_original} alt={item?.title} />
              <TextWrapper>
                <OrderInfoWrapper>
                  <OrderInformation>주문 정보</OrderInformation>
                  <OrderDescription>
                    {item?.title} | {item?.name} | {item?.size} |{" "}
                    {item?.material}
                  </OrderDescription>
                </OrderInfoWrapper>
              </TextWrapper>
            </MobileWrap>

            <MiddleWrapper>
              <LabelValueWrapper>
                <PurpleText>금액</PurpleText>
                <ValueWrapper>
                  <AmountValue>{item?.price?.toLocaleString()}</AmountValue>
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
              </LabelValueWrapper>{" "}
              <LabelValueWrapper>
                <PurpleText>결제 승인 시각</PurpleText>
                <ValueWrapper>
                  <PaymentText>
                    {formatDate(orderInfo.created_at)}
                  </PaymentText>
                </ValueWrapper>
              </LabelValueWrapper>
            </MiddleWrapper>
          </>
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
                  <PurpleText>결제 승인 시각</PurpleText>
                  <ValueWrapper>
                    <PaymentText>
                      {formatDate(orderInfo.created_at)}
                    </PaymentText>
                  </ValueWrapper>
                </LabelValueWrapper>
              </MiddleWrapper>
            </TextWrapper>
          </>
        )}
      </MainFrame>
      <ButtonWrapper>
        <RefundButton onClick={handleRefundRequest} disabled={refundStatus || dbRefundStatus}>
          {dbRefundStatus || refundStatus ? "취소/환불 신청 완료" : "취소/환불 신청하기"}
        </RefundButton>
      </ButtonWrapper>
    </Wrap>
  );
}

export default Refund;
