import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router'
import { createPinia } from 'pinia'
import './scss/_variables.scss'
import './scss/main.scss'

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount('#app');
