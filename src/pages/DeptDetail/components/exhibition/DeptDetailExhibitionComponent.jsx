import React, { useEffect, useRef, useState, useContext } from "react";
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
import { useNavigate, useLocation } from "react-router-dom";
import { curDepartmentObjContext } from "../../DeptDetail";
import api from "../../../../utils/axios";
import ErrorMessage from "../../../../components/common/ErrorMessage";
import Loading from "../../../../components/common/Loading";

function ExhibitionTitle({ items, setItems, curDepartmentObj }) {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const location = useLocation(); // 현재 경로 가져오기
  const [isSearching, setIsSearching] = useState(false); // 검색 상태
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // 경로 변경 시 검색창 초기화
  useEffect(() => {
    setSearchTerm(""); // 검색어 상태 초기화
  }, [location]);

  // 검색 API 호출 함수
  const search = async (term) => {
    try {
      const response = await api.get(
        `/items/search/?query=${term}&department=${curDepartmentObj.Department}`,
      );
      setItems(response.data); // 검색 결과 저장
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  // 검색어 입력 변화 처리
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 검색어 제출 시 검색 함수 호출
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 리로딩 방지
    if (searchTerm.trim()) {
      setIsSearching(true);
      search(searchTerm);
    }
  };

  const handleSearchReset = () => {
    setSearchTerm(""); // 검색어 초기화
    setIsSearching(false); // 검색 상태 비활성화
    const fetchItems = async () => {
      try {
        setLoading(true);
        if (curDepartmentObj.Department) {
          const response = await api.get(
            `/items/?department=${curDepartmentObj.Department}`,
          );
          setItems(response.data);
        }
      } catch (err) {
        setError(
          err.response?.data?.error || "작품을 불러오는데 실패했습니다.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  };

  return (
    <ExhibitionTitleWrap>
      <ExhibitionTitleTextWrap>
        <TitleText>{curDepartmentObj.Department} exhibition</TitleText>
        <TitleYear>2024</TitleYear>
      </ExhibitionTitleTextWrap>
      <ExhibitionTitleSearchContainer onSubmit={handleSearchSubmit}>
        <ExhibitionTitleSearchWrap
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="작품명, 작가명 검색하기"
        />
        <SearchIcon 
        src={isSearching ? "/assets/vector.svg" : "/assets/searchIcon.svg"} 
        alt={isSearching ? "search_cacel" : "search"} 
        onClick={isSearching ? handleSearchReset : handleSearchSubmit}
        />
      </ExhibitionTitleSearchContainer>
    </ExhibitionTitleWrap>
  );
}

function ExhibitionGrid({ items, setItems, curDepartmentObj }) {
  // 한 페이지에서 보일 작품 수
  const itemsPerPage = 8;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

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
  const [isHover, setIsHover] = useState(items.map(() => false));

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        if (curDepartmentObj.Department) {
          const response = await api.get(
            `/items/?department=${curDepartmentObj.Department}`,
          );
          setItems(response.data);
        }
      } catch (err) {
        setError(
          err.response?.data?.error || "작품을 불러오는데 실패했습니다.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [curDepartmentObj.Department]);

  useEffect(() => {
    // 이미지 높이 (너비와 동일, 즉 셀의 너비와 같음) + 각 요소 사이의 gap 높이 * 2
    if (imgRef.current && items.length > 0) {
      const columnHeight = imgRef.current.clientWidth;
      const computedMinHeight = columnHeight * 2; // 2행 + gap
      setMinHeight(computedMinHeight);
    }
  }, [items]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <ArtWorkGridWrap minHeight={minHeight}>
        {currentItems.map((artWork, i) => (
          <ArtWorkWrap
            key={artWork.id || `artWork-${i}`} // 작품 hover 시, 동그라미 배경을 보여줌
            onClick={() => navigate(`/artwork/${artWork.item_id}`)}
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
                width: imgRef.current?.clientWidth
                  ? imgRef.current.clientWidth * 1.4
                  : 0,
                height: imgRef.current?.clientWidth
                  ? imgRef.current.clientWidth * 1.4
                  : 0,
              }}
            />
            <ArtWorkImg
              ref={i === 0 ? imgRef : null}
              src={artWork.image_original}
              alt={artWork.title}
            />
            <ArtWorkInfoWrap>
              <ArtWorkTitle>{artWork.title}</ArtWorkTitle>
              <ArtWorkSubTitle>
                {artWork.name} | {artWork.material} | {artWork.size}
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

function DeptDetailExhibitionComponent({ items, setItems }) {
  const curDepartmentObj = useContext(curDepartmentObjContext);

  return (
    <DeptDetailExhibition>
      <ExhibitionTitle
        items={items}
        setItems={setItems}
        curDepartmentObj={curDepartmentObj}
      />
      <ExhibitionGrid
        items={items}
        setItems={setItems}
        curDepartmentObj={curDepartmentObj}
      />
    </DeptDetailExhibition>
  );
}

export default DeptDetailExhibitionComponent;
