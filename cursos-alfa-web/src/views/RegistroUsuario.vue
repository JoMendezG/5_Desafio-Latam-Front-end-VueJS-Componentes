<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <div class="display-1 mb-5">Registro de Usuario</div>
        <v-text-field label="E-Mail" v-model="crear.usuario"> </v-text-field>
        <v-text-field
          type="password"
          label="Contraseña"
          v-model="crear.contrasena"
        >
        </v-text-field>
        <v-row align="center" justify="center" class="mt-3">
          <v-btn @click="registrar" elevation="2" color="success"
            >Registrar</v-btn
          >
          <v-btn elevation="2" color="error" class="mx-2" @click="clearForm"
            >Limpiar Formulario</v-btn
          >
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/" class="mt-3">Volver</router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { registrarUsuario } from "../firebase/firebase";

export default {
  data() {
    return {
      crear: {
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
    createUser(email, password) {
      console.log(email, password);
    },

    registrar() {
      registrarUsuario(
        this.crear.usuario,
        this.crear.contrasena,
        this.usuarioRegistrado
      );
    },

    usuarioRegistrado() {
      alert("Te has registrado con éxito");
      this.crear.usuario = "";
      this.crear.contrasena = "";
    },
  },
};
</script>
