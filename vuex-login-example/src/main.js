import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import { store } from './store';
import { router } from './router';

Vue.config.productionTip = false
Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
