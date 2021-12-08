<template>
	<div>
		<v-container>
			<template v-if="authUser.uid">Welcome {{ authUser.email }}</template>
			<login-form></login-form>
		</v-container>
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
	name: 'Login',
	props: {
		authUser: Object,
	},
	components: {
		LoginForm,
	},
}
</script>

<style scoped></style>
