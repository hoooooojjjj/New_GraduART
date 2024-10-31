import styled from "@emotion/styled";

export const DeptDetailDeptInfo = styled.section({
  display: "flex",
  width: "100%",
  height: "30vh",
  marginBottom: "40px",
});

export const DeptInfoLeft = styled.div({
  display: "flex",
  width: "40%",
  height: "100%",
  alignItems: "center",
  gap: "1vw",
});

export const DeptInfoImgPassive = styled.div({
  width: "1.98vw",
  flexShrink: 0,
  borderRadius: "20px",
  background: "rgba(217, 217, 217, 0.30)",
  height: "100%",
});

export const DeptInfoImgActive = styled.img({
  width: "22vw",
  height: "100%",
  flexShrink: 0,
  borderRadius: "20px",
});

export const DeptInfoRight = styled.div({
  width: "60%",
  height: "100%",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(10px, 1.3vw, 40px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.31vw" /* 145.833% */,
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
});
