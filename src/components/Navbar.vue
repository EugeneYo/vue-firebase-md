<template>
	<Disclosure as="nav" class="sticky top-0 z-50 text-gray-500 bg-white shadow-md dark:bg-dark-secondary dark:text-gray-200" v-slot="{ open }">
		<div class="px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
						class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Open main menu</span>
						<MenuIcon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
						<XIcon v-else class="block w-6 h-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<div class="flex items-center flex-shrink-0">
					<!-- <img class="block w-auto h-8 lg:hidden" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> -->
					<!-- <img
						class="hidden w-auto h-8 lg:block"
						src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
						alt="Workflow"
					/> -->
					<img src="@/assets/p-logo.png" alt="" class="" />
					<!-- <img src="@/assets/p-logo-L.png" alt="" class="logo" /> -->

					<div class="text-2xl font-bold">Popio</div>
				</div>
				<div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
					<!-- <div class="flex items-center flex-shrink-0">
						<img class="block w-auto h-8 lg:hidden" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
						<img
							class="hidden w-auto h-8 lg:block"
							src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
							alt="Workflow"
						/>
					</div> -->
					<!-- List of navigations -->
					<div class="hidden sm:block sm:ml-6">
						<div id="nav" class="flex space-x-4">
							<router-link
								v-for="item in navigation"
								:key="item.name"
								:aria-current="item.current ? 'page' : undefined"
								:to="item.to"
								class="font-bold dark:text-gray-100"
								>{{ item.name }}</router-link
							>
						</div>
					</div>
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<!-- <button
						type="button"
						class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
						<span class="sr-only">View notifications</span>
						<BellIcon class="w-6 h-6" aria-hidden="true" />
					</button> -->

					<!-- Toggle Mode -->
					<div class="flex">
						<Switch
							@click="toggle"
							:class="isDark ? 'bg-green-900' : 'bg-green-200'"
							class="relative inline-flex flex-shrink-0 h-[28px] w-[53px] border-2 border-green-500 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							<span class="sr-only">Toggle Mode</span>
							<span
								aria-hidden="true"
								:class="isDark ? 'translate-x-[25px]' : 'translate-x-0'"
								class="pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
							/>
						</Switch>
					</div>

					<!-- Profile dropdown -->
					<transition
						mode="out-in"
						enter-active-class="transition duration-500 ease-out"
						enter-from-class="transform scale-0 opacity-0"
						enter-to-class="transform scale-110 opacity-100"
						leave-active-class="transition duration-500 ease-in"
						leave-from-class="transform scale-110 opacity-100"
						leave-to-class="transform scale-0 opacity-0"
					>
						<div v-if="isLogin">
							<Menu as="div" class="relative ml-3">
								<div>
									<MenuButton class="flex text-sm bg-transparent rounded-full">
										<span class="sr-only">Open user menu</span>
										<!-- <img
											class="w-8 h-8 rounded-full"
											src="https://media.istockphoto.com/vectors/cartoon-ninja-illustration-vector-id831242374?k=6&m=831242374&s=612x612&w=0&h=oFlsidw155KOEv5DsDvSPGFs06Fbe5Y2mJwGK2NIMpY="
											alt=""
										/> -->
										<div class="flex items-center justify-center w-10 h-10 p-6 m-0 text-3xl text-white rounded-full bg-myGreen-500 ">
											{{ userAvatarName }}
										</div>
									</MenuButton>
								</div>
								<transition
									enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0"
									enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-in"
									leave-from-class="transform scale-100 opacity-100"
									leave-to-class="transform scale-95 opacity-0"
								>
									<MenuItems
										class="absolute right-0 z-50 w-48 py-1 mt-2 font-medium text-gray-700 origin-top-right bg-white rounded-md shadow-lg dark:bg-dark-secondary ring-1 ring-black ring-opacity-5 focus:outline-none dark:text-white "
									>
										<div class="block px-4 py-2 mx-2 my-1 text-sm rounded-lg ">Hello, {{ userAvatarName + userDisplayName.slice(1) }}</div>
										<div v-for="item in authNavigation" :key="item.name" class="dark:text-white">
											<MenuItem v-slot="{ active }">
												<router-link
													:to="item.to"
													:class="[
														active ? 'bg-gray-100 dark:bg-dark-primary dark:text-myGreen-500' : '',
														'block px-4 py-2 text-sm mx-2 my-1 rounded-lg ',
													]"
													>{{ item.name }}</router-link
												>
											</MenuItem>
										</div>
										<MenuItem v-slot="{ active }">
											<button :class="[active ? '' : '', 'flex px-4 py-2 text-sm text-red-500 font-bold min-w-full text-left mx-2']" @click="logout">
												Sign out
												<unicon name="signout" class="w-5 h-5 mx-2 animate-bounce" fill="#ef4444"></unicon>
											</button>
										</MenuItem>
									</MenuItems>
								</transition>
							</Menu>
						</div>
						<div v-else>
							<router-link :to="{ name: 'Welcome' }" class="px-3 py-1 mx-2 font-semibold text-white rounded-2xl bg-myGreen-500">Login</router-link>
						</div>
					</transition>
					<button @click="toastMe">button</button>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div id="nav" class="px-2 pt-2 pb-3 space-y-1">
				<router-link
					v-for="item in navigation"
					:key="item.name"
					:aria-current="item.current ? 'page' : undefined"
					:to="item.to"
					class="block px-3 py-2 text-base font-bold rounded-md"
					>{{ item.name }}</router-link
				>
			</div>
			<!-- <div class="px-2 pt-2 pb-3 space-y-1">
				<a
					v-for="item in navigation"
					:key="item.name"
					:href="item.href"
					:class="[
						item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block px-3 py-2 rounded-md text-base font-medium',
					]"
					:aria-current="item.current ? 'page' : undefined"
					>{{ item.name }}</a
				>
			</div> -->
		</DisclosurePanel>
	</Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Switch } from '@headlessui/vue';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/reactivity';
import { auth } from '@/firebase/config';
import { signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import getUser from '@/composables/getUser';
import useSignOut from '@/composables/useSignOut';

const navigation = [
	{ name: 'Home', to: '/' },
	{ name: 'Projects', to: '/projects' },
	{ name: 'About', to: '/about' },
	{ name: 'Create', to: '/create' },
];

const authNavigation = [
	{ name: 'Dashboard', to: '/dashboard' },
	{ name: 'Profile', to: '/profile' },
	{ name: 'Settings', to: '/settings' },
];

export default {
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		Switch,
		BellIcon,
		MenuIcon,
		XIcon,
	},
	setup() {
		const store = useStore();
		const router = useRouter();
		const toast = useToast();
		// const avatarName = ref('G');
		// onAuthStateChanged(auth, (user) => {
		// 	if (user) {
		// 		isLogin.value = true;
		// 		avatarName.value = user.displayName.charAt(0).toUpperCase();
		// 	} else {
		// 		isLogin.value = false;
		// 		avatarName.value = 'G';
		// 	}
		// });

		const { user, isLogin, userDisplayName, userAvatarName } = getUser();
		const { error, logout } = useSignOut();

		const toastMe = () => {
			toast.success('success testing');

			toast.error('error test');
			toast.warning('warning test');
			toast.info('info teesting');
			toast('default test');
		};

		return {
			navigation,
			authNavigation,
			isDark: computed(() => store.state.isDark),
			isLogin,
			toggle: () => store.commit('toggle'),
			logout,
			toastMe,
			userDisplayName,
			userAvatarName,
		};
	},
};
</script>

<style>
.logo {
	width: 80px; /* width of container */
	height: 80; /* height of container */
	object-fit: cover;
}
</style>
