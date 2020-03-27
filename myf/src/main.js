import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
