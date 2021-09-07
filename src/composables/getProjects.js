import { ref } from 'vue';
import { projectFireStore } from '@/firebase/config';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';

const projects = ref([]);
const error = ref(null);

const load = async () => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 5000);
		});

		// const q = query(collection(projectFireStore, "projects"), where("capital", "==", true));

		// Real time data
		const projectsCollection = collection(projectFireStore, 'projects');
		const q = query(projectsCollection, orderBy('createdAt', 'desc'));
		const unsubscribe = onSnapshot(q, (snap) => {
			const data = snap.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});
			projects.value = data;
			console.log('Again');
		});

		// This only get the collections data but not the real time update
		// const response = await getDocs(q);
		// const response = await projectFireStore.collection('projects').get();
		// projects.value = response.docs.map((doc) => {
		// 	return {
		// 		...doc.data(),
		// 		id: doc.id,
		// 	};
		// });
		return unsubscribe;
	} catch (err) {
		error.value = err.message;
		console.log(error.value);
	}
};

const getProjects = () => {
	// var unsubscribe;

	return { projects, error, load };
};

export default getProjects;
