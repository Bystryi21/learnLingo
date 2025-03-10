// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeLL5Qh1AJiLmlYt-NhpRFBcFeU8xKsBc",
  authDomain: "teachers-7a7ce.firebaseapp.com",
  databaseURL: "https://teachers-7a7ce-default-rtdb.firebaseio.com",
  projectId: "teachers-7a7ce",
  storageBucket: "teachers-7a7ce.firebasestorage.app",
  messagingSenderId: "920250750889",
  appId: "1:920250750889:web:5115624116c49f16b916b8",
  measurementId: "G-XM9NPRH8BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
