<template>
	<div>
		<template v-if="this.authUser && this.authUser.email == 'test@email.com'">
			<add-products></add-products>
			<inventory-table></inventory-table>
		</template>
		<template v-else>
			<page-404></page-404>
		</template>
	</div>
</template>

<script>
import AddProducts from '../components/AddProducts'
import InventoryTable from '../components/InventoryTable'
import Page404 from '../components/Page404'

export default {
	name: 'Inventory',
	components: {
		AddProducts,
		InventoryTable,
		Page404,
	},
	props: {
		authUser: Object,
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
</style>
