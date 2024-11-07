import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TitleContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

export const TitleContent = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  position: "relative",
  transform:
    props.hovered === "g" || props.hovered === "d"
      ? "translateX(248px)" // Right shift for left-side hover
      : props.hovered === "a" || props.hovered === "u"
      ? "translateX(-248px)" // Left shift for right-side hover
      : "translateX(0)",
  transition: "transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    transform:
      props.hovered === "g" || props.hovered === "d"
        ? "translateX(240px)" // 모바일에서 반응형 이동량 조정
        : props.hovered === "a" || props.hovered === "u"
        ? "translateX(-240px)"
        : "translateX(0)",
  },
}));

export const Row = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  "@media (max-width: 768px)": {
    gap: "5px",
  },
});

export const LetterBlock = styled.div({
  width: "268px",
  height: "267px",
  textAlign: "center",
  color: "white",
  fontSize: "200px",
  fontFamily: "godorounded, sans-serif",
  fontWeight: 400,
  lineHeight: "200px",
  wordWrap: "break-word",
  position: "relative",
  cursor: "pointer",
  "@media (max-width: 768px)": {
    width: "120px",
    height: "120px",
    fontSize: "90px",
    lineHeight: "90px",
  },
});

export const HighlightBlock = styled.div({
  width: "268px",
  height: "267px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 768px)": {
    width: "130px",
    height: "130px",
  },
});

export const HighlightBar = styled.div({
  width: "150px",
  border: "10px solid #A348F6",
  "@media (max-width: 768px)": {
    width: "75px",
    border: "5px solid #A348F6",
  },
});

export const PurpleCircleLeft = styled.div({
  width: "537px",
  height: "537px",
  backgroundColor: "#A348F6",
  borderRadius: "9999px",
  position: "absolute",
  top: "-40%",
  left: "74%", // 기존 위치 유지
  zIndex: -1,
  transition: "left 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    width: "235px",
    height: "235px",
    left: "60%", // 모바일 환경에서 더 적절한 위치로 이동
  },
});

export const PurpleCircleRight = styled.div({
  width: "537px",
  height: "537px",
  backgroundColor: "#A348F6",
  borderRadius: "9999px",
  position: "absolute",
  top: "-40%",
  right: "74%", // 오른쪽 전환 시 좀 더 중앙에 가까워지도록 조정
  zIndex: -1,
  transition: "right 1.2s ease-in-out, transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    width: "235px",
    height: "235px",
    right: "60%", // 모바일 환경에서 더 적절한 위치로 이동
  },
});

// Left side hover content
export const HoverContentLeft = styled.div((props) => ({
  position: "absolute",
  top: `calc(${props.rowPosition - 1} * 270px)`,
  left: "380px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  zIndex: 10,
  transform: "translateX(-20px)",
  transition: "left 1.2s ease-in-out, transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    left: "150px",
    top: `calc(${props.rowPosition - 1} * 150px)`,
    transform: "translateX(-10px)",
  },
}));

// Right side hover content
export const HoverContentRight = styled.div((props) => ({
  position: "absolute",
  top: `calc(${props.rowPosition - 1} * 270px)`,
  right: "380px", // 기본 중앙 기준
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  zIndex: 10,
  transform: props.isCraft ? "translateX(-70px)" : "translateX(130px)", // craft를 더 왼쪽으로 이동
  transition: "right 1.2s ease-in-out, transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    right: "150px",
    top: `calc(${props.rowPosition - 1} * 150px)`,
    transform: props.isCraft ? "translateX(170px)" : "translateX(200px)",
  },
}));

export const PaintingText = styled.div({
  color: "white",
  fontSize: "200px",
  fontFamily: "godorounded, sans-serif",
  fontWeight: 400,
  lineHeight: "200px",
  textAlign: "center",
  "@media (max-width: 768px)": {
    fontSize: "90px",
    lineHeight: "90px",
  },
});

export const DesignText = styled(PaintingText)({
  paddingLeft: "90px",
  "@media (max-width: 768px)": {
    paddingLeft: "30px",
  },
});

export const SculptureText = styled(PaintingText)({
  transform: "translateX(-50px)", // sculpture 텍스트를 왼쪽으로 20px 이동
  "@media (max-width: 768px)": {
    transform: "translateX(-20px)",
  },
});

export const CraftText = styled(PaintingText)({
  transform: "translateX(-190px)", // 텍스트를 더 왼쪽으로 당김
  "@media (max-width: 768px)": {
    transform: "translateX(-150px)",
  },
});

export const HoverButton = styled(Link)({
  width: "391px",
  height: "69px",
  position: "relative",
  textDecoration: "none",
  transform: "translateX(-10px)",
  "@media (max-width: 768px)": {
    width: "206px",
    height: "35px",
  },
  ".hover-bg": {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(217, 217, 217, 0.3)",
    borderRadius: "100px",
    filter: "blur(2px)",
  },
  ".hover-text": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontFamily: "KoddiUD OnGothic",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 768px)": {
      fontSize: "15px",
    },
    ".dept-name": {
      color: "#A348F6",
      fontSize: "30px",
      fontWeight: 700,
      "@media (max-width: 768px)": {
        fontSize: "15px",
      },
    },
    ".cta": {
      color: "white",
      fontSize: "30px",
      fontWeight: 400,
      "@media (max-width: 768px)": {
        fontSize: "15px",
      },
    },
  },
});
