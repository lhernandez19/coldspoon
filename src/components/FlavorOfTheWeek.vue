<template>
	<div>
		<v-container class="bgHero">
			<v-row justify="center">
				<v-col cols="6" class="text-center">
					<h1 class="mt-5">COLD SPOON GELATO TOSA</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Reprehenderit aliquid quis quod voluptates veritatis. Non veritatis
						ullam est exercitationem ipsam doloremque eos alias harum, dolores a
						voluptate provident debitis laborum!
					</p>
					<v-btn>Shop Now</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'FlavorOfTheWeek',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
.bgHero {
	background-image: url(../assets/ChristmasGelato.jpg);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: scroll;
	height: 80vh;
	color: white;
}
</style>
