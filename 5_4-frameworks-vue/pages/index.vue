<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="4"
        lg="4"
        v-for="(personaje, index) in Personajes"
        :key="index"
      >
        <CardsVuetify :PersonajeProp="personaje"></CardsVuetify>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cards_vuetify from "../../5_3-layout-vuetify/src/components/cards_vuetify.vue";
import Personajes from "../personajes";
export default {
  components: { cards_vuetify },
  name: "IndexPage",

  data() {
    return {
      // Creamos la variable Personajes que almacena la data de Personajes.js
      Personajes: Personajes,
    };
  },
};
</script>
