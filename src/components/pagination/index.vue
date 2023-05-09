<template>
	<div class="pagination">
		<button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
		<button v-if="startNumAndEndNum.start > 1" @click="getPageNo(1)">1</button>
		<button v-if="startNumAndEndNum.start > 2">···</button>

		<button v-for="(page, index) in startNumAndEndNum.end" v-if="page >= startNumAndEndNum.start"
			@click="getPageNo(page)" :class="{ active: page == pageNo }">{{
				page
			}}</button>

		<button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
		<button v-if="startNumAndEndNum.end < totalPage" @click="getPageNo(totalPage)">{{ totalPage }}</button>
		<button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
		<button style="margin-left: 30px">共 {{ total }} 条</button>
	</div>
</template>

<script>
export default {
	name: "Pagination",
	props: ['pageNo', 'pageSize', 'total', 'continues'],
	computed: {
		//总页数
		totalPage() {
			return Math.ceil(this.total / this.pageSize)
		},
		startNumAndEndNum() {
			//    当前第几页   总页数       连续页码数
			const { pageNo, totalPage, continues } = this
			let start = 0, end = 0
			//当连续页码数大于总页数
			if (continues > totalPage) {
				start = 1
				end = totalPage
			} else {
				start = pageNo - parseInt(continues / 2)
				end = pageNo + parseInt(continues / 2)
				//当起始页小于1
				if (start < 1) {
					start = 1
					end = continues
				}
				//end大于总页码
				if (end > totalPage) {
					start = totalPage - continues + 1
					end = totalPage
				}
			}
			return { start, end }
		}
	},
	methods: {
		getPageNo(index) {
			this.$emit('getPageNo', index)
			console.log(this.pageNo);
		}
	},
}
</script>

<style lang="less" scoped>
.pagination {
	text-align: center;

	button {
		margin: 0 5px;
		background-color: #f4f4f5;
		color: #606266;
		outline: none;
		border-radius: 2px;
		padding: 0 4px;
		vertical-align: top;
		display: inline-block;
		font-size: 13px;
		min-width: 35.5px;
		height: 28px;
		line-height: 28px;
		cursor: pointer;
		box-sizing: border-box;
		text-align: center;
		border: 0;

		&[disabled] {
			color: #c0c4cc;
			cursor: not-allowed;
		}

		&.active {
			cursor: not-allowed;
			background-color: #409eff;
			color: #fff;
		}
	}
}
</style>
