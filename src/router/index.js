import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "pureHtml",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/pureHtml.vue")
  },
  {
    path: "/vuetifyView",
    name: "vuetifyView",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/vuetifyView.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
