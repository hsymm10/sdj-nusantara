<!-- Section 12: Mitra & Kolaborasi (Automatic Infinite Carousel & Touch/Drag - Mockup SDJNusantara) -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface PartnerLogo {
		id: string;
		name: string;
		svg: string;
	}

	// 7 Partner Logos: 1-5 strictly per user specification, followed by Kemdikbud & Pegadaian from mockup
	const basePartners: PartnerLogo[] = [
		{
			id: 'kampus-merdeka',
			name: 'Kampus Merdeka',
			svg: `
				<svg width="150" height="42" viewBox="0 0 150 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kampus Merdeka">
					<!-- Wing Bird Icon -->
					<path d="M12 32C6 27 4 18 8 9C15 13.5 19.5 22.5 19.5 29.5C17.5 32 15 32 12 32Z" fill="#0090D0"/>
					<path d="M19.5 29.5C24 25 28.5 16 26 7C19.5 11.5 17.5 20.5 17.5 27.5C17.5 28.5 18.5 29.5 19.5 29.5Z" fill="#F37021"/>
					<circle cx="14" cy="7" r="2.5" fill="#0090D0"/>
					<!-- Text Kampus Merdeka -->
					<text x="34" y="20" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="14.5" font-weight="800" fill="#003B73">kampus</text>
					<text x="34" y="34" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="14.5" font-weight="800" fill="#F37021">merdeka</text>
				</svg>
			`
		},
		{
			id: 'lpdp',
			name: 'LPDP (Lembaga Pengelola Dana Pendidikan)',
			svg: `
				<svg width="125" height="42" viewBox="0 0 120 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LPDP">
					<!-- Flame symbol -->
					<path d="M18 9C20.5 16 16 21 20.5 28C25.5 21 27.5 16 25 9C22.5 14 20.5 14 18 9Z" fill="#ED1C24"/>
					<path d="M13 16C15.5 21 13 25.5 17 30C20.5 25.5 21.5 21 19.5 16C17 19.5 15.5 19.5 13 16Z" fill="#F7941E"/>
					<path d="M22 17C23.5 20 25.5 22.5 24 26C26 23.5 26.5 20 25.5 17C24.5 19 23.5 19 22 17Z" fill="#FFC20E"/>
					<!-- LPDP Wordmark -->
					<text x="34" y="29" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="22" font-weight="900" fill="#0B2948" letter-spacing="-0.02em">lpdp</text>
				</svg>
			`
		},
		{
			id: 'brin',
			name: 'BRIN (Badan Riset dan Inovasi Nasional)',
			svg: `
				<svg width="120" height="42" viewBox="0 0 115 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BRIN">
					<!-- Segmented circular emblem -->
					<path d="M20 9A11 11 0 0 0 9 20H13.5A6.5 6.5 0 0 1 20 13.5V9Z" fill="#DC2626"/>
					<path d="M22 9V13.5A6.5 6.5 0 0 1 28.5 20H33A11 11 0 0 0 22 9Z" fill="#DC2626"/>
					<path d="M9 22A11 11 0 0 0 20 33V28.5A6.5 6.5 0 0 1 13.5 22H9Z" fill="#DC2626"/>
					<path d="M33 22H28.5A6.5 6.5 0 0 1 22 28.5V33A11 11 0 0 0 33 22Z" fill="#DC2626"/>
					<circle cx="21" cy="21" r="3" fill="#DC2626"/>
					<!-- BRIN Wordmark -->
					<text x="38" y="28" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#DC2626" letter-spacing="0.04em">BRIN</text>
				</svg>
			`
		},
		{
			id: 'kemnaker',
			name: 'Kementerian Ketenagakerjaan RI (Kemnaker)',
			svg: `
				<svg width="145" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kemnaker">
					<!-- 9-petal cog/emblem -->
					<g transform="translate(17, 21) scale(0.9)">
						<circle cx="0" cy="0" r="11" fill="none" stroke="#0B3056" stroke-width="2.5"/>
						<circle cx="0" cy="0" r="4" fill="#0B3056"/>
						<path d="M0 -14L2 -10H-2LZ M10 -10L11 -6L7 -8LZ M14 0L10 2L10 -2LZ M10 10L6 11L8 7LZ M0 14L-2 10H2LZ M-10 10L-11 6L-7 8LZ M-14 0L-10 -2L-10 2LZ M-10 -10L-6 -11L-8 -7LZ" fill="#0B3056"/>
					</g>
					<!-- Text Kemnaker -->
					<text x="36" y="27" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#0B3056">Kemnaker</text>
				</svg>
			`
		},
		{
			id: 'bappenas',
			name: 'Kementerian PPN / Bappenas',
			svg: `
				<svg width="140" height="42" viewBox="0 0 135 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bappenas">
					<!-- Hexagonal emblem -->
					<g transform="translate(17, 21) scale(0.95)">
						<polygon points="0,-12 10.4,-6 10.4,6 0,12 -10.4,6 -10.4,-6" fill="none" stroke="#007799" stroke-width="2.2"/>
						<circle cx="0" cy="0" r="3.5" fill="#007799"/>
						<line x1="0" y1="-8" x2="0" y2="-4" stroke="#007799" stroke-width="1.8"/>
						<line x1="7" y1="4" x2="3.5" y2="2" stroke="#007799" stroke-width="1.8"/>
						<line x1="-7" y1="4" x2="-3.5" y2="2" stroke="#007799" stroke-width="1.8"/>
					</g>
					<!-- Text Bappenas -->
					<text x="35" y="27" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#007799">Bappenas</text>
				</svg>
			`
		},
		{
			id: 'kemdikbud',
			name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
			svg: `
				<svg width="145" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kemdikbud">
					<!-- Tut Wuri Handayani emblem -->
					<g transform="translate(18, 21)">
						<circle cx="0" cy="0" r="11" fill="#005A9C"/>
						<path d="M-6 4C-4 1 -1 0 0 -5C1 0 4 1 6 4C3 3 1 2 0 1C-1 2 -3 3 -6 4Z" fill="#FFD100"/>
						<path d="M0 -6C-1 -4 0 -2 0 -2C0 -2 1 -4 0 -6Z" fill="#FFFFFF"/>
						<circle cx="0" cy="5" r="1.5" fill="#FFFFFF"/>
					</g>
					<text x="36" y="27" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="16.5" font-weight="800" fill="#005A9C">Kemdikbud</text>
				</svg>
			`
		},
		{
			id: 'pegadaian',
			name: 'PT Pegadaian (Persero)',
			svg: `
				<svg width="140" height="42" viewBox="0 0 135 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pegadaian">
					<!-- Pegadaian circular scale emblem -->
					<g transform="translate(17, 21)">
						<circle cx="0" cy="0" r="11" fill="#008050"/>
						<line x1="-6" y1="-2" x2="6" y2="-2" stroke="#FFFFFF" stroke-width="1.8"/>
						<line x1="0" y1="-5" x2="0" y2="6" stroke="#FFFFFF" stroke-width="1.8"/>
						<path d="M-6 -2L-8 3H-4LZ M6 -2L4 3H8LZ" fill="#FFFFFF"/>
					</g>
					<text x="34" y="27" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="16.5" font-weight="800" fill="#008050">Pegadaian</text>
				</svg>
			`
		}
	];

	// Duplicate 3 times for seamless infinite circular looping
	const N = basePartners.length;
	const partners = [...basePartners, ...basePartners, ...basePartners];

	// Carousel state
	let currentIndex = $state(N); // Start in middle set
	let isTransitioning = $state(true);
	let isDragging = $state(false);
	let startX = 0;
	let currentDragDelta = $state(0);
	let autoIntervalId: ReturnType<typeof setInterval> | null = null;
	let viewportWidth = $state(1200);

	// Carousel track container reference
	let trackContainer: HTMLElement | null = null;

	// Number of visible items according to screen width
	let visibleCount = $derived(
		viewportWidth < 640 ? 2 : viewportWidth < 1024 ? 3 : 5
	);

	// Percentage shift per item
	let itemPercentage = $derived(100 / visibleCount);

	function startAutoTimer() {
		stopAutoTimer();
		autoIntervalId = setInterval(() => {
			nextSlide();
		}, 4000);
	}

	function stopAutoTimer() {
		if (autoIntervalId) {
			clearInterval(autoIntervalId);
			autoIntervalId = null;
		}
	}

	function nextSlide() {
		isTransitioning = true;
		currentIndex += 1;
	}

	function prevSlide() {
		isTransitioning = true;
		currentIndex -= 1;
	}

	function handleTransitionEnd() {
		// When reached end of second set, seamlessly wrap back without animation
		if (currentIndex >= N * 2) {
			isTransitioning = false;
			currentIndex = currentIndex - N;
		} else if (currentIndex < N) {
			isTransitioning = false;
			currentIndex = currentIndex + N;
		}
	}

	// Pointer / Drag interactions
	function handlePointerDown(e: PointerEvent) {
		stopAutoTimer();
		isDragging = true;
		startX = e.clientX;
		currentDragDelta = 0;
		isTransitioning = false;
		if (trackContainer) {
			trackContainer.setPointerCapture(e.pointerId);
		}
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging) return;
		currentDragDelta = e.clientX - startX;
	}

	function handlePointerUp(e: PointerEvent) {
		if (!isDragging) return;
		isDragging = false;
		if (trackContainer && trackContainer.hasPointerCapture(e.pointerId)) {
			trackContainer.releasePointerCapture(e.pointerId);
		}

		const threshold = 40; // minimum pixels to trigger slide
		isTransitioning = true;

		if (currentDragDelta < -threshold) {
			currentIndex += 1;
		} else if (currentDragDelta > threshold) {
			currentIndex -= 1;
		}

		currentDragDelta = 0;
		startAutoTimer();
	}

	function handlePointerCancel(e: PointerEvent) {
		if (isDragging) {
			isDragging = false;
			isTransitioning = true;
			currentDragDelta = 0;
			startAutoTimer();
		}
	}

	// Wheel horizontal scroll support
	let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
	function handleWheel(e: WheelEvent) {
		if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
			stopAutoTimer();
			if (!wheelTimeout) {
				if (e.deltaX > 0) {
					nextSlide();
				} else {
					prevSlide();
				}
				wheelTimeout = setTimeout(() => {
					wheelTimeout = null;
					startAutoTimer();
				}, 600);
			}
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			viewportWidth = window.innerWidth;
			const onResize = () => {
				viewportWidth = window.innerWidth;
			};
			window.addEventListener('resize', onResize);
			startAutoTimer();

			return () => {
				window.removeEventListener('resize', onResize);
				stopAutoTimer();
			};
		}
	});

	onDestroy(() => {
		stopAutoTimer();
	});
</script>

<section class="partners-edu-section" id="mitra-kolaborasi">
	<div class="partners-edu-container">
		<!-- Section Header (Centered) -->
		<div class="partners-header">
			<div class="partners-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Mitra & Kolaborasi</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="partners-title">Mitra & Kolaborasi</h2>
			<p class="partners-sub">
				Bersama mitra strategis, kami memperluas dampak pendidikan di Indonesia.
			</p>
		</div>

		<!-- Logo Carousel Strip Container -->
		<div
			class="partners-strip-card"
			class:grabbing={isDragging}
			bind:this={trackContainer}
			onpointerdown={handlePointerDown}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
			onpointercancel={handlePointerCancel}
			onmouseenter={stopAutoTimer}
			onmouseleave={() => { if (!isDragging) startAutoTimer(); }}
			onwheel={handleWheel}
			role="region"
			aria-label="Carousel Mitra dan Kolaborasi SDJNusantara"
		>
			<div class="carousel-viewport">
				<div
					class="carousel-track"
					class:transitioning={isTransitioning}
					ontransitionend={handleTransitionEnd}
					style="transform: translateX(calc(-{currentIndex * itemPercentage}% + {currentDragDelta}px));"
				>
					{#each partners as partner, i (i)}
						<div
							class="carousel-slide"
							style="flex: 0 0 {itemPercentage}%; width: {itemPercentage}%;"
						>
							<div class="partner-logo-item" title={partner.name}>
								{@html partner.svg}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partners-edu-section {
		background: #FFFFFF;
		padding: 72px 0 84px;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.partners-edu-container {
		width: 100%;
		max-width: 1240px;
		margin: 0 auto;
		padding: 0 24px;
		box-sizing: border-box;
	}

	.partners-header {
		text-align: center;
		margin-bottom: 34px;
	}

	.partners-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 18px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 13px;
		font-weight: 700;
		color: #08AEBB;
		letter-spacing: 0.04em;
	}

	.partners-title {
		font-size: clamp(24px, 2.2vw, 30px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
	}

	.partners-sub {
		font-size: 14.5px;
		line-height: 1.6;
		color: #64748B;
		margin: 0 auto;
		max-width: 600px;
	}

	/* Carousel Card Container: #F8FAFC, rounded, subtle border & shadow */
	.partners-strip-card {
		background: #F8FAFC;
		border: 1px solid #DCE5EF;
		border-radius: 18px;
		padding: 24px 20px;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.03);
		position: relative;
		overflow: hidden;
		user-select: none;
		touch-action: pan-y;
		cursor: grab;
	}

	.partners-strip-card.grabbing {
		cursor: grabbing;
	}

	.carousel-viewport {
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.carousel-track {
		display: flex;
		align-items: center;
		width: 100%;
		will-change: transform;
	}

	.carousel-track.transitioning {
		transition: transform 700ms cubic-bezier(0.25, 1, 0.5, 1);
	}

	.carousel-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 14px;
	}

	.partner-logo-item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		width: 100%;
		transition: transform 0.25s ease;
	}

	.partner-logo-item:hover {
		transform: scale(1.04);
	}

	/* Responsive Tablet */
	@media (max-width: 1024px) {
		.partners-edu-section {
			padding: 60px 0 72px;
		}

		.partners-strip-card {
			padding: 22px 16px;
			border-radius: 16px;
		}

		.carousel-slide {
			padding: 0 10px;
		}
	}

	/* Responsive Mobile */
	@media (max-width: 640px) {
		.partners-edu-section {
			padding: 48px 0 56px;
		}

		.partners-edu-container {
			padding: 0 18px;
		}

		.partners-strip-card {
			padding: 18px 12px;
			border-radius: 14px;
		}

		.partners-title {
			font-size: 22px;
		}

		.partners-sub {
			font-size: 13.5px;
		}

		.carousel-slide {
			padding: 0 8px;
		}

		.partner-logo-item {
			height: 40px;
		}
	}
</style>