import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Импортируем маршрутизатор

createApp(App).use(router).mount('#app') // Используем маршрутизатор
