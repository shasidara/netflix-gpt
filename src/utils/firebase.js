// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA377xrDh1KGq-QuxwddqEHPTBegNxJIdI",
  authDomain: "netflixgpt-cc008.firebaseapp.com",
  projectId: "netflixgpt-cc008",
  storageBucket: "netflixgpt-cc008.firebasestorage.app",
  messagingSenderId: "688687428517",
  appId: "1:688687428517:web:44edf6f0f53f6ff54d6e4c",
  measurementId: "G-YGMKH5G8M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();