import React, { useEffect, useState } from "react";
import {
  DeptContainer,
  DeptTitleContainer,
  DeptCircle,
  DeptTitle,
  DeptSubtitle,
  ProductListContainer,
  ProductCard,
} from "./DeptSectionStyle";

import api from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/LoadingMainpage";

const departments = [
  { title: "Ceramic", subtitle: "도자공예전공" },
  { title: "Metal", subtitle: "금속공예전공" },
];

const DeptSection = () => {
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedItemsLoading, setSelectedItemsLoading] = useState({}); // 작품별 로딩 상태
  const [loadingDepts, setLoadingDepts] = useState([]);
  const navigate = useNavigate();

  // 초기 렌더링 시 작품 데이터 로드
  useEffect(() => {
    fetchItems("Ceramic");
    fetchItems("Metal");
  }, []);

  // 학과 선택 토글 -> 그냥 클릭하면 작품 보였다 안보였다 하도록 수정
  const toggleDept = (deptTitle) => {
    if (selectedDepts.includes(deptTitle)) {
      setSelectedDepts((prev) => prev.filter((title) => title !== deptTitle));
    } else {
      setSelectedDepts((prev) => [...prev, deptTitle]);
    }
  };

  const fetchItems = async (deptTitle) => {
    setLoadingDepts((prev) => [...prev, deptTitle]); // 학과 로딩 시작
    try {
      const response = await api.get(`/items/?department=${deptTitle}`);
      const allItems = response.data;

      const shuffledItems = allItems.sort(() => 0.6 - Math.random());
      const selectedItems = shuffledItems.slice(0, 6);

      // 초기 로딩 상태 설정
      const loadingState = selectedItems.reduce((acc, item) => {
        acc[item.item_id] = true;
        return acc;
      }, {});

      setSelectedItemsLoading((prev) => ({ ...prev, ...loadingState }));

      setSelectedItems((prev) => ({ ...prev, [deptTitle]: selectedItems }));

      // 작품별 로딩 상태 false로 설정 (데이터 로드 완료 후)
      selectedItems.forEach((item) => {
        setTimeout(() => {
          setSelectedItemsLoading((prev) => ({
            ...prev,
            [item.item_id]: false,
          }));
        }, 100); // 시뮬레이션용 딜레이
      });
    } catch (err) {
      console.error(
        err.response?.data?.error || "작품을 불러오는데 실패했습니다."
      );
    } finally {
      setLoadingDepts((prev) => prev.filter((title) => title !== deptTitle)); // 학과 로딩 종료
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
                  {selectedItemsLoading[item.item_id] ? (
                    <Loading />
                  ) : (
                    <img src={item.image_original} alt={item.title} />
                  )}
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
