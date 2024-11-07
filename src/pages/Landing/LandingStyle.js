import styled from "@emotion/styled";

export const MainContainer = styled.div({
  width: "100vw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  overflow: "hidden",
  userSelect: "none",
});

export const Frame = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflowY: "auto",
  overflowX: "hidden",
});
