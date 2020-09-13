import Vue from 'vue';
import App from './App.vue';
import router from './router';
import http from 'axios';
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import VueSession from 'vue-session';
import jQuery from 'jquery';
import { Editor } from '@toast-ui/vue-editor';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

Vue.use(VueSession, [{ persist: true }]);
Vue.use(BootstrapVue);
Vue.use(VueMomentJS, moment);

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype._$ = jQuery;
Vue.prototype.$toastEditor = Editor;

new Vue({
	router,
	render: v => v(App),
}).$mount('#app');
