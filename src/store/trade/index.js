import { reqAddressInfo, reqOrderInfo } from '@/api';
const trade = {
	state: {
		address: [],
		orderInfo: {}
	},
	actions: {
		//获取用户地址
		async getUserAddress({ commit }) {
			let result = await reqAddressInfo()
			commit('GETUSERADDRESS', result.data)
		},
		//获取用户商品清单
		async getOrderInfo({ commit }) {
			let result = await reqOrderInfo()
			commit('GETORDERINFO', result.data)
		}
	},
	mutations: {
		GETUSERADDRESS(state, address) {
			state.address = address
		},
		GETORDERINFO(state, orderInfo) {
			state.orderInfo = orderInfo
		}
	}
}
export default trade