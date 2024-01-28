import React from "react";

export default function AccountDownloards() {
  return (
    <div>
      <div class="card shadow-none mb-0">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class="table-light">
                <tr>
                  <th>Product</th>
                  <th>Downloads Remaining</th>
                  <th>Expires</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stock Moview Clip</td>
                  <td>12</td>
                  <td>Novermber 15, 2021</td>
                  <td>
                    <div class="d-flex gap-2">
                      {" "}
                      <a
                        href="javascript:;"
                        class="btn btn-dark btn-sm rounded-0"
                      >
                        Movie Clip 1
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Stock Moview Clip</td>
                  <td>08</td>
                  <td>Novermber 12, 2021</td>
                  <td>
                    <div class="d-flex gap-2">
                      {" "}
                      <a
                        href="javascript:;"
                        class="btn btn-dark btn-sm rounded-0"
                      >
                        Movie Clip 2
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
