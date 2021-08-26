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
    component: () => import("../views/Council.vue"),
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
  {
    path: baseSlash + pathNames.EVENTS,
    name: "Upcoming Events",
    component: () => import("../views/EventsCalendar.vue"),
  },
  {
    path: baseSlash + pathNames.RESOURCES + baseSlash + pathNames.INDUSTRY,
    name: "Industry Resources",
    component: () => import("../views/IndustryResources.vue"),
  },
  {
    path: baseSlash + pathNames.RESOURCES + baseSlash + pathNames.WELLNESS,
    name: "Mental Health Resources",
    component: () => import("../views/MentalHealthResources.vue"),
  },
  {
    path: baseSlash + pathNames.RESOURCES + baseSlash + pathNames.OTHER,
    name: "Other Resources",
    component: () => import("../views/OtherResources.vue"),
  },
  {
    path: baseSlash + pathNames.PHOTOS,
    name: "ECSE Photo Archive",
    component: () => import("../views/Photos.vue"),
  },
  {
    path: baseSlash + pathNames.ECSESSBITS,
    name: "ECSESSBits - ECSE First Year Council",
    component: () => import("../views/ECSESSBits.vue"),
  },
  {
    path: baseSlash + pathNames.STUDENT_SPACES,
    name: "Student Spaces",
    component: () => import("../views/StudentSpaces.vue"),
  },
  {
    path: baseSlash + pathNames.SOCIAL_HANDLES,
    name: "Social Media Links",
    beforeEnter(to, from, next) {
      location.href = "https://linktr.ee/ecsess"; 
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
