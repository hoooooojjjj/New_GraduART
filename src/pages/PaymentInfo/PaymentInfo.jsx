import React, {useEffect, useState} from "react";
import {DepartmentHeader} from "../../components/DepartmentHeader/DepartmentHeader";
import {
    DeliveryAddressWrap,
    MiddleText,
    OrdererWrap,
    OrderInformationText,
    OrderInformationWrap,
    PaymentText, TextWrapper, TwoTextWrapper,
    MiddleWrapper, Wrap
} from "./PaymentInfoStyle";
import paymentData from './PaymentInfo.json'

export const PaymentInfo = () => {
    const [formData, setFormData] = useState({
        orderName: "",
        orderPhone: "",
        orderEmail: "",
        addressName: "",
        addressPhone: "",
        address: "",
        detailAddress: "",
    });

    useEffect(() => {
        // Set formData to paymentData only on the initial render
        setFormData(paymentData);
    }, []);

    return (
        <Wrap>
            <DepartmentHeader></DepartmentHeader>
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
                                value={formData.orderName}
                                readOnly
                            />
                            <TextWrapper
                                width={50}
                                placeholder="전화번호가 없습니다"
                                name="orderPhone"
                                value={formData.orderPhone}
                                readOnly
                            />
                        </TwoTextWrapper>
                        <TextWrapper
                            width={100}
                            placeholder="이메일 주소가 없습니다"
                            name="orderEmail"
                            value={formData.orderEmail}
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
                                value={formData.addressName}
                                readOnly
                            />
                            <TextWrapper
                                width={50}
                                placeholder="전화번호가 없습니다"
                                name="addressPhone"
                                value={formData.addressPhone}
                                readOnly
                            />
                        </TwoTextWrapper>
                        <TextWrapper
                            width={100}
                            placeholder="지번/도로명 주소가 없습니다"
                            name="address"
                            value={formData.address}
                            readOnly
                        />
                        <TextWrapper
                            width={100}
                            placeholder="상세 주소가 없습니다"
                            name="detailAddress"
                            value={formData.detailAddress}
                            readOnly
                        />
                    </DeliveryAddressWrap>
                </OrderInformationWrap>
            </MiddleWrapper>
        </Wrap>
    );}