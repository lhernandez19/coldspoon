<template>
	<v-list two-line>
		<v-list-item-group  active-class="pink--text" multiple>
			<v-list-item>
				<v-item-avatar>
					<v-img src="../assets/logoCS.png" width="50"></v-img>
				</v-item-avatar>
				<v-list-item-content>
					<v-list-item-title>{{ item.name }}</v-list-item-title>
				</v-list-item-content>

				<v-list-item-action>
					<v-btn
						class="mx-2"
						fab
						dark
						x-small
						color="primary"
						@click="increaseQuantity"
						><v-icon>mdi-plus</v-icon></v-btn
					>
				</v-list-item-action>
				<v-list-item-action class="mx-2">
					{{ item.quantity }}
				</v-list-item-action>
				<v-list-item-action>
					<v-btn
						class="mx-2"
						fab
						dark
						x-small
						color="red darken-2"
						@click="decreaseQuantity"
						><v-icon>mdi-minus</v-icon></v-btn
					>
				</v-list-item-action>

				<v-list-item-action>
					{{ item.price }}
				</v-list-item-action>

				<v-list-item-action>
					<v-icon color="red darken-3" @click.prevent="deleteItem">
						mdi-delete
					</v-icon>
				</v-list-item-action>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
import { db } from '../firebase/firebase.js'

export default {
	name: 'CheckoutItem',

	props: {
		item: {
			type: Object,
		},
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {
		deleteItem() {
			db.collection('Cart').doc(this.item.id).delete()
		},

		increaseQuantity() {
			let increase = (this.item.quantity += 1)
			db.collection('Cart')
				.doc(this.item.id)
				.update({
					quantity: increase,
				})
				.catch(error => {
					console.log('Error adding quantity', error)
					alert('Not working :(')
				})
		},

		decreaseQuantity() {
			let decrease = (this.item.quantity -= 1)
			db.collection('Cart')
				.doc(this.item.id)
				.update({
					quantity: decrease,
				})
				.catch(error => {
					console.log('Error decreasing quantity', error)
					alert('Not working :(')
				})
		},
	},
}
</script>

<style lang="scss" scoped></style>
