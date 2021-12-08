<template>
	<v-footer padless class="justify-center">
		<v-card class="flex" flat tile>
			<v-card-title class="primary">
				<span class="subheading white--text"
					>Get connected with us on social networks!</span
				>
				<v-spacer></v-spacer>

				<v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
					<v-icon size="24px">
						{{ icon }}
					</v-icon>
				</v-btn>
			</v-card-title>

			<v-card-text class="py-2 text-center">
				{{ new Date().getFullYear() }} — <strong>Cold Spoon Gelato</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	data: () => ({
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
}
</script>
