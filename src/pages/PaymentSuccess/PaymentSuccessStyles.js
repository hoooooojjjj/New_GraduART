import styled from "@emotion/styled";

export const PaymentSuccessContainer = styled.div({
  width: "100vw",
  height: "100vh",
  background: "#000",
  position: "relative",
});

export const BackgroundCircle = styled.div({
  position: "absolute",
  top: "15%",
  left: "23%",
  width: "500px",
  height: "500px",
  flexShrink: 0,
  borderRadius: "500px",
  background: "#A348F6",
  "@media (max-width: 768px)": {
    width: "350px",
    height: "350px",
    top: "25%",
    left: "-30%",
  },
});

export const InfoWrap = styled.div({
  position: "absolute",
  top: "55%",
  left: "23%",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  "@media (max-width: 768px)": {
    height: "100dvh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "0%",
    left: "0%",
    gap: "6px",
    transform: "translate(0%, 15%)",
  },
});

export const InfoText = styled.div({
  color: "#FFF",
  fontFamily: "KoddiUDOnGothic",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textAlign: "right",
  "@media (max-width: 768px)": {
    fontSize: "25px",
    textAlign: "center",
  },
});

export const InfoBtnWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  width: `${275 + 275}px`,
  height: `${69 + 69}px`,
  position: "relative",
  "@media (max-width: 768px)": {
    fontSize: "25px",
    textAlign: "center",
    width: `100%`,
    height: `${37 + 37}px`,
  },
});

export const InfoBtnGoMainWrap = styled.div({
  position: "absolute",
  top: "69px",
  left: "0px",
  width: "275px",
  height: "69px",
  flexShrink: 0,
  borderRadius: "100px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  "@media (max-width: 768px)": {
    top: "45px",
    left: "40%",
    width: "150px",
    height: "37px",
  },
});

export const InfoBtnGoMain = styled.div({
  color: "#FFF",
  textAlign: "center",
  fontFamily: "KoddiUD OnGothic",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%" /* 24px */,
  "@media (max-width: 768px)": {
    fontSize: "12px",
  },
});

export const InfoBtnGoPayWrap = styled.div({
  position: "absolute",
  top: "0px",
  right: "0px",
  width: "275px",
  height: "69px",
  flexShrink: 0,
  borderRadius: "100px",
  background: "rgba(217, 217, 217, 0.30)",
  backdropFilter: "blur(50px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  "@media (max-width: 768px)": {
    left: "50%",
    width: "150px",
    height: "37px",
  },
});

export const InfoBtnGoPay = styled.div({
  color: "#FFF",
  textAlign: "center",
  fontFamily: "KoddiUD OnGothic",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%" /* 24px */,
  "@media (max-width: 768px)": {
    fontSize: "12px",
  },
});