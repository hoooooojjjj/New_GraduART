import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import dept_info from "../Department/Department.json";
import { Container, Main } from "./DeptDetailStyles";
import DeptDetailDeptInfoComponent from "./components/dept_info/DeptDetailDeptInfoComponent";
import DeptDetailExhibitionComponent from "./components/exhibition/DeptDetailExhibitionComponent";
import Footer from "../../components/footer/Footer";
import DeptDetailHeaderComponent from "./components/dept_header/DeptDetailHeader";

// 현재 라우트에 해당하는 과 정보를 담는 context
export const curDepartmentObjContext = createContext({});

function DeptDetail() {
  // 현재 라우트에 해당하는 과
  const { dept_id } = useParams();

  // 현재 라우트에 해당하는 과 관련 정보
  const [curDepartmentObj, setCurDepartment] = useState({});
  const [items, setItems] = useState([]);

  // 현재 라우트에 해당하는 과 정보를 가져옴
  useEffect(() => {
    const curDepartment = dept_info.filter(
      (dept) => dept.Department === dept_id,
    );

    setCurDepartment(curDepartment[0]);
  }, [dept_id]);

  return (
    <curDepartmentObjContext.Provider value={curDepartmentObj}>
      <Container>
        <header>
          <DepartmentHeader />
        </header>
        <Main>
          <DeptDetailHeaderComponent />
          <DeptDetailDeptInfoComponent />
          <DeptDetailExhibitionComponent items={items} setItems={setItems}/>
        </Main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </curDepartmentObjContext.Provider>
  );
}

export default DeptDetail;
