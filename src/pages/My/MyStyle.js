import styled from "@emotion/styled";

export const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  margin: 0;
  padding: 0;
  background-color: #afb7b9;
  box-sizing: border-box;
`;

export const Frame = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainFrame = styled.div`
  margin: 75px 77px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 76px);
    margin-top: 20px;
    padding: 25px 20px;
    flex-direction: column;
  }
`;

export const PageText = styled.div`
  color: #4e5a5b;
  font-family: "KoddiUD OnGothic";
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  padding-bottom: 50px;
  width: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 25px;
    padding-bottom: 40px;
    color: #fff;
    text-align: center;
  }
`;

export const RectangleImage = styled.div`
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.3);
  padding: 35px 52px;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 19px 16px;
  }
`;

export const SubText = styled.div`
  color: #fff;
  font-family: "KoddiUD OnGothic";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  padding-bottom: 31px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
    padding-bottom: 13px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #4e5a5b;
`;

export const Products = styled.div`
  width: 100%;
`;

export const Product1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid #4e5a5b;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 10px 0px;
    border-bottom: 0px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 5px;
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.3);
  object-fit: cover;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  color: #4e5a5b;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;

export const DetailDescription = styled.div`
  color: #fff;
  font-family: "KoddiUD OnGothic";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 8px;
    gap: 5px;
  }
`;

export const SmallLine = styled.div`
  border: 2px solid #fff;

  @media (max-width: 768px) and (min-width: 320px) {
    border: 0.5px solid #fff;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const ProductPrice = styled.div`
  color: #4e5a5b;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  display: flex;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 1px solid #4e5a5b;
  gap: 5px;
`;
export const DeliveryTrackingButton = styled.div`
  display: flex;
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #4e5a5b;
  color: #fff;
  font-family: "KoddiUD OnGothic", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 15px */
  cursor: pointer;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 10px 23px;
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const RefundButton = styled.div`
  display: flex;
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #4e5a5b;
  color: #fff;
  font-family: "KoddiUD OnGothic";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 15px */
  cursor: pointer;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 8px 13px;
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const TotalProducts = styled.div`
  color: #fff;
  font-family: "KoddiUD OnGothic";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  gap: 5px;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const WhiteText = styled.div`
  color: #fff;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 10px;
  }
`;
export const PurpleText = styled.div`
  color: #4e5a5b;

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 15px;
  }
`;
export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignOutButton = styled.div`
  display: flex;
  width: 205px;
  height: 56px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #4e5a5b;
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  cursor: pointer;

  position: absolute;
  bottom: 20px; /* 화면 하단에서 20px 위로 띄우기 */
  left: 50%;
  transform: translateX(-50%); /* 버튼을 수평 중앙에 배치 */
`;
