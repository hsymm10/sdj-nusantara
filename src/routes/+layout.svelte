<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<meta name="theme-color" content="#102C50" />
</svelte:head>

{@render children()}
