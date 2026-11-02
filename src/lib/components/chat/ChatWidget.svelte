<script lang="ts">
	import { page } from '$app/state';
	import { isChatEnabled } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';
	import ChatLauncher from './ChatLauncher.svelte';
	import ChatTooltip from './ChatTooltip.svelte';

	let launcherRef: any = $state();
	let ChatWindowComp = $state<any>(null);

	// Periksa apakah rute saat ini diizinkan menampilkan chat
	let isEnabled = $derived(isChatEnabled(page.url.pathname));

	// Lazy Load ChatWindow komponen saat jendela dibuka pertama kali
	$effect(() => {
		if (chatStore.isOpen && !ChatWindowComp) {
			import('./ChatWindow.svelte').then((module) => {
				ChatWindowComp = module.default;
			});
		}
	});

	function handleCloseFocus() {
		launcherRef?.focus();
	}
</script>

{#if isEnabled}
	<aside class="sdj-chat-widget" aria-label="Widget Bantuan Asisten">
		<!-- 1. Tooltip Ajakan -->
		<ChatTooltip />

		<!-- 2. Jendela Chatbot (Lazy Loaded) -->
		{#if chatStore.isOpen && ChatWindowComp}
			<ChatWindowComp onCloseFocus={handleCloseFocus} />
		{/if}

		<!-- 3. Tombol Launcher Mengambang -->
		<ChatLauncher bind:this={launcherRef} />
	</aside>
{/if}

<style>
	.sdj-chat-widget {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}
</style>
