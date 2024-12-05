import { createRouter, createWebHistory } from "vue-router";

import Home from "@views/home/index.vue";
import Inlet from "@views/inlet/index.vue";
import Main from '@views/home/main/index.vue';
import Resource from '@views/home/resource/index.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Inlet
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/main', // Relative path for child route
          component: Main
        },
        {
          path: '/resource', // Relative path for child route
          component: Resource
        }
      ]
    }
  ]
});
export default router;
