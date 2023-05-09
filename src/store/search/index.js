import { reqGetSearchInfo } from '@/api';
const search = {
	state: {
		searchList: {}
	},
	actions: {
		async getSearchList({ commit }, params = {}) {	
			let result = await reqGetSearchInfo(params)
			if (result.code == 200) {
				commit('GETSEARCHLIST', result.data)
				
			}
		}
	},
	mutations: {
		GETSEARCHLIST(state, searchList) {
			state.searchList = searchList
		}
	},
	getters: {
		goodsList(state) {
			return state.searchList.goodsList
		},
		attrsList(state) {
			return state.searchList.attrsList
		},
		trademarkList(state) {
			return state.searchList.trademarkList
		}
	}
}
export default search