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
import WishList from "./pages/WishList";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { useSelector } from "react-redux";
import needHeaderFooter from "./helper/need_header_footer";
import PrivateComponent from "./pages/Auth/PrivateComponent";
import Catageory from "./pages/Catageory/Catageory";

const Router = () => {
  const location = useLocation();
  const pathName = location.pathname;
  // console.log(pathName, needHeaderFooter?.[pathName]);
  const { isLoggedIn } = useSelector((state) => state?.user?.value);
  return (
    <>
      {/* {needHeaderFooter?.[pathName] && !pathName.startsWith("/dashboard") && (
      )} */}
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route element={<PrivateComponent/>}>
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route exact path="/userAccount" element={<UserAccount />}>
          <Route path=":page" element={<UserAccount />} />
        </Route>
        <Route exact path="/catageory" element={<Catageory />}>
          <Route path=":slug" element={<Catageory />} />
        </Route>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<WishList />} />

      </Routes>
      <Footer />

      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Router;
