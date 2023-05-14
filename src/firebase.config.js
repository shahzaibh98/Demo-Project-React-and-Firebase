// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFkcYhCmhjxW3-Euk-PS_qXUgL8Q4YA2M",
  authDomain: "react-otp-login-a54c1.firebaseapp.com",
  projectId: "react-otp-login-a54c1",
  storageBucket: "react-otp-login-a54c1.appspot.com",
  messagingSenderId: "314348751441",
  appId: "1:314348751441:web:03c4d2a4a4d86c31290670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
