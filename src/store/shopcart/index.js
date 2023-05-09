import { reqCartList, reqDeleteCart, reqCheckCart } from '@/api';
const ShopCart = {
	state: {
		cartList: []
	},
	actions: {
		async getCartList({ commit }) {
			let result = await reqCartList()
			commit("GETSHOPCART", result.data)
		},
		async DeleCart({ commit }, skuId) {
			let result = await reqDeleteCart(skuId)
		},
		async CheckCartById({ commit }, { skuId, isChecked }) {
			let result = await reqCheckCart(skuId, isChecked)
		}
	},
	mutations: {
		GETSHOPCART(state, cartList) {
			state.cartList = cartList
		}
	},
	getters: {
		CartInfo: (state) => {
			return state.cartList[0] || {}
		}
	}
}
export default ShopCart