<script lang="ts">
	import { page } from '$app/state';
	import { isChatEnabled } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
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

	// Buka chat otomatis jika URL mengandung ?chat=open atau hash #chat
	$effect(() => {
		if (page.url.searchParams.get('chat') === 'open' || page.url.hash === '#chat') {
			chatStore.open();
		}
	});

	// Tangkap klik global pada tombol/link konsultasi di seluruh website
	function handleGlobalClick(e: MouseEvent) {
		const target = (e.target as HTMLElement)?.closest('a, button');
		if (!target) return;

		const href = target.getAttribute('href');
		const isOpenChat = target.hasAttribute('data-open-chat');

		if (isOpenChat || href === '/konsultasi' || href === '#chat' || href?.includes('chat=open')) {
			e.preventDefault();
			chatStore.open();
		}
	}

	function handleCloseFocus() {
		launcherRef?.focus();
	}
</script>

<svelte:window onclick={handleGlobalClick} />

{#if isEnabled}
	<aside class="sdj-chat-widget" aria-label={i18n.pick('Widget Bantuan Asisten', 'Assistant Help Widget')}>
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
