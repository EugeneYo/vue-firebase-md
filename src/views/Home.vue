<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
	<Message />
	<div class="container relative flex flex-col px-6 mx-auto space-y-8">
		<div class="absolute inset-0 z-0 w-2 h-full bg-white shadow-md left-17 md:mx-auto md:right-0 md:left-0"></div>
		<div class="relative z-10">
			<img src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100" alt="" class="timeline-img" />
			<div class="timeline-container">
				<div class="timeline-pointer" aria-hidden="true"></div>
				<div class="p-6 bg-white rounded-md shadow-md">
					<span class="text-sm font-bold tracking-wide text-indigo-600">Jan 2021</span>
					<h1 class="pt-1 text-2xl font-bold">
						An amazing travel
					</h1>
					<p class="pt-1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste suscipit reiciendis, perferendis vel consequuntur cupiditate ad commodi
						provident, sapiente veniam sed autem.
					</p>
				</div>
			</div>
		</div>

		<!-- Second -->
		<div class="relative z-10">
			<img
				src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
				alt=""
				class="timeline-img"
			/>
			<div class="timeline-container timeline-container-left">
				<div class="timeline-pointer timeline-pointer-left" aria-hidden="true"></div>
				<div class="p-6 bg-white rounded-md shadow-md">
					<span class="text-sm font-bold tracking-wide text-indigo-600">Aug 2020</span>
					<h1 class="pt-1 text-2xl font-bold">A trip far away</h1>
					<p class="pt-1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste suscipit reiciendis, perferendis vel consequuntur cupiditate ad commodi
						provident, sapiente veniam sed
					</p>
				</div>
			</div>
		</div>

		<!-- Third -->
		<div class="relative z-10">
			<img
				src="https://images.pexels.com/photos/2906807/pexels-photo-2906807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
				alt=""
				class="timeline-img"
			/>
			<div class="timeline-container">
				<div class="timeline-pointer" aria-hidden="true"></div>
				<div class="p-6 bg-white rounded-md shadow-md">
					<span class="text-sm font-bold tracking-wide text-indigo-600">March 2020</span>
					<h1 class="pt-1 text-2xl font-bold">Solo Trip</h1>
					<p class="pt-1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste suscipit reiciendis, perferendis vel consequuntur cupiditate ad commodi
						provident, sapiente veniam sed autem, perspiciatis
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Message from '@/components/Message.vue';
import { ref } from '@vue/reactivity';

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Message,
	},
	setup() {},
};
</script>
