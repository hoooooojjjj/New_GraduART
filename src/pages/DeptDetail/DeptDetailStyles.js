import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  overflowY: "auto", // 스크롤 가능하도록 설정
  overflowX: "hidden",
});

export const Main = styled.main({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddingTop: "6.839vh",
  paddingBottom: "3.908vh",
  background: "#000",
  "@media (max-width: 768px)": {
    paddingLeft: "5.12vw",
    paddingRight: "5.12vw",
  },
});
