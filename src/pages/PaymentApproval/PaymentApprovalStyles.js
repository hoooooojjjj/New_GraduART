import styled from "@emotion/styled";

export const PaymentApprovalContainer = styled.div({
  width: "100vw",
  height: "100vh",
  background: "#000",
  position: "relative",
});

export const MainContainer = styled.div({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "48px",
  "@media (max-width: 768px)": {
    gap: "30px",
  },
});

export const MainText = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "50px",
  textAlign: "center",
  "@media (max-width: 768px)": {
    fontSize: "25px",
  },
});

export const FinishBtnWrap = styled.div({
  position: "relative",
  width: "260px",
  height: "69px",
  borderRadius: "100px",
  backgroundColor: "rgba(163, 72, 246, 0.5)",
  backdropFilter: "blur(100px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  color: "#FFF",
  fontSize: "24px",
  fontFamily: "KoddiUDOnGothic",
  fontWeight: "400",
  textAlign: "center",
  cursor: "pointer",
  ":hover": {
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    width: "156px",
    height: "35px",
    fontSize: "14px",
    gap: "10px",
  },
});

export const ArrowIcon = styled.svg({
  width: "33px",
  height: "28px",
  "@media (max-width: 768px)": {
    width: "17px",
    height: "13px",
  },
});
