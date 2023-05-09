import { reqPassport, reqRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api';
const register = {
	state: {
		token: localStorage.getItem('token'),
		userInfo: {}
	},
	actions: {
		async getCode({ commit }, phone) {
			let result = await reqPassport(phone)
			console.log(result);
		},
		//注册用户的地方
		async registerUser({ commit, state, dispatch }, obj) {
			//注册接口没有返回data,不需要提交mutation
			let result = await reqRegister(obj);
			if (result.code == 200) {
				//注册成功
				return 'ok';
			} else {
				//注册失败
				return Promise.reject(new Error(result.message));
			}
		},
		// 登录业务 token
		async userLogin({ commit }, data) {
			let result = await reqUserLogin(data)
			if (result.code == 200) {
				commit("USERLOGIN", result.data.token)
				localStorage.setItem('token', result.data.token)
				return 'ok'
			} else {
				return Promise.reject(new Error('faile'));
			}
		},
		//获取用户信息
		async reqUserInfo({ commit }) {
			let result = await reqUserInfo()
			if (result.code == 200) {
				commit('GETUSERINFO', result.data)
				return 'ok'
			} else {
				return Promise.reject(new Error('faile'));
			}
		},
		//退出登录
		async reqLogout({ commit }) {
			let result = await reqLogout()
			commit('CLEAR')
		}
	},
	mutations: {
		USERLOGIN(state, token) {
			state.token = token
		},
		GETUSERINFO(state, userInfo) {
			state.userInfo = userInfo
		},
		CLEAR(state) {
			state.token = ''
			state.userInfo = {};
			localStorage.removeItem('token')
		}
	}
}
export default register