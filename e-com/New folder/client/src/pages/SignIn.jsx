import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { getFormData } from "../helper/helper";
import { login } from "../redux/user";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function authenticateUser(e) {
    e.preventDefault();

      const formData = getFormData(e.target);
      const signinRes = api.post("/signin", formData);
      toast
        .promise(signinRes, {
          loading: "Authenticating member.",
          success: (data) => {
            return `Congratulations, you have successfully logged in.`;
          },
          error: (err) => {
            return (
              err?.response?.data?.errors ??
              err?.response?.data?.message ??
              err?.message ??
              "OOPs something went wrong."
            );
          },
        })
        .then((data) => {
          const uData = { isLoggedIn: true, userInfo: data.data }; 
          localStorage.setItem("ourStore", JSON.stringify(uData));
          dispatch(login({ isLoggedIn: true, userInfo: data.data }));
          navigate("../dashboard", { replace: true });
        });
   
  }


  return (
    <div>
      {" "}
      <div class="page-wrapper">
        <div class="page-content">
          {/* <!--start breadcrumb--> */}
          <section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div class="container">
              <div class="page-breadcrumb d-flex align-items-center">
                <h3 class="breadcrumb-title pe-3">Sign in</h3>
                <div class="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                      <li class="breadcrumb-item">
                        <a href="javascript:;">
                          <i class="bx bx-home-alt"></i> Home
                        </a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript:;">Authentication</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Sign In
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/* <!--end breadcrumb--> */}
          {/* <!--start shop cart--> */}
          <section class="">
            <div class="container">
              <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                <div class="row row-cols-1 row-cols-xl-2">
                  <div class="col mx-auto">
                    <div class="card">
                      <div class="card-body">
                        <div class="border p-4 rounded">
                          <div class="text-center">
                            <h3 class="">Sign in</h3>
                            <p>
                              Don't have an account yet?{" "}
                              <a href="authentication-signup.html">
                                Sign up here
                              </a>
                            </p>
                          </div>
                          <div class="d-grid">
                            <a
                              class="btn my-4 shadow-sm btn-white"
                              href="javascript:;"
                            >
                              {" "}
                              <span class="d-flex justify-content-center align-items-center">
                                <img
                                  class="me-2"
                                  src="assets/images/icons/search.svg"
                                  width="16"
                                  alt="Image Description"
                                />
                                <span>Sign in with Google</span>
                              </span>
                            </a>{" "}
                            <a href="javascript:;" class="btn btn-white">
                              <i class="bx bxl-facebook"></i>Sign in with
                              Facebook
                            </a>
                          </div>
                          <div class="login-separater text-center mb-4">
                            {" "}
                            <span>OR SIGN IN WITH EMAIL</span>
                            <hr />
                          </div>
                          <div class="form-body">
                            <form class="row g-3"  onSubmit={(e) => {authenticateUser(e)}}>
                              <div class="col-12">
                                <label
                                  for="inputEmailAddress"
                                  class="form-label"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  id="inputEmailAddress"
                                  placeholder="Email Address"
                                />
                              </div>
                              <div class="col-12">
                                <label
                                  for="inputChoosePassword"
                                  class="form-label"
                                >
                                  Enter Password
                                </label>
                                <div
                                  class="input-group"
                                  id="show_hide_password"
                                >
                                  <input
                                    type="password"
                                    class="form-control border-end-0"
                                    id="inputChoosePassword"
                                    name="password"
                                    placeholder="Enter Password"
                                  />{" "}
                                  <a
                                    href="javascript:;"
                                    class="input-group-text bg-transparent"
                                  >
                                    <i class="bx bx-hide"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckChecked"
                                  >
                                    Remember Me
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-6 text-end">
                                {" "}
                                <a href="authentication-forgot-password.html">
                                  Forgot Password ?
                                </a>
                              </div>
                              <div class="col-12">
                                <div class="d-grid">
                                  <button type="submit" class="btn btn-primary">
                                    <i class="bx bxs-lock-open"></i>Sign in
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end row--> */}
              </div>
            </div>
          </section>
          {/* <!--end shop cart--> */}
        </div>
      </div>
    </div>
  );
}
