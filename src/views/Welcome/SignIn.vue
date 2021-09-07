<template>
	<form action="" class="space-y-5" @submit.prevent="handleSignIn">
		<div class="flex transition duration-700 ease-in-out text-myGreen-400/30 focus-within:text-myGreen-500">
			<!-- <label for="title">Title</label> -->
			<div class="flex items-center justify-center px-2 "><MailIcon class="w-6 h-6" /></div>

			<input
				type="email"
				required
				class="block w-full p-1 text-gray-900 transition duration-700 ease-in-out bg-transparent border-0 border-b-2 dark:text-white ring:0 focus:ring-0 border-myGreen-400/30 focus:border-myGreen-500"
				v-model="email"
				placeholder="Email"
			/>
		</div>
		<div class="flex transition duration-700 ease-in-out text-myGreen-400/30 focus-within:text-myGreen-500">
			<!-- <label for="title">Title</label> -->
			<div class="flex items-center justify-center px-2 ">
				<div v-if="isView">
					<EyeIcon class="w-6 h-6" @click="isView = !isView" />
				</div>
				<div v-else>
					<EyeOffIcon class="w-6 h-6" @click="isView = !isView" />
				</div>
			</div>
			<input
				:type="isView ? 'text' : 'password'"
				required
				class="block w-full p-1 text-gray-900 transition duration-700 ease-in-out bg-transparent border-0 border-b-2 dark:text-white ring:0 focus:ring-0 border-myGreen-400/30 focus:border-myGreen-500"
				v-model="password"
				placeholder="Password"
			/>
		</div>
		<transition name="slide-in" mode="out-in">
			<div v-if="error" class="h-5 text-center text-red-400">
				{{ error }}
			</div>
			<div v-else class="h-5"></div>
		</transition>
		<div class="flex justify-center pt-5">
			<button class="px-4 py-2 font-semibold text-white rounded-2xl bg-myGreen-500 disabled:opacity-50" :disabled="loading">
				<div v-if="loading">
					<div class="w-6 h-6 border-2 border-transparent rounded-full border-t-white border-l-white animate-spin"></div>
				</div>
				<div v-else>Login</div>
			</button>
		</div>
	</form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { MailIcon, EyeOffIcon, EyeIcon } from '@heroicons/vue/outline';
import useSignIn from '@/composables/useSignIn';
export default {
	components: {
		MailIcon,
		EyeOffIcon,
		EyeIcon,
	},
	setup() {
		const email = ref('');
		const password = ref('');
		const isView = ref(false);
		const { error, loading, signIn } = useSignIn();

		error.value = null;

		const handleSignIn = async () => {
			await signIn(email.value, password.value);
		};

		return {
			email,
			password,
			handleSignIn,
			isView,
			error,
			loading,
		};
	},
};
</script>

<style></style>
