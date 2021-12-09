<template>
	<v-list two-line>
		<v-list-item-group active-class="pink--text" multiple>
			<v-list-item>
				<v-item-avatar>
					<v-img :src="item.image" width="50"></v-img>
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
					{{ item.price * item.quantity }}
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
import { db } from "../firebase/firebase.js";

export default {
	name: 'CheckoutItem',

	props: {
		item: Object,
		removeProductMethod: Function,
	},

	data() {
		return {
			orders:[]
		}
	},

	firestore:{
		orders: db.collection('orders'),
	},

	mounted() {},

	methods: {
		deleteItem() {
			this.removeProductMethod(this.item)
		},

		increaseQuantity() {
			this.item.quantity += 1
		},

		decreaseQuantity() {
			if (this.item.quantity > 1) {
				this.item.quantity -= 1
			}
		},

		
		placeOrder() {
			db.collection('orders')
				.add()
				.catch(error => {
					console.log('Error submitting order', error)
					alert('ERROR!')
				})
				.finally(() => {
					//todo 
				})
		},
	},
}
</script>

<style lang="scss" scoped></style>
