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

const departments = [
  { title: "Ceramic", subtitle: "도예전공" },
  { title: "Metal", subtitle: "금속공예전공" },
];

const DeptSection = () => {
  const [selectedDepts, setSelectedDepts] = useState([]);

  const toggleDept = (deptTitle) => {
    setSelectedDepts((prev) =>
      prev.includes(deptTitle)
        ? prev.filter((title) => title !== deptTitle)
        : [...prev, deptTitle]
    );
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
              {[...Array(5)].map((_, i) => (
                <ProductCard key={i} />
              ))}
            </ProductListContainer>
          )}
        </div>
      ))}
    </DeptContainer>
  );
};

export default DeptSection;
