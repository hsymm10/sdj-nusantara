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

	<!-- Dynamic Open Graph / WhatsApp / Facebook / LinkedIn Preview -->
	<meta property="og:site_name" content="SDJ Nusantara" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={i18n.pick('SDJ Nusantara — Strategic Your Partner', 'SDJ Nusantara — Strategic Your Partner')} />
	<meta
		property="og:description"
		content={i18n.pick(
			'SDJ Nusantara adalah konsultan pendidikan dan pengembangan talenta yang membantu individu serta institusi merencanakan pendidikan, mempersiapkan beasiswa, dan meningkatkan keterampilan.',
			'SDJ Nusantara is an education and talent development consultancy helping individuals and institutions plan education, prepare scholarships, and advance skills.'
		)}
	/>
	<meta property="og:image" content="{page.url.origin}/og-image.png" />
	<meta property="og:image:secure_url" content="{page.url.origin}/og-image.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="SDJ Nusantara — Strategic Your Partner" />
	<meta property="og:locale" content={i18n.lang === 'id' ? 'id_ID' : 'en_US'} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={page.url.href} />
	<meta name="twitter:title" content={i18n.pick('SDJ Nusantara — Strategic Your Partner', 'SDJ Nusantara — Strategic Your Partner')} />
	<meta
		name="twitter:description"
		content={i18n.pick(
			'SDJ Nusantara adalah konsultan pendidikan dan pengembangan talenta yang membantu individu serta institusi merencanakan pendidikan, mempersiapkan beasiswa, dan meningkatkan keterampilan.',
			'SDJ Nusantara is an education and talent development consultancy helping individuals and institutions plan education, prepare scholarships, and advance skills.'
		)}
	/>
	<meta name="twitter:image" content="{page.url.origin}/og-image.png" />
	<meta name="twitter:image:alt" content="SDJ Nusantara — Strategic Your Partner" />

	<!-- WhatsApp & Crawler fallback -->
	<link rel="image_src" href="{page.url.origin}/og-image.png" />
</svelte:head>

{@render children()}

<ChatWidget />
