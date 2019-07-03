import Vue from 'vue';
import App from './App';
import { currency } from '@/currency';

Vue.config.productionTip = false;
Vue.filter('currency', currency);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
