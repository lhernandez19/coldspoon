<template>
	<div class="view">
		<v-container>
			<register-comp></register-comp>
		</v-container>
	</div>
</template>

<script>
import RegisterComp from '@/components/RegisterComp.vue'
export default {
	name: 'Register',

	components: {
		RegisterComp,
	},
}
</script>

<style scoped>
.view {
	min-height: 75vh;
}
</style>
