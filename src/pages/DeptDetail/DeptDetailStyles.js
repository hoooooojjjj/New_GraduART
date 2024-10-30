import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  overflowY: "auto", // 스크롤 가능하도록 설정
});

export const Main = styled.main({
  paddingLeft: 76,
  paddingRight: 76,
  paddingTop: 70,
  paddingBottom: 40,
  background: "#000",
});
