import React, { useContext, createContext } from "react";

//! Create context for authentication data
const AuthContect = createContext();

//! Define a function to get data from Auth context
export function useAuth() {
  return useContext(AuthContect);
}

const AuthContectProvider = () => {
  return <div>AuthContectProvider</div>;
};

export default AuthContectProvider;
