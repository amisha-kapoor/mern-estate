// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-26f59.firebaseapp.com",
  projectId: "mern-estate-26f59",
  storageBucket: "mern-estate-26f59.appspot.com",
  messagingSenderId: "651381540730",
  appId: "1:651381540730:web:0bc8c12ed963a184b938c3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
