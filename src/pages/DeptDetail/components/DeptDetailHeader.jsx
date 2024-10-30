import React, { useState } from "react";
import {
  DeptDetailHeader,
  DeptDetailHeaderleft,
  DeptDetailHeadertitle,
  DeptDetailHeadersubTitle,
  DeptDetailHeaderright,
  DeptDetailHeadernavwrap,
  DeptDetailHeadercircle,
  DeptDetailHeadernavinfowrapper,
  DeptDetailHeadernavinfo,
  DeptDetailHeadernavinfotext,
} from "./DeptDetailHeaderStyles";
import dept_info from "../../Department/Department.json";

function DeptDetailHeaderComponent() {
  const [isNavHover, setIsNavHover] = useState(dept_info.map((dept) => false));
  return (
    <DeptDetailHeader>
      <DeptDetailHeaderleft>
        <DeptDetailHeadertitle>oriental painting</DeptDetailHeadertitle>
        <DeptDetailHeadersubTitle>
          서울대학교 <strong>동양화과</strong>
        </DeptDetailHeadersubTitle>
      </DeptDetailHeaderleft>
      <DeptDetailHeaderright>
        {dept_info.map((dept, i) => (
          <DeptDetailHeadernavwrap key={dept.Department}>
            <DeptDetailHeadercircle
              onMouseEnter={() => {
                const updatedIsNavHover = [...isNavHover];
                updatedIsNavHover[i] = true;
                setIsNavHover(updatedIsNavHover);
              }}
              onMouseLeave={() => {
                const updatedIsNavHover = [...isNavHover];
                updatedIsNavHover[i] = false;
                setIsNavHover(updatedIsNavHover);
              }}
            ></DeptDetailHeadercircle>
            <DeptDetailHeadernavinfowrapper isNavHover={isNavHover[i]}>
              <DeptDetailHeadernavinfo isNavHover={isNavHover[i]} />
              <DeptDetailHeadernavinfotext isNavHover={isNavHover[i]}>
                <strong style={{ color: "#A348F6" }}>
                  {dept.departmentName.slice(6)}{" "}
                </strong>
                작품 보러가기
              </DeptDetailHeadernavinfotext>
            </DeptDetailHeadernavinfowrapper>
          </DeptDetailHeadernavwrap>
        ))}
      </DeptDetailHeaderright>
    </DeptDetailHeader>
  );
}

export default DeptDetailHeaderComponent;
