// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQg2D4wcxioFYanTI4iuK7P0HNMVsVfj4",
  authDomain: "react-admin-dashboard-55973.firebaseapp.com",
  projectId: "react-admin-dashboard-55973",
  storageBucket: "react-admin-dashboard-55973.appspot.com",
  messagingSenderId: "463199844074",
  appId: "1:463199844074:web:714f344b769883f5d54993",
  measurementId: "G-PBYPVKGY29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);