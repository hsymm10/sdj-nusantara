<!-- Section 12: Jaringan Kolaborasi SDJNusantara (Mockup Final Single Source of Truth) -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface PartnerLogo {
		id: string;
		name: string;
		svg: string;
	}

	// 5 Core Official Logos matching Mockup 2 in exact required order:
	// 1. Kampus Merdeka | 2. LPDP | 3. BRIN | 4. Kemendikbud | 5. Pegadaian
	const corePartners: PartnerLogo[] = [
		{
			id: 'kampus-merdeka',
			name: 'Kampus Merdeka INDONESIA JAYA',
			svg: `
				<svg width="170" height="52" viewBox="0 0 170 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kampus Merdeka">
					<!-- Wing Bird Emblem -->
					<path d="M14 38C7 33 4.5 22 9.5 11C17.5 16 23 26.5 23 35C20 38 17 38 14 38Z" fill="#0090D0"/>
					<path d="M23 35C28.5 29.5 34 18 31 7C23 12.5 20.5 23.5 20.5 32C20.5 34 21.5 35 23 35Z" fill="#F37021"/>
					<circle cx="16" cy="8.5" r="3.2" fill="#0090D0"/>
					<!-- Text: Kampus Merdeka -->
					<text x="40" y="22" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16.5" font-weight="900" fill="#003B73" letter-spacing="-0.02em">Kampus</text>
					<text x="40" y="38" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16.5" font-weight="900" fill="#003B73" letter-spacing="-0.02em">Merdeka</text>
					<!-- Pill Banner: INDONESIA JAYA -->
					<rect x="40" y="42" width="84" height="8.5" rx="4.25" fill="#F37021"/>
					<text x="82" y="49" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="6.2" font-weight="800" fill="#FFFFFF" letter-spacing="0.08em">INDONESIA JAYA</text>
				</svg>
			`
		},
		{
			id: 'lpdp',
			name: 'LPDP (Lembaga Pengelola Dana Pendidikan)',
			svg: `
				<svg width="140" height="52" viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LPDP">
					<!-- Flame Mark: Yellow, Orange, Red -->
					<path d="M19 12C21.5 20 16.5 26 22 34.5C28 26 30 20 27.5 12C24.5 18 22 18 19 12Z" fill="#ED1C24"/>
					<path d="M13.5 20C16 26 13.5 31.5 18 37C22.5 31.5 23.5 26 21 20C18.5 24.5 16.5 24.5 13.5 20Z" fill="#F7941E"/>
					<path d="M23.5 21C25 25 27 28.5 25.5 33C27.5 29.5 28 25 27 21C26 23 25 23 23.5 21Z" fill="#FFC20E"/>
					<!-- LPDP Wordmark in dark navy -->
					<text x="38" y="35" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="28" font-weight="900" fill="#0B2238" letter-spacing="-0.03em">lpdp</text>
				</svg>
			`
		},
		{
			id: 'brin',
			name: 'BRIN (Badan Riset dan Inovasi Nasional)',
			svg: `
				<svg width="145" height="52" viewBox="0 0 145 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BRIN">
					<!-- BRIN Red Geometric Segmented Circle -->
					<g transform="translate(6, 4)">
						<path d="M20 9A11 11 0 0 0 9 20H13.5A6.5 6.5 0 0 1 20 13.5V9Z" fill="#E5232A"/>
						<path d="M22 9V13.5A6.5 6.5 0 0 1 28.5 20H33A11 11 0 0 0 22 9Z" fill="#E5232A"/>
						<path d="M9 22A11 11 0 0 0 20 33V28.5A6.5 6.5 0 0 1 13.5 22H9Z" fill="#E5232A"/>
						<path d="M33 22H28.5A6.5 6.5 0 0 1 22 28.5V33A11 11 0 0 0 33 22Z" fill="#E5232A"/>
						<circle cx="21" cy="21" r="3.2" fill="#E5232A"/>
					</g>
					<!-- BRIN Red Wordmark -->
					<text x="48" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="24" font-weight="900" fill="#E5232A" letter-spacing="0.04em">BRIN</text>
				</svg>
			`
		},
		{
			id: 'kemdikbud',
			name: 'Kemendikbud (Kementerian Pendidikan dan Kebudayaan)',
			svg: `
				<svg width="168" height="52" viewBox="0 0 168 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kemendikbud">
					<!-- Tut Wuri Handayani Circular Blue Seal -->
					<g transform="translate(20, 26)">
						<circle cx="0" cy="0" r="14.5" fill="#005A9C"/>
						<path d="M-8 5.5C-5.5 1 -1 0 0 -6.5C1 0 5.5 1 8 5.5C4.5 4.5 1 2 0 1C-1 2 -4.5 4.5 -8 5.5Z" fill="#FFD100"/>
						<path d="M0 -7.5C-1.5 -5 0 -3 0 -3C0 -3 1.5 -5 0 -7.5Z" fill="#FFFFFF"/>
						<circle cx="0" cy="7" r="2.2" fill="#FFFFFF"/>
					</g>
					<!-- Text Kemdikbud / Kemendikbud -->
					<text x="42" y="33" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" font-weight="900" fill="#003B73" letter-spacing="-0.02em">Kemdikbud</text>
				</svg>
			`
		},
		{
			id: 'pegadaian',
			name: 'PT Pegadaian (Persero)',
			svg: `
				<svg width="158" height="52" viewBox="0 0 158 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pegadaian">
					<!-- Pegadaian Circular Green Scales Seal -->
					<g transform="translate(19, 26)">
						<circle cx="0" cy="0" r="14.5" fill="#008050"/>
						<line x1="-8" y1="-2.2" x2="8" y2="-2.2" stroke="#FFFFFF" stroke-width="2.2"/>
						<line x1="0" y1="-6.5" x2="0" y2="7.5" stroke="#FFFFFF" stroke-width="2.2"/>
						<path d="M-8 -2.2L-10.5 4H-5.5LZ M8 -2.2L5.5 4H10.5LZ" fill="#FFFFFF"/>
					</g>
					<!-- Text Pegadaian in Green Bold -->
					<text x="40" y="33" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" font-weight="900" fill="#008050" letter-spacing="-0.02em">Pegadaian</text>
				</svg>
			`
		}
	];

	// Extended partners for smooth 3-page carousel navigation
	const partnerKemnaker: PartnerLogo = {
		id: 'kemnaker',
		name: 'Kementerian Ketenagakerjaan RI (Kemnaker)',
		svg: `
			<svg width="160" height="52" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kemnaker">
				<g transform="translate(20, 26) scale(1.1)">
					<circle cx="0" cy="0" r="12" fill="none" stroke="#0B3056" stroke-width="2.5"/>
					<circle cx="0" cy="0" r="4.5" fill="#0B3056"/>
					<path d="M0 -15L2.5 -11H-2.5LZ M11 -11L12 -7L8 -9LZ M15 0L11 2L11 -2LZ M11 11L7 12L9 8LZ M0 15L-2.5 11H2.5LZ M-11 11L-12 7L-8 9LZ M-15 0L-11 -2L-11 2LZ M-11 -11L-7 -12L-9 -8LZ" fill="#0B3056"/>
				</g>
				<text x="42" y="33" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" font-weight="900" fill="#0B3056" letter-spacing="-0.02em">Kemnaker</text>
			</svg>
		`
	};

	const partnerBappenas: PartnerLogo = {
		id: 'bappenas',
		name: 'Kementerian PPN / Bappenas',
		svg: `
			<svg width="155" height="52" viewBox="0 0 155 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bappenas">
				<g transform="translate(19, 26) scale(1.15)">
					<polygon points="0,-12 10.4,-6 10.4,6 0,12 -10.4,6 -10.4,-6" fill="none" stroke="#007799" stroke-width="2.2"/>
					<circle cx="0" cy="0" r="3.5" fill="#007799"/>
					<line x1="0" y1="-8" x2="0" y2="-4" stroke="#007799" stroke-width="1.8"/>
					<line x1="7" y1="4" x2="3.5" y2="2" stroke="#007799" stroke-width="1.8"/>
					<line x1="-7" y1="4" x2="-3.5" y2="2" stroke="#007799" stroke-width="1.8"/>
				</g>
				<text x="40" y="33" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" font-weight="900" fill="#007799" letter-spacing="-0.02em">Bappenas</text>
			</svg>
		`
	};

	// 3 Distinct Pages of 5 Logos each (Page 0 is exact Mockup 2):
	const pages: PartnerLogo[][] = [
		[...corePartners], // Page 0: Kampus Merdeka, LPDP, BRIN, Kemdikbud, Pegadaian
		[corePartners[1], corePartners[2], corePartners[3], corePartners[4], partnerKemnaker], // Page 1
		[corePartners[2], corePartners[3], corePartners[4], partnerKemnaker, partnerBappenas]  // Page 2
	];

	const TOTAL_PAGES = 3;
	let activePage = $state(0);
	let isTransitioning = $state(true);
	let isDragging = $state(false);
	let startX = 0;
	let dragDeltaX = $state(0);
	let autoTimer: ReturnType<typeof setInterval> | null = null;
	let containerRef: HTMLElement | null = null;

	function startAutoplay() {
		stopAutoplay();
		autoTimer = setInterval(() => {
			goToNextPage();
		}, 4000);
	}

	function stopAutoplay() {
		if (autoTimer) {
			clearInterval(autoTimer);
			autoTimer = null;
		}
	}

	function goToNextPage() {
		isTransitioning = true;
		activePage = (activePage + 1) % TOTAL_PAGES;
	}

	function goToPrevPage() {
		isTransitioning = true;
		activePage = (activePage - 1 + TOTAL_PAGES) % TOTAL_PAGES;
	}

	function setPage(index: number) {
		isTransitioning = true;
		activePage = index;
		startAutoplay();
	}

	// Pointer Drag / Swipe Interactions
	function handlePointerDown(e: PointerEvent) {
		stopAutoplay();
		isDragging = true;
		startX = e.clientX;
		dragDeltaX = 0;
		isTransitioning = false;
		if (containerRef) {
			containerRef.setPointerCapture(e.pointerId);
		}
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging) return;
		dragDeltaX = e.clientX - startX;
	}

	function handlePointerUp(e: PointerEvent) {
		if (!isDragging) return;
		isDragging = false;
		if (containerRef && containerRef.hasPointerCapture(e.pointerId)) {
			containerRef.releasePointerCapture(e.pointerId);
		}

		const threshold = 45;
		isTransitioning = true;

		if (dragDeltaX < -threshold) {
			goToNextPage();
		} else if (dragDeltaX > threshold) {
			goToPrevPage();
		}

		dragDeltaX = 0;
		startAutoplay();
	}

	function handlePointerCancel(e: PointerEvent) {
		if (isDragging) {
			isDragging = false;
			isTransitioning = true;
			dragDeltaX = 0;
			startAutoplay();
		}
	}

	onMount(() => {
		startAutoplay();
	});

	onDestroy(() => {
		stopAutoplay();
	});
</script>

<section class="partners-redesign-section" id="mitra-kolaborasi">
	<!-- Abstract Background Vector Decorations (Sesuai Mockup 2) -->
	<!-- 1. Top-Left Soft Cyan Wave -->
	<svg class="bg-decor-top-cyan" viewBox="0 0 460 260" fill="none" aria-hidden="true">
		<defs>
			<radialGradient id="topCyanGrad" cx="0%" cy="0%" r="100%">
				<stop offset="0%" stop-color="#C2F1F7" stop-opacity="0.85" />
				<stop offset="60%" stop-color="#E2F8FA" stop-opacity="0.45" />
				<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
			</radialGradient>
		</defs>
		<path d="M0 0 L0 230 C120 230, 240 180, 360 80 C410 40, 440 15, 460 0 Z" fill="url(#topCyanGrad)" />
	</svg>

	<!-- 2. Top-Left Cyan Dot Matrix (5 cols x 3 rows) -->
	<div class="dot-matrix-top-left" aria-hidden="true">
		{#each Array(15) as _}
			<span class="dot-cyan"></span>
		{/each}
	</div>

	<!-- 3. Top-Right Yellow Dot Matrix (5 cols x 4 rows) -->
	<div class="dot-matrix-top-right" aria-hidden="true">
		{#each Array(20) as _}
			<span class="dot-gold"></span>
		{/each}
	</div>

	<!-- 4. Bottom-Left Grey Dot Matrix (5 cols x 3 rows) -->
	<div class="dot-matrix-bottom-left" aria-hidden="true">
		{#each Array(15) as _}
			<span class="dot-grey"></span>
		{/each}
	</div>

	<!-- 5. Bottom-Right Large Soft Yellow Wave -->
	<svg class="bg-decor-bottom-yellow" viewBox="0 0 520 320" fill="none" aria-hidden="true">
		<defs>
			<radialGradient id="bottomYellowGrad" cx="100%" cy="100%" r="100%">
				<stop offset="0%" stop-color="#FDE68A" stop-opacity="0.8" />
				<stop offset="45%" stop-color="#FEF3C7" stop-opacity="0.4" />
				<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
			</radialGradient>
		</defs>
		<path d="M520 320 L160 320 C240 220, 340 120, 450 40 L520 0 Z" fill="url(#bottomYellowGrad)" />
	</svg>

	<!-- Main Content Container -->
	<div class="partners-content-wrap">
		<!-- Header Section -->
		<div class="partners-header">
			<!-- Capsule Badge with Handshake Icon -->
			<div class="partners-badge-capsule">
				<span class="badge-icon" aria-hidden="true">🤝</span>
				<span class="badge-text">Mitra & Kolaborasi</span>
			</div>

			<!-- Main Heading with Curved Golden Swoosh Underline under SDJNusantara -->
			<h2 class="partners-main-title">
				Jaringan Kolaborasi
				<span class="title-highlight">
					SDJNusantara
					<!-- Curved golden swoosh underline -->
					<svg class="swoosh-brush" viewBox="0 0 240 18" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M 2 5 C 65 17, 160 17, 238 6 C 175 13, 85 13, 2 5 Z" fill="#FBBF24" />
					</svg>
				</span>
			</h2>

			<!-- Subtitle -->
			<p class="partners-subtitle">
				Bersama mitra terpercaya, kami menghadirkan lebih banyak peluang pendidikan, beasiswa, dan pengembangan talenta Indonesia.
			</p>
		</div>

		<!-- Big Capsule Container with Crescent Accents Behind -->
		<div class="capsule-outer-wrap">
			<!-- Yellow Crescent on Bottom-Left (Thick Bold Arc Hugging the Left Curve) -->
			<svg class="crescent-accent-left" viewBox="0 0 110 110" fill="none" aria-hidden="true">
				<path d="M 40 8 C 16 34, 20 78, 68 100 C 30 96, 6 64, 26 12 C 30 6, 36 6, 40 8 Z" fill="#F59E0B" />
			</svg>

			<!-- Cyan Crescent on Top-Right (Thick Bold Arc Hugging the Right Curve) -->
			<svg class="crescent-accent-right" viewBox="0 0 110 110" fill="none" aria-hidden="true">
				<path d="M 70 102 C 94 76, 90 32, 42 10 C 80 14, 104 46, 84 98 C 80 104, 74 104, 70 102 Z" fill="#00A6B4" />
			</svg>

			<!-- Pill / Capsule Container Card: 175px-185px height on desktop, border-radius 9999px -->
			<div
				class="partners-capsule-card"
				class:grabbing={isDragging}
				bind:this={containerRef}
				onpointerdown={handlePointerDown}
				onpointermove={handlePointerMove}
				onpointerup={handlePointerUp}
				onpointercancel={handlePointerCancel}
				onmouseenter={stopAutoplay}
				onmouseleave={() => { if (!isDragging) startAutoplay(); }}
				role="region"
				aria-label="Carousel Mitra dan Kolaborasi SDJNusantara"
			>
				<div class="slider-viewport">
					<div
						class="slider-track"
						class:transitioning={isTransitioning}
						style="transform: translateX(calc(-{activePage * 100}% + {dragDeltaX}px));"
					>
						{#each pages as pageLogos, pageIdx}
							<div class="slider-page">
								{#each pageLogos as partner, idx}
									<div class="logo-slot" title={partner.name}>
										<div class="logo-svg-wrap">
											{@html partner.svg}
										</div>
									</div>
									{#if idx < 4}
										<div class="vertical-divider" aria-hidden="true"></div>
									{/if}
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Pagination Indicators: 3 Centered Dots (14px diameter, 12px gap) -->
		<div class="pagination-dots-wrap" role="tablist" aria-label="Navigasi Slider Mitra">
			{#each Array(TOTAL_PAGES) as _, idx}
				<button
					type="button"
					class="page-dot"
					class:active={activePage === idx}
					onclick={() => setPage(idx)}
					aria-label={`Lihat mitra halaman ${idx + 1}`}
					aria-selected={activePage === idx}
					role="tab"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	.partners-redesign-section {
		position: relative;
		background: #FFFFFF;
		padding: 80px 0 96px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	/* Background Decorations */
	.bg-decor-top-cyan {
		position: absolute;
		top: 0;
		left: 0;
		width: clamp(260px, 32vw, 460px);
		height: clamp(140px, 18vw, 260px);
		pointer-events: none;
		z-index: 1;
	}

	.bg-decor-bottom-yellow {
		position: absolute;
		bottom: 0;
		right: 0;
		width: clamp(300px, 36vw, 520px);
		height: clamp(180px, 22vw, 320px);
		pointer-events: none;
		z-index: 1;
	}

	/* Dot Matrices */
	.dot-matrix-top-left {
		position: absolute;
		top: 65px;
		left: 45px;
		display: grid;
		grid-template-columns: repeat(5, 6px);
		grid-gap: 12px;
		pointer-events: none;
		z-index: 2;
	}

	.dot-cyan {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #62D5E3;
		opacity: 0.75;
	}

	.dot-matrix-top-right {
		position: absolute;
		top: 75px;
		right: 50px;
		display: grid;
		grid-template-columns: repeat(5, 6px);
		grid-gap: 13px;
		pointer-events: none;
		z-index: 2;
	}

	.dot-gold {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #FBBF24;
		opacity: 0.75;
	}

	.dot-matrix-bottom-left {
		position: absolute;
		bottom: 60px;
		left: 45px;
		display: grid;
		grid-template-columns: repeat(5, 6px);
		grid-gap: 12px;
		pointer-events: none;
		z-index: 2;
	}

	.dot-grey {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #CBD5E1;
		opacity: 0.65;
	}

	/* Content Wrap */
	.partners-content-wrap {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 24px;
		box-sizing: border-box;
	}

	/* Header */
	.partners-header {
		text-align: center;
		margin-bottom: 52px;
	}

	/* Badge: Cream capsule with handshake icon */
	.partners-badge-capsule {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #FFF8E7;
		border: 1px solid #FDE68A;
		border-radius: 9999px;
		padding: 7px 18px;
		margin-bottom: 16px;
		box-shadow: 0 2px 8px rgba(251, 191, 36, 0.12);
	}

	.badge-icon {
		font-size: 15px;
		line-height: 1;
	}

	.badge-text {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2238;
		letter-spacing: 0.01em;
	}

	/* Main Title */
	.partners-main-title {
		font-size: clamp(28px, 3.4vw, 46px);
		line-height: 1.22;
		font-weight: 900;
		color: #081525;
		margin: 0 0 14px;
		letter-spacing: -0.02em;
	}

	.title-highlight {
		position: relative;
		display: inline-block;
		white-space: nowrap;
		color: #0B2238;
	}

	.swoosh-brush {
		position: absolute;
		bottom: -10px;
		left: 0;
		width: 100%;
		height: 14px;
		pointer-events: none;
	}

	/* Subtitle */
	.partners-subtitle {
		font-size: clamp(14px, 1.2vw, 15.5px);
		line-height: 1.65;
		color: #5C6F84;
		max-width: 760px;
		margin: 0 auto;
	}

	/* Capsule Outer Wrap with Crescent Accents: width ~90-95% */
	.capsule-outer-wrap {
		position: relative;
		width: 92%;
		max-width: 1260px;
		margin: 0 auto 24px;
	}

	/* Bold Crescent Accents Hugging Capsule Ends */
	.crescent-accent-left {
		position: absolute;
		left: -18px;
		bottom: -14px;
		width: 70px;
		height: 70px;
		pointer-events: none;
		z-index: 1;
	}

	.crescent-accent-right {
		position: absolute;
		right: -18px;
		top: -14px;
		width: 70px;
		height: 70px;
		pointer-events: none;
		z-index: 1;
	}

	/* Capsule Container Card: 110-120px height on desktop (115px) */
	.partners-capsule-card {
		position: relative;
		z-index: 2;
		background: #FFFFFF;
		border: 1.5px solid #E2E8F0;
		border-radius: 9999px;
		height: 115px;
		box-shadow: 0 10px 30px rgba(11, 41, 72, 0.05), 0 2px 6px rgba(11, 41, 72, 0.02);
		overflow: hidden;
		user-select: none;
		touch-action: pan-y;
		cursor: grab;
	}

	.partners-capsule-card.grabbing {
		cursor: grabbing;
	}

	.slider-viewport {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.slider-track {
		display: flex;
		height: 100%;
		width: 100%;
		will-change: transform;
	}

	.slider-track.transitioning {
		transition: transform 700ms cubic-bezier(0.25, 1, 0.5, 1);
	}

	.slider-page {
		flex: 0 0 100%;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 0 36px;
		box-sizing: border-box;
	}

	.logo-slot {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.logo-svg-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 42px;
		width: 100%;
		max-width: 100%;
		transition: transform 0.25s ease;
	}

	.logo-svg-wrap :global(svg) {
		max-width: 100%;
		height: auto;
		max-height: 38px;
		display: block;
	}

	.logo-slot:hover .logo-svg-wrap {
		transform: scale(1.05);
	}

	/* Vertical Divider: 45-55px height (approx 50px), #E5EAF2 */
	.vertical-divider {
		flex: 0 0 1px;
		width: 1px;
		height: 50px;
		background: #E5EAF2;
	}

	/* Pagination Dots (9-11px diameter, 12px gap, active: #FFB900) */
	.pagination-dots-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		margin-top: 20px;
	}

	.page-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #E2E8F0;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.page-dot:hover {
		background: #CBD5E1;
		transform: scale(1.15);
	}

	.page-dot.active {
		background: #FFB900;
		box-shadow: 0 2px 6px rgba(255, 185, 0, 0.4);
		transform: scale(1.1);
	}

	/* Responsive Tablet (max 1024px) */
	@media (max-width: 1024px) {
		.partners-redesign-section {
			padding: 68px 0 84px;
		}

		.partners-header {
			margin-bottom: 40px;
		}

		.capsule-outer-wrap {
			width: 95%;
		}

		.partners-capsule-card {
			height: 100px;
			border-radius: 9999px;
			padding: 0 16px;
		}

		.slider-page {
			padding: 0 16px;
		}

		.logo-slot {
			padding: 0 6px;
		}

		.logo-svg-wrap {
			height: 36px;
			transform: scale(0.9);
		}

		.logo-svg-wrap :global(svg) {
			max-height: 32px;
		}

		.vertical-divider {
			height: 44px;
		}

		.crescent-accent-left {
			left: -14px;
			bottom: -10px;
			width: 58px;
			height: 58px;
		}

		.crescent-accent-right {
			right: -14px;
			top: -10px;
			width: 58px;
			height: 58px;
		}

		.dot-matrix-top-left,
		.dot-matrix-top-right,
		.dot-matrix-bottom-left {
			display: none;
		}
	}

	/* Responsive Mobile (max 640px) */
	@media (max-width: 640px) {
		.partners-redesign-section {
			padding: 52px 0 64px;
		}

		.partners-content-wrap {
			padding: 0 16px;
		}

		.partners-header {
			margin-bottom: 30px;
		}

		.partners-badge-capsule {
			padding: 6px 14px;
		}

		.badge-text {
			font-size: 12px;
		}

		.partners-main-title {
			font-size: 24px;
		}

		.partners-subtitle {
			font-size: 13.5px;
		}

		.capsule-outer-wrap {
			width: 100%;
			margin: 0 auto 18px;
		}

		.partners-capsule-card {
			height: 84px;
			border-radius: 9999px;
			padding: 0 10px;
		}

		.slider-page {
			padding: 0 10px;
			justify-content: space-around;
		}

		.logo-slot {
			padding: 0 4px;
		}

		.logo-svg-wrap {
			height: 30px;
			transform: scale(0.85);
		}

		.logo-svg-wrap :global(svg) {
			max-height: 26px;
		}

		.vertical-divider {
			height: 34px;
		}

		.crescent-accent-left,
		.crescent-accent-right {
			display: none;
		}

		.page-dot {
			width: 9px;
			height: 9px;
		}

		.pagination-dots-wrap {
			gap: 10px;
			margin-top: 16px;
		}
	}
</style>