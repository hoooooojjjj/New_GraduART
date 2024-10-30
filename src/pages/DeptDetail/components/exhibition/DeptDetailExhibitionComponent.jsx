import React, { useEffect, useRef, useState } from "react";
import {
  ArtWorkCircle,
  ArtWorkGridWrap,
  ArtWorkImg,
  ArtWorkInfoWrap,
  ArtWorkSubTitle,
  ArtWorkTitle,
  ArtWorkWrap,
  CurrentPage,
  DeptDetailExhibition,
  ExhibitionTitleSearchContainer,
  ExhibitionTitleSearchWrap,
  ExhibitionTitleTextWrap,
  ExhibitionTitleWrap,
  NextButton,
  PaginationWrap,
  PrevButton,
  SearchIcon,
  TitleText,
  TitleYear,
} from "./DeptDetailExhibitionComponentStyles";

const artWorks = [
  {
    id: 0,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 1,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 2,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 3,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 4,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 5,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 6,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 7,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 8,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 9,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 10,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 11,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 12,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 13,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 14,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "등 좀 펴(Keep your back ・・・ ",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 15,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "anywhere",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 16,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "자연 연구",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 17,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "떨어지는 시간",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 18,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "아름다운 날",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 19,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "내일의 빛",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 20,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "저녁의 이야기",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 21,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "깊은 숲 속",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 22,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "빛의 무게",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 23,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "돌아온 길",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 24,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "아침의 꽃",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 25,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "바다와 하늘",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 26,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "기억 속으로",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 27,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "꿈꾸는 별",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 28,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "느낌의 흐름",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 29,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "순간의 감각",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 30,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "마음의 소리",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 31,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "행복의 온도",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 32,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "별빛 아래",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 33,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "새벽의 꿈",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 34,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "그리움의 파도",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 35,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "끝없는 모험",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 36,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "한겨울의 빛",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 37,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "봄의 기억",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 38,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "여름의 노래",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 39,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "가을의 향기",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 40,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "겨울의 숨결",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 41,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "빛나는 기억",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 42,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "희망의 새벽",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
  {
    id: 43,
    img: "/assets/DeptInfoComponentImgs1.jpg",
    title: "미래의 빛",
    artist: "홍길동",
    tool: "캔버스에 유화",
    size: "200*200",
  },
];

function ExhibitionTitle() {
  return (
    <ExhibitionTitleWrap>
      <ExhibitionTitleTextWrap>
        <TitleText>exhibition</TitleText>
        <TitleYear>2024</TitleYear>
      </ExhibitionTitleTextWrap>
      <ExhibitionTitleSearchContainer>
        <ExhibitionTitleSearchWrap placeholder="작품명, 작가명 검색하기" />
        <SearchIcon src="/assets/searchIcon.svg" alt="search" />
      </ExhibitionTitleSearchContainer>
    </ExhibitionTitleWrap>
  );
}

function ExhibitionGrid() {
  // 한 페이지에서 보일 작품 수
  const itemsPerPage = 8;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = artWorks.slice(startIndex, endIndex);

  const totalPages = Math.ceil(artWorks.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [minHeight, setMinHeight] = useState(0);

  const imgRef = useRef(0);

  // 작품 hover 상태를 저장하는 state
  const [isHover, setIsHover] = useState(artWorks.map(() => false));

  useEffect(() => {
    // 이미지 높이 (너비와 동일, 즉 셀의 너비와 같음) + 각 요소 사이의 gap 높이 * 2
    const columnHeight = imgRef.current.clientWidth;
    const computedMinHeight = columnHeight * 2; // 2행 + gap
    setMinHeight(computedMinHeight);
  }, [artWorks]);

  return (
    <>
      <ArtWorkGridWrap minHeight={minHeight}>
        {currentItems.map((artWork, i) => (
          <ArtWorkWrap
            key={artWork.id} // 작품 hover 시, 동그라미 배경을 보여줌
            onMouseEnter={() => {
              const updatedIsHover = [...isHover];
              updatedIsHover.fill(false);
              updatedIsHover[i] = true;
              setIsHover(updatedIsHover);
            }}
            // 작품 hover 떠나면, 동그라미 배경을 가림
            onMouseLeave={() => {
              const updatedIsHover = [...isHover];
              updatedIsHover[i] = false;
              setIsHover(updatedIsHover);
            }}
          >
            <ArtWorkCircle
              style={{
                display: isHover[i] ? "block" : "none",
                width: imgRef ? imgRef.current.clientWidth * 1.4 : 0,
                height: imgRef ? imgRef.current.clientWidth * 1.4 : 0,
              }}
            />
            <ArtWorkImg ref={imgRef} src={artWork.img} alt={artWork.title} />
            <ArtWorkInfoWrap>
              <ArtWorkTitle>{artWork.title}</ArtWorkTitle>
              <ArtWorkSubTitle>
                {artWork.artist} | {artWork.tool} | {artWork.size}
              </ArtWorkSubTitle>
            </ArtWorkInfoWrap>
          </ArtWorkWrap>
        ))}
      </ArtWorkGridWrap>
      <PaginationWrap>
        {currentPage > 1 && (
          <PrevButton onClick={handlePreviousPage}>
            이전 페이지 감상하기
          </PrevButton>
        )}
        <CurrentPage>{currentPage}</CurrentPage>
        {/* 다음 페이지 버튼 */}
        {currentPage < totalPages && (
          <NextButton onClick={handleNextPage}>다음 페이지 감상하기</NextButton>
        )}
      </PaginationWrap>
    </>
  );
}

function DeptDetailExhibitionComponent() {
  return (
    <DeptDetailExhibition>
      <ExhibitionTitle />
      <ExhibitionGrid />
    </DeptDetailExhibition>
  );
}

export default DeptDetailExhibitionComponent;
