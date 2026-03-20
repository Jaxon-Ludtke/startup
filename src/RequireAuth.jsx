import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getLoggedInUser } from "./auth";

export default function RequireAuth({ children }) {
  const loggedInEmail = getLoggedInUser();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/api/auth/check")
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsChecking(false);
      });
  }, []);
  if (isChecking) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }
  return children;
}