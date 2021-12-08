<template>
	<div>
		<v-container>
			<register-form></register-form>
		</v-container>
	</div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
export default {
	name: 'Register',

	components: {
		RegisterForm,
	},
}
</script>

<style scoped></style>
