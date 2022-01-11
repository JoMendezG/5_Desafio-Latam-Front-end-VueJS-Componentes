<template>
  <div>
    <h3>Crear cuenta</h3>
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

    <button type="button" class="btn btn-warning">Crear Cuenta</button>
  </div>
</template>

<script>
export default {};
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
