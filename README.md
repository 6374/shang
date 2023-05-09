插件使用：
	less：安装less、less-loader@5

1、home
	1、封装全局组件
	三级分类
		全局引用
		使用事件委派，减少多个事件回调，通过个每个层级添加两个自定义属性，判断选中的是那个
		通过router中meta原数据判断是否显示组件
		使用lodash中防抖throttle //按需引入lodash：import throttle from 'lodash/throttle'; 使用demo:throttle()
	轮播图
		swiper实例需要在DOM机构构建完成时创建
		动态绑定id使用ref
2、search

