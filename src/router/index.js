import { createRouter, createWebHistory } from "vue-router";

import Home from "@views/home/index.vue";
import Inlet from "@views/inlet/index.vue";
import Main from '@views/home/main/index.vue';
import Resource from '@views/home/resource/index.vue';
import Detials from "../views/home/resource/resource-detials/detials.vue";
import Create from "../views/home/create/create.vue";
import Person from "../views/home/person/person.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Inlet
    },
    {
      path:'/person',
      component: Person
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
          path: '/resource/search', // Relative path for child route
          component: Resource
        },
        {
          path: '/resource/view/:id', // Relative path for child route
          component: Detials
        },{
          path: '/create',
          component: Create
        }
      ]
    }
  ]
});
export default router;
