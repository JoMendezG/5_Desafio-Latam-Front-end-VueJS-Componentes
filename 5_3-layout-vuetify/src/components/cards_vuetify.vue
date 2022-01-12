<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="PersonajeProp.imagen" height="200px"></v-img>

    <v-card-title> {{ PersonajeProp.nombre }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  // Creamos las malditas props </3
  props: ["PersonajeProp"],
};
</script>

<style></style>
