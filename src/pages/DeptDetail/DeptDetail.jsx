import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import dept_info from "../Department/Department.json";
import {
  DeptDetailHeader,
  DeptDetailHeader_circle,
  DeptDetailHeader_left,
  DeptDetailHeader_nav_info,
  DeptDetailHeader_nav_info_text,
  DeptDetailHeader_nav_info_wrapper,
  DeptDetailHeader_nav_wrap,
  DeptDetailHeader_right,
  DeptDetailHeader_subTitle,
  DeptDetailHeader_title,
  Footer,
  Header,
  Main,
} from "./DeptDetailStyles";

function DeptDetail() {
  const { dept_id } = useParams();

  const [isNavHover, setIsNavHover] = useState(dept_info.map((dept) => false));
  return (
    <>
      <Header>
        <DepartmentHeader />
      </Header>
      <Main>
        <DeptDetailHeader>
          <DeptDetailHeader_left>
            <DeptDetailHeader_title>oriental painting</DeptDetailHeader_title>
            <DeptDetailHeader_subTitle>
              서울대학교 <strong>동양화과</strong>
            </DeptDetailHeader_subTitle>
          </DeptDetailHeader_left>
          <DeptDetailHeader_right>
            {dept_info.map((dept, i) => (
              <DeptDetailHeader_nav_wrap key={dept.Department}>
                <DeptDetailHeader_circle
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
                ></DeptDetailHeader_circle>
                <DeptDetailHeader_nav_info_wrapper isNavHover={isNavHover[i]}>
                  <DeptDetailHeader_nav_info isNavHover={isNavHover[i]} />
                  <DeptDetailHeader_nav_info_text isNavHover={isNavHover[i]}>
                    <strong style={{ color: "#A348F6" }}>
                      {dept.departmentName.slice(6)}{" "}
                    </strong>
                    작품 보러가기
                  </DeptDetailHeader_nav_info_text>
                </DeptDetailHeader_nav_info_wrapper>
              </DeptDetailHeader_nav_wrap>
            ))}
          </DeptDetailHeader_right>
        </DeptDetailHeader>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default DeptDetail;
