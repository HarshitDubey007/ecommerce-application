import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar/Nevbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserAccount from "./pages/Auth/UserAccount";
import Cart from "./pages/Cart";

const Router = () => {
  return (
    <>
      {/* {needHeaderFooter?.[pathName] && !pathName.startsWith("/dashboard") && (
      )} */}
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/userAccount" element={<UserAccount />}>
          <Route path=":page" element={<UserAccount />} />
        </Route>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />

      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Router;
