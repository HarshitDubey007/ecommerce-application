import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

export default function Navbar() {
  const [catageoryList, setcatageoryList] = useState([])

  useEffect(() => {
    const category = api.get("/category/getcategory").then((data) => {
      setcatageoryList([...data.data.categoryList])
    })

  }, [])

  const auth = localStorage.getItem("ourStore");
  const authentication = JSON.parse(auth);
  console.log(authentication, "authentication")
  console.log("catageoryList", catageoryList)

  return (
    <>
      <div className="header-wrapper">
        <div className="top-menu border-bottom">
          <div className="container">
            <nav className="navbar navbar-expand">
              <div className="shiping-title text-uppercase font-13 d-none d-sm-flex">
                Welcome to our eTrans store!
              </div>
              <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="order-tracking.html">
                    Track Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about-us.html">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="shop-categories.html">
                    Our Stores
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="blog.html">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="contact-us.html">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="javascript:;">
                    Help & FAQs
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  {" "}
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    USD
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li>
                      <Link className="dropdown-item" to="#">
                        USD
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        EUR
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <div className="lang d-flex gap-1">
                      <div>
                        <i className="flag-icon flag-icon-um"></i>
                      </div>
                      <div>
                        <span>ENG</span>
                      </div>
                    </div>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-lg-end">
                    <Link
                      className="dropdown-item d-flex allign-items-center"
                      to="javascript:;"
                    >
                      {" "}
                      <i className="flag-icon flag-icon-de me-2"></i>
                      <span>German</span>
                    </Link>{" "}
                    <Link
                      className="dropdown-item d-flex allign-items-center"
                      to="javascript:;"
                    >
                      <i className="flag-icon flag-icon-fr me-2"></i>
                      <span>French</span>
                    </Link>
                    <Link
                      className="dropdown-item d-flex allign-items-center"
                      to="javascript:;"
                    >
                      <i className="flag-icon flag-icon-um me-2"></i>
                      <span>English</span>
                    </Link>
                    <Link
                      className="dropdown-item d-flex allign-items-center"
                      to="javascript:;"
                    >
                      <i className="flag-icon flag-icon-in me-2"></i>
                      <span>Hindi</span>
                    </Link>
                    <Link
                      className="dropdown-item d-flex allign-items-center"
                      to="javascript:;"
                    >
                      <i className="flag-icon flag-icon-cn me-2"></i>
                      <span>Chinese</span>
                    </Link>
                    <Link
                      className="dropdown-item d-flex allign-items-center"
                      to="javascript:;"
                    >
                      <i className="flag-icon flag-icon-ae me-2"></i>
                      <span>Arabic</span>
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav social-link ms-lg-2 ms-auto">
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="javascript:;">
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="javascript:;">
                    <i className="bx bxl-twitter"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="javascript:;">
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div className="header-content pb-3 pb-md-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-4 col-md-auto">
							<div className="d-flex align-items-center">
								<div className="mobile-toggle-menu d-lg-none px-lg-2" data-trigger="#navbar_main"><i className='bx bx-menu'></i>
								</div>
								<div className="logo d-none d-lg-flex">
									<Link to="index.html">
										<img src="assets/images/logo-icon.png" className="logo-icon" alt="" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col col-md order-4 order-md-2">
							<div className="input-group flex-nowrap px-xl-4">
								<input type="text" className="form-control w-100" placeholder="Search for Products"/>
								<select className="form-select flex-shrink-0" aria-label="Default select example" style={{"width": "10.5rem;"}}>
									<option selected>All Categories</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>	<span className="input-group-text cursor-pointer bg-transparent"><i className='bx bx-search'></i></span>
							</div>
						</div>
						<div className="col-4 col-md-auto order-3 d-none d-xl-flex align-items-center">
							<div className="fs-1 text-white"><i className='bx bx-headphone'></i>
							</div>
							<div className="ms-2">
								<p className="mb-0 font-13">CALL US NOW</p>
								<h5 className="mb-0">+011 5827918</h5>
							</div>
						</div>
						<div className="col-4 col-md-auto order-2 order-md-4">
							<div className="top-cart-icons float-end">
								<nav className="navbar navbar-expand">
									<ul className="navbar-nav ms-auto">
										<li className="nav-item"><Link to="/userAccount/dashboard" className="nav-link cart-link"><i className='bx bx-user'></i></Link>
										</li>
										<li className="nav-item"><Link to="/wishlist" className="nav-link cart-link"><i className='bx bx-heart'></i></Link>
										</li>
										<li className="nav-item dropdown dropdown-large">
											<Link to="#" className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative cart-link" data-bs-toggle="dropdown">	<span className="alert-count">8</span>
												<i className='bx bx-shopping-bag'></i>
											</Link>
											<div className="dropdown-menu dropdown-menu-end">
												<Link to="javascript:;">
													<div className="cart-header">
														<p className="cart-header-title mb-0">8 ITEMS</p>
														<p className="cart-header-clear ms-auto mb-0">VIEW CART</p>
													</div>
												</Link>
												<div className="cart-list">
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Men White T-Shirt</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/01.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Puma Sports Shoes</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/05.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Women Red Sneakers</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/17.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Black Headphone</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/10.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Blue Girl Shoes</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/08.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Men Leather Belt</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/18.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Men Yellow T-Shirt</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/04.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
													<Link className="dropdown-item" to="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Pool Charir</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/16.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</Link>
												</div>
												<Link to="javascript:;">
													<div className="text-center cart-footer d-flex align-items-center">
														<h5 className="mb-0">TOTAL</h5>
														<h5 className="mb-0 ms-auto">$189.00</h5>
													</div>
												</Link>
												<div className="d-grid p-3 border-top">	<Link to="javascript:;" className="btn btn-dark btn-ecomm">CHECKOUT</Link>
												</div>
											</div>
										</li>
									</ul>
									
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div> */}
        <div className="primary-menu border-top">
          <div className="container">
            <nav
              id="navbar_main"
              className="mobile-offcanvas navbar navbar-expand-lg"
            >
              <div className="offcanvas-header">
                <button className="btn-close float-end"></button>
                <h5 className="py-2">Navigation</h5>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  {" "}
                  <Link className="nav-link" to="/">
                    Home{" "}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <Link
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    Categories <i className="bx bx-chevron-down"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-large-menu">
                    <div className="row">
                      {catageoryList.map((catageorys) => (
                        <div className="col-md-4">
                          <h6 className="large-menu-title">{catageorys.name}</h6>
                          <ul>
                            {catageorys.children.map((subCatageorys) => (
                              <li>
                                <Link to="#">{subCatageorys.name}</Link>
                              </li>
                            ))}

                          </ul>
                          {/* <ul className="">
                             <li>
                               <Link to="#">Casual T-Shirts</Link>
                             </li>
                             <li>
                               <Link to="#">Formal Shirts</Link>
                             </li>
                             <li>
                               <Link to="#">Jackets</Link>
                             </li>
                             <li>
                               <Link to="#">Jeans</Link>
                             </li>
                             <li>
                               <Link to="#">Dresses</Link>
                             </li>
                             <li>
                               <Link to="#">Sneakers</Link>
                             </li>
                             <li>
                               <Link to="#">Belts</Link>
                             </li>
                             <li>
                               <Link to="#">Sports Shoes</Link>
                             </li>
                           </ul> */}
                          {/* <ul>
                            {
                              catageoryList?.map((cat) => <li><Link to={`/catageory/${cat.name}`}>{cat.name}</Link></li>)
                            }
                          </ul> */}
                        </div>
                      ))}
                      {/* <div className="col-md-4">
                        <h6 className="large-menu-title">Fashion</h6>
                        <ul className="">
                          <li>
                            <Link to="#">Casual T-Shirts</Link>
                          </li>
                          <li>
                            <Link to="#">Formal Shirts</Link>
                          </li>
                          <li>
                            <Link to="#">Jackets</Link>
                          </li>
                          <li>
                            <Link to="#">Jeans</Link>
                          </li>
                          <li>
                            <Link to="#">Dresses</Link>
                          </li>
                          <li>
                            <Link to="#">Sneakers</Link>
                          </li>
                          <li>
                            <Link to="#">Belts</Link>
                          </li>
                          <li>
                            <Link to="#">Sports Shoes</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6 className="large-menu-title">Electronics</h6>
                        <ul className="">
                          <li>
                            <Link to="#">Mobiles</Link>
                          </li>
                          <li>
                            <Link to="#">Laptops</Link>
                          </li>
                          <li>
                            <Link to="#">Macbook</Link>
                          </li>
                          <li>
                            <Link to="#">Televisions</Link>
                          </li>
                          <li>
                            <Link to="#">Lighting</Link>
                          </li>
                          <li>
                            <Link to="#">Smart Watch</Link>
                          </li>
                          <li>
                            <Link to="#">Galaxy Phones</Link>
                          </li>
                          <li>
                            <Link to="#">PC Monitors</Link>
                          </li>
                        </ul>
                      </div> */}
                      <div className="col-md-4">
                        <div className="pramotion-banner1">
                          <img
                            src="assets/images/gallery/menu-img.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className="nav-item dropdown">	<Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">Shop  <i className='bx bx-chevron-down'></i></Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item dropdown-toggle dropdown-toggle-nocaret" to="#">Shop Layouts <i className='bx bx-chevron-right float-end'></i></Link>
										<ul className="submenu dropdown-menu">
											<li><Link className="dropdown-item" to="shop-grid-left-sidebar.html">Shop Grid - Left Sidebar</Link>
											</li>
											<li><Link className="dropdown-item" to="shop-grid-right-sidebar.html">Shop Grid - Right Sidebar</Link>
											</li>
											<li><Link className="dropdown-item" to="shop-list-left-sidebar.html">Shop List - Left Sidebar</Link>
											</li>
											<li><Link className="dropdown-item" to="shop-list-right-sidebar.html">Shop List - Right Sidebar</Link>
											</li>
											<li><Link className="dropdown-item" to="shop-grid-filter-on-top.html">Shop Grid - Top Filter</Link>
											</li>
											<li><Link className="dropdown-item" to="shop-list-filter-on-top.html">Shop List - Top Filter</Link>
											</li>
										</ul>
									</li>
									<li><Link className="dropdown-item dropdown-toggle dropdown-toggle-nocaret" to="#">Shop Pages <i className='bx bx-chevron-right float-end'></i></Link>
										<ul className="submenu dropdown-menu">
											<li><Link className="dropdown-item" to="/cart">Shop Cart</Link>
											</li>
											<li><Link className="dropdown-item" to="shop-categories.html">Shop Categories</Link>
											</li>
											<li><Link className="dropdown-item" to="checkout-details.html">Checkout Details</Link>
											</li>
											<li><Link className="dropdown-item" to="checkout-shipping.html">Checkout Shipping</Link>
											</li>
											<li><Link className="dropdown-item" to="checkout-payment.html">Checkout Payment</Link>
											</li>
											<li><Link className="dropdown-item" to="checkout-review.html">Checkout Review</Link>
											</li>
											<li><Link className="dropdown-item" to="checkout-complete.html">Checkout Complete</Link>
											</li>
											<li><Link className="dropdown-item" to="order-tracking.html">Order Tracking</Link>
											</li>
											<li><Link className="dropdown-item" to="product-comparison.html">Product Comparison</Link>
											</li>
										</ul>
									</li>
									<li><Link className="dropdown-item" to="about-us.html">About Us</Link>
									</li>
									<li><Link className="dropdown-item" to="contact-us.html">Contact Us</Link>
									</li>
									<li><Link className="dropdown-item" to="authentication-signin.html">Sign In</Link>
									</li>
									<li><Link className="dropdown-item" to="authentication-signup.html">Sign Up</Link>
									</li>
									<li><Link className="dropdown-item" to="authentication-forgot-password.html">Forgot Password</Link>
									</li>
								</ul>
							</li> */}
                {/* <li className="nav-item"> <Link className="nav-link" to="blog.html">Blog </Link> 
							</li>
							<li className="nav-item"> <Link className="nav-link" to="about-us.html">About Us </Link> 
							</li> */}
                {/* <li className="nav-item"> <Link className="nav-link" to="contact-us.html">Contact Us </Link> 
							</li> */}
                {/* <li className="nav-item"> <Link className="nav-link" to="shop-categories.html">Our Store</Link> 
							</li> */}
                <ul></ul>
                {authentication?.isLoggedIn == true && (<li className="nav-item ms-auto dropdown">
                  <Link
                    className="nav-link  dropdown-toggle dropdown-toggle-nocaret"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    My Account <i className="bx bx-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/userAccount/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/userAccount/downloads"
                      >
                        Downloads
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/userAccount/orders">
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/userAccount/payment">
                        Payment Methods
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/userAccount/details">
                        User Details
                      </Link>
                    </li>
                  </ul>
                </li>)}
              </ul>
              <div className="ms-auto">
                <ul className="navbar-nav ms-auto d-none d-lg-flex">
                  <li className="nav-item dropdown">
                    {" "}
                    <Link
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-user" />{" "}
                      <i className="bx bx-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      {authentication?.isLoggedIn == true ? (
                        <>
                          <li>
                            <Link className="dropdown-item" to="/forgot-password">
                              Change Password
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/" onClick={() => localStorage.removeItem("ourStore")}>
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link className="dropdown-item" to="/signin">
                              SignIn
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/signup">
                              SignUp
                            </Link>
                          </li>
                        </>
                      )
                      }
                    </ul>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

