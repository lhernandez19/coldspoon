<template>
	<v-container>
		<checkout-comp :cartList="cartList" :remove-product-method="removeProductMethod"></checkout-comp>
	</v-container>
</template>

<script>
import CheckoutComp from '../components/CheckoutList.vue'

export default {
	name: 'Checkout',
	components: {
		CheckoutComp,
	},

	props: {
		cartList: Array,
		removeProductMethod: Function,
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style  scoped></style>
