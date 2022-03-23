import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
  return (
    <>
      {/* {needHeaderFooter?.[pathName] && !pathName.startsWith("/dashboard") && (
        <Navbar />
      )} */}

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}

      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Router;
