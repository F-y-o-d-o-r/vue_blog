import Vue from 'vue';
import App from './App.vue';
import router from './router';

window.butter = require('buttercms')('be87ba792e04772a2ed4347ee55695e57933c1e0');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
