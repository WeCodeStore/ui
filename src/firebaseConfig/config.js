// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZclsrgjohazSOpm4L6jWYwd4fb0gagc",
  authDomain: "wecode-shop.firebaseapp.com",
  projectId: "wecode-shop",
  storageBucket: "wecode-shop.appspot.com",
  messagingSenderId: "457327934500",
  appId: "1:457327934500:web:2a1e67eced5a5b0985ecb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
