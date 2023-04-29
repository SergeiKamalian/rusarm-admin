// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR4iUI7FFWMDLQb1COlOZLoKXZGtXIgyw",
  authDomain: "rusarm-transits.firebaseapp.com",
  databaseURL: "https://rusarm-transits-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rusarm-transits",
  storageBucket: "rusarm-transits.appspot.com",
  messagingSenderId: "241612133257",
  appId: "1:241612133257:web:3ab2ac9d585dd165a94758"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);