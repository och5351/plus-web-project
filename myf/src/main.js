import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
