import React from "react";
import {
  TitleContainer,
  Row,
  LetterBlock,
  HighlightBlock,
  HighlightBar,
} from "./TitleSectionStyle";

const TitleSection = () => {
  return (
    <TitleContainer>
      <Row>
        <LetterBlock>g</LetterBlock>
        <LetterBlock>r</LetterBlock>
        <LetterBlock>a</LetterBlock>
      </Row>
      <Row>
        <LetterBlock>d</LetterBlock>
        <HighlightBlock>
          <HighlightBar />
        </HighlightBlock>
        <LetterBlock>u</LetterBlock>
      </Row>
      <Row>
        <LetterBlock>a</LetterBlock>
        <LetterBlock>r</LetterBlock>
        <LetterBlock>t</LetterBlock>
      </Row>
    </TitleContainer>
  );
};

export default TitleSection;
