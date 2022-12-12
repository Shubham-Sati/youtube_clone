import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "clone-b5eb7.firebaseapp.com",
  projectId: "clone-b5eb7",
  storageBucket: "clone-b5eb7.appspot.com",
  messagingSenderId: "263082727011",
  appId: "1:263082727011:web:aa81b36c715d16e3498a56",
  measurementId: "G-TWT38W3F4N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
