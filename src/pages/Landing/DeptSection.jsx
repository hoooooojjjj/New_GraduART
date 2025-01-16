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
import styled from "@emotion/styled";

const departments = [
  { title: "Ceramic", subtitle: "도자공예전공" },
  { title: "Metal", subtitle: "금속공예전공" },
];

const DeptSection = () => {
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [imageLoaded, setImageLoaded] = useState({}); // 이미지 로드 상태 추가
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
    try {
      const response = await api.get(`/items/?department=${deptTitle}`);
      const allItems = response.data;
      const shuffledItems = allItems.sort(() => 0.6 - Math.random());
      const selectedItems = shuffledItems.slice(0, 6);
      setSelectedItems((prev) => ({ ...prev, [deptTitle]: selectedItems }));
    } catch (err) {
      console.error(
        err.response?.data?.error || "작품을 불러오는데 실패했습니다."
      );
    }
  };

  const handleImageLoad = (itemId) => {
    setImageLoaded((prev) => ({ ...prev, [itemId]: true }));
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
                  <PendingArtWorkImg imageLoaded={imageLoaded[item.item_id]}>
                    <source
                      srcSet="/assets/placeholder-large.png"
                      media="(min-width: 1024px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/assets/placeholder-large.png"
                      media="(min-width: 768px)"
                      type="image/webp"
                    />
                    <img
                      src="/assets/placeholder-large.png"
                      alt="Placeholder"
                    />
                  </PendingArtWorkImg>
                  <ArtWorkImg imageLoaded={imageLoaded[item.item_id]}>
                    <source
                      srcSet={item.image_original}
                      media="(min-width: 1024px)"
                      type="image/webp"
                    />
                    <source
                      srcSet={item.image_original}
                      media="(min-width: 768px)"
                      type="image/webp"
                    />
                    <img
                      src={item.image_original}
                      onLoad={() => handleImageLoad(item.item_id)}
                      alt={item.title}
                    />
                  </ArtWorkImg>
                </ProductCard>
              ))}
            </ProductListContainer>
          )}
        </div>
      ))}
    </DeptContainer>
  );
};

// Add new styled components
const PendingArtWorkImg = styled.picture`
  opacity: ${(props) => (props.imageLoaded ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const ArtWorkImg = styled.picture`
  opacity: ${(props) => (props.imageLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export default DeptSection;
