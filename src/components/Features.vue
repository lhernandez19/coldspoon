<template>
	<div>
		<v-container class="my-5">
			<v-row class="features">
				<v-list-item>
					<v-list-item-content v-for="item in features" :key="item.title">
						<v-icon class="mb-2">{{ item.icon }}</v-icon>
						<h3 class="mb-1">{{ item.title }}</h3>
						<p>{{ item.description }}</p>
					</v-list-item-content>
				</v-list-item>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Features',

	data() {
		return {
			features: [
				{
					icon: 'mdi-truck',
					title: 'Free Shipping',
					description: 'Above $25 only',
				},
				{
					icon: 'mdi-sprout',
					title: 'Certified organic',
					description: 'Guarantee',
				},
				{
					icon: 'mdi-cash',
					title: 'Buy More, Save More',
					description: 'Low prices',
				},
				{
					icon: 'mdi-silverware-fork-knife',
					title: 'Catering',
					description: 'Best in town',
				},
			],
		}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
.features {
	height: 200px;
	background-color: white;
	align-content: center;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgb(0 0 0 / 0.2);
}
</style>
