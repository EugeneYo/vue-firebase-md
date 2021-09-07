import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import CreateProject from '@/views/CreateProject.vue';
import ProjectDetails from '@/views/ProjectDetails.vue';
import Tag from '@/views/Tag.vue';
import Welcome from '@/views/Welcome/Welcome.vue';
import NotFound from '@/views/NotFound.vue';

import Dashboard from '@/views/Dashboard/Dashboard';

import { auth } from '@/firebase/config';

const authCheck = (to, from, next) => {
	if (auth.currentUser) {
		next();
	} else {
		next('/welcome');
	}
};

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/welcome',
		name: 'Welcome',
		component: Welcome,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
		beforeEnter: authCheck,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		beforeEnter: authCheck,
	},
	{
		path: '/create',
		name: 'Create',
		component: CreateProject,
	},
	{
		path: '/projectDetails/:id',
		name: 'ProjectDetails',
		component: ProjectDetails,
		props: true,
	},
	{
		path: '/tags/:tag',
		name: 'Tag',
		component: Tag,
		props: true,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some((record) => record.meta.requiresAuth)) {
// 		if (auth.currentUser) {
// 			next();
// 			return;
// 		}
// 		next('/welcome');
// 	} else {
// 		next();
// 	}
// });

// router.beforeEach((to, from, next) => {
// 	console.log(to.matched);
// 	console.log(auth.currentUser);
// 	if (to.matched.some((record) => record.meta.guest)) {
// 		if (auth.currentUser) {
// 			next();
// 			return;
// 		}
// 		next();
// 	} else {
// 		next();
// 	}
// });

export default router;
