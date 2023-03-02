import { createApp } from 'vue'
import App from './components/App.vue';
// import store from '@/content-scripts/store'; // VueX 酌情考虑是否使用
import ElementPlus from 'element-plus'; // vue3 中需使用 ElementPlus
import 'element-plus/dist/index.css';


document.addEventListener('DOMContentLoaded', function () {
	const div = document.createElement('div');
    div.id = 'crx3-vue3-template';
    document.body.appendChild(div);
    createApp(App)
        // .use(store)
        .use(ElementPlus)
        .mount('#crx3-vue3-template'); 
});