import styled from "@emotion/styled";

export const DeptDetailHeader = styled.section({
  display: "flex",
  width: "100%",
  height: 155,
  marginBottom: 40,
});

export const DeptDetailHeaderleft = styled.div({
  display: "flex",
  width: "37%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  flexShrink: 0,
});

export const DeptDetailHeadertitle = styled.div({
  alignSelf: "stretch",
  color: "#FFF",
  fontFamily: "godorounded",
  fontSize: "100px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const DeptDetailHeadersubTitle = styled.div({
  alignSelf: "stretch",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const DeptDetailHeaderright = styled.div({
  display: "flex",
  width: "63%",
  height: "100%",
  alignItems: "center",
  gap: 20,
  flexShrink: 0,
});

export const DeptDetailHeadernavwrap = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const DeptDetailHeadercircle = styled.div({
  width: "50px",
  height: "50px",
  flexShrink: 0,
  background: "rgba(217, 217, 217, 0.30)",
  borderRadius: "50%",
  ":hover": {
    background: "#A348F6",
  },
});

export const DeptDetailHeadernavinfowrapper = styled.div((props) => ({
  position: "relative",
  width: "347px",
  height: "59px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  display: props.isNavHover ? "flex" : "none",
}));

export const DeptDetailHeadernavinfo = styled.div({
  width: "100%",
  height: "100%",
  borderRadius: "100px",
  background: "rgba(217, 217, 217, 0.30)",
  filter: "blur(1.5px)",
  backdropFilter: "blur(50px)",
  zIndex: 0,
  position: "absolute",
});

export const DeptDetailHeadernavinfotext = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%",
  zIndex: 1,
});
