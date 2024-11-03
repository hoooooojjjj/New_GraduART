import styled from "@emotion/styled";

export const Wrap = styled('div')`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 100dvh;
    margin: 0;
    padding: 0;
    background-color: var(--black);
    box-sizing: border-box;
    position: relative;
`

export const TextFrame = styled.div`
  width : 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

`;

export const PageText = styled.p`
  color: #a348f6;
  font-size: 50px;
  font-family: "KoddiUD OnGothic", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  margin: 0px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 25px;  
  }
`;

export const Line = styled.div`
  width: 750px;
  height: 0;
  border: 2px solid #A348F6;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  display : flex;
  flex-wrap: wrap;
`;

export const MainFrame = styled.div`
  width: 750px;
  height: 320px;
  padding : 0px 100px;
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  align-items: center;
  gap: 47px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin-left: 44px;
    margin-right: 44px;
    width: calc(100% - 76px);
    margin-top: 20px;
    padding: 25px 20px;
    flex-direction: column;
    gap: 13px;
  }
`;

export const ImageFrame = styled.img`
  width: 500px;
  height: 105.82px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin-top: 17px;
    width: 199px;
    height: 44px;
    z-index: 1;
  }
`;

export const BackgroundCircle = styled.div({
  "@media (max-width: 768px)": {
    width: "249px",
    height: "249px",
    top: "35%",
    left: "70%",
    position: "absolute",
    flexShrink: 0,
    borderRadius: "500px",
    background: "#A348F6",
  },
});