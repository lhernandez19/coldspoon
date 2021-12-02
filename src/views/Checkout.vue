<template>
	<v-container>
		<checkout-comp :cartList="cartList"></checkout-comp>
	</v-container>
</template>

<script>
import CheckoutComp from '../components/CheckoutComp.vue'

export default {
	name: 'Checkout',
	components: {
		CheckoutComp,
	},

	props: {
		cartList: Array,
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style  scoped></style>
