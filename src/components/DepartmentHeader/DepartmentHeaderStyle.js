import styled from '@emotion/styled';

export const Head = styled.header`
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 72px;
  justify-content: space-between;
  position: relative;
  width: 100dvw;
`;

export const Logo = styled.div`
  align-items: baseline;
  display: flex;
  gap: 10px;
  justify-content: center;
    margin-left: 30px;
  padding: 10px 10px 20px 10px;
`;
export const TextWrapper = styled.span`
  color: var(--purple);
    font-family: 'godorounded',sans-serif;
    font-size: 40px;
    font-weight: 400;
`;

export const Span = styled.span`
  color: #8f8f8f;
  font-family: "godo", sans-serif;
  font-size: 20px;
  line-height: 20px;
`;

export const Circle = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 72px;
  justify-content: center;
  position: relative;
  width: 172px;
`;

export const Group = styled.div`
  height: 25px;
  position: relative;
  width: 97px;
`;

export const Ellipse = styled.div`
  background-color: var(--purple);
  border-radius: 12.5px;
  height: 25px;
  left: 0;
  position: absolute;
  top: 0;
  width: 25px;
`;

export const Ellipse2 = styled.div`
  background-color: #8f8f8f;
  border-radius: 13.5px / 12.5px;
  height: 25px;
  left: 35px;
  position: absolute;
  top: 0;
  width: 27px;
`;

export const Ellipse3 = styled.div`
  background-color: var(--purple);
  border-radius: 12.5px;
  height: 25px;
  left: 72px;
  position: absolute;
  top: 0;
  width: 25px;
`;