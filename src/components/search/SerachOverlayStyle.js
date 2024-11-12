import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  border-radius: 0px 0px 50px 50px;
  display: flex;
  justify-content: center;
  background-color: #d9d9d9;
`;

// 전체 작품 리스트 컨테이너
export const ArtworkListContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px; /* 적당한 최대 넓이 설정 */
  justify-content: space-between; /* 공간 분배 */
  gap: 40px; /* 각 컬럼 간격 설정 */
  margin-top: 80px;
  margin-bottom: 60px;
  max-height: 350px;
  overflow-y: scroll;
`;

// 각 컬럼을 나누는 컨테이너
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  flex: 1;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Line = styled.div`
  background: #a348f6;
  width: 2px;
  height: 105%;
  align-self: stretch;
  position: sticky;
  top: 0;
`;

// 개별 작품 카드
export const ArtworkCard = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 330px;
`;

export const ArtworkImage = styled.div`
  width: 70px;
  height: 70px;
  background-color: #8f8f8f;
  border-radius: 15px;
`;

// 작품 정보 (제목, 작가명, 등)
export const ArtworkInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ArtworkTitle = styled.div`
  color: #a348f6;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
`;

export const ArtworkDetails = styled.div`
  color: #686868;
  font-family: "KoddiUD OnGothic";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
