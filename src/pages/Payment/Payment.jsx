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
  TextWrapper, Modal, AgreeText, AgreeTextWrapper,
} from "./PaymentStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import {useLocation, useNavigate} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import api from '../../utils/axios';
import { CartItem } from '../../types/cart';
import {CheckBox} from "../Cart/CartStyle";

function Payment() {
  const [purchaseItems, setPurchaseItems] = useState([]);
  const location = useLocation();
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const items = location.state?.selectedItems || []; // Directly retrieve selectedItems
    if (items.length > 0) {
      setPurchaseItems(items); // Directly set the items
      console.log(items);
      console.log("Converted Selected Items:", items); // Debug log
    } else {
      console.error("No purchase items were provided.");
      setPurchaseItems([]); // Fallback to empty array
    }
  }, [location.state]);

  const [formData, setFormData] = useState({
    orderName: "",
    orderPhone: "",
    orderEmail: "",
    addressName: "",
    addressPhone: "",
    address: "",
    detailAddress: "",
  });

  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFocus = (e) => {
    e.target.placeholder = ""; // 포커스 시 placeholder 제거
  };

  const handleBlur = (e, placeholderText) => {
    if (!e.target.value) {
      e.target.placeholder = placeholderText; // 포커스 해제 시 원래 placeholder로 복원
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // 모든 입력 필드가 채워졌는지 확인
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormComplete(allFieldsFilled && agree);
  }, [formData,agree]);

  const handlePaymentClick = () => {
    if (!isFormComplete) {
      setShowModal(true);
    } else {
      handleSubmit();
    }
  };

//////////실 결제 관련 함수들///////////
  interface PurchaseFormData {
    name: string;
    email: string;
    phone_num: string;
    address: string;
  }


    const { user } = useAuth();
    const [purchaseFormData, setPurchaseFormData] = useState({
      name: user?.full_name || '',
      email: user?.email || '',
      phone_num: '',
      address: '', // 배송주소 => 프론트에서 처리할 때 한 줄의 string으로 잘 concatenate해서 보내주세요. 포맷만 통일되면 됩니다~
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPurchaseFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };


  const handleSubmit = async () => {
    try {
      localStorage.setItem('purchaseFormData', JSON.stringify({
        name: formData.orderName,
        email: formData.orderEmail,
        phone_num: formData.orderPhone,
        address: `${formData.address} ${formData.detailAddress}`
      }));

      console.log("Purchase Requested Items:", purchaseItems);
      console.log("Purchase Items.map result: ", purchaseItems.map(item => item.num_code));
      const response = await api.post('/purchases/prepare/', {
        item_ids: purchaseItems.map(item => item.item_id)
      });

      window.location.href = response.data.next_redirect_pc_url;
    } catch (error) {
      alert(error.response?.data?.error || '결제 준비 중 오류가 발생했습니다.');
    }
  };

  //////이용약관 동의 관련///////

  const handleAgree = (e) => {
    e.stopPropagation();
    setAgree(!agree);
  }

  const handleTermsClick = (e) => {
    e.stopPropagation();
    window.open('https://minseoparkk.notion.site/13c735fb4575808e8252de29766eb343');
  }


  return (
    <Wrap>
      <DepartmentHeader></DepartmentHeader>
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
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "이름을 입력해주세요")}
              />
              <TextWrapper
                width={50}
                placeholder="전화번호를 입력해주세요"
                name="orderPhone"
                value={purchaseFormData.orderPhone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "전화번호를 입력해주세요")}
              />
            </TwoTextWrapper>
            <TextWrapper
              width={100}
              placeholder="이메일 주소를 입력해주세요"
              name="orderEmail"
              value={purchaseFormData.orderEmail}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, "이메일 주소를 입력해주세요")}
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
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "이름을 입력해주세요")}
              />
              <TextWrapper
                width={50}
                placeholder="전화번호를 입력해주세요"
                name="addressPhone"
                value={purchaseFormData.addressPhone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "전화번호를 입력해주세요")}
              />
            </TwoTextWrapper>
            <TextWrapper
              width={100}
              placeholder="지번/도로명 주소를 입력해주세요"
              name="address"
              value={purchaseFormData.address}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, "지번/도로명 주소를 입력해주세요")}
            />
            <TextWrapper
              width={100}
              placeholder="상세 주소를 입력해주세요"
              name="detailAddress"
              value={purchaseFormData.detailAddress}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, "상세 주소를 입력해주세요")}
            />
          </DeliveryAddressWrap>
        </OrderInformationWrap>
        <OrderDetailWrap>
          <OrderText>주문 내역</OrderText>
          <Line></Line>
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
          <Line></Line>
          <TotalWrap>
            <WhiteText>총 주문상품</WhiteText>
            <PurpleText>{purchaseItems.length}</PurpleText>
            <WhiteText>건</WhiteText>
            <PurpleText> |</PurpleText>
            <WhiteText> 주문금액</WhiteText>
            <PurpleText> {purchaseItems.reduce((sum, item) => sum + Number(item.price), 0)}</PurpleText>
            <WhiteText>원</WhiteText>
          </TotalWrap>
        </OrderDetailWrap>
      </MiddleWrapper>
      <AgreeTextWrapper onClick={handleAgree}>
        <CheckBox isChecked={agree}></CheckBox>
        <AgreeText><span onClick={handleTermsClick} style={{textDecoration:"underline 1px white solid",cursor:"pointer"}}>이용약관 및 환불규정</span>에 모두 동의하며, 결제 내용을 모두 읽고 확인했습니다.</AgreeText>
      </AgreeTextWrapper>
      <PaymentButton isComplete={isFormComplete} onClick={handlePaymentClick}>
        카카오페이로 결제하기
      </PaymentButton>
      {showModal && (
          <Modal>
            <PurpleText>배송지 정보를 모두 입력해주세요</PurpleText>
            <div style={{marginBottom: '15px'}}></div>
            <button onClick={() => setShowModal(false)} style={{border: 'none',backgroundColor:'lightgray',padding:'10px'}}>닫기</button>
          </Modal>
      )}
    </Wrap>
  );
}

export default Payment;
