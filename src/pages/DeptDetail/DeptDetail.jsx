import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import dept_info from "../Department/Department.json";
import { Footer, Header, Main } from "./DeptDetailStyles";
import DeptDetailHeaderComponent from "./components/DeptDetailHeader";
import DeptDetailDeptInfoComponent from "./components/DeptDetailDeptInfoComponent";

// 현재 라우트에 해당하는 과 정보를 담는 context
export const curDepartmentObjContext = createContext({});

function DeptDetail() {
  // 현재 라우트에 해당하는 과
  const { dept_id } = useParams();

  // 현재 라우트에 해당하는 과 관련 정보
  const [curDepartmentObj, setCurDepartment] = useState({});

  // 현재 라우트에 해당하는 과 정보를 가져옴
  useEffect(() => {
    const curDepartment = dept_info.filter(
      (dept) => dept.Department === dept_id
    );
    setCurDepartment(curDepartment[0]);
  }, [dept_id]);

  return (
    <curDepartmentObjContext.Provider value={curDepartmentObj}>
      <Header>
        <DepartmentHeader />
      </Header>
      <Main>
        <DeptDetailHeaderComponent />
        <DeptDetailDeptInfoComponent />
        <section></section>
        <section></section>
        <section></section>
      </Main>
      <Footer></Footer>
    </curDepartmentObjContext.Provider>
  );
}

export default DeptDetail;
