<template>
	<v-container>
        <v-row> 
            <checkout-item
			:item="item" 
			v-for="item in products"
			:key="item.id"
			elevation="2"
		></checkout-item>
        </v-row>
        

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
