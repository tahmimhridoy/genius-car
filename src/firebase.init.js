// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQOmdPB410dS-QK41BqVhJynVrtRHfIpc",
  authDomain: "genius-car-full.firebaseapp.com",
  projectId: "genius-car-full",
  storageBucket: "genius-car-full.appspot.com",
  messagingSenderId: "351692406439",
  appId: "1:351692406439:web:79187cbdb164a5198ce582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;