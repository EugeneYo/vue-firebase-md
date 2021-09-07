import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import router from '@/router';

const error = ref(null);
const loading = ref(false);

const signIn = async (email, password) => {
	try {
		loading.value = true;

		const response = await signInWithEmailAndPassword(auth, email, password);
		if (!response) {
			throw new Error('Failed to Login');
		}
		router.push({ name: 'Dashboard' });

		loading.value = false;
		error.value = null;
	} catch (err) {
		loading.value = false;
		console.log(err);
		error.value = 'Incorrect login credential';
	}
};

const useSignIn = () => {
	return { error, loading, signIn };
};
export default useSignIn;
