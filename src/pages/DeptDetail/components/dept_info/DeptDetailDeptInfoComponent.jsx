import React, { useContext, useState, useEffect } from "react";
import {
  DeptDetailDeptInfo,
  DeptInfoImgActive,
  DeptInfoImgPassive,
  DeptInfoLeft,
  DeptInfoRight,
} from "./DeptDetailDeptInfoComponentStyles";
import { curDepartmentObjContext } from "../../DeptDetail";

// DeptInfoComponentImgs: 과 정보 컴포넌트에 들어갈 이미지들
const CeramicDeptInfoComponentImgs = [
  {
    id: 0,
    departmentName: "ceramic",
    src: "/assets/CeramicDeptInfoImgs0.jpg",
    alt: "painting",
  },
  {
    id: 1,
    departmentName: "ceramic",
    src: "/assets/CeramicDeptInfoImgs1.jpg",
    alt: "painting",
  },
  {
    id: 2,
    departmentName: "ceramic",
    src: "/assets/CeramicDeptInfoImgs2.jpg",
    alt: "painting",
  },
  {
    id: 3,
    departmentName: "ceramic",
    src: "/assets/CeramicDeptInfoImgs3.jpg",
    alt: "painting",
  },
  {
    id: 4,
    departmentName: "ceramic",
    src: "/assets/CeramicDeptInfoImgs4.jpg",
    alt: "painting",
  },
];

const MetalDeptInfoComponentImgs = [
  {
    id: 0,
    departmentName: "metal",
    src: "/assets/MetalDeptInfoImgs0.jpg",
    alt: "painting",
  },
];

function DeptDetailDeptInfoComponent() {
  // 현재 라우트에 해당하는 과 정보를 담는 context
  const curDepartmentObj = useContext(curDepartmentObjContext);

  // 현재 departmentName에 따른 이미지 배열 선택
  const DeptInfoComponentImgs =
    curDepartmentObj?.Department === "Ceramic"
      ? CeramicDeptInfoComponentImgs
      : curDepartmentObj?.Department === "Metal"
      ? MetalDeptInfoComponentImgs
      : [];

  // 과 이미지 클릭 상태를 저장하는 state
  const [isClickedImg, setIsClickedImg] = useState(
    Array(DeptInfoComponentImgs.length).fill(false)
  );

  // 페이지 로드 시 첫 번째 이미지를 기본 활성화 상태로 설정
  useEffect(() => {
    if (DeptInfoComponentImgs.length > 0) {
      const updatedIsClickedImg = Array(DeptInfoComponentImgs.length).fill(false);
      updatedIsClickedImg[0] = true;
      setIsClickedImg(updatedIsClickedImg);
    }
  }, [DeptInfoComponentImgs]);

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
      {window.innerWidth > 768 ? (
        <DeptInfoRight>{curDepartmentObj?.departmentDescription}</DeptInfoRight>
      ) : (
        <DeptInfoRight>
          {curDepartmentObj?.departmentDescription?.slice(
            0,
            curDepartmentObj?.departmentDescription?.length / 2
          )}
        </DeptInfoRight>
      )}
    </DeptDetailDeptInfo>
  );
}

export default DeptDetailDeptInfoComponent;
