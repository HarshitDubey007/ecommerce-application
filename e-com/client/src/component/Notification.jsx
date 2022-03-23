import React from 'react'

export default function Notification() {
  return (
    <>
    <div className="discount-alert d-none d-lg-block">
			<div className="alert alert-dismissible fade show shadow-none rounded-0 mb-0 border-bottom">
				<div className="d-lg-flex align-items-center gap-2 justify-content-center">
					<p className="mb-0">Get Up to <strong>40% OFF</strong> New-Season Styles</p>
				    <Link to="javascript:;" className="bg-dark text-white px-1 font-13 cursor-pointer">Men</Link>
					<Link to="javascript:;" className="bg-dark text-white px-1 font-13 cursor-pointer">Women</Link>
					<p className="mb-0 font-13">*Limited time only</p>
				</div>
				<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		</div>
    </>
  )
}
