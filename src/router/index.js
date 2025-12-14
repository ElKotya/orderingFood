import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import ProductPage from '@/views/ProductPage.vue'

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/basket', name: 'Basket' , component: BasketPage },
  { path: '/product/:id', name: 'Product', component: ProductPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router



