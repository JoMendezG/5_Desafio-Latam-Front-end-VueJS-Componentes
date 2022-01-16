import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initializeApp(firebaseConfig);

const auth = getAuth();

// Registro
// https://firebase.google.com/docs/auth/web/start
// Registra usuarios nuevos

const registrarUsuario = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

export { registrarUsuario };
