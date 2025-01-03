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
  DesignText,
  CraftText,
  HoverButton,
} from "./TitleSectionStyle";

const TitleSection = () => {
  const [hoveredLetter, setHoveredLetter] = useState("");

  const handleMouseEnter = (letter) => {
    setHoveredLetter(letter);
  };

  const handleMouseLeave = () => {
    setHoveredLetter("");
  };

  return (
    <TitleContainer>
      <TitleContent hovered={hoveredLetter}>
        <Row>
          <LetterBlock>g</LetterBlock>
          <LetterBlock>r</LetterBlock>
          <LetterBlock>a</LetterBlock>
        </Row>
        <Row>
          <LetterBlock
            onMouseEnter={() => handleMouseEnter("d")}
            onMouseLeave={handleMouseLeave}
          >
            d
          </LetterBlock>
          <HighlightBlock>
            <HighlightBar />
          </HighlightBlock>
          <LetterBlock
            onMouseEnter={() => handleMouseEnter("u")}
            onMouseLeave={handleMouseLeave}
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

      {hoveredLetter === "d" && (
        <HoverContentLeft
          onMouseEnter={() => handleMouseEnter("d")}
          onMouseLeave={handleMouseLeave}
          rowPosition={2}
        >
          <PurpleCircleLeft />
          <DesignText>Metal</DesignText>
          <HoverButton
            to={"/dept_detail/Metal"}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hover-bg" />
            <div className="hover-text">
              <span className="dept-name">금속공예전공</span>
              <span className="cta"> 작품 보러가기</span>
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
                  fill="#ffffff"
                />
              </svg>
            </div>
          </HoverButton>
        </HoverContentLeft>
      )}

      {hoveredLetter === "u" && (
        <HoverContentRight
          onMouseEnter={() => handleMouseEnter("u")}
          onMouseLeave={handleMouseLeave}
          rowPosition={2}
          isCraft={true}
        >
          <PurpleCircleRight />
          <CraftText>Ceramic</CraftText>
          <HoverButton
            to={"/dept_detail/Ceramic"}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hover-bg" />
            <div className="hover-text">
              <span className="dept-name">도예전공</span>
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
