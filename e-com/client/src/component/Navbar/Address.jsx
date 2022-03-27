import React from "react";

export default function Address() {
  return (
    <>
      <div class="col-lg-8">
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
      </div>
    </>
  );
}
