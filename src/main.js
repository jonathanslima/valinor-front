import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import { routes } from './routes'

import './directives/ShowingItems';

export const serverBus = new Vue();

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  // mode: 'history',
  routes : routes
});


new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
