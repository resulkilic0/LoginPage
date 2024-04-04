// router, bootstrap ve bootstrap-vue modüllerini projemize ekledikten sonra, main.js dosyasını aşağıdaki gibi güncelleydik
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
createApp(App).use(router).mount('#app');

