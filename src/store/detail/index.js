import { reqGoodsInfo, reqAddGrUpdateShopCart } from '@/api';
import { getUUID } from '@/utils/uuid_token';
const detail = {
	state: {
		goodInfo: {},
		uuid_token: getUUID()
	},
	actions: {
		async getGoodInfo({ commit }, skuid) {
			let result = await reqGoodsInfo(skuid)
			commit('GETGOODINFO', result.data)
		},
		async getShopCart({ commit }, {skuId,skuNum}) {
			let result = await reqAddGrUpdateShopCart(skuId, skuNum)
			if (result.code == 200) {
				return 'ok'
			} else {
				return Promise.resolve(new Error('失败'))
			}
		}
	},
	mutations: {
		GETGOODINFO(state, goodInfo) {
			state.goodInfo = goodInfo
		}
	},
	getters: {
		categoryView(state) {
			//数据初始为空对象，空对象的属性值undefined
			return state.goodInfo.categoryView || {}
		},
		skuInfo(state) {
			return state.goodInfo.skuInfo || {}
		},
		spuSaleAttrList(state) {
			return state.goodInfo.spuSaleAttrList || []
		}
	}
}
export default detail