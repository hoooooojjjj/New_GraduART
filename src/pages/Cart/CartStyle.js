import styled from "@emotion/styled";

export const Wrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 100dvh;
    margin: 0;
    padding: 0;
    background-color: var(--black);
    box-sizing: border-box;
`

export const Frame = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 100px;
`
export const MainFrame = styled.div`
  margin: 75px 77px;
`

export const RectangleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const PageText = styled.div`
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  width: 100%;
`

export const TextLine = styled.div`
  width: 100%;
  height: 2px;
  background: #909090;
  margin: 25px 0px;
`

export const RectangleImage = styled.div`
  border-radius: 20px;
  background: rgba(215, 215, 215, 0.30);
  padding: 35px 52px;
`

export const SubText = styled.div`
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  padding-bottom: 31px;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #A348F6;

`

export const Products = styled.div`
  width: 100%;
`

export const Product1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid #A348F6
`

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`

export const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.30);
  backdrop-filter: blur(50px);
`


export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.div`
  color: #DDD;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`

export const DetailDescription = styled.div`
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const SmallLine = styled.div`
  border: 2px solid #FFF;
`

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 34px;
`

export const ProductPrice = styled.div`
  color: #A348F6;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  display: flex;

`

export const DeliveryTrackingButton = styled.div`
  display: flex;
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #A348F6;
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 15px */
`

export const RefundButton = styled.div`
  display: flex;
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #A348F6;
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 15px */
`

export const TotalProducts = styled.div`
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  gap: 5px;
`

export const WhiteText = styled.div`
  color: #FFF;
`
export const PurpleText = styled.div`
  color: #A348F6;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding-bottom: 25px;
`
export const SelectAllButton = styled.div`
  display: flex;
  padding: 17px 15px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(163, 72, 246, 0.50);
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  
`
export const SelectDeleteButton = styled.div`
  display: flex;
  padding: 17px 15px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid rgba(163, 72, 246, 0.70);
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
`
export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 1px solid ${(props) => (props.isChecked ? "#A348F6" : "#FFF")};
  background-color: ${(props) => (props.isChecked ? "#A348F6" : "transparent")};
  cursor: pointer;
  transition: background-color;
`

export const RectangleTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  justify-content: flex-end;
`

export const Bar = styled.div`
  background: rgba(215, 215, 215, 0.80);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px 76px;
  box-sizing: border-box;
`

export const TotalPrice = styled.div`
  color: #D7D7D7;
  font-family: "KoddiUD OnGothic";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PurchaseButton = styled.div`
  display: flex;
  padding: 17px 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #A348F6;
  color: #FFF;
  font-family: "KoddiUD OnGothic";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 25px */

  
`

export const TotalTextFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
`