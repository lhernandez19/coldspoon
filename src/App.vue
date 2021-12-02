<template>
	<v-app>
		<v-main class="grey lighten-4">
			<nav-bar :auth-user="authUser"></nav-bar>
			<router-view :auth-user="authUser" :cartList="cartList" v-bind:add-product-method="addProduct" />
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
			cartList: [
				{name: 'test', price: '9'},
				{name: 'test', price: '9'}
			],
		}
	},

	components: {
		NavBar,
		FooterComp,
	},

	methods: {
		addProduct(newProduct) {
			this.cartList.push(newProduct)
		},
	},

	created() {
		auth.onAuthStateChanged(user => {
			if (user) {
				console.log('Works', user)
				this.authUser = user
			} else {
				console.log('logged out.')
				this.authUser = { uid: '' }
			}
		})
	},

	mounted: function () {
		if (localStorage.getItem('cartList')) {
			this.cartList = JSON.parse(localStorage.getItem('cartList'))
		}
	},

	watch: {
		cartList: {
			handler(newList) {
				localStorage.setItem('cartList', JSON.stringify(newList))
			},
			deep: true,
		},
	},
}
</script>

<style scoped></style>
