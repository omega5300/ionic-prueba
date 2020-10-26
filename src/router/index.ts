import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'tab1',
    component: () => import('@/views/Tab1.vue'),
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import('@/views/Tab2.vue')
  },
  {
    path: '/tab3',
    name: 'tab3',
    component: () => import('@/views/Tab3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
