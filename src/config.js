// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD8nVItZ8htGvvc6Wcd5RGlW4QtdCzL_k",
  authDomain: "joseantoniosandbox-5241c.firebaseapp.com",
  projectId: "joseantoniosandbox-5241c",
  storageBucket: "joseantoniosandbox-5241c.firebasestorage.app",
  messagingSenderId: "138225252077",
  appId: "1:138225252077:web:66168a13ecc9928dccfee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app