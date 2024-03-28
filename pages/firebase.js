// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgw7RNCLUPzusy6PpTbbmVwsXQBB9V4hs",
  authDomain: "bankingapp-41d2b.firebaseapp.com",
  projectId: "bankingapp-41d2b",
  storageBucket: "bankingapp-41d2b.appspot.com",
  messagingSenderId: "308264456359",
  appId: "1:308264456359:web:60ff463c34a1afdc96cb82",
  measurementId: "G-7P9HT6L0MZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, doc, setDoc,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,fetchSignInMethodsForEmail };