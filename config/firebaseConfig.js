// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBczD5Cl5Do1XlpVBzlIlm0qfIp5CUVpU8",
  authDomain: "appointment-app-bb16f.firebaseapp.com",
  projectId: "appointment-app-bb16f",
  storageBucket: "appointment-app-bb16f.firebasestorage.app",
  messagingSenderId: "515468830912",
  appId: "1:515468830912:web:4d435c2fb9c53bc14ee525",
  measurementId: "G-EDSHXSZ0R1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);