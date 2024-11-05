import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Department from "../pages/Department/Department.jsx";
import Landing from "../pages/Landing/Landing.jsx";

import Refund from "../pages/Refund/Refund";
import Payment from "../pages/Payment/Payment.jsx";

import DeptDetail from "../pages/DeptDetail/DeptDetail.jsx";
import Artwork from "../pages/Artwork/Artwork.jsx";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess.jsx";
import SignIn from '../pages/SignIn/SignIn.jsx';
import My from "../pages/My/My.jsx";
import Cart from "../pages/Cart/Cart.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
          <Route path="/artwork/:artwork_id" element={<Artwork />}></Route>
        <Route path="/:department" element={<Department />}></Route>
        <Route exact path="/*" element={<NotFound />}></Route>
        <Route path="/refund" element={<Refund />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dept_detail/:dept_id" element={<DeptDetail />}></Route>
        <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        <Route exact path="/*" element={<NotFound />}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/my" element={<My />} />
        <Route exact path="/cart" element={<Cart />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
