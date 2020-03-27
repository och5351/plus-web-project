import Vue from 'vue'
import App from './App.vue'
import {router}  from './routes/index.js'
import axios from 'axios'
import 'expose-loader?$!expose-loader?jQuery!jquery'



Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
