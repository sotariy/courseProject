import { createRouter, createWebHistory } from 'vue-router';
import Reg from '../components/Reg.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home', // Используем Reg как временный компонент для главной
    component: Reg
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Reg
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;