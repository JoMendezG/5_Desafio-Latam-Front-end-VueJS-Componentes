<template>
  <v-app>
    <v-main>
      <navBar></navBar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/navbarComponent.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    navBar,
  },
};
</script>
