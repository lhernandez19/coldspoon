<template>
	<v-container class="voteBg">
		<v-row class=" justify-center text-center mx-auto">
			<h1>Vote for your favorite flavor</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
				doloribus laborum iusto ullam aliquam, officia accusamus quibusdam quae
				eveniet eos ad corporis voluptate, necessitatibus illum nobis, corrupti
				et sed similique?
			</p>
		</v-row>
		<v-row class="justify-space-around">
			<vote-product
				:item="item"
				v-for="item in products"
				:key="item.id"
				:justify="item"
			></vote-product>
		</v-row>
	</v-container>
</template>

<script>
import { db } from '../firebase/firebase.js'
import VoteProduct from '@/components/VoteProduct.vue'

export default {
	name: 'Vote',

	components: {
		VoteProduct,
	},

	data: () => ({
		products: [],
	}),

	firestore: {
		products: db.collection('Vote'),
	},
}
</script>

<style scoped>
.voteBg {
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgb(0 0 0 / 0.2);
}
</style>
