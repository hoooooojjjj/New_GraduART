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
          <LetterBlock
            onMouseEnter={() => handleHover("g")}
            onTouchEnd={() => handleHover("g")}
          >
            g
          </LetterBlock>
          <LetterBlock>r</LetterBlock>
          <LetterBlock
            onMouseEnter={() => handleHover("a")}
            onTouchEnd={() => handleHover("a")}
          >
            a
          </LetterBlock>
        </Row>
        <Row>
          <LetterBlock
            onMouseEnter={() => handleHover("d")}
            onTouchEnd={() => handleHover("d")}
          >
            d
          </LetterBlock>
          <HighlightBlock>
            <HighlightBar />
          </HighlightBlock>
          <LetterBlock
            onMouseEnter={() => handleHover("u")}
            onTouchEnd={() => handleHover("u")}
          >
            u
          </LetterBlock>
        </Row>
        <Row>
          <LetterBlock>a</LetterBlock>
          <LetterBlock>r</LetterBlock>
          <LetterBlock>t</LetterBlock>
        </Row>
      </TitleContent>

      {hoveredLetter === "g" && (
        <HoverContentLeft
          onMouseLeave={handleLeave}
          onTouchEnd={handleLeave}
          rowPosition={1}
        >
          <PurpleCircleLeft />
          <PaintingText>painting</PaintingText>
          <HoverButton to={"/dept_detail/Western Painting"}>
            <div className="hover-bg" />
            <div className="hover-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={window.innerWidth > 768 ? 38 : 18}
                height="26"
                viewBox="0 0 38 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                  fill="#A348F6"
                />
              </svg>
              <span className="dept-name">서양화과</span>
              <span className="cta"> 작품 보러가기</span>
            </div>
          </HoverButton>
        </HoverContentLeft>
      )}

      {hoveredLetter === "d" && (
        <HoverContentLeft
          onMouseLeave={handleLeave}
          onTouchEnd={handleLeave}
          rowPosition={2}
        >
          <PurpleCircleLeft />
          <DesignText>design</DesignText>
          <HoverButton to={"/dept_detail/Design"}>
            <div className="hover-bg" />

            <div className="hover-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={window.innerWidth > 768 ? 38 : 16}
                height="24"
                viewBox="0 0 38 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                  fill="#A348F6"
                />
              </svg>
              <span className="dept-name">디자인과</span>
              <span className="cta"> 작품 보러가기</span>
            </div>
          </HoverButton>
        </HoverContentLeft>
      )}

      {hoveredLetter === "a" && (
        <HoverContentRight
          onMouseLeave={handleLeave}
          onTouchEnd={handleLeave}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={window.innerWidth > 768 ? 38 : 18}
                height="26"
                viewBox="0 0 38 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </HoverButton>
        </HoverContentRight>
      )}

      {hoveredLetter === "u" && (
        <HoverContentRight
          onMouseLeave={handleLeave}
          onTouchEnd={handleLeave}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={window.innerWidth > 768 ? 38 : 18}
                height="26"
                viewBox="0 0 38 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7989 0.512563C23.4556 -0.170854 24.5205 -0.170854 25.1773 0.512563L36.95 12.7626C37.6068 13.446 37.6068 14.554 36.95 15.2374L25.1773 27.4874C24.5205 28.1709 23.4556 28.1709 22.7989 27.4874C22.1421 26.804 22.1421 25.696 22.7989 25.0126L31.7005 15.75H2.12445C1.1956 15.75 0.442627 14.9665 0.442627 14C0.442627 13.0335 1.1956 12.25 2.12445 12.25H31.7005L22.7989 2.98744C22.1421 2.30402 22.1421 1.19598 22.7989 0.512563Z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </HoverButton>
        </HoverContentRight>
      )}
    </TitleContainer>
  );
};

export default TitleSection;
