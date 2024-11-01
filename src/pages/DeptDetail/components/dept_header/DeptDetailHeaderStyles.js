import styled from "@emotion/styled";

export const DeptDetailHeader = styled.section({
  display: "flex",
  width: "100%",
  height: "15vh",
  marginBottom: "40px",
  alignItems: "center",
  "@media (max-width: 768px)": {
    height: 66,
    marginBottom: "20px",
    alignItems: "flex-end",
  },
});

export const DeptDetailHeaderleft = styled.div({
  display: "flex",
  width: "40%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  flexShrink: 0,
  "@media (max-width: 768px)": {
    width: "45%",
  },
});

export const DeptDetailHeadertitle = styled.div({
  boxSizing: "border-box",
  alignSelf: "stretch",
  color: "#FFF",
  fontFamily: "godorounded",
  fontSize: "clamp(40px, 6vw, 200px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  alignContent: "center",
  "@media (max-width: 768px)": {
    fontSize: "40px",
    whiteSpace: "nowrap",
  },
});

export const DeptDetailHeadersubTitle = styled.div({
  alignSelf: "stretch",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(16px, 1.98vw, 40px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  "@media (max-width: 768px)": {
    fontSize: "16px",
    whiteSpace: "nowrap",
  },
});

export const DeptDetailHeaderright = styled.div({
  display: "flex",
  width: "60%",
  height: "100%",
  alignItems: "center",
  gap: 20,
  flexShrink: 0,
  marginLeft: 10,
  "@media (max-width: 768px)": {
    width: "55%",
    gap: 5,
    alignItems: "flex-end",
  },
});

export const DeptDetailHeadernavwrap = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const DeptDetailHeadercircle = styled.div({
  width: "3.3vw",
  height: "3.3vw",
  flexShrink: 0,
  background: "rgba(217, 217, 217, 0.30)",
  borderRadius: "50%",
  ":hover": {
    background: "#A348F6",
  },
  "@media (max-width: 768px)": {
    width: "4.096vw",
    height: "4.096vw",
  },
});

export const DeptDetailHeadernavinfowrapper = styled.div((props) => ({
  position: "relative",
  width: "23.1vw",
  height: "5.982vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  display: props.isNavHover ? "flex" : "none",
  "@media (max-width: 768px)": {
    display: "none",
  },
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
  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const DeptDetailHeadernavinfotext = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "clamp(10px, 1.65vw, 50px)",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%",
  zIndex: 1,
  "@media (max-width: 768px)": {
    display: "none",
  },
});
