<template>
	<v-card class="" outlined max-width="300">
		<v-img :src="item.image"></v-img>
		<v-card-title> {{ item.name }}</v-card-title>
		<v-card-subtitle>Votes: {{ item.votes }}</v-card-subtitle>
		<v-card-text>{{ item.description }}</v-card-text>
		<v-divider class="mx-4"></v-divider>
		<v-card-actions class="pl-4">
			<v-btn @click.prevent="voteCount"> Vote </v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { db } from '../firebase/firebase.js'

export default {
	name: 'VoteProduct',

	props: {
		item: {
			type: Object,
		},
	},

	methods: {
		voteCount() {
			let newVote = this.item.votes + 1

			db.collection('Vote')
				.doc(this.item.id)
				.update({
					votes: newVote,
				})
				.catch(error => {
					console.log('Error adding recipe', error)
					alert('Not working :(')
				})
		},
	},
}
</script>

<style scoped></style>
