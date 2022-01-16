import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializeApp(firebaseConfig);

const auth = getAuth();

// Registro
// https://firebase.google.com/docs/auth/web/start
// Registra usuarios nuevos
const registrarUsuario = (email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      callback();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

// LogIn
// https://firebase.google.com/docs/auth/web/start
// Acceso de usuarios existentes
const iniciarSesion = (email, password, callback) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      callback(errorCode);
    });
};

export { registrarUsuario, iniciarSesion };
