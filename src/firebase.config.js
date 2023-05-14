// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUvN3l62_2cD89o7pNshI2vbntfGjmAoQ",
  authDomain: "opt-login-252ad.firebaseapp.com",
  projectId: "opt-login-252ad",
  storageBucket: "opt-login-252ad.appspot.com",
  messagingSenderId: "379385195146",
  appId: "1:379385195146:web:88b1914c43f0c2bcb75b73",
  measurementId: "G-6QJJSB0RV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
