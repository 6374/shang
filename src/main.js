import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
//模拟数据
import '@/Mock/Mockserve'
import TypeNav from '@/components/TypeNav';
import slideShow from '@/view/Home/slideshow';
import pagination from '@/components/pagination';
//swiper样式
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
//注册全局组件  组件名字     组件
//三级联动全局组件
Vue.component(TypeNav.name, TypeNav)
//轮播图全局组件
Vue.component(slideShow.name, slideShow)
//分页器全局组件
Vue.component(pagination.name, pagination)

//统一接口api文件内全部请求函数
import *as API from '@/api';
// Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//Element插件使用
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$message = Message;
//Vue图片懒加载 Vue2使用@1版本
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)
new Vue({
  render: h => h(App),
  //配置时间总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store,
}).$mount('#app')
