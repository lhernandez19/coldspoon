<template>
	<v-app>
		<v-main class="grey lighten-4">
			<nav-bar></nav-bar>
			
			<router-view :authUser="authUser"/>
			<footer-comp></footer-comp>
		</v-main>
	</v-app>
</template>

<script>
import { auth } from './firebase/firebase.js'

import NavBar from '@/components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'

export default {
	name: 'App',

	data() {
		return {
			authUser: { uid: '' },
		}
	},

	components: {
		NavBar,
		FooterComp,
	},
	methods: {},

	created() {
		auth.onAuthStateChanged(user => {
			if (user) {
				console.log('Works', user)
				this.authUser = user
			} else {
				console.log('logged out.')
				this.authUser = { uid: '' }
			}

			// check if logged in
			// if(this.authUser.uid){}
			// v-if="authUser.uid"
		})
	},
}
</script>

<style scoped></style>
