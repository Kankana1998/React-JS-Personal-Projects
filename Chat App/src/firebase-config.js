// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiMz7mHk6XCa4_p0HJeZFPrD5PHqJ2S5c",
  authDomain: "chatapp-5b9e0.firebaseapp.com",
  projectId: "chatapp-5b9e0",
  storageBucket: "chatapp-5b9e0.appspot.com",
  messagingSenderId: "387415077997",
  appId: "1:387415077997:web:417282fc39abd4f1b03b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();