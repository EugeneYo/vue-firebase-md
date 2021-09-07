import { ref } from 'vue';
import { projectFireStore } from '@/firebase/config';
import { collection, getDoc, doc, getDocFromCache } from 'firebase/firestore';
const getSingleProject = (id) => {
	const project = ref(null);
	const error = ref(null);

	const load = async () => {
		try {
			await new Promise((resolve) => {
				setTimeout(resolve, 2000);
			});

			const docRef = doc(projectFireStore, 'projects', id);

			const response = await getDoc(docRef);
			// const response = await getDocFromCache(docRef);
			if (!response.exists) {
				throw Error('The project does not exist');
			}
			project.value = { ...response.data(), id: response.id };
		} catch (err) {
			error.value = err.message;
			console.log(error.value);
		}
	};

	return { project, error, load };
};

export default getSingleProject;
