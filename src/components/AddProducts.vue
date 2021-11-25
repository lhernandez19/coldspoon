<template>
	<div>
		<v-container class="mt-5">
			<v-row justify="center">
				<v-col cols="8">
					<v-form ref="form" v-model="valid">
						<h1>Add Product</h1>

						<v-text-field
							v-model="product.name"
							label="Name"
							required
						></v-text-field>

						<v-text-field
							v-model="product.description"
							label="Description"
							required
						></v-text-field>
						<v-text-field
							v-model="product.type"
							label="Type"
							required
						></v-text-field>
						<v-text-field
							v-model="product.available"
							label="Available"
							required
						></v-text-field>
						<v-text-field
							v-model="product.quantity"
							label="Quantity"
							required
						></v-text-field>
						<v-text-field
							v-model="product.price"
							label="Price"
							required
						></v-text-field>

						<v-btn color="primary" class="mr-4" @click="addProduct">
							Add Product
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import {db} from '../firebase/firebase.js'

export default {
	name: 'Addproducts',

	data() {
		return {
			product: {
				name: '',
				description: '',
				available: '',
				price: '',
				quantity: '',
				type: '',
			},
		}
	},

	methods: {
		addProduct() {
			db.collection('gelatos')
				.add(this.product)
				.catch(error => {
					console.log('Error adding recipe', error)
					alert('ERROR!')
				})
				.finally(() => {
					this.product = {
						name: '',
						description: '',
						available: '',
						price: '',
						quantity: '',
						type: '',
					}
				})
		},
	},
}
</script>

<style lang="scss" scoped></style>
