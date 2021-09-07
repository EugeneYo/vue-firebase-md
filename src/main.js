import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-toastification/dist/index.css';
import '@/assets/app.css';

// Using custom Toast
import Toast, { PluginOptions } from 'vue-toastification';

// Using Vue Unicon Icons
import Unicon from 'vue-unicons';
import { uniSignout } from 'vue-unicons/dist/icons';

import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/config';
import Loading from '@/components/Loading';

import VueMarkdownEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import Prism from 'prismjs';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';

import VMdPreview from '@kangc/v-md-editor/lib/preview';

VueMarkdownEditor.use(vuepressTheme, {
	Prism,
});
VueMarkdownEditor.lang.use('en-US', enUS);

VMdPreview.use(vuepressTheme, {
	Prism,
});

Unicon.add([uniSignout]);

const options = {
	// You can set your default options here
	transition: 'Vue-Toastification__bounce',
	maxToasts: 5,
	newestOnTop: true,
	position: 'top-left',
	timeout: 2000,
};

let app;

// Shows loading while the firebase is connecting
createApp(Loading).mount('#app');

// Make sure the firbase is already connected
onAuthStateChanged(auth, () => {
	if (!app) {
		app = createApp(App)
			.use(store)
			.use(router)
			.use(Unicon)
			.use(Toast, options)
			.use(VueMarkdownEditor)
			.use(VMdPreview)
			.mount('#app');
	}
});
