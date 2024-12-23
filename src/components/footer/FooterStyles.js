import styled from "@emotion/styled";

export const FooterContainer = styled.div({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "rgba(217, 217, 217, 0.2)", // bg-[#d9d9d9]/20
  backdropFilter: "blur(100px)",
  WebkitBackdropFilter: "blur(100px)",
  paddingLeft: "5vw",
  paddingRight: "5vw",
  "@media (max-width: 768px)": {
    paddingLeft: "5.12vw",
    paddingRight: "5.12vw",
  },
});

export const FooterHeader = styled.div({
  color: "#4E5A5B",
  fontFamily: "godoRounded",
  fontSize: "clamp(20px, 4.224vw, 120px)",
  fontStyle: "normal",
  fontWeight: 400,
  borderBottom: "1px solid #4E5A5B",
  paddingTop: "3.908vh",
  paddingBottom: "3.908vh",
  "@media (max-width: 768px)": {
    fontSize: 22,
    paddingTop: 17,
    paddingBottom: 17,
  },
});

export const FooterMain = styled.div({
  borderBottom: "1px solid #4E5A5B",
  paddingTop: "3.908vh",
  paddingBottom: "3.908vh",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    paddingTop: 17,
    paddingBottom: 17,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // 세 개의 열로 구성
    gridTemplateRows: "auto auto", // 두 개의 행으로 구성
    gap: "1vw",
    gridTemplateAreas: `
      "about payment register"
      "madeBy madeBy madeBy"
    `,
  },
});

export const FooterMainElementWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1vw",
  flex: "1 0 0",
  "@media (max-width: 768px)": {
    "&[data-area='about']": { gridArea: "about" },
    "&[data-area='payment']": { gridArea: "payment" },
    "&[data-area='register']": { gridArea: "register" },
    "&[data-area='madeBy']": { gridArea: "madeBy" },
    gap: 5,
  },
});

export const FooterMainElementTitle = styled.div({
  color: "#4E5A5B",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(10px, 1.188vw, 40px)",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "110%" /* 19.8px */,
  marginBottom: 10,
  marginTop: 10,
  "@media (max-width: 768px)": {
    fontSize: 10,
  },
});

export const FooterMainElementText = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(8px, 1.056vw, 30px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%" /* 16px */,
  "@media (max-width: 768px)": {
    fontSize: 8,
  },
});

export const FooterMainElementImg = styled.img({
  width: "90%",
  height: 50,
  "@media (max-width: 768px)": {
    width: 150,
    height: 30,
  },
});

export const FooterFooter = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(6px, 0.924vw, 30px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "140%" /* 18.87px */,
  paddingTop: "3.908vh",
  paddingBottom: "3.908vh",
  "@media (max-width: 768px)": {
    paddingTop: 17,
    paddingBottom: 17,
    fontSize: 6,
  },
});
