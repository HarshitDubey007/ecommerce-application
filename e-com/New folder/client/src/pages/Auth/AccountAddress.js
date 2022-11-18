import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import api from "../../api";
import { getFormData } from "../../helper/helper";


export default function AccountAddress() {
  const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);

	const [isSignupSuccessful, setIsSignupSuccessful] = useState();
  const [address, setAddress ] = userState()

  useEffect(() => {
				dispatch(login({ isLoggedIn: true, userInfo: data.data })) ;

    const add = api.post("user/getaddress",{
      headers: {
        'Authorization': `Basic ${token}`
      }
    });
    add
  })

  function registerAddress(e) {
		e.preventDefault();
			const formData = getFormData(e.target);
			const addAddress = api.post("/user/address/create", formData);
	
			toast
			  .promise(addAddress, {
				loading: "Add addressing in progress...",
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
				// localStorage.setItem("ourStore", JSON.stringify(uData));
				// dispatch(login({ isLoggedIn: true, userInfo: data.data }));
				Navigate("../dashboard", { replace: true });
			  });
		  
	  }

  return (
    <> <div class="card shadow-none mb-0">
      <div class="card-body">
        <form class="row g-3" onSubmit={(e) => { registerAddress(e) }}>
        <input
              type="hidden"
              name="member_id"
              value={userInfo?.user?._id}
            />
          <div class="col-md-6">
            <label class="form-label">Name</label>
            <input type="text" name="name" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Mobile</label>
            <input type="text" name="mobileNumber" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Pin Code</label>
            <input type="text" name="pinCode" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Locality</label>
            <input type="text" name="locality" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Alternate Phone</label>
            <input type="text" name="alternatePhone" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Address</label>
            <input type="text" name="address" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">City</label>
            <input type="text" name="cityDistrictTown" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">State</label>
            <input type="text" name="state" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Land Mark</label>
            <input type="text" name="landmark" class="form-control" />
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-dark btn-ecomm">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
      <div class="card shadow-none mb-0">
        <div class="card-body">
          <h6 class="mb-4">
            The following addresses will be used on the checkuot page by
            default.
          </h6>
          <div class="row">
            <div class="col-12 col-lg-6">
              <h5 class="mb-3">Billing Addresses</h5>
              <address>
                Madison Riiz
                <br />
                123 Happy Street
                <br />
                Cape Town
                <br />
                Western Cape
                <br />
                8001
                <br />
                South Africa
              </address>
            </div>
            <div class="col-12 col-lg-6">
              <h5 class="mb-3">Shipping Addresses</h5>
              <address>
                Madison Riiz
                <br />
                123 Happy Street
                <br />
                Cape Town
                <br />
                Western Cape
                <br />
                8001
                <br />
                South Africa
              </address>
            </div>
          </div>
          {/* <!--end row--> */}
        </div>
      </div>
    </>
  );
}
