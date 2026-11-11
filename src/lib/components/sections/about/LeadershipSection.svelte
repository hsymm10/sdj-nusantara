<script lang="ts">
	import { onMount } from 'svelte';
	import leadersData from '#lib/data/leaders.js';
	import LeaderModal from './LeaderModal.svelte';

	// Svelte 5 runes
	type Leader = (typeof leadersData)[0];
	interface Props {
		onOpenModal?: (leader: Leader) => void;
	}
	let { onOpenModal: externalOnOpenModal }: Props = $props();

	// Carousel state
	let activeIndex = $state(0);
	const count = leadersData.length;

	// Modal state
	let isModalOpen = $state(false);
	let selectedLeader = $state<Leader | null>(null);
	let triggerElement = $state<HTMLElement | null>(null);

	// DOM Elements
	let trackWrapperEl: HTMLElement | null = null;
	let cardElements: HTMLElement[] = [];

	// Pointer Drag & Swipe state (Stored in standard non-reactive variables for 60fps performance)
	let isPointerDown = false;
	let didDrag = false;
	let dragStartX = 0;
	let dragStartY = 0;
	let dragStartTime = 0;
	let currentDragX = 0;
	let lastMoveTime = 0;
	let lastMoveX = 0;
	let velocityX = 0;
	let rafId: number | null = null;
	let lastWheelTime = 0;

	// Visual spacing in pixels between cards for continuous drag interpolation
	const CARD_SPACING = 195;

	function next() {
		activeIndex = (activeIndex + 1) % count;
	}

	function prev() {
		activeIndex = (activeIndex - 1 + count) % count;
	}

	function shiftBy(steps: number) {
		activeIndex = (((activeIndex + steps) % count) + count) % count;
	}

	function openModalForLeader(leader: Leader, triggerEl?: HTMLElement | null) {
		selectedLeader = leader;
		triggerElement = triggerEl || null;
		isModalOpen = true;

		if (externalOnOpenModal) {
			externalOnOpenModal(leader);
		}
	}

	function closeModal() {
		isModalOpen = false;
	}

	function modalPrev() {
		prev();
		selectedLeader = leadersData[activeIndex];
	}

	function modalNext() {
		next();
		selectedLeader = leadersData[activeIndex];
	}

	function handleCardClick(index: number, e: MouseEvent) {
		// If user was dragging, suppress the click
		if (didDrag) {
			return;
		}

		if (index === activeIndex) {
			// Center card clicked -> OPEN MODAL!
			openModalForLeader(leadersData[index], cardElements[index]);
		} else {
			// Side card clicked -> shift to center
			activeIndex = index;
		}
	}

	function handleKeydown(e: KeyboardEvent, index: number) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			next();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		} else if (e.key === 'Enter' || e.key === ' ') {
			if (index === activeIndex) {
				e.preventDefault();
				openModalForLeader(leadersData[index], cardElements[index]);
			} else {
				e.preventDefault();
				activeIndex = index;
			}
		}
	}

	// Pointer Drag Events (attached ONLY to cards-track-wrapper, NOT the arrow buttons)
	function handlePointerDown(e: PointerEvent) {
		if (e.button !== 0) return;
		// Ignore clicks originating from interactive buttons or links
		if ((e.target as HTMLElement).closest('button.nav-btn, a, input')) return;

		isPointerDown = true;
		didDrag = false;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		dragStartTime = performance.now();
		lastMoveTime = dragStartTime;
		lastMoveX = dragStartX;
		currentDragX = 0;
		velocityX = 0;
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isPointerDown) return;

		const dx = e.clientX - dragStartX;
		const dy = e.clientY - dragStartY;

		// Check if drag threshold is crossed (±6px)
		if (!didDrag) {
			if (Math.abs(dx) > 6) {
				didDrag = true;
				// Capture pointer ONLY after confirmed drag
				try {
					(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
				} catch {
					// fallback
				}
			} else if (Math.abs(dy) > 12) {
				// Vertical scrolling, leave it to browser
				return;
			}
		}

		if (didDrag) {
			currentDragX = dx;
			const now = performance.now();
			const dt = now - lastMoveTime;
			if (dt > 16) {
				velocityX = (e.clientX - lastMoveX) / dt;
				lastMoveTime = now;
				lastMoveX = e.clientX;
			}

			// Render via requestAnimationFrame for silky 60fps tracking
			if (!rafId) {
				rafId = requestAnimationFrame(renderDragFrame);
			}
		}
	}

	function renderDragFrame() {
		rafId = null;
		if (!didDrag) return;
		applyDirectTransforms(currentDragX, true);
	}

	function handlePointerUp(e: PointerEvent) {
		if (!isPointerDown) return;
		isPointerDown = false;

		if (rafId) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}

		if (didDrag) {
			const dx = currentDragX;
			const absDx = Math.abs(dx);
			const isFlick = Math.abs(velocityX) > 0.32 && absDx > 20;
			const isPastThreshold = absDx >= 42; // ≥20% card width

			if (isPastThreshold || isFlick) {
				const rawSteps = Math.round(absDx / CARD_SPACING);
				const steps = Math.min(2, Math.max(1, rawSteps));
				if (dx < 0 || velocityX < -0.32) {
					shiftBy(steps);
				} else {
					shiftBy(-steps);
				}
			}

			// Release pointer capture
			try {
				(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
			} catch {
				// fallback
			}

			// Smooth snap back
			applyDirectTransforms(0, false);

			// Keep didDrag true for a short moment to suppress trailing click
			setTimeout(() => {
				didDrag = false;
			}, 75);
		} else {
			applyDirectTransforms(0, false);
		}
	}

	function handlePointerCancel() {
		isPointerDown = false;
		didDrag = false;
		if (rafId) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
		applyDirectTransforms(0, false);
	}

	// Horizontal wheel / trackpad support
	function handleWheel(e: WheelEvent) {
		if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 28) {
			const now = performance.now();
			if (now - lastWheelTime > 320) {
				lastWheelTime = now;
				if (e.deltaX > 0) {
					next();
				} else {
					prev();
				}
			}
		}
	}

	// Calculate base circular relative offset [-2, -1, 0, 1, 2]
	function getBaseOffset(index: number, current: number, total: number) {
		let diff = (index - current) % total;
		if (diff > total / 2) diff -= total;
		if (diff < -total / 2) diff += total;
		return diff;
	}

	// Directly apply CSS transforms to DOM cards to avoid Svelte reactive state thrashing
	function applyDirectTransforms(deltaX: number, isDraggingActive: boolean) {
		const dragRatio = isDraggingActive ? Math.max(-1.5, Math.min(1.5, deltaX / CARD_SPACING)) : 0;

		for (let i = 0; i < count; i++) {
			const el = cardElements[i];
			if (!el) continue;

			const baseOffset = getBaseOffset(i, activeIndex, count);
			const isVisible = Math.abs(baseOffset) <= 2;

			if (!isVisible) {
				el.style.opacity = '0';
				el.style.pointerEvents = 'none';
				continue;
			}

			const effOffset = baseOffset + dragRatio;
			const absEff = Math.abs(effOffset);

			const translateX = effOffset * CARD_SPACING;
			let scale = 1 - absEff * 0.14;
			if (scale < 0.65) scale = 0.65;
			let rotateY = -effOffset * 14;
			if (rotateY > 24) rotateY = 24;
			if (rotateY < -24) rotateY = -24;

			const translateZ = 60 - absEff * 45;
			let opacity = 1 - absEff * 0.12;
			if (opacity < 0) opacity = 0;
			if (opacity > 1) opacity = 1;

			const zIndex = Math.round(10 - absEff * 2);

			if (isDraggingActive) {
				el.style.transition = 'none';
			} else {
				el.style.transition = 'transform 450ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 450ms cubic-bezier(0.22, 0.61, 0.36, 1)';
			}

			el.style.transform = `translateX(${translateX.toFixed(1)}px) translateZ(${translateZ.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateY(${rotateY.toFixed(1)}deg)`;
			el.style.opacity = opacity.toFixed(2);
			el.style.zIndex = zIndex.toString();
			el.style.pointerEvents = Math.abs(baseOffset) <= 1 ? 'auto' : 'none';
		}
	}

	// Trigger direct transforms when activeIndex changes
	$effect(() => {
		// Read activeIndex reactively
		const _ = activeIndex;
		applyDirectTransforms(0, false);
	});
</script>

<section class="leadership-section" id="pimpinan">
	<!-- Background Glass Building Illustration (Right, opacity 0.12) -->
	<img
		src="/images/tentang-building-hero-hd.jpg"
		alt=""
		class="bg-building-art"
		aria-hidden="true"
		loading="lazy"
		decoding="async"
	/>

	<!-- Background Thin Wave Lines (Left) -->
	<svg
		class="bg-wave-lines"
		width="360"
		height="280"
		viewBox="0 0 360 280"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M-20 180 C80 140, 180 220, 260 160 C320 115, 350 70, 380 20"
			stroke="#079EAD"
			stroke-width="1.5"
			stroke-opacity="0.22"
			fill="none"
		/>
		<path
			d="M-20 210 C90 170, 190 250, 280 190 C340 145, 370 100, 400 50"
			stroke="#16B6C1"
			stroke-width="1.2"
			stroke-opacity="0.18"
			fill="none"
		/>
		<path
			d="M-20 240 C100 200, 200 270, 300 220 C360 180, 390 130, 420 80"
			stroke="#F5B331"
			stroke-width="1.2"
			stroke-opacity="0.15"
			fill="none"
		/>
	</svg>

	<!-- Background Organic Curves (Bottom-Left: Teal + Gold) -->
	<svg
		class="bg-corner-teal-gold"
		width="320"
		height="150"
		viewBox="0 0 320 150"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M0 150 C80 140, 160 110, 210 60 C260 10, 290 0, 320 0 L320 150 Z"
			fill="url(#goldGradLeft)"
			opacity="0.18"
		/>
		<path
			d="M0 150 C60 130, 130 90, 180 40 C220 0, 250 -10, 270 -10 L270 150 Z"
			fill="url(#tealGradLeft)"
			opacity="0.28"
		/>
		<defs>
			<linearGradient id="tealGradLeft" x1="0" y1="150" x2="270" y2="0" gradientUnits="userSpaceOnUse">
				<stop stop-color="#079EAD" />
				<stop offset="1" stop-color="#16B6C1" />
			</linearGradient>
			<linearGradient id="goldGradLeft" x1="0" y1="150" x2="320" y2="0" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F5B331" />
				<stop offset="1" stop-color="#FCD34D" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Background Organic Curves (Bottom-Right: Gold + Light Blue) -->
	<svg
		class="bg-corner-gold-cyan"
		width="320"
		height="130"
		viewBox="0 0 320 130"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M320 130 C240 120, 160 90, 110 45 C70 10, 40 0, 0 0 L0 130 Z"
			fill="url(#goldGradRight)"
			opacity="0.20"
		/>
		<defs>
			<linearGradient id="goldGradRight" x1="320" y1="130" x2="0" y2="0" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F5B331" />
				<stop offset="0.6" stop-color="#16B6C1" stop-opacity="0.3" />
				<stop offset="1" stop-color="#079EAD" stop-opacity="0.1" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Foreground Content Container -->
	<div class="leadership-container">
		<!-- Section Header -->
		<div class="header-box">
			<h2 class="section-title">
				Pimpinan <span class="teal-highlight">SDJNusantara</span>
			</h2>
			<div class="turquoise-line" aria-hidden="true"></div>
			<p class="section-subtitle">Jajaran Pimpinan SDJNusantara.</p>
		</div>

		<!-- Carousel Outer Stage: Navigation buttons sit OUTSIDE the drag wrapper -->
		<div class="carousel-outer-stage">
			<!-- Prev Button (Outside drag track, always clickable) -->
			<button
				type="button"
				class="nav-btn prev-btn"
				onclick={prev}
				aria-label="Pimpinan sebelumnya"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			</button>

			<!-- Drag Track Wrapper (Contains only the cards, isolated from buttons) -->
			<div
				bind:this={trackWrapperEl}
				class="cards-track-wrapper"
				role="region"
				aria-roledescription="carousel"
				aria-label="Pimpinan SDJNusantara"
				onpointerdown={handlePointerDown}
				onpointermove={handlePointerMove}
				onpointerup={handlePointerUp}
				onpointercancel={handlePointerCancel}
				onwheel={handleWheel}
			>
				<div class="cards-stage" role="group" aria-label="Daftar foto pimpinan">
					{#each leadersData as leader, i (leader.id)}
						{@const baseOffset = getBaseOffset(i, activeIndex, count)}
						{@const isCenter = baseOffset === 0}
						{@const isVisible = Math.abs(baseOffset) <= 2}
						{#if isVisible}
							<button
								bind:this={cardElements[i]}
								type="button"
								class="leader-card pos-{baseOffset} {isCenter ? 'is-active' : ''}"
								onclick={(e) => handleCardClick(i, e)}
								onkeydown={(e) => handleKeydown(e, i)}
								tabindex={Math.abs(baseOffset) <= 1 ? 0 : -1}
								aria-label="{leader.nama}, {leader.jabatan}{isCenter ? ' (Klik untuk membuka profil)' : ''}"
								aria-hidden={false}
								draggable="false"
							>
								<div class="photo-wrapper {isCenter ? 'center-photo' : ''}">
									{#if leader.foto.includes('.webp')}
										<picture>
											<source srcset={leader.foto} type="image/webp" />
											<img
												src={leader.foto.replace('.webp', '.jpg')}
												alt={leader.fotoAlt}
												class="leader-photo"
												loading="lazy"
												width="210"
												height="280"
												draggable="false"
											/>
										</picture>
									{:else}
										<img
											src={leader.foto}
											alt={leader.fotoAlt}
											class="leader-photo"
											loading="lazy"
											width="210"
											height="280"
											draggable="false"
										/>
									{/if}

									<!-- Data Contoh Badge: top-left position to leave faces unobstructed -->
									{#if leader.isPlaceholder}
										<span class="placeholder-badge" title="Data contoh sementara">
											Data contoh
										</span>
									{/if}
								</div>

								<!-- Floating Name Label on Center Card (Allows up to 2 lines, no ellipsis) -->
								{#if isCenter}
									<div class="name-label-card" aria-hidden="true">
										<div class="leader-name" title={leader.nama}>{leader.nama}</div>
										<div class="leader-role" title={leader.jabatan}>{leader.jabatan}</div>
										<div class="card-teal-line"></div>
									</div>
								{/if}
							</button>
						{/if}
					{/each}
				</div>
			</div>

			<!-- Next Button (Outside drag track, always clickable) -->
			<button
				type="button"
				class="nav-btn next-btn"
				onclick={next}
				aria-label="Pimpinan berikutnya"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</button>
		</div>

		<!-- Mobile / Tablet Dot Indicators -->
		<div class="carousel-dots" aria-hidden="true">
			{#each leadersData as _, idx}
				<button
					type="button"
					class="dot-indicator {idx === activeIndex ? 'active' : ''}"
					onclick={() => { activeIndex = idx; }}
					aria-label="Menuju pimpinan {idx + 1}"
					tabindex="-1"
				></button>
			{/each}
		</div>
	</div>
</section>

<!-- Profile Modal Component -->
<LeaderModal
	isOpen={isModalOpen}
	leader={selectedLeader}
	currentIndex={activeIndex}
	totalCount={count}
	onClose={closeModal}
	onPrev={modalPrev}
	onNext={modalNext}
	{triggerElement}
/>

<style>
	/* Section Container */
	.leadership-section {
		background: linear-gradient(180deg, #F8FAFD 0%, #EEF4F9 50%, #F5F9FC 100%);
		padding: 64px 0 68px 0;
		width: 100%;
		position: relative;
		overflow-x: clip;
		overflow-y: visible;
		box-sizing: border-box;
	}

	/* Decorative Background Elements (pointer-events: none, z-index: 0) */
	.bg-building-art {
		position: absolute;
		right: 0;
		top: 0;
		width: 48%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		opacity: 0.12;
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 85%);
		-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 85%);
		pointer-events: none;
		user-select: none;
		z-index: 0;
	}

	.bg-wave-lines {
		position: absolute;
		left: 0;
		top: 20px;
		pointer-events: none;
		user-select: none;
		z-index: 0;
	}

	.bg-corner-teal-gold {
		position: absolute;
		left: 0;
		bottom: 0;
		pointer-events: none;
		user-select: none;
		z-index: 0;
	}

	.bg-corner-gold-cyan {
		position: absolute;
		right: 0;
		bottom: 0;
		pointer-events: none;
		user-select: none;
		z-index: 0;
	}

	/* Foreground Container */
	.leadership-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	@media (min-width: 1920px) {
		.leadership-container {
			max-width: 1500px;
		}
	}

	/* Header Box */
	.header-box {
		text-align: center;
		margin-bottom: 34px;
		position: relative;
		z-index: 3;
	}

	.section-title {
		font-size: 34px;
		font-weight: 800;
		color: #082442; /* Deep Navy */
		margin: 0 0 10px 0;
		line-height: 1.2;
		letter-spacing: -0.01em;
	}

	.teal-highlight {
		color: #079EAD; /* Teal */
	}

	.turquoise-line {
		width: 40px;
		height: 3px;
		background: #16B6C1; /* Turquoise */
		margin: 0 auto 12px auto;
		border-radius: 2px;
	}

	.section-subtitle {
		font-size: 17px;
		font-weight: 400;
		color: #183553;
		margin: 0;
		line-height: 1.5;
	}

	/* Outer Stage for Carousel & Navigation Buttons */
	.carousel-outer-stage {
		position: relative;
		width: 100%;
		max-width: 1140px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Drag Track Wrapper: isolates dragging events from the navigation buttons */
	.cards-track-wrapper {
		position: relative;
		width: 100%;
		max-width: 1040px;
		height: 384px; /* Fixed height ensures zero vertical jump */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: grab;
		user-select: none;
		-webkit-user-select: none;
		touch-action: pan-y;
	}

	.cards-track-wrapper:active {
		cursor: grabbing;
	}

	.cards-stage {
		position: relative;
		width: 100%;
		height: 100%;
		perspective: 1200px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform-style: preserve-3d;
		touch-action: pan-y;
	}

	/* Card Button */
	.leader-card {
		position: absolute;
		width: 210px;
		height: 280px;
		padding: 0;
		margin: 0;
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		user-select: none;
		-webkit-user-select: none;
		-webkit-tap-highlight-color: transparent;
		will-change: transform;
	}

	.leader-card:focus-visible {
		border-radius: 16px;
		box-shadow: 0 0 0 3px #16B6C1;
	}

	/* Photo Wrapper */
	.photo-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 10px 25px rgba(8, 36, 66, 0.12);
		background: #D9E2EC;
		transition: border 250ms ease, box-shadow 250ms ease;
	}

	.photo-wrapper.center-photo {
		border: 2px solid #079EAD; /* Teal border for center card */
		box-shadow: 0 16px 36px rgba(7, 158, 173, 0.22), 0 6px 14px rgba(8, 36, 66, 0.12);
	}

	.leader-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
		pointer-events: none;
		-webkit-user-drag: none;
	}

	/* Data Contoh Badge */
	.placeholder-badge {
		position: absolute;
		top: 10px;
		left: 10px;
		right: auto;
		background: #FEF3C7;
		color: #92400E;
		font-size: 11px;
		font-weight: 600;
		padding: 2.5px 7px;
		border-radius: 6px;
		border: 1px solid #FCD34D;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
		z-index: 4;
		pointer-events: none;
		letter-spacing: 0.01em;
	}

	/* Floating Name Label on Center Card (allows 2 lines, no ellipsis) */
	.name-label-card {
		position: absolute;
		bottom: -24px;
		left: 50%;
		transform: translateX(-50%);
		width: min(260px, 116%);
		min-width: 220px;
		background: #FFFFFF;
		border: 1px solid #079EAD;
		border-radius: 12px;
		padding: 8px 12px;
		box-sizing: border-box;
		text-align: center;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.14);
		z-index: 15;
		pointer-events: auto; /* Clickable as part of the card button */
		cursor: pointer;
		animation: labelAppear 320ms cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	@keyframes labelAppear {
		from {
			opacity: 0;
			transform: translate(-50%, 8px) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translate(-50%, 0) scale(1);
		}
	}

	.leader-name {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.3;
		text-align: center;
		margin: 0;
		word-break: normal;
		overflow-wrap: break-word;
	}

	.leader-role {
		font-size: 11.5px;
		font-weight: 500;
		color: #183553;
		line-height: 1.3;
		text-align: center;
		margin-top: 3px;
		word-break: normal;
		overflow-wrap: break-word;
	}

	.card-teal-line {
		width: 26px;
		height: 2px;
		background: #079EAD;
		margin: 4px auto 0 auto;
		border-radius: 2px;
	}

	/* Navigation Round Buttons - Positioned outside drag wrapper, always clickable */
	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 1px solid #CBD5E1;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.12);
		z-index: 30;
		pointer-events: auto;
		transition: all 180ms ease;
		outline: none;
	}

	.nav-btn:hover {
		background: #F8FAFC;
		border-color: #079EAD;
		color: #079EAD;
		box-shadow: 0 6px 18px rgba(7, 158, 173, 0.25);
		transform: translateY(-50%) scale(1.06);
	}

	.nav-btn:active {
		transform: translateY(-50%) scale(0.94);
	}

	.nav-btn:focus-visible {
		box-shadow: 0 0 0 3px #16B6C1;
	}

	.prev-btn {
		left: 4px;
	}

	.next-btn {
		right: 4px;
	}

	/* Dots for Mobile & Quick Indicator */
	.carousel-dots {
		display: none;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 24px;
		position: relative;
		z-index: 4;
	}

	.dot-indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #CBD5E1;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: all 250ms ease;
	}

	.dot-indicator.active {
		width: 24px;
		border-radius: 4px;
		background: #079EAD;
	}

	/* Responsive Media Queries */
	@media (max-width: 1024px) {
		.cards-track-wrapper {
			height: 350px;
		}

		.leader-card {
			width: 180px;
			height: 240px;
		}

		.name-label-card {
			width: min(230px, 120%);
			min-width: 190px;
			padding: 7px 10px;
		}

		.prev-btn {
			left: 0;
		}

		.next-btn {
			right: 0;
		}

		.bg-building-art {
			width: 55%;
			opacity: 0.09;
		}
	}

	@media (max-width: 768px) {
		.leadership-section {
			padding: 48px 0 52px 0;
		}

		.section-title {
			font-size: 28px;
		}

		.cards-track-wrapper {
			height: 340px;
		}

		.leader-card {
			width: 165px;
			height: 220px;
		}

		.carousel-dots {
			display: flex;
		}

		.prev-btn {
			left: -4px;
			width: 40px;
			height: 40px;
		}

		.next-btn {
			right: -4px;
			width: 40px;
			height: 40px;
		}

		.bg-building-art {
			width: 65%;
			opacity: 0.07;
		}

		.bg-wave-lines {
			width: 240px;
		}
	}

	@media (max-width: 480px) {
		.section-title {
			font-size: 24px;
		}

		.section-subtitle {
			font-size: 15px;
		}

		.cards-track-wrapper {
			height: 340px;
		}

		.leader-card {
			width: 185px;
			height: 245px;
		}

		.name-label-card {
			width: min(220px, 120%);
			min-width: 190px;
			padding: 6px 8px;
		}

		.leader-name {
			font-size: 12.5px;
		}

		.leader-role {
			font-size: 11px;
		}

		.prev-btn {
			display: none; /* Mobile uses touch swipe & dots */
		}

		.next-btn {
			display: none;
		}
	}

	/* Respect prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		.leader-card {
			transition: opacity 200ms ease !important;
		}

		.name-label-card {
			animation: none;
		}
	}
</style>
