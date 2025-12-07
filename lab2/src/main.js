import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import { getStoredUser } from './services/auth';
import { seedIfEmpty } from './services/fakeApi';

seedIfEmpty();


const app = createApp(App);

const authState = reactive({ user: getStoredUser() });
app.provide('authState', authState);

app.use(router);
app.mount('#app');
