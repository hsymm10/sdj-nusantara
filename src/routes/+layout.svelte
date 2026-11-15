<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import ChatWidget from '#lib/components/chat/ChatWidget.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
	import { setLenis } from '#lib/utils/lenis';
	import Lenis from 'lenis';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { children }: LayoutProps = $props();

	let lenis: Lenis | null = null;

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = i18n.lang;
		}
	});

	$effect(() => {
		if (typeof window === 'undefined') return;

		lenis = new Lenis({
			autoRaf: true,
			anchors: true,
			autoToggle: true,
			smoothWheel: true,
			syncTouch: false,
			duration: 1.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		setLenis(lenis);
		(window as unknown as { lenis?: Lenis }).lenis = lenis;

		return () => {
			lenis?.destroy();
			lenis = null;
			setLenis(null);
			delete (window as unknown as { lenis?: Lenis }).lenis;
		};
	});

	afterNavigate((navigation) => {
		if (!lenis) return;
		lenis.resize();

		const hash = page.url.hash;
		if (hash) {
			setTimeout(() => {
				lenis?.scrollTo(hash, { offset: -54 });
			}, 60);
		} else if (navigation.from?.url.pathname !== navigation.to?.url.pathname) {
			lenis.scrollTo(0, { immediate: true });
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
