<template>
	<v-container class="voteBg">
		<v-row class="justify-space-around">
			<store-item
				:item="item"
				v-for="item in products"
				:key="item.id"
				:add-product-method="addProductMethod"
				:cartList="cartList"
				elevation="2"
			>
			</store-item>
		</v-row>
	</v-container>
</template>

<script>
import { db } from '../firebase/firebase.js'
import StoreItem from '@/components/StoreItem.vue'

export default {
	name: 'StoreList',

	components: {
		StoreItem,
	},

	data: () => ({
		products: [],
	}),

	props: {
		addProductMethod: Function,
		cartList: Array,
	},

	firestore: {
		products: db.collection('gelatos'),
		cart: db.collection('Cart'),
	},
}
</script>
