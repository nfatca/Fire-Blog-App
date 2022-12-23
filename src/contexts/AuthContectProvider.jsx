import React, { useContext, createContext } from "react";
import { auth, googleProvider } from "../helpers/firebase";

//! Create context for authentication data
const AuthContect = createContext();

//! Define a function to get data from Auth context
export function useAuth() {
  return useContext(AuthContect);
}

const AuthContectProvider = () => {
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut(auth);
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    auth.signInWithPopup(googleProvider);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  const values = {
    signup,
    login,
    logout,
    loginWithGoogle,
    resetPassword,
    updateEmail,
  };
  return <AuthContect.Provider value={values}>{children}</AuthContect.Provider>;
};

export default AuthContectProvider;
