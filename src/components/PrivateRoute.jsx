import React from "react";

import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const DataUser = JSON.parse(localStorage.getItem("UserSignUp"));

  return DataUser.listAs === "Owner" ? <Outlet /> : <Navigate to="/" />;
}
