<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="projects.length">
		<ProjectsList :projects="projectsWithTag" />
	</div>
	<div v-else><Loading /></div>
</template>

<script>
import getProjects from '@/composables/getProjects';
import ProjectsList from '@/components/ProjectsList';
import Loading from '@/components/Loading';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
export default {
	components: {
		ProjectsList,
		Loading,
	},
	setup() {
		const route = useRoute();
		const { projects, error, load } = getProjects();
		load();

		const projectsWithTag = computed(() => {
			return projects.value.filter((project) => project.tags.includes(route.params.tag));
		});

		return { error, projects, projectsWithTag };
	},
};
</script>

<style></style>
