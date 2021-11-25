<template>
	<v-container :align-self="align" class="mt-5">
		<v-row justify="center">
			<v-col cols="6" class="white rounded-lg">
				<v-form ref="form" class="ma-5 pa-5">
					<h1>Login</h1>
					<span>Welcome back!</span>
					<v-text-field v-model="email" label="E-mail"></v-text-field>
					<v-text-field v-model="password" label="Password"></v-text-field>
					<v-btn
						type="submit"
						color="primary"
						class="mr-4"
						@click.prevent="signInUser"
					>
						Login
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { auth } from '../firebase/firebase.js'

export default {
	name: 'LoginComp',

	data() {
		return {
			email: '',
			password: '',
		}
	},

	methods: {
		signInUser() {
			auth.signInWithEmailAndPassword(this.email, this.password).then(
				() => {
					alert('Works')
				},
				err => {
					alert(`Error - ${err.message}`)
				}
			)
		},
	},
}
</script>

<style scoped>
span {
	color: #9e9e9e;
}
</style>
