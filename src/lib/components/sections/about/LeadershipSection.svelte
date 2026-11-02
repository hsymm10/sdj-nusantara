<script lang="ts">
	import { onMount } from 'svelte';
	import leadersData from '#lib/data/leaders.js';
	import LeaderModal from './LeaderModal.svelte';

	// Svelte 5 runes
	type Leader = (typeof leadersData)[0];
	let { onOpenModal: externalOnOpenModal } = $props<{ onOpenModal?: (leader: Leader) => void }>();

	// Carousel state
	let activeIndex = $state(0);
	const count = leadersData.length;

	// Modal state
	let isModalOpen = $state(false);
	let selectedLeader = $state<Leader | null>(null);
	let triggerElement = $state<HTMLElement | null>(null);

	// Pointer Drag & Swipe state
	let isPointerDown = false;
	let isDragging = $state(false);
	let dragStartX = 0;
	let dragStartY = 0;
	let dragStartTime = 0;
	let dragDeltaX = $state(0);
	let lastWheelTime = 0;

	// Spacing in pixels between cards for continuous drag calculation
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
		// If user was dragging, do not treat as click
		if (isDragging) {
			return;
		}

		if (index === activeIndex) {
			// Center card clicked -> OPEN MODAL!
			openModalForLeader(leadersData[index], e.currentTarget as HTMLElement);
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
				openModalForLeader(leadersData[index], e.currentTarget as HTMLElement);
			} else {
				e.preventDefault();
				activeIndex = index;
			}
		}
	}

	// Pointer Events for Dragging (Mouse & Touch)
	function handlePointerDown(e: PointerEvent) {
		// Only primary button
		if (e.button !== 0) return;

		isPointerDown = true;
		isDragging = false;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		dragStartTime = performance.now();
		dragDeltaX = 0;

		try {
			(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		} catch {
			// fallback
		}
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isPointerDown) return;

		const dx = e.clientX - dragStartX;
		const dy = e.clientY - dragStartY;

		if (!isDragging) {
			if (Math.abs(dx) > 6) {
				isDragging = true;
			} else if (Math.abs(dy) > 12) {
				// vertical scrolling
				return;
			}
		}

		if (isDragging) {
			dragDeltaX = dx;
		}
	}

	function handlePointerUp(e: PointerEvent) {
		if (!isPointerDown) return;
		isPointerDown = false;

		const dt = performance.now() - dragStartTime;
		const dx = dragDeltaX;

		if (isDragging) {
			// Threshold: ±20% card width (~42px) OR quick flick velocity
			const velocity = Math.abs(dx) / Math.max(1, dt);
			const isFlick = velocity > 0.35 && Math.abs(dx) > 20;
			const isPastThreshold = Math.abs(dx) >= 42;

			if (isPastThreshold || isFlick) {
				// Calculate number of cards to step
				const rawSteps = Math.round(Math.abs(dx) / CARD_SPACING);
				const steps = Math.min(2, Math.max(1, rawSteps));
				if (dx < 0) {
					shiftBy(steps);
				} else {
					shiftBy(-steps);
				}
			}

			dragDeltaX = 0;

			// Keep isDragging true briefly to suppress trailing click event
			setTimeout(() => {
				isDragging = false;
			}, 60);
		} else {
			dragDeltaX = 0;
			isDragging = false;
		}
	}

	function handlePointerCancel() {
		isPointerDown = false;
		isDragging = false;
		dragDeltaX = 0;
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

	// Circular relative offset from active index [-2, -1, 0, 1, 2]
	function getBaseOffset(index: number, current: number, total: number) {
		let diff = (index - current) % total;
		if (diff > total / 2) diff -= total;
		if (diff < -total / 2) diff += total;
		return diff;
	}

	// Compute continuous style transform based on real-time dragDeltaX
	function getCardTransform(offset: number, deltaX: number, dragging: boolean) {
		// Drag fraction (-1 to 1 per card spacing)
		const dragRatio = dragging ? Math.max(-1.5, Math.min(1.5, deltaX / CARD_SPACING)) : 0;
		const effOffset = offset + dragRatio;
		const absEff = Math.abs(effOffset);

		// Interpolated properties
		let translateX = effOffset * CARD_SPACING;
		let scale = 1 - absEff * 0.14;
		if (scale < 0.65) scale = 0.65;
		let rotateY = -effOffset * 14;
		if (rotateY > 24) rotateY = 24;
		if (rotateY < -24) rotateY = -24;

		let translateZ = 60 - absEff * 45;
		let opacity = 1 - absEff * 0.12;
		if (opacity < 0) opacity = 0;
		if (opacity > 1) opacity = 1;

		let zIndex = Math.round(10 - absEff * 2);

		return {
			transform: `translateX(${translateX.toFixed(1)}px) translateZ(${translateZ.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateY(${rotateY.toFixed(1)}deg)`,
			opacity: opacity.toFixed(2),
			zIndex
		};
	}
</script>

<section class="leadership-section" id="pimpinan">
	<div class="leadership-container">
		<!-- Section Header -->
		<div class="header-box">
			<h2 class="section-title">
				Pimpinan <span class="teal-highlight">SDJNusantara</span>
			</h2>
			<div class="turquoise-line" aria-hidden="true"></div>
			<p class="section-subtitle">Jajaran Pimpinan SDJNusantara.</p>
		</div>

		<!-- Carousel Stage with Pointer Drag Events -->
		<div
			class="carousel-wrapper {isDragging ? 'is-dragging' : ''}"
			role="region"
			aria-roledescription="carousel"
			aria-label="Pimpinan SDJNusantara"
			onpointerdown={handlePointerDown}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
			onpointercancel={handlePointerCancel}
			onwheel={handleWheel}
		>
			<!-- Navigation Prev Button -->
			<button
				type="button"
				class="nav-btn prev-btn"
				onclick={(e) => { e.stopPropagation(); prev(); }}
				aria-label="Pimpinan sebelumnya"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			</button>

			<!-- 3D Perspective Stage -->
			<div class="cards-stage" role="group" aria-label="Daftar foto pimpinan">
				{#each leadersData as leader, i (leader.id)}
					{@const baseOffset = getBaseOffset(i, activeIndex, count)}
					{@const isCenter = baseOffset === 0}
					{@const isVisible = Math.abs(baseOffset) <= 2}
					{@const cardStyle = getCardTransform(baseOffset, dragDeltaX, isDragging)}
					{#if isVisible}
						<button
							type="button"
							class="leader-card pos-{baseOffset} {isCenter ? 'is-active' : ''} {isDragging ? 'no-transition' : ''}"
							style="transform: {cardStyle.transform}; opacity: {cardStyle.opacity}; z-index: {cardStyle.zIndex};"
							onclick={(e) => handleCardClick(i, e)}
							onkeydown={(e) => handleKeydown(e, i)}
							tabindex={Math.abs(baseOffset) <= 1 ? 0 : -1}
							aria-label="{leader.nama}, {leader.jabatan}{isCenter ? ' (Klik untuk membuka profil)' : ''}"
							aria-hidden={false}
							draggable="false"
						>
							<div class="photo-wrapper {isCenter ? 'center-photo' : ''}">
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

								<!-- Data Contoh Badge (Moved to top-left with z-index to protect faces) -->
								{#if leader.isPlaceholder}
									<span class="placeholder-badge" title="Data contoh sementara">
										Data contoh
									</span>
								{/if}
							</div>

							<!-- Floating Name Label on Center Card (No text cutting, up to 2 lines) -->
							{#if isCenter && !isDragging}
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

			<!-- Navigation Next Button -->
			<button
				type="button"
				class="nav-btn next-btn"
				onclick={(e) => { e.stopPropagation(); next(); }}
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
		background-color: #EEF3F8; /* Soft blue-gray */
		padding: 64px 0 68px 0;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.leadership-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
		position: relative;
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

	/* Carousel Wrapper & Stage */
	.carousel-wrapper {
		position: relative;
		width: 100%;
		max-width: 1040px; /* Aligns arrows at x ±272 and ±1264 on 1536px */
		margin: 0 auto;
		height: 384px; /* Fixed height to prevent vertical jumping between 1 & 2-line labels */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: grab;
		user-select: none;
		-webkit-user-select: none;
		touch-action: pan-y; /* Allows vertical scrolling while enabling horizontal drag */
	}

	.carousel-wrapper.is-dragging {
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

	/* Common Card Styles */
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
		transition: transform 450ms cubic-bezier(0.22, 0.61, 0.36, 1),
			opacity 450ms cubic-bezier(0.22, 0.61, 0.36, 1);
		user-select: none;
		-webkit-user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.leader-card.no-transition {
		transition: none !important;
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

	/* Data Contoh Badge: top-left position to leave faces unobstructed */
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

	/* Floating Name Label on Center Card */
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
		animation: labelAppear 320ms cubic-bezier(0.22, 0.61, 0.36, 1);
		pointer-events: none;
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

	/* Leader name: NO ellipsis, allows up to 2 lines comfortably */
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

	/* Leader role: NO ellipsis, allows up to 2 lines */
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

	/* Navigation Round Buttons - ±38px */
	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 1px solid #CBD5E1;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 3px 10px rgba(8, 36, 66, 0.10);
		z-index: 20;
		transition: all 200ms ease;
		outline: none;
	}

	.nav-btn:hover {
		background: #F8FAFC;
		border-color: #079EAD;
		color: #079EAD;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.22);
		transform: translateY(-50%) scale(1.05);
	}

	.nav-btn:active {
		transform: translateY(-50%) scale(0.96);
	}

	.nav-btn:focus-visible {
		box-shadow: 0 0 0 3px #16B6C1;
	}

	.prev-btn {
		left: 24px;
	}

	.next-btn {
		right: 24px;
	}

	/* Dots for Mobile & Quick Indicator */
	.carousel-dots {
		display: none;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 24px;
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
		.carousel-wrapper {
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
			left: 10px;
		}

		.next-btn {
			right: 10px;
		}
	}

	@media (max-width: 768px) {
		.leadership-section {
			padding: 48px 0 52px 0;
		}

		.section-title {
			font-size: 28px;
		}

		.carousel-wrapper {
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
			left: 4px;
		}

		.next-btn {
			right: 4px;
		}
	}

	@media (max-width: 480px) {
		.section-title {
			font-size: 24px;
		}

		.section-subtitle {
			font-size: 15px;
		}

		.carousel-wrapper {
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
	}

	/* Respect prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		.leader-card {
			transition: opacity 200ms ease;
		}

		.name-label-card {
			animation: none;
		}
	}
</style>
