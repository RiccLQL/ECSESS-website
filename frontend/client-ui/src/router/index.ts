import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import pathNames from "@/router/pathNames";

Vue.use(VueRouter);

const baseSlash: string = "/";

const routes: Array<RouteConfig> = [
  {
    path: baseSlash + pathNames.HOME,
    name: "Home",
    component: Home,
  },
  {
    path: baseSlash + pathNames.COUNCIL,
    name: "Council",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Council.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
