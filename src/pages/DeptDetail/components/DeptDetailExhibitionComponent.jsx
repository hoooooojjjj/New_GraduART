import React from "react";
import {
  DeptDetailExhibition,
  ExhibitionTitleSearchContainer,
  ExhibitionTitleSearchWrap,
  ExhibitionTitleTextWrap,
  ExhibitionTitleWrap,
  SearchIcon,
  TitleText,
  TitleYear,
} from "./DeptDetailExhibitionComponentStyles";

function ExhibitionTitle() {
  return (
    <ExhibitionTitleWrap>
      <ExhibitionTitleTextWrap>
        <TitleText>exhibition</TitleText>
        <TitleYear>2024</TitleYear>
      </ExhibitionTitleTextWrap>
      {/* ExhibitionTitleSearchContainer => form 태그임!! */}
      <ExhibitionTitleSearchContainer>
        <ExhibitionTitleSearchWrap placeholder="작품명, 작가명 검색하기" />
        <SearchIcon src="/assets/searchIcon.svg" alt="search" />
      </ExhibitionTitleSearchContainer>
    </ExhibitionTitleWrap>
  );
}

function DeptDetailExhibitionComponent() {
  return (
    <DeptDetailExhibition>
      <ExhibitionTitle />
    </DeptDetailExhibition>
  );
}

export default DeptDetailExhibitionComponent;
