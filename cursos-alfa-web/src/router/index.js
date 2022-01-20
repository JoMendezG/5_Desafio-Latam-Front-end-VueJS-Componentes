import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/LoginUsuario.vue";
import Registro from "../views/RegistroUsuario.vue";
import Admin from "../views/Admin.vue";
import Cursos from "../views/Cursos.vue";

import { observador } from "../firebase/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/Cursos",
    name: "Cursos",
    component: Cursos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  observador(to, next);
});

export default router;
