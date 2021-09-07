<template>
	<form
		action=""
		class="max-w-xl p-5 mx-auto space-y-5 font-bold bg-white rounded-md shadow-lg dark:ring-2 text-gray-900/50 dark:bg-dark-secondary dark:ring-myGreen-700/50 dark:text-myGreen-500"
		@submit.prevent="handleSubmit"
	>
		<div class="">
			<label for="title">Title</label>
			<input
				type="text"
				required
				class="block w-full p-1 text-gray-900 transition duration-700 ease-in-out bg-transparent border-0 border-b-2 dark:text-white ring:0 focus:ring-0 border-myGreen-400/30 focus:border-myGreen-500"
				v-model="title"
			/>
		</div>

		<div>
			<label for="summary" class="">Summary</label>
			<textarea
				type="text"
				required
				class="w-full p-1 text-gray-900 transition duration-700 ease-in-out bg-transparent border-2 rounded-md dark:text-white ring:0 focus:ring-0 border-myGreen-400/30 focus:border-myGreen-500"
				v-model="summary"
			/>
		</div>
		<div>
			<label for="Details">Details</label>
			<textarea
				type="text"
				required
				rows="10"
				class="box-border w-full p-1 text-gray-900 transition duration-700 ease-in-out bg-transparent border-2 rounded-md outline-none dark:text-white ring:0 focus:ring-0 border-myGreen-400/30 focus:border-myGreen-500"
				v-model="details"
			/>
		</div>
		<div>
			<label for="Tags">Tags</label>
			<input
				type="text"
				v-model="tag"
				@keydown.enter.prevent="addTags"
				class="block w-full p-1 text-gray-900 transition duration-700 ease-in-out bg-transparent border-0 border-b-2 dark:text-white ring:0 focus:ring-0 border-myGreen-400/30 focus:border-myGreen-500"
			/>
		</div>
		<div class="flex flex-wrap">
			<div v-for="tag in tags" :key="tag" @click="deleteTag(tag)" class="px-2 m-1 mt-2 text-white rounded-full bg-myGreen-500">{{ tag }}</div>
		</div>
		<div class="flex justify-end">
			<button class="px-3 py-1 font-semibold text-white rounded-2xl bg-myGreen-500" type="submit">Create</button>
		</div>
	</form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { setDoc, doc, addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { projectFireStore, timestamp } from '@/firebase/config';
import { useRouter } from 'vue-router';

export default {
	setup() {
		const title = ref('');
		const summary = ref('');
		const details = ref('');
		const tags = ref([]);
		const tag = ref('');
		const router = useRouter();
		const addTags = () => {
			if (!tags.value.includes(tag.value)) {
				tag.value = tag.value.replace(/\s/g, ''); //remove all whitespace
				tags.value.push(tag.value);
				tag.value = '';
			}
			tag.value = '';
		};

		const deleteTag = (tag) => {
			tags.value = tags.value.filter((currentTag) => currentTag !== tag);
		};

		const handleSubmit = async () => {
			const newProject = {
				title: title.value,
				summary: summary.value,
				details: details.value,
				tags: [...tags.value],
				createdAt: timestamp,
			};

			// console.log(newProject);

			// Method 1:
			// a new document with Auto generated ID
			// const newProjectRef = doc(collection(projectFireStore, 'projects'))
			// Add the data into the document and inserted into the firestore
			// const result = await setDoc(newProjectRef, newProject);

			// Method 2:
			// A new document with Auto generated ID is directly inserted into the firestore
			const result = await addDoc(collection(projectFireStore, 'projects'), newProject);
			console.log('The result is', result.id);
			router.push({ name: 'Projects' });
		};
		return {
			title,
			summary,
			details,
			tag,
			addTags,
			deleteTag,
			handleSubmit,
			tags,
		};
	},
};
</script>

<style></style>
