<template>
	<div>
		<td>{{ item.name }}</td>
		<td>{{ item.description }}</td>
		<td>{{ item.type }}</td>
		<td type="date">{{ item.available }}</td>
		<td>{{ item.quantity }}</td>
		<td>{{ item.price }}</td>
		<td>
			<v-icon small @click.prevent="deleteItem"> mdi-delete </v-icon>
		</td>
	</div>
</template>

<script>
import { db } from '../firebase/firebase.js'

export default {
	name: 'ColdspoonInventoryitem',
	props: {
		item: Object,
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {
		deleteItem() {
			db.collection('gelatos').doc(this.item.id).delete()
		},
	},
}
</script>

<style lang="scss" scoped></style>
