<template>
	<div>
		<v-card class="mb-5" outlined max-width="250">
			<v-img :src="item.image"></v-img>
			<v-card-title> {{ item.name }}</v-card-title>
			<v-card-subtitle>{{ item.price }}</v-card-subtitle>
			<v-card-text>{{ item.description }}</v-card-text>
			<v-divider class="mx-4"></v-divider>
			<v-card-actions class="pl-4">
				<v-btn :disabled="disableAddToCartBtn" @click="addProduct">
					Add to Cart
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'Product',

	props: {
		item: Object,
		addProductMethod: Function,
	},

	data() {
		return {
			disableAddToCartBtn: false,
		}
	},

	methods: {
		//store all the cart items
		addProduct() {
			this.addProductMethod(this.item)
			this.disableAddToCartBtn = true
		},

		//attach the cart to a user
		// updateCart() {
		// 	db.collection('Cart')
		// 		.add({
		// 			name: this.item.name,
		// 			price: this.item.price,
		// 		})
		// 		.catch(error => {
		// 			console.log('Error adding recipe', error)
		// 			alert('ERROR!')
		// 		})
		// 		.finally(() => {
		// 			this.disableAddToCartBtn = true
		// 		})
		// },
	},
}
</script>

<style scoped></style>
