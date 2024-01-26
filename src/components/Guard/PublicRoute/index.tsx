import React from "react";

// router
import { Navigate, Outlet, useLocation } from "react-router-dom";

//-----------------------------------------------------
const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  console.log(location);

  if (token) {
    if (location.pathname === "/singlereceipt" && location.pathname === "/singlereceipt" ) {
      return <Outlet />;
    }
    return <Navigate to="/generator" />;
  }

  return <Outlet />;
};

export default PublicRoute;
