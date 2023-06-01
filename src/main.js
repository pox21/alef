import { createApp } from 'vue';
import 'normalize.css';
import './style.scss';
import App from './App.vue';
import router from './router/route';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount('#app');
