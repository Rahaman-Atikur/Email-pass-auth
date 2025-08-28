// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYVivYqSMi6bmM2TeIPEwy6c0RaAGQ4SM",
  authDomain: "email-pass-auth-99ff7.firebaseapp.com",
  projectId: "email-pass-auth-99ff7",
  storageBucket: "email-pass-auth-99ff7.firebasestorage.app",
  messagingSenderId: "883255430951",
  appId: "1:883255430951:web:de15f06490d6dfbfb22302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);