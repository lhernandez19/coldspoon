<template>
	<v-container>
		<h1>Checkout</h1>
		<v-list>
			<checkout-item
				:item="item"
				v-for="item in products"
				:key="item.id"
				elevation="2"
			></checkout-item>
			<v-divider></v-divider>
			<p>Subtotal</p>
			<p>Sales taxes</p>
			<h3>Total</h3>
		</v-list>
	</v-container>
</template>

<script>
import { db } from '../firebase/firebase.js'
import CheckoutItem from './CheckoutItem.vue'

export default {
	name: 'Checkoutcomp',

	components: { CheckoutItem },

	data: () => ({
		products: [],
	}),

	firestore: {
		products: db.collection('Cart'),
	},
}
</script>

<style lang="scss" scoped></style>
