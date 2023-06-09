import Vue from 'vue';
import Vuex from 'vuex';
import Home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from './user';
import trade from './trade';
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Home,
		search,
		detail,
		shopcart,
		user,
		trade
	}
})