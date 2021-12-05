<template>
	<div>
		<!-- <gelato ></gelato> -->
		<!-- <gelato :items="items" v-for="item in items" :key="item.name">
			
		</gelato> -->

		<v-card>
			<v-card-title>{{cartList.name}}</v-card-title>	
		</v-card>
		
	</div>
</template>

<script>
// import Gelato from './Gelato.vue'

export default {
	name: 'Store',
	components: {
		// Gelato,
	},

	props:{
		cartList: Object
	},

	// data() {
	// 	return {
	// 		items: [
	// 			{
	// 				name: 'Test1',
	// 				description: 'Test Description',
	// 			},
	// 			{
	// 				name: 'Test2',
	// 				description: 'Test Description',
	// 			},
	// 		],
	// 	}
	// },

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
