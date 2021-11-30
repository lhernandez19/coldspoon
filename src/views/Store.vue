<template>
	<v-container>
		<h1>Items in Cart: {{ cart.length }}</h1>
		<v-row>
			<v-col cols="3">
				<side-bar></side-bar>
			</v-col>
			<v-col class="9">
				<store-comp></store-comp>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import StoreComp from '../components/StoreComp.vue'
import { db } from '../firebase/firebase.js'

export default {
	name: 'Store',

	components: { StoreComp, SideBar },

	props: {
		carts: Array,
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
