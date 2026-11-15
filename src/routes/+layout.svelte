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
			lerp: 0.08, // The classic Lenis silky-smooth momentum glide
			smoothWheel: true,
			syncTouch: true, // Enables smooth inertial scrolling on touchpad & trackpad too
			syncTouchLerp: 0.075,
			touchInertiaExponent: 1.7,
			wheelMultiplier: 1.1,
			touchMultiplier: 1.3,
			anchors: true,
			respectReducedMotion: false, // Ensures smooth scroll isn't silently disabled by OS settings
		});

		setLenis(lenis);
		(window as unknown as { lenis?: Lenis }).lenis = lenis;

		let rafId: number;
		function raf(time: number) {
			lenis?.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(rafId);
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
