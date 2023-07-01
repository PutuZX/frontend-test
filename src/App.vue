<template>
	<div>
		<tawk-header></tawk-header>
	</div>
	<div>
		<tawk-home></tawk-home>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue';

export default {
	components:{
		'tawk-header': Header,
		'tawk-home': Home
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>