import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.use(VueResource)

export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
