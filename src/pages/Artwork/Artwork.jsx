import {DepartmentHeader} from "../../components/DepartmentHeader/DepartmentHeader";
import Footer from "../../components/footer/Footer";
import {
    BacktoDepartment,
    DeptName,
    Container,
    Main,
    Title,
    Top,
    Placeholder,
    Middle,
    ImagesWrap,
    DetailWrap,
    Image,
    DetailComponent,
    Artist,
    Description,
    PricingComponent,
    Price,
    SellStatus,
    PriceWrap,
    ButtonsWrap,
    PurchaseButton,
    ImageDescriptions,
    BacktoDepartmentWrap
} from "./ArtworkStyle.js";
import React, { createContext, useEffect, useState } from "react";
import art from "./Artwork.json"
import {useNavigate, useParams} from "react-router-dom";

const Images = ({ imageLinks, imageDescriptions }) => {

    return (
        <ImagesWrap>
                {imageLinks.map((image, index) => (
                    <>
                    <Image
                        key={index}
                        src={image}
                    />
                    <ImageDescriptions key={`desc_${index}`}>{imageDescriptions[index]}</ImageDescriptions>
                    </>
                ))}
        </ImagesWrap>
    );
};

const handleCart = () => {
    console.log("장바구니에 담기");
}

const handlePurchase = () => {
    console.log("구매하기");
}


function Artwork () {
    //url에서 artwork_id 받아옴, 이걸로 DB에 GET 요청 날려서 setTargetArt에 넣어주면 됨
    const { artwork_id } = useParams();
    const [targetArt, setTargetArt] = useState(art);
    const navigate = useNavigate();
    const handleBacktoDepartment = () => {
        navigate(`/dept_detail/${targetArt.department}`)
    };
    const artworkYear = new Date(targetArt.madeAt).getFullYear();

    return(
        <>
            <Container>
                <DepartmentHeader></DepartmentHeader>
                <Main>
                    <Top>
                        <BacktoDepartmentWrap>
                        <BacktoDepartment onClick={handleBacktoDepartment}><svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32258 0.622348C9.45993 0.818343 9.56889 1.05115 9.64324 1.30743C9.71759 1.56372 9.75586 1.83846 9.75586 2.11592C9.75586 2.39338 9.71759 2.66812 9.64324 2.92441C9.56889 3.1807 9.45993 3.4135 9.32258 3.6095L3.57408 11.8294L9.32258 20.0494C9.5996 20.4455 9.75523 20.9828 9.75523 21.543C9.75523 22.1032 9.5996 22.6404 9.32258 23.0365C9.04556 23.4327 8.66984 23.6552 8.27807 23.6552C7.8863 23.6552 7.51058 23.4327 7.23356 23.0365L0.433137 13.3124C0.29579 13.1164 0.186823 12.8836 0.112475 12.6273C0.0381279 12.3711 -0.00014019 12.0963 -0.00014019 11.8189C-0.00014019 11.5414 0.0381279 11.2667 0.112475 11.0104C0.186823 10.7541 0.29579 10.5213 0.433137 10.3253L7.23356 0.601162C7.79656 -0.203884 8.74477 -0.203884 9.32258 0.622348Z" fill="#A348F6"/>
                        </svg>
                            <DeptName>{targetArt.department}</DeptName></BacktoDepartment></BacktoDepartmentWrap>
                        <Title>{targetArt.title}</Title>
                        <Placeholder></Placeholder>
                    </Top>
                    <Middle>
                        <Images imageLinks={targetArt.imagePath} imageDescriptions={targetArt.imageDescriptions}></Images>
                        <DetailWrap>
                            <DetailComponent>
                                <Artist>{targetArt.artist}, {artworkYear}</Artist>
                                <Description>{targetArt.descriptions}</Description>
                            </DetailComponent>
                            <PricingComponent>
                                <SellStatus>{targetArt.onSale === "True" ? `` : '판매가 완료된 작품입니다'}</SellStatus>
                                <PriceWrap>
                                    <Price color={'var(--purple)'}>판매 가격</Price> <Price color={'var(--white)'}>{targetArt.price}</Price>
                                </PriceWrap>
                                <PriceWrap>
                                    <Price color={'var(--purple)'}>수령 방법</Price> <Price color={'var(--white)'}>택배</Price>
                                </PriceWrap>
                                <ButtonsWrap>
                                    <PurchaseButton color={'var(--white)'} bgColor={`transparent`} onClick={handleCart}>장바구니에 담기</PurchaseButton>
                                    <PurchaseButton color={'var(--white)'} bgColor={`var(--purple)`} onClick={handlePurchase}>구매하기</PurchaseButton>
                                </ButtonsWrap>
                            </PricingComponent>
                        </DetailWrap>
                    </Middle>
                </Main>
                <Footer></Footer>
            </Container>
        </>
    );
}

export default Artwork;