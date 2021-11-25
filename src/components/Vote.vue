<template>
	<v-container>
		<vote-product
			:item="item"
			v-for="item in products"
			:key="item.id"
		></vote-product>
	</v-container>
</template>

<script>
import { db } from '../firebase/firebase.js'
import VoteProduct from '@/components/VoteProduct.vue'

export default {
	name: 'Vote',

	components: {
		VoteProduct,
	},

	data: () => ({
		products: [],
	}),

	firestore: {
		products: db.collection('Vote'),
	},
}
</script>

<style scoped></style>
