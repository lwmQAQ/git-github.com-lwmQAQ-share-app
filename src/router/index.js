import { createRouter, createWebHistory } from "vue-router";

import Home from "@views/home/index.vue";
import Inlet from "@views/inlet/index.vue";

const routes = [
  {
    path: "/inlet",
    name: "Inlet",
    component: Inlet,
  },
  {
    path: "/home",
    name: "Home",
    component: Home, // Home 作为父路由
  },
  // 可以将其他路由继续放在这里
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Vite 中获取基础 URL 的方式
    routes,
  });
export default router;
