import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { useToast } from 'vue-toastification';
import router from '@/router';

const error = ref(null);
const loading = ref(false);
const signUp = async (displayName, email, password) => {
	try {
		loading.value = true;
		const response = await createUserWithEmailAndPassword(auth, email, password);
		if (!response) {
			throw new Error('Failed to sign up');
		}

		router.push({ name: 'Dashboard' });
		await updateProfile(auth.currentUser, { displayName });

		loading.value = false;
		error.value = null;
	} catch (err) {
		loading.value = false;
		console.dir(err);
		const message = err.code
			.split('/')[1]
			.split('-')
			.join(' ');
		error.value = message.charAt(0).toUpperCase() + message.slice(1);
		console.log(error.value);
	}
};

const useSignUp = () => {
	return { error, loading, signUp };
};
export default useSignUp;
