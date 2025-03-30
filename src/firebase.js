// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6KwjmRvbad2B9EBdiIrN2Gh-hdJ1fKh8",
  authDomain: "bizniso.firebaseapp.com",
  projectId: "bizniso",
  storageBucket: "bizniso.appspot.com",
  messagingSenderId: "401613901851",
  appId: "1:401613901851:web:168995d9ac135c7f8de8be",
  measurementId: "G-TQM5XS6Z6P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
