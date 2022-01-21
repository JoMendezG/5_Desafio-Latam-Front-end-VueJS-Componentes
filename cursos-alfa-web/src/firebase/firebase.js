import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

// Observador
// https://firebase.google.com/docs/auth/web/start
// Configura un observador de estado de autenticación y obtén datos del usuario
const observador = (to, next) => {
  onAuthStateChanged(auth, (user) => {
    // Si el usuario esta logeado
    if (user) {
        // Estoy logeado y voy a la ruta login 
      if (to.path === "/") {
        //   me lleva al principal ya que estoy logeado
        next("/Cursos");
        // De lo contrario voy a cualquier pagina ya que estoy logeado
      } else {
        next();
      }
      // Si no esta logeado
    } else { 
      if (to.path !== "/") {
        next("/");
      } else {
        next();
      }
    }
  });
};

const logout = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { registrarUsuario, iniciarSesion, observador, logout };
