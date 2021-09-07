import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useToast } from 'vue-toastification';
import { ref } from '@vue/reactivity';

const toast = useToast();
const user = ref({ ...auth.currentUser });
const isLogin = ref(false);
const userDisplayName = ref('Guest');
const userAvatarName = ref('G');

onAuthStateChanged(auth, (_user) => {
	if (_user) {
		isLogin.value = true;
		user.value = _user;
		userDisplayName.value = _user.displayName;
		userAvatarName.value = _user.displayName.charAt(0).toUpperCase();
		toast.success('Login Successfully');
	} else {
		isLogin.value = false;
		user.value = null;
		userDisplayName.value = 'Guest';
		userAvatarName.value = 'G';
	}
});

const getUser = () => {
	return { user, isLogin, userDisplayName, userAvatarName };
};

export default getUser;
