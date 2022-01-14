import { initializeApp } from "firebaes/app";
import firebaseConfig from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWhithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeApp(firebaseConfig);

const auth = getAuth();

const registrarUsuario = (email, password) => {
  // https://firebase.google.com/docs/auth/web/start
  // ACCESO USUARIOS EXISTENTES
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export { registrarUsuario };
