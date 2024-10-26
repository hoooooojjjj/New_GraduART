import React from "react";
import {DepartmentLink, LinkList, Title} from "./NotFoundStyle";

function NotFound() {
    return (
        <>
            <Title>메인페이지</Title>
            <LinkList>
                <DepartmentLink to={"/Oriental Painting"} activeclassname={"active"}>
                    동양화과
                </DepartmentLink>
                <DepartmentLink to={"/Western Painting"} activeclassname={"active"}>
                    서양화과
                </DepartmentLink>
                <DepartmentLink to={"/Sculpture"} activeclassname={"active"}>
                    조소과
                </DepartmentLink>
                <DepartmentLink to={"/Craft"} activeclassname={"active"}>
                    공예과
                </DepartmentLink>
                <DepartmentLink to={"/Design"} activeclassname={"active"}>
                    디자인과
                </DepartmentLink>
            </LinkList>
        </>
    )
}

export default NotFound