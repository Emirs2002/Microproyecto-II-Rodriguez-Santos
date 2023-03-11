import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyrAW-WmlG1uBhAn0YLhDlPc954RUZdaY",
  authDomain: "cinema-show-71e2c.firebaseapp.com",
  projectId: "cinema-show-71e2c",
  storageBucket: "cinema-show-71e2c.appspot.com",
  messagingSenderId: "485926470560",
  appId: "1:485926470560:web:46fee04b90a0eda5d19ac5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app); //conexion con el modulo de la bd

export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" }); //permite al usuario seleccionar entre sus cuentas de google
