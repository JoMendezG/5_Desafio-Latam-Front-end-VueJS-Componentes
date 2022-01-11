<template>
  <div>
    <h3>Iniciar Sesióon</h3>
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

    <button type="button" class="btn btn-warning">Iniciar Sesión</button>
    <p class="small fw-bold mt-2 pt-1 mb-0">
      ¿No tienes una cuenta?
      <a class="link-info" @click="registrarPage()">Registrate</a>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    registrarPage() {},
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
</style>
