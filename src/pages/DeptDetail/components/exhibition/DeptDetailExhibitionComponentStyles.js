import styled from "@emotion/styled";

export const DeptDetailExhibition = styled.section({
  display: "flex",
  flexDirection: "column",
  gap: 50,
  width: "100%",
  height: "auto",
});

// ExhibitionTitle

export const ExhibitionTitleWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const ExhibitionTitleTextWrap = styled.div({
  display: "flex",
  alignItems: "center",
  height: 115,
  gap: 20,
});

export const TitleText = styled.div({
  color: "#FFF",
  fontFamily: "godorounded",
  fontSize: "100px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  alignContent: "center",
  alignSelf: "center",
  height: "100%",
});

export const TitleYear = styled.div({
  borderRadius: "40px",
  background: "#A348F6",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(50px)",
  padding: "10px 20px",
  color: "white",
  fontSize: 24,
  fontFamily: "KoddiUDOnGothic",
  fontWeight: "400",
  wordWrap: "break-word",
  marginTop: 10,
});

export const ExhibitionTitleSearchContainer = styled.form({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "625px",
  height: "80px",
});

export const ExhibitionTitleSearchWrap = styled.input({
  backgroundColor: "#909090",
  border: "none",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  width: "625px",
  height: "80px",
  padding: "0px 65px 0px 39px",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  "::placeholder": {
    color: "#909090",
    fontFamily: "KoddiUDOnGothic",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
});

export const SearchIcon = styled.img({
  width: 29,
  height: 29,
  position: "absolute",
  right: "35px",
  cursor: "pointer",
});

export const ArtWorkGridWrap = styled.article`
  display: grid;
  width: 100%;
  min-height: ${(props) => props.minHeight}px;
  grid-template-columns: repeat(4, 1fr);
  gap: 54px;
  align-items: flex-start;
  justify-items: center;
`;

export const ArtWorkWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px",
  width: "100%", // 전체 셀 너비를 채우도록 설정
  boxSizing: "border-box",
  position: "relative",
});

export const ArtWorkCircle = styled.div`
  border-radius: 50%; // 완전한 원 모양
  background: rgba(163, 72, 246, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-43%, -52%);
  pointer-events: none;
  z-index: 0;
`;

export const ArtWorkImg = styled.img({
  width: "100%",
  aspectRatio: "1", // 너비와 높이를 동일하게 설정
  borderRadius: "20px",
  backdropFilter: "blur(50px)",
});

export const ArtWorkInfoWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 16,
  zIndex: 1,
});

export const ArtWorkTitle = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "100%" /* 20px */,
});

export const ArtWorkSubTitle = styled.div({
  color: "#909090",
  fontFamily: "KoddiUD OnGothic",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%" /* 14px */,
});

export const PaginationWrap = styled.div({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
});

export const PrevButton = styled.button({
  padding: "10px 20px",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
});

export const CurrentPage = styled.div({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  textAlign: "center",
  display: "flex",
  paddingBottom: 1,
  alignItems: "center",
  justifyContent: "center",
  background: "#A348F6",
  color: "#FFF",
  fontFamily: "godoRounded",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%" /* 16px */,
});

export const NextButton = styled.button({
  padding: "10px 20px",
  borderRadius: "40px",
  background: "#A348F6",
  backdropFilter: "blur(50px)",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginLeft: "10px",
});
