import Vue from "vue";
import VueRouter from "vue-router";
import FormularioPage from "../views/RegistroPage.vue";
import Home from "../views/Home.vue";

import { observador } from "../firebase/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Registro",
    component: FormularioPage,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    redirect: "/home",
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
