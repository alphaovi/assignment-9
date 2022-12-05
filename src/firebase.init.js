// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYgXPXLVwfzzcQ9KwoU4vGQ3DWJ88AiQg",
  authDomain: "assignment-9-d963b.firebaseapp.com",
  projectId: "assignment-9-d963b",
  storageBucket: "assignment-9-d963b.appspot.com",
  messagingSenderId: "67127416143",
  appId: "1:67127416143:web:9eb687080a7956cec9213a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;