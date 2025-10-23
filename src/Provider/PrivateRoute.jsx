// src/Routes/PrivateRoute.jsx
import React, { useContext, useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔹 useRef to prevent showing the toast twice
  const toastShown = useRef(false);

  useEffect(() => {
    if (!loading && !user && !toastShown.current) {
      toast.error("You have to be logged in to see this section!");
      toastShown.current = true; // prevent double fire
    }
  }, [loading, user]);

  if (loading) {
    return <div className="text-center mt-20 text-green-600">Loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
