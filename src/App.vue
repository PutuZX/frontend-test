<template>
	<div>
		<tawk-header></tawk-header>
	</div>
	<div>
		<Suspense>
			<template #default>
				<router-view></router-view>
			</template>
		</Suspense>
	</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components:{
		'tawk-header': Header,
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>
