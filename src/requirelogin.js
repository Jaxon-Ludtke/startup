import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUser } from "./auth";

export default function RequireAuth({ children }) {
  const user = getUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return children;
}
