<script lang="ts">
	import leadersData from '#lib/data/leaders.js';

	// Svelte 5 runes
	type Leader = (typeof leadersData)[0];
	let { onOpenModal } = $props<{ onOpenModal?: (leader: Leader) => void }>();

	// Carousel state
	let activeIndex = $state(0);
	const count = leadersData.length;

	function next() {
		activeIndex = (activeIndex + 1) % count;
	}

	function prev() {
		activeIndex = (activeIndex - 1 + count) % count;
	}

	function goTo(index: number) {
		if (index === activeIndex) {
			handleCenterSelect(leadersData[index]);
		} else {
			activeIndex = index;
		}
	}

	function handleCenterSelect(leader: Leader) {
		if (onOpenModal) {
			onOpenModal(leader);
		} else {
			// Ready for modal trigger in Tahap 2
			console.log('Open leader modal:', leader.nama);
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
				handleCenterSelect(leadersData[index]);
			} else {
				e.preventDefault();
				goTo(index);
			}
		}
	}

	// Touch swipe support
	let touchStartX = 0;
	let touchEndX = 0;

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.changedTouches[0].screenX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	}

	function handleSwipe() {
		const diff = touchEndX - touchStartX;
		if (Math.abs(diff) > 40) {
			if (diff < 0) {
				next();
			} else {
				prev();
			}
		}
	}

	// Calculate circular relative offset from active index
	// Returns values in [-2, -1, 0, 1, 2] for 5 items
	function getOffset(index: number, current: number, total: number) {
		let diff = (index - current) % total;
		if (diff > total / 2) diff -= total;
		if (diff < -total / 2) diff += total;
		return diff;
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

		<!-- Carousel Stage -->
		<div
			class="carousel-wrapper"
			role="region"
			aria-roledescription="carousel"
			aria-label="Pimpinan SDJNusantara"
			ontouchstart={handleTouchStart}
			ontouchend={handleTouchEnd}
		>
			<!-- Navigation Prev Button -->
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

			<!-- 3D Perspective Stage -->
			<div class="cards-stage" role="group" aria-label="Daftar foto pimpinan">
				{#each leadersData as leader, i (leader.id)}
					{@const offset = getOffset(i, activeIndex, count)}
					{@const isCenter = offset === 0}
					{@const isVisible = Math.abs(offset) <= 2}
					{#if isVisible}
						<button
							type="button"
							class="leader-card pos-{offset} {isCenter ? 'is-active' : ''}"
							onclick={() => goTo(i)}
							onkeydown={(e) => handleKeydown(e, i)}
							tabindex={Math.abs(offset) <= 1 ? 0 : -1}
							aria-label="{leader.nama}, {leader.jabatan}{isCenter ? ' (Klik untuk membuka profil)' : ''}"
							aria-hidden={false}
						>
							<div class="photo-wrapper">
								<picture>
									<source srcset={leader.foto} type="image/webp" />
									<img
										src={leader.foto.replace('.webp', '.jpg')}
										alt={leader.fotoAlt}
										class="leader-photo"
										loading="lazy"
										width="210"
										height="280"
									/>
								</picture>

								<!-- Data Contoh Badge -->
								{#if leader.isPlaceholder}
									<span class="placeholder-badge" title="Data contoh sementara">
										Data contoh
									</span>
								{/if}
							</div>

							<!-- Floating Name Label on Center Card -->
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

			<!-- Navigation Next Button -->
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
					onclick={() => goTo(idx)}
					aria-label="Menuju pimpinan {idx + 1}"
					tabindex="-1"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Section Container */
	.leadership-section {
		background-color: #EEF3F8; /* Soft blue-gray */
		padding: 64px 0;
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
		margin-bottom: 36px;
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
		height: 370px;
		display: flex;
		align-items: center;
		justify-content: center;
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
			opacity 450ms cubic-bezier(0.22, 0.61, 0.36, 1),
			filter 450ms cubic-bezier(0.22, 0.61, 0.36, 1);
		user-select: none;
		-webkit-tap-highlight-color: transparent;
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
		transition: border 300ms ease, box-shadow 300ms ease;
	}

	.leader-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
	}

	/* Data Contoh Badge */
	.placeholder-badge {
		position: absolute;
		top: 10px;
		right: 10px;
		background: #FEF3C7;
		color: #92400E;
		font-size: 11px;
		font-weight: 600;
		padding: 3px 8px;
		border-radius: 6px;
		border: 1px solid #FCD34D;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
		z-index: 3;
		pointer-events: none;
		letter-spacing: 0.02em;
	}

	/* 3D Coverflow Positions */
	/* Center (Active) - Largest ±210×280 */
	.leader-card.pos-0 {
		transform: translateX(0) translateZ(60px) scale(1) rotateY(0deg);
		z-index: 10;
		opacity: 1;
		cursor: default;
	}

	.leader-card.pos-0 .photo-wrapper {
		border: 2px solid #079EAD; /* Teal border for center card per spec */
		box-shadow: 0 16px 36px rgba(7, 158, 173, 0.22), 0 6px 14px rgba(8, 36, 66, 0.12);
	}

	/* Immediate Left & Right - ±168×250 scale ≈ 0.85 */
	.leader-card.pos--1 {
		transform: translateX(-195px) translateZ(10px) scale(0.85) rotateY(14deg);
		z-index: 6;
		opacity: 0.90;
	}

	.leader-card.pos-1 {
		transform: translateX(195px) translateZ(10px) scale(0.85) rotateY(-14deg);
		z-index: 6;
		opacity: 0.90;
	}

	/* Outer Left & Right - ±153×238 scale ≈ 0.75 */
	.leader-card.pos--2 {
		transform: translateX(-345px) translateZ(-40px) scale(0.75) rotateY(20deg);
		z-index: 4;
		opacity: 0.80;
	}

	.leader-card.pos-2 {
		transform: translateX(345px) translateZ(-40px) scale(0.75) rotateY(-20deg);
		z-index: 4;
		opacity: 0.80;
	}

	/* Hover state on side cards */
	.leader-card:not(.pos-0):hover {
		opacity: 1;
		filter: brightness(1.04);
	}

	/* Floating Name Label on Center Card - overlaps bottom by ±24px */
	.name-label-card {
		position: absolute;
		bottom: -24px;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% - 20px);
		min-width: 176px;
		background: #FFFFFF;
		border: 1px solid #079EAD;
		border-radius: 12px;
		padding: 7px 10px;
		box-sizing: border-box;
		text-align: center;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.14);
		z-index: 15;
		animation: labelAppear 350ms cubic-bezier(0.22, 0.61, 0.36, 1);
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

	.leader-name {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.25;
	}

	.leader-role {
		font-size: 12px;
		font-weight: 500;
		color: #183553;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 2px;
		line-height: 1.2;
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
		margin-top: 36px;
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
			height: 340px;
		}

		.leader-card {
			width: 180px;
			height: 240px;
		}

		.leader-card.pos--1 {
			transform: translateX(-150px) translateZ(10px) scale(0.85) rotateY(12deg);
		}

		.leader-card.pos-1 {
			transform: translateX(150px) translateZ(10px) scale(0.85) rotateY(-12deg);
		}

		.leader-card.pos--2 {
			transform: translateX(-270px) translateZ(-30px) scale(0.72) rotateY(18deg);
			opacity: 0.6;
		}

		.leader-card.pos-2 {
			transform: translateX(270px) translateZ(-30px) scale(0.72) rotateY(-18deg);
			opacity: 0.6;
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
			padding: 48px 0 56px 0;
		}

		.section-title {
			font-size: 28px;
		}

		.carousel-wrapper {
			height: 330px;
		}

		.leader-card {
			width: 165px;
			height: 220px;
		}

		.leader-card.pos--1 {
			transform: translateX(-125px) translateZ(0) scale(0.85) rotateY(10deg);
			opacity: 0.85;
		}

		.leader-card.pos-1 {
			transform: translateX(125px) translateZ(0) scale(0.85) rotateY(-10deg);
			opacity: 0.85;
		}

		.leader-card.pos--2,
		.leader-card.pos-2 {
			opacity: 0;
			pointer-events: none;
			transform: translateX(0) scale(0.6);
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
			height: 320px;
		}

		.leader-card {
			width: 190px;
			height: 250px;
		}

		.leader-card.pos--1 {
			transform: translateX(-95px) scale(0.82) rotateY(6deg);
			opacity: 0.55;
		}

		.leader-card.pos-1 {
			transform: translateX(95px) scale(0.82) rotateY(-6deg);
			opacity: 0.55;
		}

		.name-label-card {
			width: calc(100% - 12px);
			min-width: 160px;
			padding: 6px 8px;
		}

		.leader-name {
			font-size: 13px;
		}

		.leader-role {
			font-size: 11px;
		}
	}

	/* Respect prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		.leader-card {
			transition: opacity 200ms ease;
			transform: none !important;
		}

		.leader-card.pos-0 {
			position: relative;
			opacity: 1;
		}

		.leader-card:not(.pos-0) {
			display: none;
		}

		.name-label-card {
			animation: none;
		}
	}
</style>
