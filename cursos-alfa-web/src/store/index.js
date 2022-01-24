import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { listarDatos } from "../firebase/firestore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cursosDataFirebase: [],
    loading: true,
    email: "",
  },
  getters: {
    filtrarCurso: (state) => (id) => {
      return state.cursosDataFirebase.filter((course) => course.id === id)[0];
    },
  },
  mutations: {
    getCourses(state, data) {
      state.cursosDataFirebase = data;
    },

    chargeLoading(state, data) {
      state.loading = data;
    },

    setEmail(state, data) {
      state.email = data;
    },

    eraseEmail(state) {
      state.email = "";
    },

    actualizarCurso(state, data) {
      state.cursosDataFirebase[data.index] = data.cursosDataFirebase;
    },
  },
  actions: {
    getData(context) {
      let saveCourses = (data) => {
        context.commit("getCourses", data);
      };
      // context.commit("getCourses", data)
      listarDatos(saveCourses);
    },
  },
  modules: {},
});
