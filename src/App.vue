<template>
	<div id="app" class="app-container">
		<app-scroller
			:bounce="true"
			:scrollbar="true"
			:pullDownRefresh="true"
			:pullUpLoad="true">

		</app-scroller>
	</div>
</template>

<script>
import AppScroller from "@/components/common/AppScroller"
export default {
	directives: {

	},
	data() {
		return {

		}
	},
	methods: {

	},
	created() {

	},
	components: {
		AppScroller
	}
};
</script>

<style lang="less" scoped>
.app-container {
	height: 100%;
	width: 100%;
}
</style>