<template>
  <div class="home">
    <h2>Log in exitoso</h2>
    <button @click="salirSesion">Salir</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { logout } from "../firebase/firebase";

export default {
  name: "Home",

  methods: {
    salirSesion() {
      logout();
    },
  },
};
</script>
