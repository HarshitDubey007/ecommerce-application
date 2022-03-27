import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar/Nevbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/productDetails/ProductDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserSection from "./pages/UserSection/UserSection";

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
        <Route exact path="/account" element={<UserSection />} />

        <Route exact path="/Home/Shop/ProductDetails" element={<ProductDetail />} />
      </Routes>
      <Footer />

      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Router;
