import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { createPinia } from 'pinia';

const AppPinia = createPinia();

const app = createApp(App);

app.use(AppPinia).use(router);

app.mount('#app');
