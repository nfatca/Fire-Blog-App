import React from "react";
import { Route } from "react-router-dom";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContextProvider";

const PrivateRouter = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
