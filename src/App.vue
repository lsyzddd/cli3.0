<template>
	<div id="app">
		<div class="a">12312</div>
	</div>
</template>

<script>
export default {
	created() {
		console.log(process.env.VUE_APP_API_ROOT);
	}
};
</script>

<style lang="less" scoped>
.a{
	color: @red;
}
</style>
