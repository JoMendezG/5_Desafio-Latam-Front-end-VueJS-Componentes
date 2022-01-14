<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <div class="izq">
      <img class="img-fluid" src="../assets/loginImage.png" alt="" />
    </div>

    <div class="der">
      <!-- Señalo que mi Registro tendrá una prop llamada "propShowRegistro" que almacena la booleana mostrarRegistro -->
      <Registro :propShowRegistro="mostrarRegistro"></Registro>
      <LogIn
        :propShowLogIn="mostrarLogIn"
        :propMetodo="mostrarFromulario"
      ></LogIn>
    </div>
  </div>
</template>

<script>
import LogIn from "../components/InicioSesion.vue";
import Registro from "../components/RegistrarUsuario.vue";
export default {
  data() {
    return {
      // Creo una variable booleana para mostrar el logIn, este será verdadero porque quiero que parta activado
      mostrarLogIn: true,
      // Creo una variable booleana para mostrar el registro, este será falso porque quiero que parta desactivado
      mostrarRegistro: false,
    };
  },
  components: {
    LogIn,
    Registro,
  },
  methods: {
    // Creo la función o método que cambiara los estados de las booleanas
    mostrarFormulario() {
      this.mostrarLogIn = !this.mostrarLogIn;
      this.mostrarRegistro = !this.mostrarRegistro;
    },
  },
};
</script>

<style>
.izq,
.der {
  width: 50%;
  margin-top: 50px;
}

img {
  width: 60%;
  display: block;
  margin: 0 auto;
}
</style>
