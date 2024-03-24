// Bu dosya, Vue Router'ın nasıl kullanılacağını göstermektedir.
// npm install vue-router ile Vue Router'ı projemize ekleyebiliriz.
// Vue Router, Vue.js uygulamalarında sayfa yönlendirmeleri yapmak için kullanılır.

import { createRouter, createWebHistory } from 'vue-router';
import GirisSayfasi from '../components/GirisSayfasi.vue';
import KontrolPaneli from '../components/KontrolPaneli.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'GirisSayfasi',
      component: GirisSayfasi,
    },
    { // Bu route, kullanıcı kontrol paneline giriş yaptığında yönlendirileceği sayfayı belirler
      path: '/kontrol-paneli',
      name: 'KontrolPaneli',
      component: KontrolPaneli,
    },
  ],
});

export default router;
