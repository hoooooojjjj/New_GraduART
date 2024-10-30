import styled from "@emotion/styled";

export const DeptDetailExhibition = styled.section({
  width: "100%",
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
