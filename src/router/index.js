import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetailedCategory from "../views/DetailedCategory.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/getting-started",
    name: "Getting Started",
    component: DetailedCategory,
  },
  {
    path: "/chat-widget-customization",
    name: "Chat Widget Cutstomization",
    component: DetailedCategory,
  },
  {
    path: "/using-the-dashboard",
    name: "Using The Dashboard",
    component: DetailedCategory,
  },
  {
    path: "/integrations",
    name: "Integrations",
    component: DetailedCategory,
  },
  {
    path: "/advanced-features",
    name: "Advanced Features",
    component: DetailedCategory,
  },
  {
    path: "/ecommerce-integrations",
    name: "E-commerce Integrations",
    component: DetailedCategory,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
