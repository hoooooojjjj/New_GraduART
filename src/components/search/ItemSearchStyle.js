import styled from "@emotion/styled";

export const SearchInput = styled.input`
  display: flex;
  width: 300px;
  border: none;
  padding: 10px 10px 10px 15px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(144, 144, 144, 0.4);
  backdrop-filter: blur(50px);
  color: #a348f6;
  text-align: center;
  font-family: "KoddiUD OnGothic";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  outline: none;

  @media (max-width: 768px) {
    width: 200px;
    font-size: 12px;
    padding: 8px 0px;
  }

  &::placeholder {
    color: #909090; /* placeholder의 색상 */
  }
`;
