import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import {DepartmentHeader} from "../../components/DepartmentHeader/DepartmentHeader";
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
} from "./PaymentInfoStyle";
//import paymentData from './PaymentInfo.json'
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
            const response = await api.get(`/purchases/${itemId}/`);
            setOrderInfo(response.data);
            console.log(`orderInfo:${orderInfo}`)
        } catch (err) {
            setError(err.response?.data?.error || '주문 상세 정보를 불러오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
        };

        fetchOrderInfo();
    }, [itemId]);

    if (loading) return <Loading />;

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
                                value={orderInfo.name}
                                readOnly
                            />
                            <TextWrapper
                                width={50}
                                placeholder="전화번호가 없습니다"
                                name="orderPhone"
                                value={orderInfo.phone_num}
                                readOnly
                            />
                        </TwoTextWrapper>
                        <OneTextWrapper
                            width={100}
                            placeholder="이메일 주소가 없습니다"
                            name="orderEmail"
                            value={orderInfo.email}
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
                            placeholder="지번/도로명 주소가 없습니다"
                            name="address"
                            value={orderInfo.address}
                            readOnly
                        />
                        <OneTextWrapper
                            width={100}
                            placeholder="상세 주소가 없습니다"
                            name="detailAddress"
                            value={orderInfo.address}
                            readOnly
                        />
                    </DeliveryAddressWrap>
                </OrderInformationWrap>
            </MiddleWrapper>
        </Wrap>
    );}