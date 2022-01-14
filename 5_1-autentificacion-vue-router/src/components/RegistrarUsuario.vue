<template>
  <!-- Mi div prncipal incluye una clase ligada al js que contiene la prop de mostrar y ocultar -->
  <div class="Registrar" :class="{ propShowRegistro }">
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

    <p class="small fw-bold mt-2 pt-1 mb-0">
      ¿Ya tienes una cuenta?
      <a class="link-info" href="">Iniciar sesión</a>
    </p>
  </div>
</template>

<script>
export default {
  // Llamo a la prop en braquets
  props: ["propShowRegistro"],
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
