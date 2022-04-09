// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV47OSNLez2XoKSR8gFkQ0ihCGEJP4DEg",
  authDomain: "ema-john-simple-547ca.firebaseapp.com",
  projectId: "ema-john-simple-547ca",
  storageBucket: "ema-john-simple-547ca.appspot.com",
  messagingSenderId: "804136740603",
  appId: "1:804136740603:web:53329148f2844dca35725e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
