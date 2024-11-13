import React, { useContext, useState } from "react";
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
import dept_info from "../../../Department/Department.json";
import { curDepartmentObjContext } from "../../DeptDetail";
import { useNavigate } from "react-router-dom"; 

function DeptDetailHeaderComponent() {
  // 현재 라우트에 해당하는 과 정보를 담는 context
  const curDepartmentObj = useContext(curDepartmentObjContext);

  // 동그라미 hover 상태를 저장하는 state
  const [isNavHover, setIsNavHover] = useState(dept_info.map(() => false));
  const navigate = useNavigate();
  return (
    <DeptDetailHeader>
      <DeptDetailHeaderleft>
        <DeptDetailHeadertitle>
          {curDepartmentObj.Department}
        </DeptDetailHeadertitle>
        <DeptDetailHeadersubTitle>
          서울대학교{" "}
          <strong>
            {curDepartmentObj && curDepartmentObj.departmentName?.slice(6)}
          </strong>
        </DeptDetailHeadersubTitle>
      </DeptDetailHeaderleft>
      <DeptDetailHeaderright>
        {dept_info.map((dept, i) => (
          <DeptDetailHeadernavwrap key={dept.Department}>
            <DeptDetailHeadercircle
              // 동그라미 hover 시, 우측에 안내 문구를 보여줌
              onMouseEnter={() => {
                const updatedIsNavHover = [...isNavHover];
                updatedIsNavHover[i] = true;
                setIsNavHover(updatedIsNavHover);
              }}
              // 동그라미 hover 떠나면, 우측에 안내 문구를 가림
              onMouseLeave={() => {
                const updatedIsNavHover = [...isNavHover];
                updatedIsNavHover[i] = false;
                setIsNavHover(updatedIsNavHover);
              }}
              //동그라미 click 시, 해당 과 페이지로 이동
              onClick={() => {
                navigate(`/dept_detail/${dept.Department}`);
                
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
