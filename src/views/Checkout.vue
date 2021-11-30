<template>
	<v-container>

		<checkout-comp></checkout-comp>
	</v-container>
</template>

<script>
import CheckoutComp from '../components/CheckoutComp.vue'

export default {
	name: 'Checkout',
	components: {
		CheckoutComp,
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
