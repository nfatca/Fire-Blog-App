// import "firebase/auth";
// import "firebase/database";
// import firebase from "firebase/app";

// const firebaseUtil = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
//   projectId: process.env.REACT_APP_FIREBASE_projectId,
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
//   appId: process.env.REACT_APP_FIREBASE_appId,
// });
// export default firebaseUtil;
// export const auth = firebaseUtil.auth();
// export const firebaseDB = firebaseUtil.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
