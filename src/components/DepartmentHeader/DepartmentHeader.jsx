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
import { useAuth } from "../../contexts/AuthContext";

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
  const { user, logout } = useAuth();

  // 뒤로가기 버튼을 눌렀을 때
  const handleBack = () => {
    if (window.location.pathname.startsWith("/dept_detail")) {
      navigate("/"); // DeptDetail 페이지에서는 Landing 페이지로 이동
    } else {
      navigate(-1); // 그 외의 경우에는 이전 페이지로 이동
    }
  };

  const logoNav = () => {
    navigate("/");
  };

  // 검색 버튼을 눌렀을 때
  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
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
    if (user) {
      console.log(user);
      navigate("/cart");
    } else {
      navigate("/signin");
    }
  };

  //마이페이지 버튼 눌렀을때
  const handleMypage = () => {
    if (user) {
      navigate("/my");
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <Head
        style={{
          width: "100%",
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
          <TextWrapper onClick={logoNav}>graduart </TextWrapper>
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
            </svg>{" "}
          </Ellipse>
          <Ellipse2 onClick={handleCart}>
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 5.16667V5.66667H11.25H14.0625C14.1792 5.66667 14.2908 5.71286 14.3726 5.79437C14.4545 5.87581 14.5 5.98579 14.5 6.1V16.3667C14.5 16.9759 14.2569 17.5607 13.8235 17.9922C13.39 18.4238 12.8015 18.6667 12.1875 18.6667H2.8125C2.19847 18.6667 1.61004 18.4238 1.17653 17.9922C0.743094 17.5607 0.5 16.9759 0.5 16.3667V6.1C0.5 5.98579 0.54555 5.87581 0.627353 5.79437C0.70923 5.71286 0.820751 5.66667 0.9375 5.66667H3.75H4.25V5.16667V4.23333C4.25 3.37652 4.59187 2.55435 5.20111 1.94781C5.81044 1.34119 6.63733 1 7.5 1C8.36267 1 9.18956 1.34119 9.79889 1.94781C10.4081 2.55435 10.75 3.37652 10.75 4.23333V5.16667ZM9.375 5.66667H9.875V5.16667V4.23333C9.875 3.60493 9.62423 3.00272 9.17859 2.55906C8.73302 2.11547 8.12917 1.86667 7.5 1.86667C6.87083 1.86667 6.26698 2.11547 5.82141 2.55906C5.37577 3.00272 5.125 3.60493 5.125 4.23333V5.16667V5.66667H5.625H9.375ZM1.875 6.53333H1.375V7.03333V16.3667C1.375 16.7475 1.52699 17.1123 1.79682 17.381C2.06658 17.6495 2.43197 17.8 2.8125 17.8H12.1875C12.568 17.8 12.9334 17.6495 13.2032 17.381C13.473 17.1123 13.625 16.7475 13.625 16.3667V7.03333V6.53333H13.125H11.25H10.75V7.03333V7.96667C10.75 8.08087 10.7045 8.19085 10.6226 8.27229C10.5408 8.35381 10.4292 8.4 10.3125 8.4C10.1958 8.4 10.0842 8.35381 10.0024 8.27229C9.92055 8.19085 9.875 8.08087 9.875 7.96667V7.03333V6.53333H9.375H5.625H5.125V7.03333V7.96667C5.125 8.08087 5.07945 8.19085 4.99765 8.27229C4.91577 8.35381 4.80425 8.4 4.6875 8.4C4.57075 8.4 4.45923 8.35381 4.37735 8.27229C4.29555 8.19085 4.25 8.08087 4.25 7.96667V7.03333V6.53333H3.75H1.875Z"
                fill="white"
                stroke="white"
              />
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
              <path
                d="M7.5 10.3889C9.74366 10.3889 11.5625 8.39904 11.5625 5.94444C11.5625 3.48985 9.74366 1.5 7.5 1.5C5.25634 1.5 3.4375 3.48985 3.4375 5.94444C3.4375 8.39904 5.25634 10.3889 7.5 10.3889Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 17.5017C14 15.6158 13.3152 13.807 12.0962 12.4734C10.8772 11.1398 9.22391 10.3906 7.5 10.3906C5.77609 10.3906 4.12279 11.1398 2.90381 12.4734C1.68482 13.807 1 15.6158 1 17.5017"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
            zIndex: 1002,
          }}
          onClick={handleOverlayClick}
        >
          <div
            onClick={handleSearchOverlayClick}
            style={{
              zIndex: 1003,
            }}
          >
            {/* 내부 클릭 시 닫히지 않게 */}
            <SearchOverlay
              artworks={mockArtworks}
              handleSearch={handleSearch}
            />
          </div>
        </div>
      )}
    </>
  );
};
