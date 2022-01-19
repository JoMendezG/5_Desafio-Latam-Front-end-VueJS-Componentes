<template>
  <v-app dark>
    <navBarComponent></navBarComponent>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navBarComponent from "../components/navbarComponent.vue";

export default {
  name: "DefaultLayout",
  components: {
    navBarComponent,
  },
};
</script>
