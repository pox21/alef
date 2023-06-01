import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import PreviewPage from '@/pages/PreviewPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/preview',
    name: 'preview',
    component: PreviewPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
