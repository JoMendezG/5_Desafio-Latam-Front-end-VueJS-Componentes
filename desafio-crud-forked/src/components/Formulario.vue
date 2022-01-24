<template>
  <div class="formulario">
    <p>Crear post</p>
    <input name="titulo" class="form-control" v-model="titulo" />
    <textarea
      name="contenido"
      class="form-control"
      v-model="contenido"
    ></textarea>
    <button @click="createPost">Enviar</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      titulo: "",
      contenido: "",
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.titulo,
          body: this.contenido,
        })
        .then((response) => {
          alert("Post creado");
          this.$store.dispatch("getData");
        });
    },
  },
};
</script>
<style>
.formulario {
  width: 100%;
  max-width: 350px;
  display: block;
  margin: 50px auto;
  border: 1px solid gray;
  padding: 20px;
}
input,
textarea {
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
}
</style>
