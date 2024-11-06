import styled from "@emotion/styled";

export const TitleContainer = styled.div({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  transform: "scale(0.8) translateY(-10%)",
  transformOrigin: "center",
});

export const Row = styled.div({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const LetterBlock = styled.div({
  width: "268px",
  height: "267px",
  textAlign: "center",
  color: "white",
  fontSize: "200px",
  fontFamily: "'godoRounded R'",
  fontWeight: 400,
  lineHeight: "200px",
  wordWrap: "break-word",
});

export const HighlightBlock = styled.div({
  width: "268px",
  height: "267px",
  padding: "47px 10px 10px 10px",
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const HighlightBar = styled.div({
  width: "150px",
  height: "0",
  border: "10px solid #A348F6",
});
