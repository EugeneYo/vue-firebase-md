<template>
	<div
		class="max-w-xl p-5 mx-auto space-y-5 font-bold bg-white rounded-md shadow-lg dark:ring-2 text-gray-900/50 dark:bg-dark-secondary dark:ring-myGreen-700/50 dark:text-gray-200"
	>
		<div class="py-4 text-2xl text-center">Welcome to Popio</div>

		<transition name="slide-in" mode="out-in">
			<div v-if="showLogin">
				<div class="py-2 text-lg text-center text-myGreen-400 ">Login</div>
				<SignIn />
				<div class="pt-5 text-center">
					No account yet ? <span @click="showLogin = !showLogin" class="cursor-pointer text-myGreen-400">Sign Up</span> here
				</div>
			</div>
			<div v-else>
				<div class="py-2 text-lg text-center text-myGreen-400">Sign Up</div>

				<SignUp />
				<div class="pt-5 text-center">
					Already registered ? <span @click="showLogin = !showLogin" class="cursor-pointer text-myGreen-400">Login</span> here
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import SignUp from '@/views/Welcome/SignUp.vue';
import SignIn from '@/views/Welcome/SignIn.vue';
import { ref } from '@vue/reactivity';

export default {
	components: {
		SignUp,
		SignIn,
	},
	setup() {
		const showLogin = ref(true);

		return { showLogin };
	},
};
</script>

<style>
.slide-in-enter-active {
	transition: all 0.3s ease-out;
}

.slide-in-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-in-enter-from {
	transform: translateX(-20px);
	opacity: 0;
}
.slide-in-enter-to {
	transform: translateX(0);
	opacity: 1;
}

.slide-in-leave-from {
	transform: translateX(0);
	opacity: 1;
}
.slide-in-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
