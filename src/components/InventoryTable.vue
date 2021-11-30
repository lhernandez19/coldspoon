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
					<tr v-for="item in products" :key="item.name">
						<td>{{ item.name }}</td>
						<td>{{ item.description }}</td>
						<td>{{ item.type }}</td>
						<td type="date">{{ item.available }}</td>
						<td>{{ item.quantity }}</td>
						<td>{{ item.price }}</td>
						<td>
							<v-icon small class="mr-2" @click="editItem(item)">
								mdi-pencil
							</v-icon>
							<v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
						</td>
					</tr>
				</tbody>
			</v-simple-table>
		</v-container>
	</div>
</template>

<script>
import { db } from '../firebase/firebase.js'

export default {
	name: 'Inventorytable',

	data() {
		return {
			products: [],
		}
	},

	firestore: {
		products: db.collection('gelatos'),
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
