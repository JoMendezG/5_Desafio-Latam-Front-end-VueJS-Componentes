<template>
  <div id="app">
    <Formulario></Formulario>
    <Tabla></Tabla>
  </div>
</template>

<script>
import Tabla from "./components/Tabla.vue";
import Formulario from "./components/Formulario.vue";
export default {
  components: {
    Formulario,
    Tabla,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
