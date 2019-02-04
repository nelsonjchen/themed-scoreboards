import createEasyFirestore from 'vuex-easy-firestore';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const rankings = {
  firestorePath: 'rankings',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'rankings',
  statePropName: 'data',
  namespaced: true, // automatically added
  // you can also add your own state/getters/mutations/actions
};

const easyFirestore = createEasyFirestore(rankings, { logging: true });

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [easyFirestore],
});


