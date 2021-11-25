<template>
	<div class="view">
		<h1>Home Page</h1>
		<flavor-of-the-week></flavor-of-the-week>
		<vote></vote>
	</div>
</template>

<script>
import FlavorOfTheWeek from '@/components/FlavorOfTheWeek.vue'
import Vote from '../components/Vote.vue'
import { db } from '../firebase/firebase.js'

export default {
	name: 'Home',

	components: {
		FlavorOfTheWeek,
		Vote,
	},

	props: {
		votes: {
			type: Array,
		},
	},

	data() {
		return {
			vote: [],
		}
	},

	firestore: {
		vote: db.collection('Vote'),
	},
}
</script>

<style scoped>
.view {
	min-height: 80vh;
}
</style>
