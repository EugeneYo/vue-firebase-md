<template>
	<div class="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		<div
			v-for="project in projects"
			:key="project.id"
			class="container relative flex flex-col justify-between bg-white rounded-md shadow-md dark:bg-dark-secondary"
		>
			<div class="flex flex-col justify-between w-full h-full p-5 mx-auto space-y-5 text-justify">
				<div>
					<div class="text-2xl font-semibold ">{{ project.title }}</div>
					<div class="pb-3 text-gray-500">{{ convertDate(project.createdAt.toDate()) }}</div>
					<div class="text-gray-500 line-clamp-6">{{ project.summary }}</div>
				</div>

				<div>
					<div class="text-gray-500/50">Tags</div>
					<div class="flex flex-wrap items-start">
						<div v-for="tag in project.tags" class="px-2 m-1 text-green-500 border-2 border-green-400 rounded-md first:ml-0 bg-green-400/20">
							{{ tag }}
						</div>
					</div>
				</div>
			</div>

			<router-link
				:to="{ name: 'ProjectDetails', params: { id: project.id } }"
				class="flex justify-center px-5 py-2 text-center bg-green-100 rounded-b-md group dark:bg-green-600"
				>More details
				<ChevronRightIcon class="w-6 h-6 transition-all ease-in opacity-0 duration-400 group-hover:block group-hover:opacity-100" />
				<ChevronRightIcon
					class="w-6 h-6 transition-all duration-200 ease-in opacity-0 group-hover:duration-300 group-hover:delay-200 group-hover:block group-hover:opacity-100 "
				/>
				<ChevronRightIcon class="w-6 h-6 transition ease-in transform -translate-x-12 duration-400 group-hover:block group-hover:translate-x-0" />
			</router-link>
		</div>
	</div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid';
import convertDate from '@/utilities/convertDate';

export default {
	props: ['projects'],
	components: {
		ChevronRightIcon,
	},
	setup() {
		return { convertDate };
	},
};
</script>

<style></style>
