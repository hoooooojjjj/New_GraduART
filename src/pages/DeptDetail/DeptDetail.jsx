import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DepartmentHeader } from "../../components/DepartmentHeader/DepartmentHeader";
import dept_info from "../Department/Department.json";
import { Footer, Header, Main } from "./DeptDetailStyles";
import DeptDetailHeaderComponent from "./components/DeptDetailHeader";

function DeptDetail() {
  const { dept_id } = useParams();

  return (
    <>
      <Header>
        <DepartmentHeader />
      </Header>
      <Main>
        <DeptDetailHeaderComponent />
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
