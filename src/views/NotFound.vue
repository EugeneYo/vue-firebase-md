<template>
	<v-md-editor
		v-model="markdown"
		height="500px"
		@change="print"
		left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save customToolbar customToolbar2"
		:toolbar="toolbar"
	></v-md-editor>
	<div class="h-32"></div>

	<v-md-preview :text="markdown"></v-md-preview>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import getToolbar from '@/composables/getToolbar';
export default {
	components: {
		BellIcon,
		MenuIcon,
		XIcon,
	},
	setup() {
		const markdown = ref(``);
		const svg =
			'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>';
		const { toolbar } = getToolbar();
		const print = () => {
			console.log(markdown);
		};
		return {
			toolbar,
			markdown,
			print,
		};
	},
};
</script>

<style>
/* @import '~highlight.js/styles/monokai-sublime.css'; */
</style>
