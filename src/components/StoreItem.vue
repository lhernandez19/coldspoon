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
	name: 'StoreItem',

	props: {
		item: Object,
		cartList: Array,
		addProductMethod: Function,
	},

	data() {
		return {
			disableAddToCartBtn: this.alreadyInCart(),
		}
	},

	methods: {
		//store all the cart items
		addProduct() {
			this.addProductMethod(this.item)
			this.disableAddToCartBtn = true
		},

		alreadyInCart() {
			// console.log("begin alreadyInCart");
			for(let cartItem of this.cartList) {
				// console.log(cartItem, " ", this.item.name);
				if(cartItem.name === this.item.name) {
					// console.log("returning true");
					return true;
				}
			}
			return false;
		}


	},
}
</script>

<style scoped></style>
