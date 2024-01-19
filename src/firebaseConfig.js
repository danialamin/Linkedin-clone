// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxAr0pVyei9pu2npBpYzb-eZBRQEEHCJ0",
  authDomain: "linkedin-clone-454b0.firebaseapp.com",
  projectId: "linkedin-clone-454b0",
  storageBucket: "linkedin-clone-454b0.appspot.com",
  messagingSenderId: "1038666141383",
  appId: "1:1038666141383:web:5c13eef6655595ed1b38e2",
  measurementId: "G-8PPM22EQTN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)
const analytics = getAnalytics(app);