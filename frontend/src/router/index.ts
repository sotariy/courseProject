import { createRouter, createWebHistory } from 'vue-router';
import Reg from '../components/Reg.vue';
import Login from '../components/Login.vue';
import Main from '../components/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Home', 
    component: Main
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