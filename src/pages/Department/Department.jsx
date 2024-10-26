import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import departmentInfos from "./Department.json";
import {DepartmentTitle} from "./DepartmentStyle";

function Department() {
    // 현재 라우트에 해당하는 과
    const { department } = useParams();

    // 현재 라우트에 해당하는 과 관련 정보
    const [departmentInfo, setDepartmentInfo] = useState({});

    useEffect(() => {
        const curDepartment = departmentInfos.filter(
            (info) => info.Department === department
        );
        setDepartmentInfo(curDepartment[0]);
    }, [department]);

    return (
        <>
            <DepartmentTitle>{department}페이지</DepartmentTitle>
        </>
    )
}

export default Department;