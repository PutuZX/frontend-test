import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router'
import { version } from 'vue';
console.log(version);
// create and mount the app
const app = createApp(App);
app.use(router);
app.mount('#app');
