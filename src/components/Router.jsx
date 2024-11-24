import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Department from "../pages/Department/Department.jsx";
import Landing from "../pages/Landing/Landing.jsx";

import Refund from "../pages/Refund/Refund";
import Payment from "../pages/Payment/Payment.jsx";
import PaymentApproval from "../pages/PaymentApproval/PaymentApproval.jsx";
import { PaymentInfo } from "../pages/PaymentInfo/PaymentInfo.jsx";

import DeptDetail from "../pages/DeptDetail/DeptDetail.jsx";
import Artwork from "../pages/Artwork/Artwork.jsx";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import My from "../pages/My/My.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import SearchPage from "../pages/Serach";

import GoogleCallback from "../pages/SignIn/ GoogleCallback.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/search" element={<SearchPage />}></Route>*/}
        <Route path="/" element={<Landing />}></Route>
        <Route path="/artwork/:artwork_id" element={<Artwork />}></Route>
        <Route path="/:department" element={<Department />}></Route>
        <Route exact path="/*" element={<NotFound />}></Route>
        <Route path="/refund/:itemId" element={<Refund />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dept_detail/:dept_id" element={<DeptDetail />}></Route>
        <Route path="/purchaseApprove" element={<PaymentApproval />}></Route>
        <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        <Route exact path="/*" element={<NotFound />}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/my" element={<My />} />
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route path="/payment-info/:itemId" element={<PaymentInfo />} />
        <Route path="/auth/callback" element={<GoogleCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
