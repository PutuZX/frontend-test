import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // or wherever your Home component is

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
