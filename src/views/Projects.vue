<template>
	<div v-if="projects.length">
		<ProjectsList :projects="projects" />
	</div>
	<div v-else><Loading /></div>
	<div v-if="error">Errors</div>
</template>

<script>
import getProjects from '@/composables/getProjects';
import Loading from '@/components/Loading';
import ProjectsList from '@/components/ProjectsList';
import { onUnmounted } from '@vue/runtime-core';
import { ref } from 'vue';
import { projectFireStore } from '@/firebase/config';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
export default {
	components: {
		Loading,
		ProjectsList,
	},
	setup() {
		const projects = ref([]);
		const error = ref(null);

		const projectsCollection = collection(projectFireStore, 'projects');
		const q = query(projectsCollection, orderBy('createdAt', 'desc'));
		const unsubscribe = onSnapshot(q, (snap) => {
			const data = snap.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});
			projects.value = data;
			console.log('Again');
		});

		onUnmounted(() => {
			unsubscribe();
			console.log('unmounted');
		});
		return { projects, error };
	},
};
</script>

<style>
.some {
	background-color: #273344;
}
</style>
