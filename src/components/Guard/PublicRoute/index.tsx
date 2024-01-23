import React from "react";

// router
import { Navigate, Outlet } from "react-router-dom";

//-----------------------------------------------------
const PublicRoute = () => {
    console.log("Public")
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/generator" />;
  }

  return <Outlet />;
};

export default PublicRoute;
