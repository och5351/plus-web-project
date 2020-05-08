import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pageNum: 1,
		category: '',
	},
	mutations: {
		setPageNum(state, pageNum) {
			state.pageNum = pageNum;
		},
		setCategory(state, category) {
			if (state.category === '') {
				state.category = category;
			} else if (category !== state.category) {
				state.category = category;
				state.pageNum = 1;
			}
		},
	},
	getters: {
		getPageNum(state) {
			return state.pageNum;
		},
	},
});
