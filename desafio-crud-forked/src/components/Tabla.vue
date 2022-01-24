<template>
  <div>
    <h2>Listado de posts</h2>
    <div class="loader" v-if="getLoader">Cargando...</div>
    <table class="table" v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Contenido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in getPosts" :key="index">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <button @click="deletePost(post.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  computed: {
    getPosts() {
      return this.$store.state.posts;
    },
    getLoader() {
      return this.$store.state.loading;
    },
  },
  methods: {
    deletePost(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
          alert(`Se ha eliminado el post con id ${id}`);
          this.$store.dispatch("getData");
        });
    },
  },
};
// https://jsonplaceholder.typicode.com/posts/1
</script>

