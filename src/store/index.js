import { auth } from '@/firebase/config';
import { createStore } from 'vuex';

export default createStore({
	state: {
		isDark: true,
	},
	mutations: {
		toggle(state) {
			state.isDark = !state.isDark;
			localStorage.setItem('mode', state.isDark);
		},
		setMode(state) {
			if (localStorage.mode) {
				state.isDark = JSON.parse(localStorage.getItem('mode'));
				console.log(localStorage.getItem('mode'));
				console.log(JSON.parse(localStorage.getItem('mode')));
			} else {
				localStorage.setItem('mode', state.isDark);
			}
		},
	},
	actions: {},
	modules: {},
});
