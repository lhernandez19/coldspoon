<template>
	<v-container>
		<h1>Items in Cart: {{ cart.length }}</h1>
		<store-comp></store-comp>
	</v-container>
</template>

<script>
import StoreComp from '../components/StoreComp.vue'
import { db } from '../firebase/firebase.js'

export default {
	name: 'Store',

	components: { StoreComp },

	props: {
		carts: {
			type: Array,
		},
	},

	data() {
		return {
			cart: [],
		}
	},

	firestore: {
		cart: db.collection('Cart'),
	},

	methods: {},
}
</script>

<style scoped></style>
