<template>
  <div>
    <h1>Administración</h1>
    <tablaCursos></tablaCursos>
  </div>
</template>

<script>
import tablaCursos from "../components/AdminTable.vue";

export default {
  components: {
    tablaCursos,
  },
};
</script>
