import React, { useEffect, useState } from "react";
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
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import api from "../../utils/axios";

function Cart() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [departmentChecked, setDepartmentChecked] = useState({
    도예: false,
    금속공예: false,
  });
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //장바구니 추가
  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await api.get("/cart/items/");
      console.log(response);
      setCartItems(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "장바구니 조회 실패");
    } finally {
      setLoading(false);
    }
  };

  //장바구니 삭제
  const handleRemoveItem = async (itemId) => {
    try {
      await api.delete(`/cart/delete/${itemId}/`);
      setCartItems((items) => items.filter((item) => item.item_id !== itemId));
    } catch (err) {
      alert(err.response?.data?.error || "삭제 실패");
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // 전체 선택 기능
  const handleSelectAllClick = () => {
    const newIsAllChecked = !isAllChecked;
    setIsAllChecked(newIsAllChecked);
    setDepartmentChecked({
      도예: newIsAllChecked,
      금속공예: newIsAllChecked,
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

    const departmentItems =
      department === "도예" ? ["item1", "item2"] : ["item3", "item4"];
    setCheckedItems((prev) => ({
      ...prev,
      ...departmentItems.reduce(
        (acc, item) => ({ ...acc, [item]: newDepartmentChecked }),
        {},
      ),
    }));

    // 모든 아이템이 선택되었는지 확인하여 전체 선택 상태 업데이트
    setIsAllChecked(
      Object.values({
        ...checkedItems,
        ...departmentItems.reduce(
          (acc, item) => ({ ...acc, [item]: newDepartmentChecked }),
          {},
        ),
      }).every((checked) => checked),
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
      const department =
        item === "item1" || item === "item2" ? "도예" : "금속공예";

      setDepartmentChecked((prev) => ({
        ...prev,
        [department]: isDepartmentAllChecked,
      }));

      // 전체 선택 상태 업데이트
      setIsAllChecked(
        Object.values(newCheckedItems).every((checked) => checked),
      );

      return newCheckedItems;
    });
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Wrap>
      <DepartmentHeader />
      <Frame>
        <MainFrame>
          <PageText>장바구니</PageText>
          <TextLine />
          <Buttons>
            <SelectAllButton>
              <CheckBox
                isChecked={isAllChecked}
                onClick={handleSelectAllClick}
              />
              전체 선택
            </SelectAllButton>
            <SelectDeleteButton>선택 삭제</SelectDeleteButton>
          </Buttons>
          <RectangleFrame>
            {cartItems.map((item) => (
              <RectangleImage key={item.item_id}>
                <RectangleTop>
                  <CheckBox
                    isChecked={checkedItems[item.item_id]}
                    onClick={() => handleCheckboxClick(item.item_id)}
                  />
                  <SubText>{item.department}</SubText>
                </RectangleTop>
                <Line />
                <Products>
                  <Product1>
                    <Left>
                      <CheckBox
                        isChecked={checkedItems[item.item_id]}
                        onClick={() => handleCheckboxClick(item.item_id)}
                      />
                      <ProductImage
                        src={item.image_original}
                        alt={item.title}
                      />
                      <ProductDescription>
                        <Title>{item.title}</Title>
                        <DetailDescription>
                          {item.name}
                          <SmallLine></SmallLine>
                          {item.size}
                          <SmallLine></SmallLine>
                          {item.material}
                        </DetailDescription>
                      </ProductDescription>
                    </Left>
                    <Right>
                      <ProductPrice>
                        {item.price.toLocaleString()}
                        <WhiteText>원</WhiteText>
                      </ProductPrice>
                      <button
                        onClick={() => handleRemoveItem(item.item_id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        삭제
                      </button>
                    </Right>
                  </Product1>
                </Products>
              </RectangleImage>
            ))}
          </RectangleFrame>
        </MainFrame>
        <Bar>
          <TotalTextFrame>
            <TotalPrice>
              총<PurpleText>{cartItems.length}</PurpleText> 건 주문금액
            </TotalPrice>
            <TotalPrice>
              <PurpleText>
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toLocaleString()}
              </PurpleText>{" "}
              원
            </TotalPrice>
          </TotalTextFrame>
          <PurchaseButton>구매하기</PurchaseButton>
        </Bar>
      </Frame>
    </Wrap>
  );
}

export default Cart;
