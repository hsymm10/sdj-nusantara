<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import ChatWidget from '#lib/components/chat/ChatWidget.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	let { children }: LayoutProps = $props();

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = i18n.lang;
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	<meta name="theme-color" content="#102C50" />
</svelte:head>

{@render children()}

<ChatWidget />
