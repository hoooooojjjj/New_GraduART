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
      ? "translateX(248px)" // Right shift for left hover
      : props.hovered === "a" || props.hovered === "u"
      ? "translateX(-248px)" // Left shift for right hover
      : "translateX(0)",
  transition: "transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    transform:
      props.hovered === "g" || props.hovered === "d"
        ? "translateX(240px)"
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
  border: "10px solid var(--purple)",
  "@media (max-width: 768px)": {
    width: "75px",
    border: "5px solid var(--purple)",
  },
});

export const PurpleCircleLeft = styled.div({
  width: "537px",
  height: "537px",
  backgroundColor: "var(--purple)",
  borderRadius: "9999px",
  position: "absolute",
  top: "-40%",
  left: "74%",
  zIndex: -1,
  transition: "left 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    width: "235px",
    height: "235px",
    left: "60%",
  },
});

export const PurpleCircleRight = styled.div({
  width: "537px",
  height: "537px",
  backgroundColor: "var(--purple)",
  borderRadius: "9999px",
  position: "absolute",
  top: "-40%",
  right: "74%",
  zIndex: -1,
  transition: "right 1.2s ease-in-out, transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    width: "235px",
    height: "235px",
    right: "60%",
  },
});

// Left hover
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

// Right hover
export const HoverContentRight = styled.div((props) => ({
  position: "absolute",
  top: `calc(${props.rowPosition - 1} * 270px)`,
  right: "380px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  zIndex: 10,
  transform: props.isCraft ? "translateX(-70px)" : "translateX(130px)",
  transition: "right 1.2s ease-in-out, transform 1.2s ease-in-out",
  "@media (max-width: 768px)": {
    right: "150px",
    top: `calc(${props.rowPosition - 1} * 150px)`,
    transform: props.isCraft ? "translateX(150px)" : "translateX(200px)",
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
  transform: "translateX(-50px)",
  "@media (max-width: 768px)": {
    transform: "translateX(-70px)",
  },
});

export const CraftText = styled(PaintingText)({
  transform: "translateX(-190px)",
  "@media (max-width: 768px)": {
    transform: "translateX(-160px)",
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
    filter: "blur(1px)",
  },
  ".hover-text": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",

    textAlign: "center",
    fontFamily: "KoddiUD OnGothic",
    gap: "5px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 768px)": {
      fontSize: "15px",
      display: "flex",
      gap: "3px",
    },
    ".dept-name": {
      color: "var(--purple)",
      fontSize: "30px",
      fontWeight: 700,
      marginLeft: "7px",
      "@media (max-width: 768px)": {
        fontSize: "15px",
        marginLeft: "2px",
      },
    },
    ".cta": {
      color: "white",
      fontSize: "30px",
      fontWeight: 400,
      marginRignt: "7px",
      "@media (max-width: 768px)": {
        fontSize: "15px",
        marginRight: "2px",
      },
    },
  },
});
