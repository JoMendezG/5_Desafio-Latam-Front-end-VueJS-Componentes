import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

// https://jsonplaceholder.typicode.com/posts

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: true
  },
  mutations: {
    addData(state, data) {
      state.posts = data;
    },

    cambiarEstadoCarga(state, data) {
      state.loading = data;
    }
  },
  actions: {
    getData(context) {
      context.commit("cambiarEstadoCarga", true);

      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log("Actualizando lista de posts");
          context.commit("addData", response.data);
          setTimeout(() => {
            context.commit("cambiarEstadoCarga", false);
          }, 2000);
        });
    }
  },
  modules: {}
});
