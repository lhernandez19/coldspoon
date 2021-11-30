<template>
	<v-list two-line>
		<v-list-item-group v-model="selected" active-class="pink--text" multiple>
			<v-list-item>
				<v-item-avatar>
					<v-img src="../assets/logoCS.png" width="50"></v-img>
				</v-item-avatar>
				<v-list-item-content>
					<v-list-item-title>{{ item.name }}</v-list-item-title>
				</v-list-item-content>

				<v-list-item-action>
					{{ item.quantity }}
				</v-list-item-action>

				<v-list-item-action>
					{{ item.price }}
				</v-list-item-action>

				<v-list-item-action>
					<v-icon color="red darken-3" @click.prevent="deleteItem"> mdi-delete </v-icon>
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
	},
}
</script>

<style lang="scss" scoped></style>
