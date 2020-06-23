import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMeta from 'vue-meta';
import {
  sync,
} from 'vuex-router-sync';

import App from './App.vue';
import router from './routes';
import store from './store';

import './registerServiceWorker';
import '../node_modules/vuetify/dist/vuetify.min.css';
import './assets/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueMeta);
sync(store, router);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
