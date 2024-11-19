import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const [orderInfo, setOrderInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { itemId } = location.state || {};

  useEffect(() => {
    const fetchOrderInfo = async () => {
      try {
        setLoading(true);

        const response = await api.get(`/purchases/${itemId}/`);
        setOrderInfo(response.data);
      } catch (err) {
        setError(
          err.response?.data?.error || "주문 정보를 불러올 수 없습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrderInfo();
  }, [itemId]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  const purchaseItems = orderInfo?.purchaseItems || [];

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
                width={30}
                placeholder="이름이 없습니다"
                name="orderName"
                value={orderInfo.orderName}
                readOnly
              />
              <TextWrapper
                width={50}
                placeholder="전화번호가 없습니다"
                name="orderPhone"
                value={orderInfo.orderPhone}
                readOnly
              />
            </TwoTextWrapper>
            <OneTextWrapper
              width={100}
              placeholder="이메일 주소가 없습니다"
              name="orderEmail"
              value={orderInfo.orderEmail}
              readOnly
            />
          </OrdererWrap>
          <DeliveryAddressWrap>
            <MiddleText>배송지 정보</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={30}
                placeholder="이름이 없습니다"
                name="addressName"
                value={orderInfo.addressName}
                readOnly
              />
              <TextWrapper
                width={50}
                placeholder="전화번호가 없습니다"
                name="addressPhone"
                value={orderInfo.addressPhone}
                readOnly
              />
            </TwoTextWrapper>
            <OneTextWrapper
              width={100}
              placeholder="지번/도로명 주소가 없습니다"
              name="address"
              value={orderInfo.address}
              readOnly
            />
            <OneTextWrapper
              width={100}
              placeholder="상세 주소가 없습니다"
              name="detailAddress"
              value={orderInfo.detailAddress}
              readOnly
            />
          </DeliveryAddressWrap>
        </OrderInformationWrap>
        <OrderDetailWrap>
          <OrderText>주문 내역</OrderText>
          <Line />
          {purchaseItems.map((item) => (
            <OrderMidWrap key={item.num_code}>
              <LeftWrapper>
                <ArtImage src={item.imagePath[0]} alt={item.title} />
                <ArtTextWrap>
                  <ArtText>{item.title}</ArtText>
                  <ArtInfo>{`${item.artist} | ${item.department}`}</ArtInfo>
                </ArtTextWrap>
              </LeftWrapper>
              <ArtPrice>
                <PurpleText>{item.price.toLocaleString()}</PurpleText>
                <WhiteText> 원</WhiteText>
              </ArtPrice>
            </OrderMidWrap>
          ))}
          <Line />
          <TotalWrap>
            <SmallWrapper>
              <WhiteText>총 주문상품</WhiteText>
              <PurpleText>{purchaseItems.length}</PurpleText>
              <WhiteText> 건</WhiteText>
              <PurpleText> |</PurpleText>
            </SmallWrapper>

            <SmallWrapper>
              <WhiteText> 주문금액</WhiteText>
              <PurpleText>
                {" "}
                {purchaseItems
                  .reduce((sum, item) => sum + Number(item.price), 0)
                  .toLocaleString()}
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
