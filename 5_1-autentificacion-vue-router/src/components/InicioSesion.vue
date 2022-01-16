<template>
  <div class="LogIn" :class="{ propShowLogIn }">
    <h3 class="text-start">Iniciar Sesión</h3>
    <form class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInputValue"
        placeholder="example@example.com"
        value="example@example.com"
      />
      <label for="floatingInputValue">Correo electrónico</label>
    </form>

    <form class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInputValue"
        value=""
      />
      <label for="floatingInputValue">Contraseña</label>
    </form>

    <button type="button" class="btn btn-warning d-block">
      Iniciar Sesión
    </button>
    <p class="small fw-bold mt-2 pt-1 mb-0 text-start">
      ¿No tienes una cuenta?
      <a @click.prevent="apagarLogIn" class="link-info" href="">Registrate</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ["propShowLogIn"],

  methods: {
    apagarLogIn() {
      // PResionar es el evento del emit
      this.$emit("presionar");
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

.LogIn {
  display: none;
  opacity: 0;
  transition: all 1s ease;
}

.LogIn.propShowLogIn {
  display: block;
  opacity: 1;
}
</style>
