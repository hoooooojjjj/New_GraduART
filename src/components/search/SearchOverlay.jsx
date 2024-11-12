import React from "react";
import {
  ArtworkListContainer,
  Column,
  ArtworkCard,
  ArtworkInfo,
  ArtworkTitle,
  ArtworkDetails,
  Container,
  ArtworkImage,
  Line,
} from "./SerachOverlayStyle";

const SearchOverlay = ({ artworks }) => {
  // 두 개의 컬럼으로 작품을 나누기 위해 나머지 연산을 사용
  const leftColumn = artworks.filter((_, index) => index % 2 === 0);
  const rightColumn = artworks.filter((_, index) => index % 2 !== 0);

  return (
    <Container>
      <ArtworkListContainer>
        <Column>
          {leftColumn.map((artwork) => (
            <ArtworkCard key={artwork.id}>
              <ArtworkImage></ArtworkImage>
              <ArtworkInfo>
                <ArtworkTitle>{artwork.title}</ArtworkTitle>
                <ArtworkDetails>
                  {artwork.artist} | {artwork.material} | {artwork.size}
                </ArtworkDetails>
              </ArtworkInfo>
            </ArtworkCard>
          ))}
        </Column>
        <Line></Line>
        <Column>
          {rightColumn.map((artwork) => (
            <ArtworkCard key={artwork.id}>
              <ArtworkImage></ArtworkImage>
              <ArtworkInfo>
                <ArtworkTitle>{artwork.title}</ArtworkTitle>
                <ArtworkDetails>
                  {artwork.artist} | {artwork.material} | {artwork.size}
                </ArtworkDetails>
              </ArtworkInfo>
            </ArtworkCard>
          ))}
        </Column>
      </ArtworkListContainer>
    </Container>
  );
};

export default SearchOverlay;
