import 'bulma/css/bulma.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/database';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyALa4tI6lUvDRpa8Dc9K-Ehau36cfMlVEI',
  authDomain: 'themed-scoreboards.firebaseapp.com',
  databaseURL: 'https://themed-scoreboards.firebaseio.com',
  projectId: 'themed-scoreboards',
  storageBucket: 'themed-scoreboards.appspot.com',
  messagingSenderId: '1051809615125'
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
