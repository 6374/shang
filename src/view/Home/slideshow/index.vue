<template>
	<!--banner轮播-->
	<div class="swiper-container" ref="cur">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in list" :key="item.id">
				<img :src="item.imgUrl">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

		<!-- 如果需要导航按钮 -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default {
	name: 'slideShow',
	props: ['list'],
	watch: {
		//立即执行
		immediate: true,
		list(newVlue, oldValue) {
			this.$nextTick(() => {
				let mySwiper = new Swiper(this.$refs.cur, {
					loop: true,
					autoplay: true,
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				})
			})
		}
	}
}
</script>