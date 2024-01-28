import React from "react";
import { Link } from "react-router-dom";

export default function AccountDashboard() {
  return (
    <>
      <div class="card shadow-none mb-0">
        <div class="card-body">
          <p>
            Hello <strong>Madison Ruiz</strong> (not{" "}
            <strong>Madison Ruiz?</strong>{" "}
            <Link to="javascript:;">Logout</Link>)
          </p>
          <p>
            From your account dashboard you can view your Recent Orders, manage
            your shipping and billing addesses and edit your password and
            account details
          </p>
        </div>
      </div>
    </>
  );
}
