import Vue from 'vue';
import App from './App.vue';
import router from './router';
import http from 'axios';
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import VueSession from 'vue-session';
import jQuery from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueSession, [{ persist: true }]);
Vue.use(BootstrapVue);
Vue.use(VueMomentJS, moment);

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype._$ = jQuery;

new Vue({
	router,
	render: v => v(App),
}).$mount('#app');
