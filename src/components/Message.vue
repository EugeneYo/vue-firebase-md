<template>
	<form action="" class="container mx-auto ">
		<textarea
			name=""
			id=""
			cols="30"
			rows="10"
			placeholder="Type a message and hit enter to send"
			v-model="message"
			@keypress.enter.prevent="handleSubmit"
			class="box-border w-full h-10 p-2 border-0 outline-none rounded-xl focus:ring-0 dark:bg-dark-secondary"
			style="resize: none;"
		>
		</textarea>
	</form>
</template>

<script>
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import { ref } from '@vue/reactivity';
export default {
	setup() {
		const { userDisplayName } = getUser();
		const message = ref('');
		const handleSubmit = async () => {
			const chat = {
				name: userDisplayName.value,
				message: message.value,
				createdAt: timestamp,
			};

			message.value = '';
			console.log(chat);
		};
		return {
			message,
			handleSubmit,
		};
	},
};
</script>

<style></style>
