// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBeQyd2u35TqIXtqrcnLoGNlEm6D-gLRM",
  authDomain: "netflix-clone-bf14a.firebaseapp.com",
  projectId: "netflix-clone-bf14a",
  storageBucket: "netflix-clone-bf14a.appspot.com",
  messagingSenderId: "923612115063",
  appId: "1:923612115063:web:5ff3f06533af17dfb6d672",
  measurementId: "G-CHN8LRF4YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
