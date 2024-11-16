import React, { useState } from "react";
import {
  DeptContainer,
  DeptTitleContainer,
  DeptCircle,
  DeptTitle,
  DeptSubtitle,
  ProductListContainer,
  ProductCard,
} from "./DeptSectionStyle";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import api from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const departments = [
  { title: "Ceramic", subtitle: "도예전공" },
  { title: "Metal", subtitle: "금속공예전공" },
];

const DeptSection = () => {
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [selectedItems, setSelectedItems] = useState({}); // 학과별로 선택된 작품을 저장하는 상태
  const navigate = useNavigate();

  const toggleDept = (deptTitle) => {
    if (selectedDepts.includes(deptTitle)) {
      setSelectedDepts((prev) => prev.filter((title) => title !== deptTitle));
      setSelectedItems((prev) => {
        const newItems = { ...prev };
        delete newItems[deptTitle];
        return newItems;
      });
    } else {
      setSelectedDepts((prev) => [...prev, deptTitle]);
      fetchItems(deptTitle);
    }
  };

  const fetchItems = async (deptTitle) => {
    try {
      // 작품 불러오기
      const response = await api.get(`/items/?department=${deptTitle}`);
      const allItems = response.data;

      // 랜덤하게 5개의 아이템 선택하기
      const shuffledItems = allItems.sort(() => 0.6 - Math.random());
      const selectedItems = shuffledItems.slice(0, 6);

      setSelectedItems((prev) => ({ ...prev, [deptTitle]: selectedItems }));
    } catch (err) {
      console.error(
        err.response?.data?.error || "작품을 불러오는데 실패했습니다.",
      );
    }
  };

  return (
    <DeptContainer>
      {departments.map((dept) => (
        <div key={dept.title}>
          <DeptTitleContainer onClick={() => toggleDept(dept.title)}>
            <DeptCircle isSelected={selectedDepts.includes(dept.title)} />
            <div>
              <DeptTitle isSelected={selectedDepts.includes(dept.title)}>
                {dept.title}
              </DeptTitle>
              <DeptSubtitle>| {dept.subtitle}</DeptSubtitle>
            </div>
          </DeptTitleContainer>

          {selectedDepts.includes(dept.title) && (
            <ProductListContainer>
              {selectedItems[dept.title]?.map((item) => (
                <ProductCard
                  key={item.item_id}
                  onClick={() => navigate(`/artwork/${item.item_id}`)}
                >
                  <img src={item.image_original} alt={item.title} />
                </ProductCard>
              ))}
            </ProductListContainer>
          )}
        </div>
      ))}
    </DeptContainer>
  );
};

export default DeptSection;
