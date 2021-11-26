<template>
	<div>
		<v-card elevation="2">
			<v-card-title>{{ item.name }}</v-card-title>
			<v-card-subtitle>$ {{ item.price }}</v-card-subtitle>
			<v-card-text>{{ item.quantity }}</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'CheckoutItem',

	props: {
		item: {
			type: Object,
		},
	},

	data() {
		return {}
	},


	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
