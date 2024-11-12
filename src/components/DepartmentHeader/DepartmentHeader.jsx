import React, { useState } from "react";
import {
  Head,
  Logo,
  TextWrapper,
  Span,
  Circles,
  Ellipse,
  Ellipse2,
  Ellipse3,
  BackBtn,
} from "./DepartmentHeaderStyle";
import { useNavigate } from "react-router-dom";
import SearchOverlay from "../search/SearchOverlay"; // Adjust the path as necessary

const mockArtworks = [
  {
    id: 1,
    title: "고양이 나무에서 떨어지다",
    artist: "홍길동",
    material: "캔버스에 유채",
    size: "200x300",
  },
  {
    id: 2,
    title: "파란 하늘",
    artist: "이몽룡",
    material: "종이에 수채",
    size: "100x150",
  },
  {
    id: 3,
    title: "해바라기",
    artist: "성춘향",
    material: "캔버스에 유채",
    size: "250x350",
  },
  {
    id: 4,
    title: "바닷가 풍경",
    artist: "변사또",
    material: "캔버스에 아크릴",
    size: "300x400",
  },
  {
    id: 5,
    title: "겨울 산",
    artist: "김삿갓",
    material: "캔버스에 유채",
    size: "150x200",
  },
  {
    id: 6,
    title: "붉은 장미",
    artist: "춘향이",
    material: "종이에 수채",
    size: "80x120",
  },
  // 필요한 만큼 추가...
];

export const DepartmentHeader = () => {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // 뒤로가기 버튼을 눌렀을 때
  const handleBack = () => {
    if (window.location.pathname.startsWith("/dept_detail")) {
      navigate("/"); // DeptDetail 페이지에서는 Landing 페이지로 이동
    } else {
      navigate(-1); // 그 외의 경우에는 이전 페이지로 이동
    }
  };

  // 검색 버튼을 눌렀을 때
  const handleSearch = () => {
    setIsSearchVisible(true); // 검색창 보이기
  };

  // 검색 오버레이 바깥을 눌렀을 때
  const handleOverlayClick = () => {
    setIsSearchVisible(false); // 검색창 닫기
  };

  // 검색 오버레이 내부를 눌렀을 때 클릭 이벤트 전파 방지
  const handleSearchOverlayClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트가 부모로 전파되는 것을 막음
  };

  //장바구니 버튼 눌렀을때
  const handleCart = () => {
    navigate("/cart");
  };

  //마이페이지 버튼 눌렀을때
  const handleMypage = () => {
    navigate("/my");
  };

  return (
    <>
      <Head
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1001,
        }}
      >
        <Logo>
          <BackBtn onClick={handleBack}>
            <svg
              width={window.innerWidth > 768 ? 25 : 17}
              height={window.innerWidth > 768 ? 18 : 13}
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4039 0.329505C9.97791 -0.109835 9.28718 -0.109835 8.86116 0.329505L1.22479 8.2045C0.798767 8.64384 0.798767 9.35616 1.22479 9.7955L8.86116 17.6705C9.28718 18.1098 9.97791 18.1098 10.4039 17.6705C10.83 17.2312 10.83 16.5188 10.4039 16.0795L4.62987 10.125H23.8144C24.4169 10.125 24.9053 9.62132 24.9053 9C24.9053 8.37868 24.4169 7.875 23.8144 7.875H4.62987L10.4039 1.9205C10.83 1.48116 10.83 0.768845 10.4039 0.329505Z"
                fill="white"
              />
            </svg>
          </BackBtn>
          <TextWrapper>snu graduart </TextWrapper>
          {window.innerWidth > 768 && (
            <Span>| 서울대학교 졸업전시 작품 전시 ・ 판매</Span>
          )}
        </Logo>

        <Circles>
          <Ellipse onClick={handleSearch}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15.5L11.4563 11.9563M11.4563 11.9563C12.0251 11.3876 12.4763 10.7123 12.7841 9.96918C13.0919 9.22604 13.2504 8.42955 13.2504 7.62518C13.2504 6.82081 13.0919 6.02431 12.7841 5.28117C12.4763 4.53803 12.0251 3.8628 11.4563 3.29402C10.8876 2.72525 10.2123 2.27407 9.46918 1.96625C8.72604 1.65843 7.92955 1.5 7.12518 1.5C6.32081 1.5 5.52431 1.65843 4.78117 1.96625C4.03803 2.27407 3.3628 2.72525 2.79402 3.29402C1.64533 4.44272 1 6.00068 1 7.62518C1 9.24967 1.64533 10.8076 2.79402 11.9563C3.94272 13.105 5.50068 13.7504 7.12518 13.7504C8.74967 13.7504 10.3076 13.105 11.4563 11.9563Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Ellipse>
          <Ellipse2 onClick={handleCart}>
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 장바구니 버튼 */}
            </svg>
          </Ellipse2>
          <Ellipse3 onClick={handleMypage}>
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 마이페이지 버튼 */}
            </svg>
          </Ellipse3>
        </Circles>
      </Head>

      {isSearchVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // 약간 투명한 배경
            zIndex: 999,
          }}
          onClick={handleOverlayClick}
        >
          <div onClick={handleSearchOverlayClick}>
            {/* 내부 클릭 시 닫히지 않게 */}
            <SearchOverlay artworks={mockArtworks} />
          </div>
        </div>
      )}
    </>
  );
};
