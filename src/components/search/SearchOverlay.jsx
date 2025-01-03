import React, { useState } from "react";
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
  Head,
  Logo,
  BackBtn,
  TextWrapper,
  Span,
  Circles,
  Ellipse,
  Ellipse3,
  SearchWrap,
} from "./SerachOverlayStyle";
import { Ellipse2 } from "../DepartmentHeader/DepartmentHeaderStyle";
import ItemSearch from "./ItemSearch";
import api from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";
import { useMediaQuery } from "react-responsive";

const SearchOverlay = ({ artworks, handleSearch }) => {
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isSearchAttempted, setIsSearchAttempted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleItemSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      setIsSearchAttempted(true);
      // 빈 검색어일 경우 작품 목록을 비웁니다.
      if (!query.trim()) {
        setFilteredArtworks([]);
        setLoading(false);
        return;
      }
      // 검색어가 있을 경우 검색 결과 불러오기
      const response = await api.get(
        `/items/search/?query=${encodeURIComponent(query)}`,
      );

      setFilteredArtworks(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "검색에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  // 두 개의 컬럼으로 작품을 나누기 위해 나머지 연산을 사용
  const leftColumn = filteredArtworks.filter((_, index) => index % 2 === 0);
  const rightColumn = filteredArtworks.filter((_, index) => index % 2 !== 0);

  return (
    <Container>
      <Head
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1001,
        }}
      >
        <Logo>
          <TextWrapper>graduart </TextWrapper>
          {window.innerWidth > 768 && (
            <Span>| 서울대학교 졸업전시 작품 전시 ・ 판매</Span>
          )}
        </Logo>
        <Circles>
          <ItemSearch onSearch={handleItemSearch} />
          <Ellipse2>
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 5.16667V5.66667H11.25H14.0625C14.1792 5.66667 14.2908 5.71286 14.3726 5.79437C14.4545 5.87581 14.5 5.98579 14.5 6.1V16.3667C14.5 16.9759 14.2569 17.5607 13.8235 17.9922C13.39 18.4238 12.8015 18.6667 12.1875 18.6667H2.8125C2.19847 18.6667 1.61004 18.4238 1.17653 17.9922C0.743094 17.5607 0.5 16.9759 0.5 16.3667V6.1C0.5 5.98579 0.54555 5.87581 0.627353 5.79437C0.70923 5.71286 0.820751 5.66667 0.9375 5.66667H3.75H4.25V5.16667V4.23333C4.25 3.37652 4.59187 2.55435 5.20111 1.94781C5.81044 1.34119 6.63733 1 7.5 1C8.36267 1 9.18956 1.34119 9.79889 1.94781C10.4081 2.55435 10.75 3.37652 10.75 4.23333V5.16667ZM9.375 5.66667H9.875V5.16667V4.23333C9.875 3.60493 9.62423 3.00272 9.17859 2.55906C8.73302 2.11547 8.12917 1.86667 7.5 1.86667C6.87083 1.86667 6.26698 2.11547 5.82141 2.55906C5.37577 3.00272 5.125 3.60493 5.125 4.23333V5.16667V5.66667H5.625H9.375ZM1.875 6.53333H1.375V7.03333V16.3667C1.375 16.7475 1.52699 17.1123 1.79682 17.381C2.06658 17.6495 2.43197 17.8 2.8125 17.8H12.1875C12.568 17.8 12.9334 17.6495 13.2032 17.381C13.473 17.1123 13.625 16.7475 13.625 16.3667V7.03333V6.53333H13.125H11.25H10.75V7.03333V7.96667C10.75 8.08087 10.7045 8.19085 10.6226 8.27229C10.5408 8.35381 10.4292 8.4 10.3125 8.4C10.1958 8.4 10.0842 8.35381 10.0024 8.27229C9.92055 8.19085 9.875 8.08087 9.875 7.96667V7.03333V6.53333H9.375H5.625H5.125V7.03333V7.96667C5.125 8.08087 5.07945 8.19085 4.99765 8.27229C4.91577 8.35381 4.80425 8.4 4.6875 8.4C4.57075 8.4 4.45923 8.35381 4.37735 8.27229C4.29555 8.19085 4.25 8.08087 4.25 7.96667V7.03333V6.53333H3.75H1.875Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </Ellipse2>
          <Ellipse3>
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 10.3889C9.74366 10.3889 11.5625 8.39904 11.5625 5.94444C11.5625 3.48985 9.74366 1.5 7.5 1.5C5.25634 1.5 3.4375 3.48985 3.4375 5.94444C3.4375 8.39904 5.25634 10.3889 7.5 10.3889Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 17.5017C14 15.6158 13.3152 13.807 12.0962 12.4734C10.8772 11.1398 9.22391 10.3906 7.5 10.3906C5.77609 10.3906 4.12279 11.1398 2.90381 12.4734C1.68482 13.807 1 15.6158 1 17.5017"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Ellipse3>
        </Circles>
      </Head>
      {/*{isMobile && (*/}
      {/*  <SearchWrap>*/}
      {/*    <ItemSearch onSearch={handleItemSearch} />*/}
      {/*  </SearchWrap>*/}
      {/*)}*/}
      <ArtworkListContainer>
        {isSearchAttempted && filteredArtworks.length === 0 ? (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "20px",
              color: "#8f8f8f",
              fontFamily: `"godo", "sans-serif"`,
              fontSize: "20px",
            }}
          >
            검색 결과가 없습니다.
          </div>
        ) : (
          <>
            <Column>
              {leftColumn.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  onClick={() => navigate(`/artwork/${artwork.item_id}`)}
                >
                  <ArtworkImage
                    style={{
                      backgroundImage: `url(${artwork.image_original})`,
                      backgroundSize: "cover",
                    }}
                  ></ArtworkImage>
                  <ArtworkInfo>
                    <ArtworkTitle>{artwork.title}</ArtworkTitle>
                    <ArtworkDetails>
                      {artwork.artist_name} | {artwork.material} |{" "}
                      {artwork.size}
                    </ArtworkDetails>
                  </ArtworkInfo>
                </ArtworkCard>
              ))}
            </Column>{" "}
            {filteredArtworks.length > 1 && <Line></Line>}
            <Column>
              {rightColumn.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  onClick={() => navigate(`/artwork/${artwork.item_id}`)}
                >
                  <ArtworkImage
                    style={{
                      backgroundImage: `url(${artwork.image_original})`,
                      backgroundSize: "cover",
                    }}
                  ></ArtworkImage>
                  <ArtworkInfo>
                    <ArtworkTitle>{artwork.title}</ArtworkTitle>
                    <ArtworkDetails>
                      {artwork.artist_name} | {artwork.material} |{" "}
                      {artwork.size}
                    </ArtworkDetails>
                  </ArtworkInfo>
                </ArtworkCard>
              ))}
            </Column>
          </>
        )}
      </ArtworkListContainer>
    </Container>
  );
};

export default SearchOverlay;
