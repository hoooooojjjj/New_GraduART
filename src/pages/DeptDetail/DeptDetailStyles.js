import styled from "@emotion/styled";

export const Header = styled.header({});

export const Main = styled.main({
  paddingLeft: 76,
  paddingRight: 76,
  paddingTop: 70,
  paddingBottom: 40,
  background: "#000",
  minHeight: "100vh",
});

export const Footer = styled.footer({});

export const DeptDetailHeader = styled.section({
  display: "flex",
  width: "100dvw",
  height: 155,
});

export const DeptDetailHeader_left = styled.div({
  display: "flex",
  width: "40%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  flexShrink: 0,
});

export const DeptDetailHeader_title = styled.div({
  alignSelf: "stretch",
  color: "#FFF",
  fontFamily: "godorounded",
  fontSize: "100px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const DeptDetailHeader_subTitle = styled.div({
  alignSelf: "stretch",
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const DeptDetailHeader_right = styled.div({
  display: "flex",
  width: "60%",
  height: "100%",
  alignItems: "center",
  gap: 20,
  flexShrink: 0,
});

export const DeptDetailHeader_nav_wrap = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const DeptDetailHeader_circle = styled.div({
  width: "50px",
  height: "50px",
  flexShrink: 0,
  background: "rgba(217, 217, 217, 0.30)",
  borderRadius: "50%",
  ":hover": {
    background: "#A348F6",
  },
});

export const DeptDetailHeader_nav_info_wrapper = styled.div((props) => ({
  position: "relative",
  width: "347px",
  height: "59px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  display: props.isNavHover ? "flex" : "none",
}));

export const DeptDetailHeader_nav_info = styled.div({
  width: "100%",
  height: "100%",
  borderRadius: "100px",
  background: "rgba(217, 217, 217, 0.30)",
  filter: "blur(1.5px)",
  backdropFilter: "blur(50px)",
  zIndex: 0,
  position: "absolute",
});

export const DeptDetailHeader_nav_info_text = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%",
  zIndex: 1,
});
