// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbHXOcoyukrWqpml9bnlAy7sDOwyMmfRQ",
  authDomain: "mychatapp-3e320.firebaseapp.com",
  databaseURL: "https://mychatapp-3e320-default-rtdb.firebaseio.com",
  projectId: "mychatapp-3e320",
  storageBucket: "mychatapp-3e320.appspot.com",
  messagingSenderId: "911985111405",
  appId: "1:911985111405:web:99af2fb546b1dc891d6a64",
  measurementId: "G-EJSWEVB1R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
