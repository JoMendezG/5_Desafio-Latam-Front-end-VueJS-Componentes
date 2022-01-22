<template>
  <v-container>
    <h1 class="my-3 text-center">Lista de cursos</h1>
    <v-row>
      <v-col cols="4" v-for="(cursos, index) in db" :key="index">
        <v-card>
          <v-img height="200px" :src="cursos.Imagen"> </v-img>

          <v-card-text>
            <h2 class="font-weight-bold ml-8 mb-2 mt-2">{{ cursos.Nombre }}</h2>

            <div class="font-weight-bold ml-8 mb-2">Información</div>

            <v-timeline align-top dense>
              <v-timeline-item small class="verde">
                <div>
                  <div class="font-weight-normal">
                    Costo: <strong>{{ cursos.Costo }}</strong>
                  </div>
                  <div>Duración: {{ cursos.Duración }}</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small>
                <div>
                  <div class="font-weight-normal">
                    Cupos: <strong>{{ cursos.Cupos }}</strong>
                  </div>
                  <div>Completado: {{ cursos.Completado }}</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small>
                <div>
                  <div class="font-weight-normal">Fecha de Registro:</div>
                  <div>Consultar!</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small>
                <div>
                  <div class="font-weight-normal">Descripción:</div>
                  <div>{{ cursos.Descripción }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// Importo la base de datos de json
import db from "../databse/db.json";

export default {
  data() {
    return {
      db: db,
    };
  },
};
</script>

<style>
div.v-card__text {
  background-color: #f2f2f2;
}
</style>
