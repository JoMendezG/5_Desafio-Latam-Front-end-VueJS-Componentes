<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <h1 class="display-1 mb-5">Login de Usuario</h1>
        <v-text-field label="E-Mail" v-model="ingresar.usuario"> </v-text-field>
        <v-text-field
          type="password"
          label="Contraseña"
          v-model="ingresar.contrasena"
        >
        </v-text-field>
        <v-row align="center" justify="center" class="mt-3">
          <v-btn elevation="2" color="success" @click="logIn">Iniciar</v-btn>
          <v-btn elevation="2" color="error" class="mx-2" @click="clearForm"
            >Limpiar Formulario</v-btn
          >
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/Registro" class="mt-3">Registro</router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { iniciarSesion } from "../firebase/firebase";

export default {
  data() {
    return {
      ingresar: {
        usuario: "",
        contrasena: "",
      },
    };
  },
  methods: {
    clearForm() {
      this.email = "";
      this.password = "";
    },

    logIn() {
      iniciarSesion(
        this.ingresar.usuario,
        this.ingresar.contrasena,
        this.logInIncorrecto
      );
    },

    logInIncorrecto(error) {
      if (error === "auth/invalid-email") {
        alert("Correo Incorrecto");
      }
      if (error == "auth/wrong-password") {
        alert("Contraseña erronea");
      }
    },
  },
};
</script>

<style>
h1 {
  font-family: "Roboto", sans-serif;
}
</style>
