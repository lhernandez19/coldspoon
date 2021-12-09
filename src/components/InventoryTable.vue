<template>
	<div>
		<v-container class="mt-4">
			<h1 class="my-4">Inventory Management</h1>

			<v-simple-table>
				<thead>
					<tr>
						<th class="text-left">NAME</th>
						<th class="text-left">DESCRIPTION</th>
						<th class="text-left">TYPE</th>
						<th class="text-left">AVAILABLE</th>
						<th class="text-left">QUANTITY</th>
						<th class="text-left">PRICE</th>
						<th class="text-left">ACTIONS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<inventory-item
							v-for="item in products"
							:key="item.name"
							:item="item"
						></inventory-item>
					</tr>
					<!-- <tr v-for="item in products" :key="item.name">
						<td>{{ item.name }}</td>
						<td>{{ item.description }}</td>
						<td>{{ item.type }}</td>
						<td type="date">{{ item.available }}</td>
						<td>{{ item.quantity }}</td>
						<td>{{ item.price }}</td>
						<td>
							<v-icon small @click.prevent="deleteItem"> mdi-delete </v-icon>
						</td>
					</tr> -->
				</tbody>
			</v-simple-table>
		</v-container>
	</div>
</template>

<script>
import InventoryItem from '@/components/InventoryItem'
import { db } from '../firebase/firebase.js'

export default {
	name: 'Inventorytable',
	components: {
		InventoryItem,
	},

	data() {
		return {
			products: [],
		}
	},

	firestore: {
		products: db.collection('gelatos'),
	},

	mounted() {},

	methods: {
		// deleteItem() {
		// 	db.collection('gelatos').doc(this.item.id).delete()
		// },
	},
}
</script>

<style lang="scss" scoped></style>
