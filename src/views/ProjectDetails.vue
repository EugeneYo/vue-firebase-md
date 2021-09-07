<template>
	<div v-if="project">
		{{ project.title }}
	</div>
	<div v-else><Loading /></div>
	<div v-if="error">Errors</div>
	<button @click="handleDelete">Delete</button>
</template>

<script>
import getSingleProject from '@/composables/getSingleProject';
import { useRoute, useRouter } from 'vue-router';
import Loading from '@/components/Loading';
import { deleteDoc, doc } from '@firebase/firestore';
import { projectFireStore } from '@/firebase/config';
export default {
	props: ['id'],
	components: {
		Loading,
	},
	setup(props) {
		const route = useRoute();
		const router = useRouter();
		const { project, error, load } = getSingleProject(route.params.id);
		load();

		const handleDelete = async () => {
			await deleteDoc(doc(projectFireStore, 'projects', props.id));
			router.push({ name: 'Projects' });
		};
		return {
			project,
			error,
			handleDelete,
		};
	},
};
</script>

<style></style>
