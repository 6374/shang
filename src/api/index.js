//api接口统一管理
import axios from 'axios';
import requests from './requests';
//1、三级联动
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
// 2、轮播图
export const reqGetbannerList = () => axios({ url: '/Mock/banner', method: 'get' })
// 3、floor
export const reqGetFloorList = () => axios({ url: '/Mock/floor', method: 'get' })
//4、search
export const reqGetSearchInfo = params => requests({ url: '/list', method: 'post', data: params })
//5、商品详情 地址栏传参
export const reqGoodsInfo = skuid => requests({ url: `/item/${skuid}`, method: 'get' })
//6、加入购物车
export const reqAddGrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
//7、购物车数据
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
//8、删除购物车商品
export const reqDeleteCart = skuId => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
// 9、修改商品选中状态
export const reqCheckCart = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
//10、获取手机验证码
export const reqPassport = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
//11、完成注册
export const reqRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })
// 12、登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })
// 13 token获取用户登录信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })
//14、退出登录
export const reqLogout = () => requests({ url: "/user/passport/logout", method: 'get' })
// 15、获取用户地址信息
export const reqAddressInfo = () => requests({ url: "/user/userAddress/auth/findUserAddressList", method: "get" })
// 16、获取用户商品清单
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })
// 17、提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })
// 18、获取支付信息
export const reqPayInfo = orderId => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
// 19、获取支付状态
export const reqPayStatus = (orderId) => requests({ url: `payment/weixin/queryPayStatus/${orderId}`, method: 'get' })