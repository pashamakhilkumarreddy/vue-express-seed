import Vue from 'vue';
import Vuex from 'vuex';
import createdPersistedState from 'vuex-persistedstate';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createdPersistedState(),
  ],
  state: {
    token: null,
  },
  actions,
  mutations,
  getters,
});
