import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBR4iUI7FFWMDLQb1COlOZLoKXZGtXIgyw",
  authDomain: "rusarm-transits.firebaseapp.com",
  databaseURL: "https://rusarm-transits-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rusarm-transits",
  storageBucket: "rusarm-transits.appspot.com",
  messagingSenderId: "241612133257",
  appId: "1:241612133257:web:3ab2ac9d585dd165a94758"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp)