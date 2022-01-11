<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <div class="izq">
      <img class="img-fluid" src="../assets/loginImage.png" alt="" />
    </div>

    <div class="der">
      <Registro></Registro>
      <LogIn></LogIn>
    </div>
  </div>
</template>

<script>
import LogIn from "../components/InicioSesion.vue";
import Registro from "../components/RegistrarUsuario.vue";
export default {
  components: {
    LogIn,
    Registro,
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
