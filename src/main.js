import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Nav from './components/Nav';
import Single from './components/Single';
import Couple from './components/Couple';

const routes = [
  {	path: '/', components: {default: Nav}, name: 'home' },
  { path: '/single', component: Single,  },
  { path: '/couple', component: Couple, name: 'couple' },
];
const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
}) 
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});

// const app = new Vue(App).$mount('#app');