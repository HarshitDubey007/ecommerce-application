import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import AccountAddress from './AccountAddress'
import AccountDashboard from './AccountDashboard'
import AccountDetails from './AccountDetails'
import AccountDownloards from './AccountDownloards'
import AccountOrder from './AccountOrder'
import AccountPayment from './AccountPayment'

export default function UserAccount() {
    const { page } = useParams()
    const pages = { 
        dashboard: <AccountDashboard />,
        orders: <AccountOrder />,
        downloads: <AccountDownloards />,
        addresses: <AccountAddress />,
        payment: <AccountPayment />,
        details: <AccountDetails />,
      };

  return (
      <>
       <div>
       <section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
					<div class="container">
						<div class="page-breadcrumb d-flex align-items-center">
							<h3 class="breadcrumb-title pe-3">Your Account</h3>
							<div class="ms-auto">
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb mb-0 p-0">
										<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i> Home</a>
										</li>
										<li class="breadcrumb-item"><a href="javascript:;">Account</a>
										</li>
										<li class="breadcrumb-item active" aria-current="page">{page}</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
           <section class="py-4">
        <div class="container">
        <h3 class="d-none">Account</h3>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card shadow-none mb-3 mb-lg-0 border">
                            <div class="card-body">
                                <div class="list-group list-group-flush"> 
                                    <Link to="/userAccount/dashboard" class={page == "dashboard" ? "list-group-item d-flex active justify-content-between align-items-center": "list-group-item d-flex justify-content-between align-items-center bg-transparent"}>Dashboard <i class='bx bx-tachometer fs-5'></i></Link>
                                    <Link to="/userAccount/orders" class={page == "orders" ? "list-group-item d-flex active justify-content-between align-items-center": "list-group-item d-flex justify-content-between align-items-center bg-transparent"}>Orders <i class='bx bx-cart-alt fs-5'></i></Link>
                                    <Link to="/userAccount/downloads" class={page == "downloads" ? "list-group-item d-flex active justify-content-between align-items-center": "list-group-item d-flex justify-content-between align-items-center bg-transparent"}>Downloads <i class='bx bx-download fs-5'></i></Link>
                                    <Link to="/userAccount/addresses" class={page == "addresses" ? "list-group-item d-flex active justify-content-between align-items-center": "list-group-item d-flex justify-content-between align-items-center bg-transparent"}>Addresses <i class='bx bx-home-smile fs-5'></i></Link>
                                    <Link to="/userAccount/payment" class={page == "payment" ? "list-group-item d-flex active justify-content-between align-items-center": "list-group-item d-flex justify-content-between align-items-center bg-transparent"}>Payment Methods <i class='bx bx-credit-card fs-5'></i></Link>
                                    <Link to="/userAccount/details" class={page == "details" ? "list-group-item d-flex active justify-content-between align-items-center": "list-group-item d-flex justify-content-between align-items-center bg-transparent"}>Account Details <i class='bx bx-user-circle fs-5'></i></Link>
                                    <Link to="#" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i class='bx bx-log-out fs-5'></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        {/* {page == "account-orders" && <AccountOrder />}
                        {page == "account-user-details" &&  <AccountDetails />} */}
                      {pages?.[page] ? pages[page] : <AccountDashboard />}
                       
                    </div>
                </div>
                {/* <!--end row--> */}
            </div>
        </div>
    </div>
</section></div>
      </>
   
  )
}
