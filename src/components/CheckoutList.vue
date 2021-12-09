<template>
	<v-container>
		<h1>Checkout</h1>
		<v-list>
			<checkout-item
				:item="item"
				v-for="item in cartList"
				:key="item.name"
				:remove-product-method="removeProductMethod"
				elevation="2"
			></checkout-item>
		</v-list>
	</v-container>
</template>

<script>
// import { db } from '../firebase/firebase.js'
import CheckoutItem from './CheckoutItem.vue'

export default {
	name: 'CheckoutList',

	components: { CheckoutItem },

	data: () => ({
		products: [],
	}),

	props: {
		cartList: Array,
		removeProductMethod: Function,
	},

	// firestore: {
	// 	products: db.collection('Cart'),
	// },

	methods: {},
}
</script>

<style scoped></style>
