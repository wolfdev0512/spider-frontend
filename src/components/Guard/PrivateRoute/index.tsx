import React from "react";

// router
import { Navigate, Outlet } from "react-router-dom";

//---------------------------------------------------------------
const PrivateRoute = () => {
    console.log("Private")
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
