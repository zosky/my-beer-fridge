import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/barView.vue'
const routes = [
  { path: '/my-beer-fridge/', name: 'bar', component: Home },
  { path: '/my-beer-fridge/add', name: 'fridge', 
    component: () => import( '../components/addBeer.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router