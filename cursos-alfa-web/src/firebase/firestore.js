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
const borrarDatos = async (data, callback) => {
  await deleteDoc(doc(db, col), data);
  callback();
};

export { agregarDatos, listarDatos, borrarDatos };
