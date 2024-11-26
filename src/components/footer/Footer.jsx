import React from "react";
import {
  FooterContainer,
  FooterFooter,
  FooterHeader,
  FooterMain,
  FooterMainElementImg,
  FooterMainElementText,
  FooterMainElementTitle,
  FooterMainElementWrap,
} from "./FooterStyles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const svgIcon1 = (
  <svg
    width={window.innerWidth > 768 ? 28 : 13}
    viewBox="0 0 28 28"
    style={window.innerWidth > 768 ? { marginRight: 10 } : { marginRight: 5 }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => {
      window.open("https://www.snulion.com/", "_blank");
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.0538 9.4226C20.1935 9.00338 20.0844 8.54118 19.772 8.22871C19.4595 7.91624 18.9973 7.80713 18.5781 7.94687L11.1581 10.4202C10.8097 10.5363 10.5363 10.8097 10.4202 11.1581L7.94687 18.5781C7.80713 18.9973 7.91624 19.4595 8.22871 19.772C8.54118 20.0844 9.00338 20.1935 9.4226 20.0538L16.8426 17.5805C17.191 17.4643 17.4643 17.191 17.5805 16.8426L20.0538 9.4226ZM10.8983 17.1023L12.4493 12.4493L17.1023 10.8983L15.5513 15.5513L10.8983 17.1023Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0003 1.16699C6.91267 1.16699 1.16699 6.91267 1.16699 14.0003C1.16699 21.088 6.91267 26.8337 14.0003 26.8337C21.088 26.8337 26.8337 21.088 26.8337 14.0003C26.8337 6.91267 21.088 1.16699 14.0003 1.16699ZM3.50033 14.0003C3.50033 8.20134 8.20134 3.50033 14.0003 3.50033C19.7993 3.50033 24.5003 8.20134 24.5003 14.0003C24.5003 19.7993 19.7993 24.5003 14.0003 24.5003C8.20134 24.5003 3.50033 19.7993 3.50033 14.0003Z"
      fill="white"
    />
  </svg>
);

const svgIcon2 = (
  <svg
    width={window.innerWidth > 768 ? 28 : 13}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => {
      window.open("https://www.instagram.com/likelion_snu/", "_blank");
    }}
  >
    <path
      d="M18.6867 2.3335H9.27166C7.43201 2.33566 5.66834 3.0675 4.36761 4.36844C3.06689 5.66938 2.33535 7.43317 2.3335 9.27283L2.3335 18.6878C2.33566 20.5275 3.0675 22.2912 4.36844 23.5919C5.66938 24.8926 7.43317 25.6241 9.27283 25.626H18.6878C20.5275 25.6238 22.2912 24.892 23.5919 23.5911C24.8926 22.2901 25.6241 20.5263 25.626 18.6867V9.27166C25.6238 7.43201 24.892 5.66834 23.5911 4.36761C22.2901 3.06689 20.5263 2.33535 18.6867 2.3335V2.3335ZM23.2833 18.6867C23.2833 19.2903 23.1644 19.888 22.9334 20.4457C22.7024 21.0034 22.3638 21.5102 21.937 21.937C21.5102 22.3638 21.0034 22.7024 20.4457 22.9334C19.888 23.1644 19.2903 23.2833 18.6867 23.2833H9.27166C8.05275 23.283 6.88387 22.7986 6.02208 21.9366C5.16029 21.0746 4.67616 19.9056 4.67616 18.6867V9.27166C4.67647 8.05275 5.1609 6.88387 6.02291 6.02208C6.88492 5.16029 8.05392 4.67616 9.27283 4.67616H18.6878C19.9067 4.67647 21.0756 5.1609 21.9374 6.02291C22.7992 6.88492 23.2833 8.05392 23.2833 9.27283V18.6878V18.6867Z"
      fill="white"
    />
    <path
      d="M13.9789 7.95508C12.3822 7.95755 10.8517 8.59299 9.72276 9.72212C8.59385 10.8512 7.9587 12.3819 7.95654 13.9786C7.95839 15.5756 8.59357 17.1068 9.72276 18.2362C10.852 19.3656 12.383 20.0011 13.98 20.0032C15.5773 20.0014 17.1086 19.3661 18.2381 18.2366C19.3675 17.1072 20.0029 15.5759 20.0047 13.9786C20.0022 12.3815 19.3665 10.8506 18.2368 9.72164C17.1072 8.59267 15.5759 7.95779 13.9789 7.95625V7.95508ZM13.9789 17.6606C13.0027 17.6606 12.0664 17.2728 11.3761 16.5825C10.6858 15.8922 10.298 14.956 10.298 13.9797C10.298 13.0035 10.6858 12.0673 11.3761 11.377C12.0664 10.6867 13.0027 10.2989 13.9789 10.2989C14.9551 10.2989 15.8913 10.6867 16.5816 11.377C17.2719 12.0673 17.6597 13.0035 17.6597 13.9797C17.6597 14.956 17.2719 15.8922 16.5816 16.5825C15.8913 17.2728 14.9551 17.6606 13.9789 17.6606Z"
      fill="white"
    />
    <path
      d="M20.0154 9.44395C20.8125 9.44395 21.4586 8.79782 21.4586 8.00078C21.4586 7.20374 20.8125 6.55762 20.0154 6.55762C19.2184 6.55762 18.5723 7.20374 18.5723 8.00078C18.5723 8.79782 19.2184 9.44395 20.0154 9.44395Z"
      fill="white"
    />
  </svg>
);

function FooterMainElement({ title, content, isTerms, isPrivacy }) {
  const navigate = useNavigate();
  // const handleTermsNavigation = (e) => {
  //   e.stopPropagation(); // Prevent event propagation
  //   if (isTerms) {
  //     window.open(
  //       "https://minseoparkk.notion.site/13c735fb4575808e8252de29766eb343",

  //       "_blank"
  //     );
  //   } else if (isPrivacy) {
  //     window.open(
  //       "https://minseoparkk.notion.site/13c735fb457580539adfe398d38deec0",

  //       "_blank"
  //     );
  //   }
  // };

  return (
    <FooterMainElementWrap>
      <FooterMainElementTitle>{title}</FooterMainElementTitle>
      {content.map((text, index) =>
        text.includes("/asset") ? (
          <div key={index}>
            <FooterMainElementImg
              src={text}
              style={{ marginBottom: 10, maxWidth: "60%", height: "auto" }}
            ></FooterMainElementImg>
            <br />
            {window.innerWidth > 768 ? svgIcon1 : null}
            {window.innerWidth > 768 ? svgIcon2 : null}
          </div>
        ) : text.includes("이용약관 및 환불규정") ? (
          <FooterMainElementText key={index}>
            <Link
              to="https://minseoparkk.notion.site/13c735fb4575808e8252de29766eb343?pvs=4"
              target="_blank"
              style={{
                color: "white",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {text}
            </Link>
          </FooterMainElementText>
        ) : text.includes("개인정보처리방침") ? (
          <FooterMainElementText key={index}>
            <Link
              to="https://minseoparkk.notion.site/13c735fb457580539adfe398d38deec0?pvs=4"
              target="_blank"
              style={{
                color: "white",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {text.split("|")[0]}{" "}
            </Link>
          </FooterMainElementText>
        ) : (
          <FooterMainElementText key={index}>{text}</FooterMainElementText>
        )
      )}
    </FooterMainElementWrap>
  );
}

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader>graduart</FooterHeader>
      <FooterMain>
        <FooterMainElementWrap data-area="about">
          <FooterMainElement
            title="사업자 정보"
            content={[
              "그래두아트(Gradu Art)",
              "대표자 | 박민서",
              "주소 | 경기도 안양시 만안구",
              "안양천서로 249, 116동 2903호",
              "사업자번호 | 888-13-02558",
            ]}
          />
        </FooterMainElementWrap>
        <FooterMainElementWrap data-area="payment">
          <FooterMainElement
            title="이용 약관"
            content={["이용약관 및 환불규정", "개인정보처리방침"]}
            isTerms={true}
          />
        </FooterMainElementWrap>
        <FooterMainElementWrap data-area="register">
          <FooterMainElement
            title="작품 등록"
            content={[
              "문의 이메일",
              "snugraduart@gmail.com",
              "고객센터",

              "010-4912-0992",
            ]}
          />
        </FooterMainElementWrap>
        <FooterMainElementWrap data-area="madeBy">
          <FooterMainElement
            title="Made by"
            content={[
              "/assets/SnulionLogo.png",
              `김대유 김민서 김민석 박민서 유호준`,
              "이은재 이진서 조유진 전비아",
            ]}
          />
        </FooterMainElementWrap>
      </FooterMain>
      <FooterFooter>그래두아트 @ 2024. All rights reserved.</FooterFooter>
    </FooterContainer>
  );
}

export default Footer;
