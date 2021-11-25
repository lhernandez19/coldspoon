<template>
	<div>
		<v-container>
			<v-card class="m-2 p-2">
				<v-row>
					<v-col cols="6" class="px-5">
						<v-img
							height="250"
							src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
						></v-img>
					</v-col>
					<v-col cols="6" class="px-5">
						<h2 class="my-4">Flavor of the week</h2>
						<p class="my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
							accusamus quisquam accusantium adipisci libero suscipit asperiores
							facilis molestias esse, possimus praesentium, quasi aut nobis est
							eos dolor perspiciatis? Fugit, iure.
						</p>
						<v-btn class="mt-2" rounded color="primary" dark> Shop Now </v-btn>
					</v-col>
				</v-row>
			</v-card>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'ColdspoonFlavoroftheweek',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
