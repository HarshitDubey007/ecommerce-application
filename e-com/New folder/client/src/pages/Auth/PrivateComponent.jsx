import React from 'react'
import { Navigate, Outlet } from 'react-router';

export default function PrivateComponent() {
    const auth = localStorage.getItem("ourStore");
    const authen = JSON.parse(auth);
    console.log(authen?.isLoggedIn,"auth")
  return authen.isLoggedIn==true?<Outlet/>:<Navigate to="/signup"/>
}
