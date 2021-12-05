<template>
	<v-app>
		<v-main class="grey lighten-4">
			<nav-bar :auth-user="authUser"></nav-bar>
			<router-view
				:auth-user="authUser"
				:cart-list="cartList"
				:add-product-method="addProduct"
				:remove-product-method="removeProduct"
			/>
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
			cartList: [],
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

		removeProduct(item) {
			this.cartList.splice(this.cartList.indexOf(item), 1)
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
