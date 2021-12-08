<template>
	<v-container>
		<h1>Home Page</h1>
		<flavor-of-the-week></flavor-of-the-week>
		<features-comp></features-comp>
		<discount></discount>
		<vote></vote>
	</v-container>
</template>

<script>
import FlavorOfTheWeek from '@/components/FlavorOfTheWeek.vue'
import Vote from '../components/VoteList.vue'
// import { db } from '../firebase/firebase.js'
import FeaturesComp from '../components/Features.vue'
import Discount from '../components/Discount.vue'

export default {
	name: 'Home',

	components: {
		FlavorOfTheWeek,
		Vote,
		FeaturesComp,
		Discount,
	},

	props: {
		cartList: Array,
	},

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

</style>
