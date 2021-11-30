<template>
	<div>

		<add-products></add-products>
		<inventory-table></inventory-table>
	</div>
</template>

<script>
import AddProducts from '../components/AddProducts'
import InventoryTable from '../components/InventoryTable'

export default {
	name: 'Inventory',
	components: {
		AddProducts,
		InventoryTable,
	},

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>
