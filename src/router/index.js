import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'
import Inventory from '../views/Inventory.vue'
import Store from '../views/Store.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/checkout',
		name: 'Checkout',
		component: Checkout,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/inventory',
		name: 'Inventory',
		component: Inventory,
	},
	{
		path: '/store',
		name: 'Store',
		component: Store,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
