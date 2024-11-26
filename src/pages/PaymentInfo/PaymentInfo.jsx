import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import Loading from "../../components/common/Loading";
import {
  DeliveryAddressWrap,
  MiddleText,
  OrdererWrap,
  OrderInformationText,
  OrderInformationWrap,
  PaymentText,
  TextWrapper,
  TwoTextWrapper,
  MiddleWrapper,
  Wrap,
  OneTextWrapper,
  OrderDetailWrap,
  OrderText,
  OrderMidWrap,
  Line,
  ArtImage,
  ArtTextWrap,
  ArtPrice,
  LeftWrapper,
  PurpleText,
  WhiteText,
  ArtText,
  ArtInfo,
  TotalWrap,
  SmallWrapper,
} from "./PaymentInfoStyle";
import api from "../../utils/axios";

export const PaymentInfo = () => {
  const { itemId } = useParams();
  const [orderInfo, setOrderInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [purchaseItems, setPurchaseItems] = useState(null);

  useEffect(() => {
    const fetchOrderInfo = async () => {
      try {
        setLoading(true);
        // 주문 정보 조회
        const orderResponse = await api.get(`/purchases/${itemId}/`);
        setOrderInfo(orderResponse.data);

        // 구매 목록 조회
        const purchaseResponse = await api.get("/purchases");
        if (purchaseResponse.data) {
          console.log(purchaseResponse);
          const itemsList = purchaseResponse.data[Object.keys(purchaseResponse.data)[0]]; // Get the array in the "data" key
          setPurchaseItems(itemsList); // Set the items array into the state
          console.log(`purchaseItems: ${JSON.stringify(itemsList)}`);
        } else {
          console.error("No data found in purchaseResponse:", purchaseResponse.data);
        }
      } catch (err) {
        console.error(err);
        setError(
          err.response?.data?.error ||
            "구매 정보를 불러오는 중 오류가 발생했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrderInfo();
  }, [itemId]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;


  return (
    <Wrap>
      <DepartmentHeader />
      <PaymentText>결제 정보</PaymentText>
      <MiddleWrapper>
        <OrderInformationWrap>
          <OrderInformationText>주문/배송 정보</OrderInformationText>
          <OrdererWrap>
            <MiddleText>주문자</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={'150px'}
                placeholder="이름이 없습니다"
                name="orderName"
                value={orderInfo.orderName}
                readOnly
              />
              <TextWrapper
                width={'150px'}
                placeholder="이메일이 없습니다"
                name="orderEmail"
                value={orderInfo.email}
                readOnly
              />
            </TwoTextWrapper>
          </OrdererWrap>
          <DeliveryAddressWrap>
            <MiddleText>배송지 정보</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={30}
                placeholder="이름이 없습니다"
                name="addressName"
                value={orderInfo.name}
                readOnly
              />
              <TextWrapper
                width={50}
                placeholder="전화번호가 없습니다"
                name="addressPhone"
                value={orderInfo.phone_num}
                readOnly
              />
            </TwoTextWrapper>
            <OneTextWrapper
              width={100}
              placeholder="주소 조회에 실패했습니다"
              name="address"
              value={orderInfo.address}
              readOnly
            />
          </DeliveryAddressWrap>
        </OrderInformationWrap>
        <OrderDetailWrap>
          <OrderText>주문 내역</OrderText>
          <Line />
            <OrderMidWrap key={purchaseItems.num_code}>
              <LeftWrapper>
                <ArtImage src={purchaseItems.image_original} alt={purchaseItems.title} />
                <ArtTextWrap>
                  <ArtText>{purchaseItems.title}</ArtText>
                  <ArtInfo>{`${purchaseItems.name} | ${purchaseItems.size || "크기 미등록"} | ${
                    purchaseItems.material || "재료 미등록"
                  }`}</ArtInfo>{" "}
                </ArtTextWrap>
              </LeftWrapper>
              <ArtPrice>
                <PurpleText>{purchaseItems.price.toLocaleString()}</PurpleText>
                <WhiteText> 원</WhiteText>
              </ArtPrice>
            </OrderMidWrap>
          <Line />
          <TotalWrap>
            <SmallWrapper>
              <WhiteText>총 주문 상품</WhiteText>
              <PurpleText>1</PurpleText>
              <WhiteText> 건</WhiteText>
              <PurpleText> |</PurpleText>
            </SmallWrapper>

            <SmallWrapper>
              <WhiteText> 총 결제 금액</WhiteText>
              <PurpleText>
                {purchaseItems.price.toLocaleString()}
              </PurpleText>
              <WhiteText>원</WhiteText>
              <PurpleText> |</PurpleText>
            </SmallWrapper>

            <SmallWrapper>
              <WhiteText>결제수단</WhiteText>
              <PurpleText>{orderInfo.paymentMethod || "카카오페이"}</PurpleText>
            </SmallWrapper>
          </TotalWrap>
        </OrderDetailWrap>
      </MiddleWrapper>
    </Wrap>
  );
};
