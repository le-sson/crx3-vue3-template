import { createApp } from 'vue';
import App from './components/App.vue';
import ElementPlus from 'element-plus'; // vue3 中需使用 ElementPlus
import 'element-plus/dist/index.css';

createApp(App)
    .use(ElementPlus)
    .mount('#app')