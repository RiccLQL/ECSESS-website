import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import pathNames from "@/router/pathNames";

Vue.use(VueRouter);

const baseSlash: string = "/";

const routes: Array<RouteConfig> = [
  {
    path: baseSlash,
    name: "Base",
    redirect: pathNames.HOME,
  },
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
      import("../views/Council.vue"),
  },
  {
    path: baseSlash + pathNames.COUNCIL + baseSlash + pathNames.JOIN,
    name: "Join ECSESS",
    component: () => import("../views/JoinCouncil.vue"),
  },
  {
    path: baseSlash + pathNames.COUNCIL + baseSlash + pathNames.DOCS,
    name: "Council Documents",
    component: () => import("../views/CouncilDocuments.vue"),
  },
  {
    path: baseSlash + pathNames.EVENTS + baseSlash + pathNames.ACADEMIC,
    name: "Academic Events",
    component: () => import("../views/AcademicEvents.vue"),
  },
  {
    path: baseSlash + pathNames.EVENTS + baseSlash + pathNames.INDUSTRY,
    name: "Industry Events",
    component: () => import("../views/IndustryEvents.vue"),
  },
  {
    path: baseSlash + pathNames.EVENTS + baseSlash + pathNames.SOCIAL,
    name: "Social Events",
    component: () => import("../views/SocialEvents.vue"),
  },
  {
    path: baseSlash + pathNames.EVENTS + baseSlash + pathNames.WELLNESS,
    name: "Wellness Events",
    component: () => import("../views/WellnessEvents.vue"),
  },
  {
    path: baseSlash + pathNames.EVENTS + baseSlash + pathNames.TECH,
    name: "Technical Events",
    component: () => import("../views/TechnicalEvents.vue"),
  },
  {
    path: baseSlash + pathNames.RESOURCES + baseSlash + pathNames.ACADEMIC,
    name: "Academic Resources",
    component: () => import("../views/AcademicResources.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
