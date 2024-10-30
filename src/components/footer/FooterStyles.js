import styled from "@emotion/styled";

export const FooterContainer = styled.div({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "rgba(43,43,43,255)",
  backdropFilter: "blur(50px)",
  paddingLeft: 77,
  paddingRight: 77,
});

export const FooterHeader = styled.div({
  color: "#A348F6",
  fontFamily: "godoRounded",
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: 400,
  borderBottom: "1px solid #A348F6",
  paddingTop: 38,
  paddingBottom: 38,
});

export const FooterMain = styled.div({
  borderBottom: "1px solid #A348F6",
  paddingTop: 38,
  paddingBottom: 38,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const FooterMainElementWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15.404px",
  flex: "1 0 0",
});

export const FooterMainElementTitle = styled.div({
  color: "#A348F6",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "110%" /* 19.8px */,
  marginBottom: 10,
  marginTop: 10,
});

export const FooterMainElementText = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%" /* 16px */,
});

export const FooterMainElementImg = styled.img({
  width: "90%",
  height: 50,
});

export const FooterFooter = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "13.478px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%" /* 18.87px */,
  paddingTop: 38,
  paddingBottom: 38,
});
