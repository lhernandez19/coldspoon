<template>
	<div>
		<product @add-to-cart="updateCart"></product>
    <p>{{cart}}</p>
	</div>
</template>

<script>
import Product from './Product.vue'
export default {
	components: { Product },
	name: 'Test',

	data() {
		return {
			cart: 0,
		}
	},

	methods: {
		updateCart() {
			this.cart += 1
		},
	},
}
</script>

<style scoped></style>
