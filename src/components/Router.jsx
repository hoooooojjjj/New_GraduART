import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Department from "../pages/Department/Department";
import Landing from "../pages/Landing/Landing";
function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/:department" element={<Department />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router