import styled from "@emotion/styled";

export const Head = styled.header`
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 72px;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const Logo = styled.div`
  align-items: baseline;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-left: 30px;
  padding: 10px 10px 20px 0;
  @media (max-width: 768px) {
    align-items: center;
    margin-left: 10px;
  }
`;
export const TextWrapper = styled.span`
  color: var(--purple);
  font-family: "godorounded", sans-serif;
  font-size: 40px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const BackBtn = styled.div`
  padding: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 5px;
    margin-top: 5px;
  }
`;

export const Span = styled.span`
  color: #8f8f8f;
  font-family: "godo", sans-serif;
  font-size: 20px;
  line-height: 20px;
`;

export const Circles = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 72px;
  justify-content: center;
  margin-right: 30px;
`;

export const Ellipse = styled.div`
  background-color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: 25px;
  left: 0;
  top: 0;
  width: 25px;
  cursor: pointer;
`;

export const Ellipse2 = styled.div`
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: 25px;
  top: 0;
  width: 25px;
  cursor: pointer;
`;

export const Ellipse3 = styled.div`
  background-color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: 25px;
  top: 0;
  width: 25px;
  cursor: pointer;
`;
