<template>
  <div class="home">
    <img src="../assets/home.png" alt="" />
    <h2 class="text-warning">Log in exitoso</h2>
    <button
      @click="salirSesion"
      type="button"
      class="btn btn-warning d-block mx-auto"
    >
      Salir
    </button>
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
