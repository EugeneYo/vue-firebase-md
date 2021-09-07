<template>
	<div :class="isDark ? 'dark' : ''">
		<NavBar />
		<div class="min-h-screen p-4 bg-gray-300/50 dark:bg-dark-primary dark:text-gray-200">
			<router-view />
		</div>
	</div>
</template>
<script>
import NavBar from '@/components/Navbar.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import { auth } from '@/firebase/config';
export default {
	components: {
		NavBar,
	},
	setup() {
		const store = useStore();
		store.commit('setMode');

		return {
			isDark: computed(() => store.state.isDark),
		};
	},
};
</script>
<style>
html {
	scrollbar-width: thin;
	scrollbar-color: #42b983 #273344;
}
html::-webkit-scrollbar {
	width: 0.5 vw;
}

html::-webkit-scrollbar-thumb {
	background-color: #42b983;
}

html::-webkit-scrollbar-track {
	background-color: #273344;
}
#nav {
	padding: 30px;
}

/* #nav a {
	font-weight: bold;
	color: #868585;
} */

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
