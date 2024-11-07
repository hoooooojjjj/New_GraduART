import React, { useState } from "react";
import {
  TitleContainer,
  TitleContent,
  Row,
  LetterBlock,
  HighlightBlock,
  HighlightBar,
  HoverContentLeft,
  HoverContentRight,
  PurpleCircleLeft,
  PurpleCircleRight,
  PaintingText,
  DesignText,
  SculptureText,
  CraftText,
  HoverButton,
} from "./TitleSectionStyle";

const TitleSection = () => {
  const [hoveredLetter, setHoveredLetter] = useState("");

  const handleHover = (letter) => {
    setHoveredLetter(letter);
  };

  const handleLeave = () => {
    setHoveredLetter("");
  };

  return (
    <TitleContainer>
      <TitleContent hovered={hoveredLetter}>
        <Row>
          <LetterBlock onMouseEnter={() => handleHover("g")}>g</LetterBlock>
          <LetterBlock>r</LetterBlock>
          <LetterBlock onMouseEnter={() => handleHover("a")}>a</LetterBlock>
        </Row>
        <Row>
          <LetterBlock onMouseEnter={() => handleHover("d")}>d</LetterBlock>
          <HighlightBlock>
            <HighlightBar />
          </HighlightBlock>
          <LetterBlock onMouseEnter={() => handleHover("u")}>u</LetterBlock>
        </Row>
        <Row>
          <LetterBlock>a</LetterBlock>
          <LetterBlock>r</LetterBlock>
          <LetterBlock>t</LetterBlock>
        </Row>
      </TitleContent>

      {hoveredLetter === "g" && (
        <HoverContentLeft onMouseLeave={handleLeave} rowPosition={1}>
          <PurpleCircleLeft />
          <PaintingText>painting</PaintingText>
          <HoverButton to={"/dept_detail/Western Painting"}>
            <div className="hover-bg" />
            <div className="hover-text">
              <span className="dept-name">서양화과</span>
              <span className="cta"> 작품 보러가기</span>
            </div>
          </HoverButton>
        </HoverContentLeft>
      )}

      {hoveredLetter === "d" && (
        <HoverContentLeft onMouseLeave={handleLeave} rowPosition={2}>
          <PurpleCircleLeft />
          <DesignText>design</DesignText>
          <HoverButton to={"/dept_detail/Design"}>
            <div className="hover-bg" />
            <div className="hover-text">
              <span className="dept-name">디자인과</span>
              <span className="cta"> 작품 보러가기</span>
            </div>
          </HoverButton>
        </HoverContentLeft>
      )}

      {hoveredLetter === "a" && (
        <HoverContentRight
          onMouseLeave={handleLeave}
          rowPosition={1}
          isCraft={false}
        >
          <PurpleCircleRight />
          <SculptureText>sculpture</SculptureText>
          <HoverButton to={"/dept_detail/Sculpture"}>
            <div className="hover-bg" />
            <div className="hover-text">
              <span className="dept-name">조소과</span>
              <span className="cta"> 작품 보러가기</span>
            </div>
          </HoverButton>
        </HoverContentRight>
      )}

      {hoveredLetter === "u" && (
        <HoverContentRight
          onMouseLeave={handleLeave}
          rowPosition={2}
          isCraft={true}
        >
          <PurpleCircleRight />
          <CraftText>craft</CraftText>
          <HoverButton to={"/dept_detail/Craft"}>
            <div className="hover-bg" />
            <div className="hover-text">
              <span className="dept-name">공예과</span>
              <span className="cta"> 작품 보러가기</span>
            </div>
          </HoverButton>
        </HoverContentRight>
      )}
    </TitleContainer>
  );
};

export default TitleSection;
