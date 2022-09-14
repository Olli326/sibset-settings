import Vue from 'vue';
import VueRouter from 'vue-router';
import ServicesPage from '../views/ServicesPage.vue';
import SettingsPage from '../views/SettingsPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'services',
    component: ServicesPage,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
