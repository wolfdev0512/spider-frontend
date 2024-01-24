import { createBrowserRouter, Navigate } from "react-router-dom";

import PrivateRoute from "../components/Guard/PrivateRoute";
import PublicRoute from "../components/Guard/PublicRoute";

import AppLayout from "../components/Layout/AppLayout";

import * as Page from "../pages";

//-------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <PublicRoute />,
        children: [
          { path: "/", element: <Page.Home /> },
          { path: "/signin", element: <Page.SignIn /> },
          { path: "/signup", element: <Page.SignUp /> },
          { path: "/reset-password", element: <Page.Reset />}
        ],
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          { path: "/admin", element: <Page.Admin /> },
          { path: "/generator", element: <Page.Generator /> },
          { path: "/singlereceipt", element: <Page.Single /> },
          { path: "/payment", element: <Page.Payment /> },
        ],
      },
      { path: "404", element: <Page.Lost /> },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
]);

export { router };