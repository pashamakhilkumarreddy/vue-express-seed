import Vue from 'vue';
import Router from 'vue-router';
import Pages from '../pages';

Vue.use(Router);

export default new Router({
  // base: '',
  mode: 'history',
  routes: [{
    path: '/',
    component: Pages.Home,
    name: 'home',
  }],
});
