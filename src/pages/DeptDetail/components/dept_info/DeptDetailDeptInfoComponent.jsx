import React, { useContext, useState } from "react";
import {
  DeptDetailDeptInfo,
  DeptInfoImgActive,
  DeptInfoImgPassive,
  DeptInfoLeft,
  DeptInfoRight,
} from "./DeptDetailDeptInfoComponentStyles";
import { curDepartmentObjContext } from "../../DeptDetail";

// DeptInfoComponentImgs: 과 정보 컴포넌트에 들어갈 이미지들
const DeptInfoComponentImgs = [
  {
    id: 0,
    departmentName: "oriental_painting",
    src: "/assets/DeptInfoComponentImgs0.jpg",
    alt: "painting",
  },
  {
    id: 1,
    departmentName: "oriental_painting",
    src: "/assets/DeptInfoComponentImgs1.jpg",
    alt: "painting",
  },
  {
    id: 2,
    departmentName: "oriental_painting",
    src: "/assets/DeptInfoComponentImgs2.jpg",
    alt: "painting",
  },
  {
    id: 3,
    departmentName: "oriental_painting",
    src: "/assets/DeptInfoComponentImgs3.jpg",
    alt: "painting",
  },
  {
    id: 4,
    departmentName: "oriental_painting",
    src: "/assets/DeptInfoComponentImgs3.jpg",
    alt: "painting",
  },
];

function DeptDetailDeptInfoComponent() {
  // 현재 라우트에 해당하는 과 정보를 담는 context
  const curDepartmentObj = useContext(curDepartmentObjContext);

  // 과 이미지 클릭 상태를 저장하는 state
  const [isClickedImg, setIsClickedImg] = useState(
    DeptInfoComponentImgs.map((e, i) => {
      if (i === 0) return true;
      return false;
    })
  );
  return (
    <DeptDetailDeptInfo>
      <DeptInfoLeft>
        {DeptInfoComponentImgs.map((img, i) =>
          isClickedImg[i] ? (
            <DeptInfoImgActive
              key={img.id}
              src={DeptInfoComponentImgs[i].src}
            ></DeptInfoImgActive>
          ) : (
            <DeptInfoImgPassive
              key={img.id}
              // 이미지 클릭 시, 해당 이미지 활성화 / 이외 이미지 비활성화
              onClick={() => {
                const updatedIsClickedImg = [...isClickedImg];
                updatedIsClickedImg.fill(false);
                updatedIsClickedImg[i] = true;
                setIsClickedImg(updatedIsClickedImg);
              }}
            ></DeptInfoImgPassive>
          )
        )}
      </DeptInfoLeft>
      <DeptInfoRight>{curDepartmentObj.departmentDescription}</DeptInfoRight>
    </DeptDetailDeptInfo>
  );
}

export default DeptDetailDeptInfoComponent;
