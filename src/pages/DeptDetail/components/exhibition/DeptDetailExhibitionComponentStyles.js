import styled from "@emotion/styled";

export const DeptDetailExhibition = styled.section({
  display: "flex",
  flexDirection: "column",
  gap: 50,
  width: "100%",
  height: "auto",
  "@media (max-width: 768px)": {
    gap: 30,
  },
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
  height: "14vh",
  gap: 20,
  "@media (max-width: 768px)": {
    gap: 10,
    height: 46,
  },
});

export const TitleText = styled.div({
  color: "#FFF",
  fontFamily: "godorounded",
  fontSize: "clamp(40px, 6.6vw, 200px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  alignContent: "center",
  alignSelf: "center",
  height: "100%",
  "@media (max-width: 768px)": {
    fontSize: 40,
  },
});

export const TitleYear = styled.div({
  borderRadius: "40px",
  background: "#686868",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(50px)",
  padding: "0.977vh 1.32vw",
  color: "white",
  fontSize: "clamp(16px, 1.584vw, 40px)",
  fontFamily: "KoddiUDOnGothic",
  fontWeight: "400",
  wordWrap: "break-word",
  marginTop: 10,
  "@media (max-width: 768px)": {
    fontSize: 8,
    padding: "5px 10px",
  },
});

export const ExhibitionTitleSearchContainer = styled.form({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "38vw",
  height: "8vh",
  "@media (max-width: 768px)": {
    width: "74.496vw",
    height: "30px",
  },
});

export const ExhibitionTitleSearchWrap = styled.input({
  backgroundColor: "#909090",
  border: "none",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  width: "38vw",
  height: "8vh",
  padding: "0px 4.29vw 0px 2.574vw",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(16px, 1.584vw, 40px)",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  "::placeholder": {
    color: "#909090",
    fontFamily: "KoddiUDOnGothic",
    fontSize: "clamp(16px, 1.584vw, 40px)",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  "@media (max-width: 768px)": {
    width: "74.496vw",
    height: "30px",
    borderRadius: "30px",
    padding: "0px 14px 0px 14px",
    fontSize: "10px",
    "::placeholder": {
      fontSize: "10px",
    },
  },
});

export const SearchIcon = styled.img({
  width: "1.98vw",
  height: "1.98vw",
  position: "absolute",
  right: "2.31vw",
  cursor: "pointer",

  "@media (max-width: 768px)": {
    width: "3.84vw",
    height: "3.84vw",
    right: "13px",
  },
});

export const ArtWorkGridWrap = styled.article(`
  display: grid;
  width: 100%;
  min-height: ${(props) => props.minHeight}px;
  grid-template-columns: repeat(4, 1fr);
  gap: 54px;
  align-items: flex-start;
  justify-items: center;
  @media (max-width: 768px) {
    min-height: ${(props) => props.minHeight * 4}px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`);

export const ArtWorkWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px",
  width: "100%", // 전체 셀 너비를 채우도록 설정
  boxSizing: "border-box",
  position: "relative",
  "@media (max-width: 768px)": {
    gap: 0,
  },
});

export const ArtWorkCircle = styled.div`
  border-radius: 50%; // 완전한 원 모양
  background: #4e5a5b;
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
  cursor: "pointer",
  "@media (max-width: 768px)": {
    borderRadius: "10px",
  },
});

export const ArtWorkInfoWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 16,
  zIndex: 1,
  "@media (max-width: 768px)": {
    gap: 5,
    marginTop: 10,
  },
});

export const ArtWorkTitle = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(10px, 1.32vw, 40px)",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "100%" /* 20px */,
  "@media (max-width: 768px)": {
    fontSize: 12,
  },
});

export const ArtWorkSubTitle = styled.div({
  color: "#ECECEC",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(8px, 0.924vw, 25px)",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%" /* 14px */,
  "@media (max-width: 768px)": {
    fontSize: 10,
  },
});

export const PaginationWrap = styled.div({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  "@media (max-width: 768px)": {
    marginTop: 0,
  },
});

export const PrevButton = styled.button({
  padding: "10px 20px",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  fontFamily: "KoddiUDOnGothic",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
  "@media (max-width: 768px)": {
    padding: "10px 15px",
    fontSize: "10px",
  },
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
  background: "#4e5a5b",
  color: "#FFF",
  fontFamily: "godoRounded",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%" /* 16px */,
  "@media (max-width: 768px)": {
    width: "5.888vw",
    height: "5.888vw",
    fontSize: "10px",
  },
});

export const NextButton = styled.button({
  padding: "10px 20px",
  borderRadius: "40px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginLeft: "10px",
  fontFamily: "KoddiUDOnGothic",
  "@media (max-width: 768px)": {
    padding: "10px 15px",
    fontSize: "10px",
  },
});
