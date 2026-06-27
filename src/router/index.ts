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
        {
          path: 'alert',
          name: 'alert',
          component: () => import('@/features/alert/page/AlertPage.vue'),
        },
        {
          path: 'avatar',
          name: 'avatar',
          component: () => import('@/features/avatar/page/AvatarPage.vue'),
        },
        {
          path: 'badge',
          name: 'badge',
          component: () => import('@/features/badge/page/BadgePage.vue'),
        },
        {
          path: 'breadcrumbs',
          name: 'breadcrumbs',
          component: () => import('@/features/breadcrumbs/page/BreadcrumbsPage.vue'),
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('@/features/button/page/ButtonPage.vue'),
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: () => import('@/features/calendar/page/CalendarPage.vue'),
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: () => import('@/features/carousel/page/CarouselPage.vue'),
        },
        {
          path: 'checkbox',
          name: 'checkbox',
          component: () => import('@/features/checkbox/page/CheckboxPage.vue'),
        },
        {
          path: 'collapse',
          name: 'collapse',
          component: () => import('@/features/collapse/page/CollapsePage.vue'),
        },
        {
          path: 'countdown',
          name: 'countdown',
          component: () => import('@/features/countdown/page/CountdownPage.vue'),
        },
        {
          path: 'divider',
          name: 'divider',
          component: () => import('@/features/divider/page/DividerPage.vue'),
        },
        {
          path: 'drawer',
          name: 'drawer',
          component: () => import('@/features/drawer/page/DrawerPage.vue'),
        },
        {
          path: 'dropdown',
          name: 'dropdown',
          component: () => import('@/features/dropdown/page/DropdownPage.vue'),
        },
        {
          path: 'hover3dcard',
          name: 'hover3dcard',
          component: () => import('@/features/hover3dcard/page/Hover3dcardPage.vue'),
        },
        {
          path: 'hovergallery',
          name: 'hovergallery',
          component: () => import('@/features/hovergallery/page/HovergalleryPage.vue'),
        },
        {
          path: 'input',
          name: 'input',
          component: () => import('@/features/input/page/InputPage.vue'),
        },
        {
          path: 'inputfile',
          name: 'inputfile',
          component: () => import('@/features/inputfile/page/InputfilePage.vue'),
        },
        {
          path: 'kbd',
          name: 'kbd',
          component: () => import('@/features/kbd/page/KbdPage.vue'),
        },
        {
          path: 'loading',
          name: 'loading',
          component: () => import('@/features/loading/page/LoadingPage.vue'),
        },
        {
          path: 'modal',
          name: 'modal',
          component: () => import('@/features/modal/page/ModalPage.vue'),
        },
        {
          path: 'progress',
          name: 'progress',
          component: () => import('@/features/progress/page/ProgressPage.vue'),
        },
        {
          path: 'radio',
          name: 'radio',
          component: () => import('@/features/radio/page/RadioPage.vue'),
        },
        {
          path: 'range',
          name: 'range',
          component: () => import('@/features/range/page/RangePage.vue'),
        },
        {
          path: 'select',
          name: 'select',
          component: () => import('@/features/select/page/SelectPage.vue'),
        },
        {
          path: 'status',
          name: 'status',
          component: () => import('@/features/status/page/StatusPage.vue'),
        },
        {
          path: 'steps',
          name: 'steps',
          component: () => import('@/features/steps/page/StepsPage.vue'),
        },
        {
          path: 'swap',
          name: 'swap',
          component: () => import('@/features/swap/page/SwapPage.vue'),
        },
        {
          path: 'tabs',
          name: 'tabs',
          component: () => import('@/features/tabs/page/TabsPage.vue'),
        },
        {
          path: 'textarea',
          name: 'textarea',
          component: () => import('@/features/textarea/page/TextareaPage.vue'),
        },
        {
          path: 'textrotate',
          name: 'textrotate',
          component: () => import('@/features/textrotate/page/TextrotatePage.vue'),
        },
        {
          path: 'timeline',
          name: 'timeline',
          component: () => import('@/features/timeline/page/TimelinePage.vue'),
        },
        {
          path: 'toast',
          name: 'toast',
          component: () => import('@/features/toast/page/ToastPage.vue'),
        },
        {
          path: 'toggle',
          name: 'toggle',
          component: () => import('@/features/toggle/page/TogglePage.vue'),
        },
        {
          path: 'tooltip',
          name: 'tooltip',
          component: () => import('@/features/tooltip/page/TooltipPage.vue'),
        },
      ],
    },
  ],
})

export default router
