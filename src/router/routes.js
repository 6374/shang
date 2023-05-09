//导出路由
import Home from '@/view/Home';
const routes = [
	//重定向，默认显示
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		//元信息
		meta: {
			show: true,
		}
	},
	{
		path: '/login',
		component: () => import('@/view/Login')
	},
	{
		path: '/register',
		component: () => import('@/view/Register')
	},
	{
		path: '/search/:keyword?',
		name: 'search',
		component: () => import('@/view/Search'),
		meta: {
			show: true,
		}
	},
	{
		path: '/detail/:skuid',
		name: 'detail',
		component: () => import('@/view/Detail'),
	},
	{
		path: "/AddCartSuccess",
		name: 'AddCartSuccess',
		component: () => import('@/view/AddCartSuccess'),
		meta: {
			show: true,
		}
	},
	{
		path: "/ShopCart",
		component: () => import('@/view/ShopCart'),
	},
	{
		path: "/Trade",
		component: () => import('@/view/Trade'),
		beforeEnter: (to, from, next) => {
			console.log(from.path);
			if (from.path == '/ShopCart') {
				next()
			} else {
				next(false)
			}
		}
	},
	{
		path: "/Pay",
		component: () => import('@/view/Pay'),
		beforeEnter: (to, from, next) => {
			if (from.path == '/Trade') {
				next()
			} else {
				next(false)
			}
		}
	},
	{
		path: "/PaySuccess",
		component: () => import('@/view/PaySuccess'),
	},
	{
		path: "/Center",
		component: () => import('@/view/Center'),
	}
]
export default routes