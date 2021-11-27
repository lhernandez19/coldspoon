<template>
	<v-card class="" outlined max-width="300">
		<v-img src="../assets/Chocolate.jpg"></v-img>
		<v-card-title>{{ item.name }}</v-card-title>
		<v-card-text>{{ item.description }}</v-card-text>
		<v-btn @click.prevent="voteCount"> Vote </v-btn>
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
