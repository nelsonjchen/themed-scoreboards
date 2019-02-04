import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rankings: [],
  },
  mutations: {
    ...firebaseMutations,
  },
  actions: {
    setRankingsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('rankings', ref);
    }),
  },
  plugins: [],
});


