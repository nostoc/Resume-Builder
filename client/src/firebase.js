// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eazy-rezume.firebaseapp.com",
  projectId: "eazy-rezume",
  storageBucket: "eazy-rezume.appspot.com",
  messagingSenderId: "457352835009",
  appId: "1:457352835009:web:7482a43c57f5cd3b700940"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);