<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row>
        <v-col
          sm="12"
          md="4"
          lg="4"
          v-for="(personaje, index) in Personajes"
          :key="index"
        >
          <Cards :PersonajeProp="personaje"></Cards>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// Importamos el componente
import Cards from "../components/cards_vuetify.vue";
import NavBar from "../components/navBar_vuetify.vue";

// Importamos el listado de personajes
import Personajes from "../../personajes";
export default {
  data() {
    return {
      // Creamos la variable Personajes que almacena la data de Personajes.js
      Personajes: Personajes,
    };
  },
  components: {
    Cards,
    NavBar,
  },
};
</script>

<style></style>
