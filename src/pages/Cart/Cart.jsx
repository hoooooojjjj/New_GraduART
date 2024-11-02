import React, { useState } from "react";
import {
  Wrap,
  Frame,
  MainFrame,
  PageText,
  RectangleImage,
  SubText,
  Line,
  Products,
  Product1,
  Left,
  ProductImage,
  ProductDescription,
  Title,
  DetailDescription,
  SmallLine,
  Right,
  ProductPrice,
  TotalProducts,
  WhiteText,
  PurpleText,
  TextLine,
  Buttons,
  SelectAllButton,
  SelectDeleteButton,
  RectangleTop,
  CheckBox,
  Total,
  Bar,
  TotalPrice,
  PurchaseButton,
  TotalTextFrame,
  RectangleFrame,
} from "./CartStyle";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";

function Cart() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [departmentChecked, setDepartmentChecked] = useState({
    동양화과: false,
    서양화과: false,
  });
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  // 전체 선택 기능
  const handleSelectAllClick = () => {
    const newIsAllChecked = !isAllChecked;
    setIsAllChecked(newIsAllChecked);
    setDepartmentChecked({
      동양화과: newIsAllChecked,
      서양화과: newIsAllChecked,
    });
    setCheckedItems({
      item1: newIsAllChecked,
      item2: newIsAllChecked,
      item3: newIsAllChecked,
      item4: newIsAllChecked,
    });
  };

  // 학과별 선택 기능
  const handleDepartmentCheckboxClick = (department) => {
    const newDepartmentChecked = !departmentChecked[department];
    setDepartmentChecked((prev) => ({
      ...prev,
      [department]: newDepartmentChecked,
    }));

    const departmentItems = department === "동양화과" ? ["item1", "item2"] : ["item3", "item4"];
    setCheckedItems((prev) => ({
      ...prev,
      ...departmentItems.reduce((acc, item) => ({ ...acc, [item]: newDepartmentChecked }), {}),
    }));

    // 모든 아이템이 선택되었는지 확인하여 전체 선택 상태 업데이트
    setIsAllChecked(
      Object.values({
        ...checkedItems,
        ...departmentItems.reduce((acc, item) => ({ ...acc, [item]: newDepartmentChecked }), {}),
      }).every((checked) => checked)
    );
  };

  // 개별 상품 선택 기능
  const handleCheckboxClick = (item) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [item]: !prev[item] };

      // 학과별 상태 업데이트
      const isDepartmentAllChecked =
        item === "item1" || item === "item2"
          ? newCheckedItems.item1 && newCheckedItems.item2
          : newCheckedItems.item3 && newCheckedItems.item4;
      const department = item === "item1" || item === "item2" ? "동양화과" : "서양화과";

      setDepartmentChecked((prev) => ({
        ...prev,
        [department]: isDepartmentAllChecked,
      }));

      // 전체 선택 상태 업데이트
      setIsAllChecked(Object.values(newCheckedItems).every((checked) => checked));

      return newCheckedItems;
    });
  };

  return (
    <Wrap>
      <DepartmentHeader />
      <Frame>
        <MainFrame>
          <PageText>장바구니</PageText>
          <TextLine />
          <Buttons>
            <SelectAllButton>
              <CheckBox isChecked={isAllChecked} onClick={handleSelectAllClick} />
              전체 선택
            </SelectAllButton>
            <SelectDeleteButton>선택 삭제</SelectDeleteButton>
          </Buttons>
          <RectangleFrame>
            <RectangleImage>
              <RectangleTop>
                <CheckBox isChecked={departmentChecked["동양화과"]} onClick={() => handleDepartmentCheckboxClick("동양화과")} />
                <SubText>동양화과</SubText>
              </RectangleTop>
              <Line />
              <Products>
                <Product1>
                  <Left>
                    <CheckBox isChecked={checkedItems.item1} onClick={() => handleCheckboxClick("item1")} />
                    <ProductImage></ProductImage>
                    <ProductDescription>
                      <Title>작품명 블라블라</Title>
                      <DetailDescription>
                        홍길동
                        <SmallLine></SmallLine>
                        200*200
                        <SmallLine></SmallLine>
                        종이, 작업복
                      </DetailDescription>
                    </ProductDescription>
                  </Left>
                  <Right>
                    <ProductPrice>360,000<WhiteText>원</WhiteText></ProductPrice>
                  </Right>
                </Product1>
              </Products>
            </RectangleImage>
            <RectangleImage>
              <RectangleTop>
                <CheckBox isChecked={departmentChecked["서양화과"]} onClick={() => handleDepartmentCheckboxClick("서양화과")} />
                <SubText>서양화과</SubText>
              </RectangleTop>
              <Line />
              <Products>
                <Product1>
                  <Left>
                    <CheckBox isChecked={checkedItems.item3} onClick={() => handleCheckboxClick("item3")} />
                    <ProductImage></ProductImage>
                    <ProductDescription>
                      <Title>작품명 블라블라</Title>
                      <DetailDescription>
                        홍길동
                        <SmallLine></SmallLine>
                        200*200
                        <SmallLine></SmallLine>
                        종이, 작업복
                      </DetailDescription>
                    </ProductDescription>
                  </Left>
                  <Right>
                    <ProductPrice>360,000<WhiteText>원</WhiteText></ProductPrice>
                  </Right>
                </Product1>
              </Products>
            </RectangleImage>
          </RectangleFrame>
        </MainFrame>
        <Bar>
          <TotalTextFrame>
            <TotalPrice>총 <PurpleText>2</PurpleText> 건 주문금액</TotalPrice>
            <TotalPrice><PurpleText>780,000</PurpleText> 원</TotalPrice>
          </TotalTextFrame>
          <PurchaseButton>구매하기</PurchaseButton>
        </Bar>
      </Frame>
    </Wrap>
  );
}

export default Cart;
