import { reqCategoryList, reqGetbannerList, reqGetFloorList } from '@/api';
const Home = {
	state: {
		//三级联动
		categoryList: [],
		bannerList: [],
		floorList: []
	},
	actions: {
		//向服务器发送请求
		async categoryList({ commit }) {
			let result = await reqCategoryList()
			if (result.code == 200) {
				commit('CATEGORYLIST', result.data)
			}
		},
		async getBannerList({ commit }) {
			let result = await reqGetbannerList()
			if (result.data.code == 200) {
				commit('GETBANNERLIST', result.data.data)
			}
		},
		async getFloorList({ commit }) {
			let result = await reqGetFloorList()
			commit('GETFLOORLIST', result.data.data)
		}
	},
	mutations: {
		CATEGORYLIST(state, categoryList) {
			//将获取到的值赋给state
			state.categoryList = categoryList
		},
		GETBANNERLIST(state, bannerList) {
			state.bannerList = bannerList
		},
		GETFLOORLIST(state, floorList) {
			state.floorList = floorList
		}
	}
}
export default Home