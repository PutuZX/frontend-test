import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailedCategory from '../views/DetailedCategory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/getting-started',
    name: 'Getting Started',
    component: DetailedCategory
  },
  {
    path: '/chat-widget-customization',
    name: 'Chat Widget Cutstomization',
    component: DetailedCategory
  },
  {
    path: '/using-the-dashboard',
    name: 'Using The Dashboard',
    component: DetailedCategory
  },
  {
    path: '/integrations',
    name: 'Integrations',
    component: DetailedCategory
  },
  {
    path: '/advanced-features',
    name: 'Advanced Features',
    component: DetailedCategory
  },
  {
    path: '/ecommerce-integrations',
    name: 'E-commerce Integrations',
    component: DetailedCategory
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
