import { Reddit } from "@material-ui/icons";
import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContectProvider";

const PrivateRouter = (props) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
