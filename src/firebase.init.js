// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiR4D2qSpLJccGYRB2nwagPYtOV3VoKh4",
  authDomain: "genius-car-services-f61f7.firebaseapp.com",
  projectId: "genius-car-services-f61f7",
  storageBucket: "genius-car-services-f61f7.appspot.com",
  messagingSenderId: "515533866325",
  appId: "1:515533866325:web:c3cdba2009a605a9e9dbdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;