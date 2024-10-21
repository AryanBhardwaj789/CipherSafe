// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArc4kLbw_hO1IkP6lJUY88YyddU5LOscQ",
  authDomain: "password-manager-59648.firebaseapp.com",
  projectId: "password-manager-59648",
  storageBucket: "password-manager-59648.appspot.com",
  messagingSenderId: "313211496914",
  appId: "1:313211496914:web:1aaa69ad490ba8ed1bc00b",
  measurementId: "G-W57NNQSW8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
