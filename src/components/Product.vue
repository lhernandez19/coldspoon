<template>
	<div>
		<v-card elevation="2">
			<v-card-title>{{ item.name }}</v-card-title>
			<v-card-text>$ {{ item.price }}</v-card-text>
			<v-card-text>{{ item.quantity }}</v-card-text>
			<v-btn @click.prevent="updateCart"> Add to Cart </v-btn>
		</v-card>
	</div>
</template>

<script>
import { db } from '../firebase/firebase.js'

export default {
	name: 'Inventorytable',

	props: {
		item: {
			type: Object,
		},
	},

	methods: {
		updateCart() {
			db.collection('Cart')
				.add({
					name: this.item.name,
					price: this.item.price,
				})
				.catch(error => {
					console.log('Error adding recipe', error)
					alert('ERROR!')
				})
		},
	},
}
</script>

<style scoped></style>
