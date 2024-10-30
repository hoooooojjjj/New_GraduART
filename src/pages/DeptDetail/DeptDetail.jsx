import React from "react";
import { useParams } from "react-router-dom";

function DeptDetail() {
  const { dept_id } = useParams();
  console.log(dept_id);
  return <div>DeptDetail</div>;
}

export default DeptDetail;
