import { auth } from '@/firebase/config';
import { signOut } from '@firebase/auth';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import router from '@/router';

const toast = useToast();
const error = ref(null);

const logout = async () => {
	error.value = null;
	try {
		await signOut(auth);
		toast.success('Sign out Successfully');
		router.push({ name: 'Home' });
	} catch (err) {
		error.value = err.message;
	}
};

const useSignOut = () => {
	return { error, logout };
};

export default useSignOut;
