<template>
	<v-container class="view">
		<!-- <h1>Home Page</h1> -->
		<flavor-of-the-week></flavor-of-the-week>
		<features-comp></features-comp>
		<vote></vote>
	</v-container>
</template>

<script>
import FlavorOfTheWeek from '@/components/FlavorOfTheWeek.vue'
import Vote from '../components/Vote.vue'
// import { db } from '../firebase/firebase.js'
import FeaturesComp from '../components/FeaturesComp.vue'

export default {
	name: 'Home',

	components: {
		FlavorOfTheWeek,
		Vote,
		FeaturesComp,
	},

	// props: {
	// 	votes: {
	// 		type: Array,
	// 	},
	// },

	// data() {
	// 	return {
	// 		vote: [],
	// 	}
	// },

	// firestore: {
	// 	vote: db.collection('Vote'),
	// },
}
</script>

<style scoped>
.view {
	min-height: 80vh;
}
</style>
