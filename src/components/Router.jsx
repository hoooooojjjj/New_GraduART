import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Department from "../pages/Department/Department.jsx";
import Landing from "../pages/Landing/Landing.jsx";
import DeptDetail from "../pages/DeptDetail/DeptDetail.jsx";
import Artwork from "../pages/Artwork/Artwork";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/:department" element={<Department />}></Route>
        <Route path="/dept_detail/:dept_id" element={<DeptDetail />}></Route>
          <Route path="/dept_detail/:dept_id/:artwork_id" element={<Artwork />}></Route>
        <Route exact path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
