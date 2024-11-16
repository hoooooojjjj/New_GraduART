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
import { useNavigate } from "react-router-dom";

function Cart() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [departmentChecked, setDepartmentChecked] = useState({
    도예: false,
    금속공예: false,
  });
  const [checkedItems, setCheckedItems] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 장바구니 불러오기
  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await api.get("/cart/items/");
      setCartItems(response.data);
      console.log(response);
      // 초기 체크 상태 설정
      const initialCheckedItems = response.data.reduce((acc, item) => {
        acc[item.item_id] = false;
        return acc;
      }, {});
      setCheckedItems(initialCheckedItems);
    } catch (err) {
      setError(err.response?.data?.error || "장바구니 조회 실패");
    } finally {
      setLoading(false);
    }
  };

  // 장바구니 삭제
  const handleRemoveItem = async (itemId) => {
    try {
      await api.delete(`/cart/delete/${itemId}/`);
      setCartItems((items) => items.filter((item) => item.item_id !== itemId));
      setCheckedItems((prev) => {
        const newCheckedItems = { ...prev };
        delete newCheckedItems[itemId];
        return newCheckedItems;
      });
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
    const updatedCheckedItems = Object.keys(checkedItems).reduce(
      (acc, itemId) => {
        acc[itemId] = newIsAllChecked;
        return acc;
      },
      {},
    );
    setCheckedItems(updatedCheckedItems);
  };

  // 학과별 선택 기능
  const handleDepartmentCheckboxClick = (department) => {
    const newDepartmentChecked = !departmentChecked[department];
    setDepartmentChecked((prev) => ({
      ...prev,
      [department]: newDepartmentChecked,
    }));

    const departmentItems = cartItems.filter(
      (item) => item.department === department,
    );
    const updatedCheckedItems = { ...checkedItems };
    departmentItems.forEach((item) => {
      updatedCheckedItems[item.item_id] = newDepartmentChecked;
    });
    setCheckedItems(updatedCheckedItems);

    // 모든 아이템이 선택되었는지 확인하여 전체 선택 상태 업데이트
    setIsAllChecked(
      Object.values(updatedCheckedItems).every((checked) => checked),
    );
  };

  // 개별 상품 선택 기능
  const handleCheckboxClick = (itemId) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [itemId]: !prev[itemId] };

      // 학과별 상태 업데이트
      const department = cartItems.find(
        (item) => item.item_id === itemId,
      ).department;
      const departmentItems = cartItems.filter(
        (item) => item.department === department,
      );
      const isDepartmentAllChecked = departmentItems.every(
        (item) => newCheckedItems[item.item_id],
      );

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

  // 선택 삭제 기능
  const handleSelectDelete = () => {
    const itemsToDelete = Object.keys(checkedItems).filter(
      (itemId) => checkedItems[itemId],
    );
    itemsToDelete.forEach((itemId) => handleRemoveItem(itemId));
  };

  // 구매하기 버튼 클릭 핸들러
  const handlePurchaseClick = () => {
    const selectedItems = cartItems.filter(
      (item) => checkedItems[item.item_id],
    );
    if (selectedItems.length === 0) {
      alert("구매할 작품을 선택해주세요.");
    } else {
      navigate("/payment", { state: { selectedItems } });
    }
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
            <SelectAllButton onClick={handleSelectAllClick}>
              <CheckBox isChecked={isAllChecked} />
              전체 선택
            </SelectAllButton>
            <SelectDeleteButton onClick={handleSelectDelete}>
              선택 삭제
            </SelectDeleteButton>
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
              총
              <PurpleText>
                {
                  Object.keys(checkedItems).filter(
                    (itemId) => checkedItems[itemId],
                  ).length // 선택된 항목만 필터링
                }
              </PurpleText>{" "}
              건 주문금액
            </TotalPrice>
            <TotalPrice>
              <PurpleText>
                {Object.keys(checkedItems)
                  .filter((itemId) => checkedItems[itemId])
                  .reduce((total, itemId) => {
                    const item = cartItems.find(
                      (cartItem) => cartItem.item_id === itemId,
                    );
                    return total + (item ? item.price : 0);
                  }, 0)
                  .toLocaleString()}
              </PurpleText>{" "}
              원
            </TotalPrice>
          </TotalTextFrame>
          <PurchaseButton onClick={handlePurchaseClick}>
            구매하기
          </PurchaseButton>
        </Bar>
      </Frame>
    </Wrap>
  );
}

export default Cart;
