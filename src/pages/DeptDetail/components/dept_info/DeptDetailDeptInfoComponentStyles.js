import styled from "@emotion/styled";

export const DeptDetailDeptInfo = styled.section({
  display: "flex",
  width: "100%",
  height: 307,
  marginBottom: 40,
});

export const DeptInfoLeft = styled.div({
  display: "flex",
  width: "40%",
  height: "100%",
  alignItems: "center",
  gap: 15,
});

export const DeptInfoImgPassive = styled.div({
  width: "30px",
  flexShrink: 0,
  borderRadius: "20px",
  background: "rgba(217, 217, 217, 0.30)",
  height: "100%",
});

export const DeptInfoImgActive = styled.img({
  width: "396px",
  height: "100%",
  flexShrink: 0,
  borderRadius: "20px",
});

export const DeptInfoRight = styled.div({
  width: "60%",
  height: "100%",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(10px, 1.59vw, 25px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "35px" /* 145.833% */,
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
});
