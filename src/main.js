import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
import installIcons from '@/icons/index';
import './permission';
import './styles/index.scss';
import i18n from '@/i18n';

console.log(process.env);

const app = createApp(App);

installElementPlus(app);
installIcons(app);
app.use(store).use(router).use(i18n).mount('#app');
