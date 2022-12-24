// import React, { useContext, createContext, useState, useEffect } from "react";
// import { auth, googleProvider } from "../helpers/firebase";

// //! Create context for authentication data
// const AuthContext = createContext();

// //! Define a function to get data from Auth context
// export function useAuth() {
//   return useContext(AuthContext);
// }

// const AuthContextProvider = () => {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password);
//   }

//   function logout() {
//     auth.signOut(auth);
//   }

//   function loginWithGoogle() {
//     googleProvider.setCustomParameters({ prompt: "select_account" });
//     auth.signInWithPopup(googleProvider);
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
//   }
//   function updateEmail(email) {
//     return currentUser.updateEmail(email);
//   }
//   function updatePassword(password) {
//     return currentUser.updatePassword(password);
//   }

//   const values = {
//     currentUser,
//     signup,
//     login,
//     logout,
//     resetPassword,
//     updatePassword,
//     updateEmail,
//     loginWithGoogle,
//   };
//   return <AuthContext.Provider value={values}></AuthContext.Provider>;
// };

// export default AuthContextProvider;

import React, { useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../helpers/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    signOut(auth);
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
