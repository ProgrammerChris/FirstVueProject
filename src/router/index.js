import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Hjem',
		component: Home,
	},
	{
		path: '/omoss',
		name: 'Om oss',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/kontakt',
		name: 'Kontakt',
		component: () => import('../views/Contact.vue'),
	},
	{
		path: '/prosjekter',
		name: 'Prosjekter',
		component: () => import('../views/Projects.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
