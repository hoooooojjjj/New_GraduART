import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Department from "../pages/Department/Department.jsx";
import Landing from "../pages/Landing/Landing.jsx";
import Refund from "../pages/Refund/Refund";
function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/:department" element={<Department />}></Route>
                <Route exact path="/*" element={<NotFound />}></Route>
                <Route path="/refund" element={<Refund />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router