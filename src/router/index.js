//引入vue
import Vue from 'vue';
//引入路由
import VueRouter from 'vue-router';
//routes
import routes from './routes';
//引入store
import store from '@/store';
//使用路由插件
Vue.use(VueRouter)

const router = new VueRouter({
	//配置路由
	mode: 'history',
	routes,
	//页面滚动
	scrollBehavior(to, from, savedPosition) {
		return { y: 0 }
	}
})
//全局守卫
// to:可以获取到你要跳转到那个路由
// from： 
//判断是否含有token
router.beforeEach((to, from, next) => {
	let token = store.state.user.token;
	if (token) {
		if (to.path == '/login' || to.path == 'register') {
			next('/')
		} else {
			try {
				store.dispatch('reqUserInfo')
				next()
			} catch (error) {
				store.dispatch('reqLogout')
				next('/login')
			}
		}
	} else {
		//未登录不能去交易、支付页
		if (to.path.indexOf('/Trade') != -1 || to.path.indexOf('/Pay') != -1 || to.path.indexOf('/Center') != -1) {
			//将要去的地址存到query
			next('/login?redirect=' + to.path)
		} else {
			next()
		}
	}

})
export default router