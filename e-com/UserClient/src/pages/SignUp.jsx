import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import api from '../api';
import { getFormData } from '../helper/helper';
import { login } from "../redux/user";
import {  useNavigate } from "react-router-dom";


export default function SignUp() {
	const [isSignupSuccessful, setIsSignupSuccessful] = useState();
	const dispatch = useDispatch()
	const navigate = useNavigate()

	function registerUser(e) {
		e.preventDefault();
			const formData = getFormData(e.target);
			const signupRes = api.post("/signup", formData);
	
			toast
			  .promise(signupRes, {
				loading: "Registration in progress...",
				success: (data) => {
				  console.log(data);
				  setIsSignupSuccessful({ ...data.data.data });
				  return `Congratulations, you have successfully registered.`;
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
				e.target.reset();
				const uData = { isLoggedIn: true, userInfo: data.data }; 
				localStorage.setItem("ourStore", JSON.stringify(uData));
				dispatch(login({ isLoggedIn: true, userInfo: data.data }));
				navigate("../dashboard", { replace: true });
			  });
		  
	  }


  return (
 <>
 	<div class="page-wrapper">
			<div class="page-content">
				{/* <!--start breadcrumb--> */}
				<section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
					<div class="container">
						<div class="page-breadcrumb d-flex align-items-center">
							<h3 class="breadcrumb-title pe-3">Sign Up</h3>
							<div class="ms-auto">
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb mb-0 p-0">
										<li class="breadcrumb-item"><Link to="javascript:;"><i class="bx bx-home-alt"></i> Home</Link>
										</li>
										<li class="breadcrumb-item"><Link to="javascript:;">Authentication</Link>
										</li>
										<li class="breadcrumb-item active" aria-current="page">Sign Up</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
				{/* <!--end breadcrumb-->
				<!--start shop cart--> */}
				<section class="py-0 py-lg-5">
					<div class="container">
						<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
							<div class="row row-cols-1 row-cols-lg-1 row-cols-xl-2">
								<div class="col mx-auto">
									<div class="card mb-0">
										<div class="card-body">
											<div class="border p-4 rounded">
												<div class="text-center">
													<h3 class="">Sign Up</h3>
													<p>Already have an account? <Link to="/signin">Sign in here</Link>
													</p>
												</div>
												<div class="d-grid">
													<Link class="btn my-4 shadow-sm btn-white" to="javascript:;"> <span class="d-flex justify-content-center align-items-center">
														<img class="me-2" src="assets/images/icons/search.svg" width="16" alt="Image Description"/>
														<span>Sign Up with Google</span>
														</span>
													</Link> <Link to="javascript:;" class="btn btn-white"><i class="bx bxl-facebook"></i>Sign Up with Facebook</Link>
												</div>
												<div class="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
													<hr/>
												</div>
												<div class="form-body">
													<form class="row g-3" onSubmit={(e) => { registerUser(e) }}>
														<div class="col-sm-6">
															<label for="inputFirstName" class="form-label">First Name</label>
															<input type="text" name='firstName' class="form-control" id="inputFirstName" placeholder="Jhon"/>
														</div>
														<div class="col-sm-6">
															<label for="inputLastName"  class="form-label">Last Name</label>
															<input type="text" name='lastName' class="form-control" id="inputLastName" placeholder="Deo"/>
														</div>
														<div class="col-12">
															<label for="inputEmailAddress" class="form-label">Email Address</label>
															<input type="email" name='email' class="form-control" id="inputEmailAddress" placeholder="example@user.com"/>
														</div>
														<div class="col-12">
															<label for="inputChoosePassword" class="form-label">Password</label>
															<div class="input-group" id="show_hide_password">
																<input type="password" name='password' class="form-control border-end-0" id="inputChoosePassword" placeholder="Enter Password"/> <Link to="javascript:;" class="input-group-text bg-transparent"><i class='bx bx-hide'></i></Link>
															</div>
														</div>
														<div class="col-12">
															<label for="inputSelectCountry" class="form-label">Country</label>
															<select class="form-select" name='country' id="inputSelectCountry" aria-label="Default select example">
																<option selected>India</option>
																<option value="1">United Kingdom</option>
																<option value="2">America</option>
																<option value="3">Dubai</option>
															</select>
														</div>
														<div class="col-12">
															<div class="form-check form-switch">
																<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
																<label class="form-check-label" for="flexSwitchCheckChecked">I read and agree to Terms & Conditions</label>
															</div>
														</div>
														<div class="col-12">
															<div class="d-grid">
																<button type="submit" class="btn btn-dark"><i class='bx bx-user'></i>Sign up</button>
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
 </>
  )
}
