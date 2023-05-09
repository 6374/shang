<template>
	<div>
		<TypeNav />
		<ListContainer />
		<Recommend />
		<Rank />
		<Like />
		<Floor v-for="(item, index) in floorList" :key="index" :list="item" />
		<Brand />
	</div>
</template>

<script>
import ListContainer from './ListContainer';
import Recommend from './Recommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
import { mapState } from 'vuex';
export default {
	name: '',
	components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
	mounted() {
		//获取floor组件数据
		this.$store.dispatch('getFloorList')
		//获取用户信息
		async function name(params) {
			try {
				await this.$store.dispatch('reqUserInfo')
			} catch (error) {
				console.log(error);
			}

		}


	},
	computed: {
		...mapState({
			floorList: state => state.Home.floorList
		})
	},
}
</script>