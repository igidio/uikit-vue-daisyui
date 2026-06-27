import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/shared/layouts/main-layout/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/features/main-page/MainPage.vue'),
        },
        {
          path: 'accordion',
          name: 'accordion',
          component: () => import('@/features/accordion/page/AccordionPage.vue'),
        },
        {
          path: 'icon',
          name: 'icon',
          component: () => import('@/features/icon/page/IconPage.vue'),
        },
      ],
    },
  ],
})

export default router
