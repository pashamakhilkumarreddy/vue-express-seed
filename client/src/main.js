import Vue from 'vue';
import VueMeta from 'vue-meta';
import { sync } from 'vuex-router-sync';

import store from '@/store';
import router from '@/routes';
import App from './App.vue';
import './registerServiceWorker';

Vue.use(VueMeta);
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
