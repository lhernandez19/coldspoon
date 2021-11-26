<template>
	<div>
		<v-container fluid>
			<v-container elevation="2">
				<v-row class="features">
					<v-col>
						<v-icon>mdi-truck</v-icon>
						<h3>Free Shipping</h3>
						<p>Above $25 only</p>
					</v-col>
					<v-col>
						<v-icon>mdi-truck</v-icon>
						<h3>Certified organic</h3>
						<p>Guarantee</p>
					</v-col>
					<v-col>
						<v-icon>mdi-truck</v-icon>
						<h3>Buy More, Save More</h3>
						<p>Low prices</p>
					</v-col>
					<v-col>
						<v-icon>mdi-truck</v-icon>
						<h3>Catering</h3>
						<p>Best in town</p>
					</v-col>
				</v-row>
			</v-container>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'ColdspoonFeaturescomp',

	data() {
		return {}
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
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
</style>
