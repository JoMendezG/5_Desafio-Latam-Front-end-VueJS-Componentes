<template>
  <v-container>
    <h1 class="my-3 text-center">Lista de cursos</h1>
    <v-row>
      <v-col
        cols="4"
        v-for="(cursos, index) in cursosDataFirebase"
        :key="index"
      >
        <v-card>
          <v-img height="200px" :src="cursos.data.Foto"> </v-img>

          <v-card-text>
            <h2 class="font-weight-bold ml-8 mb-2 mt-2">
              {{ cursos.data.Curso }}
            </h2>

            <div class="font-weight-bold ml-8 mb-2">Información</div>

            <v-timeline align-top dense>
              <v-timeline-item small color="purple">
                <div>
                  <div class="font-weight-normal">
                    Costo: <strong>{{ cursos.data.Costo }}</strong>
                  </div>
                  <div>Duración: {{ cursos.data.Duración }}</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small color="green">
                <div>
                  <div class="font-weight-normal">
                    Cupos: <strong>{{ cursos.data.Cupos }}</strong>
                  </div>
                  <div>Completado: {{ cursos.data.Terminado }}</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small color="purple">
                <div>
                  <div class="font-weight-normal">Fecha de Registro:</div>
                  <div>
                    <strong>{{ cursos.data.Fecha }}</strong>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item small color="green">
                <div>
                  <div class="font-weight-normal">Descripción:</div>
                  <div>{{ cursos.data.Descripcion }}</div>
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
export default {
  created() {
    this.$store.dispatch("getData");
  },
  computed: {
    cursosDataFirebase() {
      return this.$store.state.cursosDataFirebase;
    },
  },
};
</script>

<style>
div.v-card__text {
  background-color: #f2f2f2;
}
</style>
