// rules_version = '2';
// service cloud.firestore {
// match /databases/{database}/documents {
// match /{document=**} {
// allow read, write: if request.auth != null;
//  }
//  }
// }

// https://firebase.google.com/docs/firestore/quickstart

import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
// import { async } from "@firebase/util";

initializeApp(firebaseConfig);

const db = getFirestore();

// Nombre base de datos que se ve en firebase, primera columna
const col = "CursosPrueba";

//  Agregar datos
// https://firebase.google.com/docs/firestore/quickstart
const agregarDatos = async (data, callback) => {
  try {
    const docRef = await addDoc(collection(db, col), data);
    console.log("Document written with ID: ", docRef.id);
    callback();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document");
  }
};

// Lee Datos
// https://firebase.google.com/docs/firestore/quickstart?hl=es
const listarDatos = async (callback) => {
  const q = query(collection(db, col));
  try {
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    callback(data);
    console.log(data);
  } catch (e) {
    console.log("Error", e);
  }
};

// Borrar documentos
// https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=es
const borrarDatos = async (id) => {
  try {
    await deleteDoc(doc(db, col, id));
    alert("Curso Borrado");
  } catch (e) {
    console.log("Error", e);
  }
};

// Actualizar datos
const actualizarData = async (id, data) => {
  try {
    console.log("DATA", id, data);
    await setDoc(doc(db, col, id), data);
    alert("Datos actualizados");

    // Agregar callback aca
  } catch (e) {
    console.log("Error", e);
    alert("Error agregando documento");
  }
};

export { agregarDatos, listarDatos, borrarDatos, actualizarData };
