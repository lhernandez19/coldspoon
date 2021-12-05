<template>
	<div>
		<v-app-bar app color="primary">
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="../assets/logoCS.png"
					transition="scale-transition"
					width="50"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="../assets/logoName2.png"
					width="325"
				/>
			</div>

			<v-spacer></v-spacer>

			<v-btn class="mr-2" to="/"><v-icon>mdi-home</v-icon></v-btn>
			<v-btn class="mr-2" to="/store"><v-icon>mdi-store</v-icon></v-btn>

			<v-btn class="mr-2" to="/checkout"
				><v-icon>mdi-cart </v-icon><span class="pl-3"></span>
			</v-btn>
			<template v-if="authUser && authUser.uid">
				<v-btn class="mr-2" to="/inventory"
					><v-icon>mdi-database</v-icon></v-btn
				>
				<v-btn @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
			</template>

			<template v-else
				><v-btn class="mr-2" to="/register"
					><v-icon>mdi-account-arrow-right</v-icon></v-btn
				>
				<v-btn class="mr-2" to="/login"><v-icon>mdi-account</v-icon></v-btn>
			</template>
		</v-app-bar>
	</div>
</template>

<script>
import { auth } from '../firebase/firebase.js'

export default {
	name: 'Navbar',

	data() {
		return {
			cart: 1,
		}
	},

	props: {
		authUser: Object,
	},

	mounted() {},

	methods: {
		updateCart() {
			this.cart += 1
		},

		logout() {
			auth.signOut()
		},
	},
}
</script>

<style scoped></style>
