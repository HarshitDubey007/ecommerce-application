import React from "react";

export default function AccountPayment() {
  return (
    <>
      <div class="card shadow-none mb-0">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class="table-light">
                <tr>
                  <th>Method</th>
                  <th>Expires</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Visa ending in 1111</td>
                  <td>11/12</td>
                  <td>
                    <div class="d-flex gap-2">
                      {" "}
                      <a
                        href="javascript:;"
                        class="btn btn-dark btn-sm rounded-0"
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Visa ending in 4242</td>
                  <td>11/12</td>
                  <td>
                    <div class="d-flex gap-2">
                      {" "}
                      <a
                        href="javascript:;"
                        class="btn btn-dark btn-sm rounded-0"
                      >
                        Delete
                      </a>
                      <a
                        href="javascript:;"
                        class="btn btn-dark btn-sm rounded-0"
                      >
                        Make Default
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
          <a href="javascript:;" class="btn btn-dark rounded-0">
            Add Payment Method
          </a>
        </div>
      </div>
    </>
  );
}
