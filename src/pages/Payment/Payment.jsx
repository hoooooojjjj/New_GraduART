import React, { useEffect, useState } from "react";
import {
  Wrap,
  PaymentText,
  MiddleWrapper,
  PaymentButton,
  OrderInformationWrap,
  OrderDetailWrap,
  OrderInformationText,
  OrdererWrap,
  DeliveryAddressWrap,
  MiddleText,
  TwoTextWrapper,
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
  TextWrapper,
  AgreeText,
  AgreeTextWrapper,
} from "./PaymentStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../utils/axios";
import { CheckBox } from "../Cart/CartStyle";

function Payment() {
  const [purchaseItems, setPurchaseItems] = useState([]);
  const location = useLocation();
  const [agree, setAgree] = useState(false);

  const { user } = useAuth();
  const [purchaseFormData, setPurchaseFormData] = useState({
    orderName: user?.full_name || "",
    orderPhone: "",
    orderEmail: user?.email || "",
    addressName: "",
    addressPhone: "",
    address: "",
    detailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormComplete =
    Object.values(purchaseFormData).every((value) => value.trim() !== "") &&
    agree;

  // 구매 항목 설정
  useEffect(() => {
    const items = location.state?.selectedItems || [];
    setPurchaseItems(items);
  }, [location.state]);

  // 결제
  const handlePaymentClick = () => {
    if (!isFormComplete) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
    handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      const purchaseData = {
        name: purchaseFormData.orderName,
        email: purchaseFormData.orderEmail,
        phone_num: purchaseFormData.orderPhone,
        address: `${purchaseFormData.address} ${purchaseFormData.detailAddress}`,
      };
      localStorage.setItem("purchaseFormData", JSON.stringify(purchaseData));

      const response = await api.post("/purchases/prepare/", {
        item_ids: purchaseItems.map((item) => item.item_id),
      });

      window.location.href = response.data.next_redirect_pc_url;
    } catch (error) {
      alert(error.response?.data?.error || "결제 준비 중 오류가 발생했습니다.");
    }
  };

  const handleAgree = () => setAgree((prev) => !prev);
  const handleTermsClick = () =>
    window.open(
      "https://minseoparkk.notion.site/13c735fb4575808e8252de29766eb343"
    );

  return (
    <Wrap>
      <DepartmentHeader />
      <PaymentText>결제하기</PaymentText>
      <MiddleWrapper>
        <OrderInformationWrap>
          <OrderInformationText>주문/배송 정보</OrderInformationText>
          <OrdererWrap>
            <MiddleText>주문자</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={30}
                placeholder="이름을 입력해주세요"
                name="orderName"
                value={purchaseFormData.orderName}
                onChange={handleChange}
              />
              <TextWrapper
                width={50}
                placeholder="전화번호를 입력해주세요"
                name="orderPhone"
                value={purchaseFormData.orderPhone}
                onChange={handleChange}
              />
            </TwoTextWrapper>
            <TextWrapper
              width={100}
              placeholder="이메일 주소를 입력해주세요"
              name="orderEmail"
              value={purchaseFormData.orderEmail}
              onChange={handleChange}
            />
          </OrdererWrap>
          <DeliveryAddressWrap>
            <MiddleText>배송지 정보</MiddleText>
            <TwoTextWrapper>
              <TextWrapper
                width={30}
                placeholder="이름을 입력해주세요"
                name="addressName"
                value={purchaseFormData.addressName}
                onChange={handleChange}
              />
              <TextWrapper
                width={50}
                placeholder="전화번호를 입력해주세요"
                name="addressPhone"
                value={purchaseFormData.addressPhone}
                onChange={handleChange}
              />
            </TwoTextWrapper>
            <TextWrapper
              width={100}
              placeholder="지번/도로명 주소를 입력해주세요"
              name="address"
              value={purchaseFormData.address}
              onChange={(e) => {
                handleChange(e);
                console.log("Current address:", e.target.value);
              }}
            />
            <TextWrapper
              width={100}
              placeholder="상세 주소를 입력해주세요"
              name="detailAddress"
              value={purchaseFormData.detailAddress}
              onChange={handleChange}
            />
          </DeliveryAddressWrap>
        </OrderInformationWrap>
        <OrderDetailWrap>
          <OrderText>주문 내역</OrderText>
          <Line />
          {purchaseItems.map((item) => (
            <OrderMidWrap key={item.num_code}>
              <LeftWrapper>
                <ArtImage src={item.image_original} alt={item.title} />
                <ArtTextWrap>
                  <ArtText>{item.title}</ArtText>
                  <ArtInfo>{`${item.artist} | ${item.department}`}</ArtInfo>
                </ArtTextWrap>
              </LeftWrapper>
              <ArtPrice>
                <PurpleText>{item.price}</PurpleText>
                <WhiteText> 원</WhiteText>
              </ArtPrice>
            </OrderMidWrap>
          ))}
          <Line />
          <TotalWrap>
            <WhiteText>총 주문상품</WhiteText>
            <PurpleText>{purchaseItems.length}</PurpleText>
            <WhiteText>건</WhiteText>
            <PurpleText> |</PurpleText>
            <WhiteText> 주문금액</WhiteText>
            <PurpleText>
              {purchaseItems.reduce((sum, item) => sum + Number(item.price), 0)}
            </PurpleText>
            <WhiteText>원</WhiteText>
          </TotalWrap>
        </OrderDetailWrap>
      </MiddleWrapper>
      <AgreeTextWrapper onClick={handleAgree}>
        <CheckBox isChecked={agree}></CheckBox>
        <AgreeText>
          <span
            onClick={handleTermsClick}
            style={{
              textDecoration: "underline 1px white solid",
              cursor: "pointer",
            }}
          >
            이용약관 및 환불규정
          </span>
          에 모두 동의하며, 결제 내용을 모두 읽고 확인했습니다.
        </AgreeText>
      </AgreeTextWrapper>
      <PaymentButton isComplete={isFormComplete} onClick={handlePaymentClick}>
        카카오페이로 결제하기
      </PaymentButton>
    </Wrap>
  );
}

export default Payment;
