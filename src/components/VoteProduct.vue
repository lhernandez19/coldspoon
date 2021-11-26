<template>
	<v-container>
		<v-row>
			<v-col cols="4">
				<h2>{{ item.name }}</h2>
				<p>$ {{ item.description }}</p>
				<v-btn @click.prevent="voteCount"> Vote </v-btn>
			</v-col>
		</v-row>
	</v-container>
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
