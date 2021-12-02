<template>
	<v-container class="voteBg">
		<v-row class="justify-space-around">
			<product
				:item="item"
				v-for="item in products"
				:key="item.id"
				:add-product-method="addProduct"
				elevation="2"
			>
			</product>
		</v-row>
	</v-container>
</template>

<script>
import { db } from '../firebase/firebase.js'
import Product from '@/components/Product.vue'

export default {
	name: 'StoreComp',

	components: {
		Product,
	},

	data: () => ({
		products: [],
		cart: [],
	}),

	props: {
		addProductMethod: Function,
	},

	firestore: {
		products: db.collection('gelatos'),
		cart: db.collection('Cart'),
	},

}
</script>
