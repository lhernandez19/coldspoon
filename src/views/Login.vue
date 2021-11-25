<template>
	<div class="view">
		<v-container>
			<div v-if="authUser.uid">Welcome {{ authUser.email }}</div>
			<login-comp></login-comp>
		</v-container>
	</div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'
export default {
	name: 'Login',
	props: {
		authUser: Object,
	},
	components: {
		LoginComp,
	},
}
</script>

<style scoped>
.view {
	min-height: 75vh;
}
</style>
