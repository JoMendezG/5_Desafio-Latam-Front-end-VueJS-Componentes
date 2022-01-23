<template>
  <!-- Mi div prncipal incluye una clase ligada al js que contiene la prop de mostrar y ocultar -->
  <div class="Registrar" :class="{ propShowRegistro }">
    <h3 class="text-start">Crear cuenta</h3>
    <form class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInputValue"
        placeholder="example@example.com"
        value="example@example.com"
        v-model="crear.usuario"
      />
      <label for="floatingInputValue">Correo electrónico</label>
    </form>

    <form class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingInputValue"
        value=""
        v-model="crear.contrasena"
      />
      <label for="floatingInputValue">Contraseña</label>
    </form>

    <button @click="registrar" type="button" class="btn btn-warning d-block">
      Crear Cuenta
    </button>

    <p class="small fw-bold mt-2 pt-1 mb-0 text-start">
      ¿Ya tienes una cuenta?
      <a @click.prevent="apagarRegistro" class="link-info" href=""
        >Iniciar sesión</a
      >
    </p>
  </div>
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

  // Llamo a la prop en braquets
  props: ["propShowRegistro"],

  methods: {
    apagarRegistro() {
      this.$emit("presionarRegistro");
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

<style>
.form-floating {
  width: 60%;
}

input {
  margin-top: 15px;
}

button {
  margin-top: 15px;
}

h3 {
  font-weight: normal;
}

/* El componente default o con la prop en false está desactivada */
.Registrar {
  display: none;
  opacity: 0;
  transition: all 1s ease;
}

/* Cuando la clase de la prop es true, se muestra el contenido */
.Registrar.propShowRegistro {
  display: block;
  opacity: 1;
}
</style>
