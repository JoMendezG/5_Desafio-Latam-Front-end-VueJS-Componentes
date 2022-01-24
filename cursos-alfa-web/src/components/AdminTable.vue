<template>
  <v-data-table :headers="headers" :items="cursosData" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Crear Curso
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <!-- Modal para editar curso -->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Codigo"
                      label="Codigo del curso"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Curso"
                      label="Nombre del curso"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      type="number"
                      v-model="cursos.Cupos"
                      label="Cupos del curso"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      type="number"
                      v-model="cursos.Inscritos"
                      label="Inscritos en el curso"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Duracion"
                      label="Tiempo del curso "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      type="number"
                      v-model="cursos.Costo"
                      label="Costo del Curso"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Terminado"
                      label="Terminado?"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Fecha"
                      label="Fecha"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Foto"
                      label="URL Foto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      required
                      v-model="cursos.Descripcion"
                      label="Descripción del curso"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="crearCurso">
                Crear Curso
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <!-- Mensaje que se despliega al querer eliminar un curso -->
            <v-card-title class="text-h5"
              >¿Estas seguro de querer borrar el curso?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <!-- Botón que borra el curso directamente -->
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >Borrar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <!-- llevame a admin/id del curso -->
      <v-icon small class="mr-2" @click="$router.push(`/Admin/${item.id}`)">
        mdi-pencil
      </v-icon>
      <!-- Icono de la basura aquí se queda este método deleteItem -->
      <v-icon small @click="deleteItem"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
// Importamos la propiedad de agregar los datos en firebase
import { agregarDatos, borrarDatos } from "../firebase/firestore.js";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,

    // Ordenamos la data
    // data.VARIABLE porque en save Courses tengo data en los ()
    headers: [
      { text: "Curso", value: "data.Curso" },
      { text: "Cupos", value: "data.Cupos" },
      { text: "Inscritos", value: "data.Inscritos" },
      { text: "Duración", value: "data.Duracion" },
      { text: "Costo", value: "data.Costo" },
      { text: "Terminado", value: "data.Terminado" },
      { text: "Fecha", value: "data.Fecha" },
      { text: "Acciones", value: "actions", sortable: false },
    ],

    editedIndex: -1,

    // Aquí esta la data
    cursos: {
      Codigo: "",
      Curso: "",
      Cupos: 0,
      Inscritos: 0,
      Duracion: 0,
      Costo: 0,
      Terminado: "",
      Fecha: "",
      Foto: "",
      Descripcion: "",
    },

    defaultItem: {
      Codigo: "",
      Curso: "",
      Cupos: 0,
      Inscritos: 0,
      Duracion: 0,
      Costo: 0,
      Terminado: "",
      Fecha: "",
      Foto: "",
      Descripcion: "",
    },
  }),

  computed: {
    cursosData() {
      // Llamamos la info de firebase con "cursosDataFirebase" definifo en el store
      return this.$store.state.cursosDataFirebase;
    },

    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.$store.dispatch("getData");
  },

  methods: {
    // Aquí van todos los campos a subir
    crearCursoCallback() {
      alert("Curso creado con exito");
      this.cursos.Codigo = "";
      this.cursos.Curso = "";
      this.cursos.Cupos = "";
      this.cursos.Descripcion = "";
      this.cursos.Inscritos = "";
      this.cursos.Duracion = "";
      this.cursos.Costo = "";
      this.cursos.Terminado = "";
      this.cursos.Fecha = "";
      this.cursos.Foto = "";
    },

    // Metodo crear curso que va a firebase
    crearCurso() {
      agregarDatos(this.cursos, this.crearCursoCallback);
      this.$store.dispatch("getData");
      this.close();
    },

    // Creamos un método de borrar curso linkeado al store
    // TOMA EL ID
    borrarCurso(id) {
      this.$store.dispatch("borrarCurso", id);
    },

    // Este método va en el basurero
    deleteItem(item) {
      this.editedIndex = this.cursosData.indexOf(item);
      this.cursos = Object.assign({}, item);
      this.dialogDelete = true;
    },

    // Aquí borramos el curso
    // Usamos el método que viene del CRUD
    deleteItemConfirm() {
      this.cursosData.splice(this.editedIndex, 1);
      // Agrego mi función de borrar datos de firestore
      // Tomo el id de los cursos
      borrarDatos(this.cursos.id, this.borrarCurso);
      this.$store.dispatch("getData");
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.cursos = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.cursos = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.cursosData[this.editedIndex], this.cursos);
      } else {
        this.cursosData.push(this.cursos);
      }
      this.close();
    },
  },
};
</script>

<style>
div.v-data-table__wrapper {
  margin: 25px auto;
  width: 80%;
}
</style>
