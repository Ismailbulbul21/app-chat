// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCplB2pxAt8otsb7ivRwW6XtfFkZ96n1vQ",
  authDomain: "app-chat-b5ffc.firebaseapp.com",
  projectId: "app-chat-b5ffc",
  storageBucket: "app-chat-b5ffc.appspot.com",
  messagingSenderId: "304649996321",
  appId: "1:304649996321:web:50d84119bef15ba247bb60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)