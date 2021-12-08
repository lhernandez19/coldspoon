<template>
	<v-container class="mt-5">
		<v-row justify="center">
			<v-col cols="6" class="white rounded-lg">
				<v-form ref="form" class="ma-5 pa-5">
					<h1>404</h1>
					<v-divider></v-divider>
					<h2>Page not found</h2>
					<p>You need to be an admin in order to access this page</p>
					<v-btn to="/login"> Login </v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Page404',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
