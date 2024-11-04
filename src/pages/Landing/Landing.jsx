import React from "react";
import { DepartmentLink, LinkList, Title } from "./LandingStyle";

function Landing() {
  return (
    <>
      <Title>메인페이지</Title>
      <LinkList>

        <DepartmentLink
          to={"/dept_detail/Oriental Painting"}
          activeclassname={"active"}
        >
          동양화과
        </DepartmentLink>
        <DepartmentLink
          to={"/dept_detail/Western Painting"}
          activeclassname={"active"}
        >
          서양화과
        </DepartmentLink>
        <DepartmentLink
          to={"/dept_detail/Sculpture"}
          activeclassname={"active"}
        >
          조소과
        </DepartmentLink>
        <DepartmentLink to={"/dept_detail/Craft"} activeclassname={"active"}>
          공예과
        </DepartmentLink>
        <DepartmentLink to={"/dept_detail/Design"} activeclassname={"active"}>
          디자인과
        </DepartmentLink>
    </DepartmentLink>
        <DepartmentLink to="/refund" activeclassname="active">
          환불 페이지
        </DepartmentLink>
        <DepartmentLink to="/payment" activeclassname="active">
          결제 페이지
        </DepartmentLink>

      </LinkList>
    </>
  );
}

export default Landing;
