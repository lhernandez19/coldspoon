<template>
	<div>
		<v-container class="my-5">
			<v-row class="discount center">
				<v-col cols="6" class="text-center">
					<h1 class="">Get 25% Off On Your First Purchase!</h1>
				</v-col>
				<v-col>
					<v-btn class="" to="/register">Register now!</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Discount',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
.discount {
	height: 200px;
	background-color: white;
	align-content: center;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgb(0 0 0 / 0.2);
}
</style>
