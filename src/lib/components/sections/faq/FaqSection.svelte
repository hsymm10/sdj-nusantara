<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { faqData, FAQ_CATEGORIES, type FaqItem, type FaqCategory } from '#lib/data/faq';
	import { chatStore } from '#lib/stores/chat.svelte';

	// State
	let selectedCategory = $state<'program' | 'beasiswa' | 'kemitraan' | 'hukum'>('program');
	let searchQuery = $state('');
	let openItemId = $state<string | null>('faq-01');

	// Dynamic counts per category
	let counts = $derived.by(() => {
		const result: Record<string, number> = {
			program: faqData.filter((i) => i.isActive && i.category === 'program').length,
			beasiswa: faqData.filter((i) => i.isActive && i.category === 'beasiswa').length,
			kemitraan: faqData.filter((i) => i.isActive && i.category === 'kemitraan').length,
			hukum: faqData.filter((i) => i.isActive && i.category === 'hukum').length
		};
		return result;
	});

	// Filtered FAQs based on category & search query
	let filteredFaqs = $derived.by<FaqItem[]>(() => {
		let list = faqData.filter((item) => item.isActive && item.category === selectedCategory);

		// Filter by search query (question & answer)
		const q = searchQuery.trim().toLowerCase();
		if (q) {
			list = list.filter(
				(item) =>
					item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
			);
		}

		return list;
	});

	// Header title based on selected category & search state
	let headingTitle = $derived.by(() => {
		if (searchQuery.trim()) {
			return `Hasil Pencarian (${filteredFaqs.length})`;
		}
		const cat = FAQ_CATEGORIES.find((c) => c.id === selectedCategory);
		return cat ? cat.name : 'Daftar Pertanyaan';
	});

	function selectCategory(catId: 'program' | 'beasiswa' | 'kemitraan' | 'hukum') {
		selectedCategory = catId;
		const items = faqData.filter((item) => item.isActive && item.category === catId);
		if (items.length > 0) {
			const exists = items.some((i) => i.id === openItemId);
			if (!exists) {
				openItemId = items[0].id;
			}
		} else {
			openItemId = null;
		}
	}

	function toggleItem(id: string) {
		if (openItemId === id) {
			openItemId = null; // Close if clicked again
		} else {
			openItemId = id; // Single accordion: open clicked and close others
		}
	}

	function clearSearch() {
		searchQuery = '';
	}
</script>

<section class="faq-redesign-section" id="faq" aria-labelledby="faq-section-heading">
	<div class="faq-container">
		<!-- Main 2-Column Layout -->
		<div class="faq-grid-layout">
			<!-- LEFT COLUMN: Info Card & Category Navigation -->
			<aside class="faq-sidebar-col">
				<div class="faq-sidebar-card">
					<!-- Top Illustration / Photo with Question Bubble -->
					<div class="sidebar-image-wrap">
						<img
							src="/images/faq-assistant-woman.jpg"
							alt="Asisten Informasi SDJNusantara"
							class="sidebar-img"
							loading="lazy"
						/>
						<!-- Decorative Background Blobs & Floating Question Bubble -->
						<div class="img-blob-cyan" aria-hidden="true"></div>
						<div class="img-blob-gold" aria-hidden="true"></div>
						<div class="question-speech-bubble" aria-hidden="true">
							<Icon icon="fluent:question-circle-24-filled" width="30" height="30" />
						</div>
					</div>

					<!-- Text Header -->
					<div class="sidebar-content">
						<h3 class="sidebar-title">Cari Informasi dengan Cepat</h3>
						<p class="sidebar-desc">
							Pilih kategori pertanyaan sesuai kebutuhan Anda atau gunakan pencarian untuk menemukan jawaban dengan lebih mudah.
						</p>

						<!-- Categories Nav Stack -->
						<nav class="categories-nav" aria-label="Kategori FAQ">
							{#each FAQ_CATEGORIES as cat (cat.id)}
								{@const isActive = selectedCategory === cat.id}
								{@const count = counts[cat.id] ?? 0}
								<button
									type="button"
									class="category-btn {isActive ? 'is-active' : ''}"
									onclick={() => selectCategory(cat.id)}
									aria-pressed={isActive}
								>
									<div class="cat-left">
										<Icon icon={cat.icon} width="18" height="18" class="cat-icon" />
										<span class="cat-name">{cat.name}</span>
									</div>
									<span class="cat-count-badge">{count}</span>
								</button>
							{/each}
						</nav>
					</div>
				</div>
			</aside>

			<!-- RIGHT COLUMN: Search Bar & Accordion FAQ -->
			<div class="faq-content-col">
				<!-- A. Interactive Search Bar -->
				<div class="faq-search-bar">
					<Icon icon="lucide:search" width="18" height="18" class="search-icon" />
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Cari pertanyaan, misalnya 'cara daftar beasiswa'..."
						class="search-input"
						aria-label="Cari pertanyaan FAQ"
					/>
					{#if searchQuery.trim()}
						<button
							type="button"
							class="search-clear-btn"
							onclick={clearSearch}
							aria-label="Hapus kata kunci pencarian"
						>
							<Icon icon="lucide:x" width="16" height="16" />
						</button>
					{/if}
				</div>

				<!-- B. Section Heading with Teal Dash -->
				<div class="faq-header-row">
					<div class="header-title-wrap">
						<span class="teal-dash" aria-hidden="true">—</span>
						<h2 id="faq-section-heading" class="faq-heading-text">{headingTitle}</h2>
					</div>

					{#if searchQuery.trim()}
						<button type="button" class="btn-reset-filter-quick" onclick={clearSearch}>
							Hapus pencarian
						</button>
					{/if}
				</div>

				<!-- C. Accordion FAQ List -->
				<div class="faq-accordion-list">
					{#if filteredFaqs.length === 0}
						<!-- Empty State -->
						<div class="faq-empty-state">
							<div class="empty-icon-wrap">
								<Icon icon="lucide:search-x" width="36" height="36" class="empty-icon" />
							</div>
							<h4 class="empty-title">Pertanyaan tidak ditemukan</h4>
							<p class="empty-desc">
								Kami tidak menemukan pertanyaan yang cocok dengan "{searchQuery}". Coba kata kunci lain atau hubungi asisten kami.
							</p>
							<div class="empty-actions">
								<button type="button" class="btn-empty-reset" onclick={clearSearch}>
									Atur Ulang Pencarian
								</button>
								<button type="button" class="btn-empty-chat" onclick={() => chatStore.open()}>
									Tanya Asisten SDJ
								</button>
							</div>
						</div>
					{:else}
						{#each filteredFaqs as item, index (item.id)}
							{@const isOpen = openItemId === item.id}
							{@const orderNum = String(index + 1).padStart(2, '0')}
							<div class="faq-card-item {isOpen ? 'is-open' : ''}">
								<!-- Accordion Trigger Button -->
								<button
									type="button"
									class="faq-trigger-btn"
									onclick={() => toggleItem(item.id)}
									aria-expanded={isOpen}
									aria-controls="faq-ans-{item.id}"
								>
									<div class="trigger-left">
										<span class="faq-number-badge">{orderNum}</span>
										<span class="faq-question-text">{item.question}</span>
									</div>
									<div class="trigger-right">
										<Icon
											icon="lucide:chevron-down"
											width="18"
											height="18"
											class="chevron-icon {isOpen ? 'is-rotated' : ''}"
										/>
									</div>
								</button>

								<!-- Accordion Answer Panel -->
								{#if isOpen}
									<div id="faq-ans-{item.id}" class="faq-answer-panel">
										<p class="faq-answer-text">{item.answer}</p>
									</div>
								{/if}
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>

		<!-- BOTTOM SECTION: CTA Banner (Masih ada pertanyaan lain?) -->
		<div class="faq-cta-banner">
			<!-- Decorative Waves -->
			<div class="cta-decor-teal-left" aria-hidden="true"></div>
			<div class="cta-decor-gold-right" aria-hidden="true"></div>

			<!-- Left Side: Chat Icon + Texts -->
			<div class="cta-left-content">
				<div class="cta-icon-circle">
					<Icon icon="fluent:chat-bubbles-question-24-filled" width="28" height="28" class="cta-main-icon" />
				</div>
				<div class="cta-texts">
					<h3 class="cta-heading">Masih ada pertanyaan lain?</h3>
					<p class="cta-desc">
						Tim SDJNusantara siap membantu Anda mendapatkan informasi yang lebih lengkap, cepat, dan sesuai kebutuhan.
					</p>
				</div>
			</div>

			<!-- Right Side: Action Buttons -->
			<div class="cta-actions">
				<button
					type="button"
					class="btn-cta-chat"
					onclick={() => chatStore.open()}
					aria-label="Buka percakapan dengan Asisten SDJNusantara"
				>
					<Icon icon="fluent:bot-24-filled" width="18" height="18" />
					<span>Chat dengan Asisten</span>
				</button>

				<a
					href="https://wa.me/6285880724733"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-cta-wa"
					aria-label="Hubungi SDJNusantara via WhatsApp"
				>
					<Icon icon="tabler:brand-whatsapp" width="18" height="18" />
					<span>Hubungi via WhatsApp</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* SECTION WRAPPER */
	.faq-redesign-section {
		background: #F5F9FC;
		padding: 3rem 0 4.5rem;
		width: 100%;
		font-family: inherit;
		box-sizing: border-box;
	}

	.faq-container {
		width: 100%;
		max-width: 1220px;
		margin: 0 auto;
		padding: 0 24px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.faq-container {
			max-width: 1320px;
		}
	}

	/* 2-COLUMN GRID LAYOUT */
	.faq-grid-layout {
		display: grid;
		grid-template-columns: 310px 1fr;
		gap: 28px;
		align-items: start;
	}

	/* LEFT COLUMN: SIDEBAR CARD */
	.faq-sidebar-col {
		position: sticky;
		top: 68px;
	}

	.faq-sidebar-card {
		background: #FFFFFF;
		border-radius: 20px;
		border: 1px solid #E2E8F0;
		box-shadow: 0 4px 20px rgba(11, 39, 71, 0.04);
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Top Illustration / Photo */
	.sidebar-image-wrap {
		position: relative;
		width: 100%;
		height: 180px;
		background: linear-gradient(135deg, #E6F7F8 0%, #D1F2F5 100%);
		overflow: hidden;
	}

	.sidebar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		display: block;
		position: relative;
		z-index: 1;
	}

	.img-blob-cyan {
		position: absolute;
		top: -20px;
		left: -20px;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: rgba(7, 158, 173, 0.18);
		filter: blur(14px);
		z-index: 2;
		pointer-events: none;
	}

	.img-blob-gold {
		position: absolute;
		bottom: -15px;
		right: -15px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: rgba(245, 179, 49, 0.22);
		filter: blur(12px);
		z-index: 2;
		pointer-events: none;
	}

	/* Floating Question Bubble */
	.question-speech-bubble {
		position: absolute;
		top: 16px;
		right: 18px;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #00A6B2;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 14px rgba(0, 166, 178, 0.35);
		z-index: 3;
		animation: floatQuestion 3s ease-in-out infinite;
	}

	@keyframes floatQuestion {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.question-speech-bubble {
			animation: none;
		}
	}

	/* Sidebar Content */
	.sidebar-content {
		padding: 20px 20px 22px;
	}

	.sidebar-title {
		font-size: 19px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		line-height: 1.25;
	}

	.sidebar-desc {
		font-size: 13px;
		line-height: 1.5;
		color: #64748B;
		margin: 0 0 20px 0;
	}

	/* Category Navigation Stack */
	.categories-nav {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.category-btn {
		width: 100%;
		height: 44px;
		border-radius: 12px;
		padding: 0 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		cursor: pointer;
		transition: all 0.18s cubic-bezier(0.22, 0.61, 0.36, 1);
		box-sizing: border-box;
		text-align: left;
	}

	.cat-left {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	:global(.cat-icon) {
		color: #00A6B2;
		flex-shrink: 0;
		transition: color 0.15s ease;
	}

	.cat-name {
		font-size: 13.5px;
		font-weight: 600;
		color: #082442;
		transition: color 0.15s ease;
		white-space: nowrap;
	}

	.cat-count-badge {
		font-size: 11.5px;
		font-weight: 700;
		padding: 2.5px 8.5px;
		border-radius: 999px;
		background: #F1F5F9;
		color: #64748B;
		transition: all 0.15s ease;
	}

	/* Inactive Hover State */
	.category-btn:hover:not(.is-active) {
		border-color: #00A6B2;
		background: #F8FAFC;
		transform: translateX(2px);
	}

	.category-btn:hover:not(.is-active) .cat-name {
		color: #00A6B2;
	}

	/* Active Category State (Sesuai Mockup) */
	.category-btn.is-active {
		background: #00A6B2;
		border-color: #00A6B2;
		box-shadow: 0 3px 12px rgba(0, 166, 178, 0.22);
	}

	.category-btn.is-active :global(.cat-icon),
	.category-btn.is-active .cat-name {
		color: #FFFFFF;
	}

	.category-btn.is-active .cat-count-badge {
		background: rgba(255, 255, 255, 0.24);
		color: #FFFFFF;
	}

	/* RIGHT COLUMN */
	.faq-content-col {
		width: 100%;
		min-width: 0;
	}

	/* A. Interactive Search Bar */
	.faq-search-bar {
		width: 100%;
		height: 48px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		display: flex;
		align-items: center;
		padding: 0 16px;
		gap: 12px;
		box-shadow: 0 2px 8px rgba(11, 39, 71, 0.02);
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.faq-search-bar:focus-within {
		border-color: #00A6B2;
		box-shadow: 0 0 0 3px rgba(0, 166, 178, 0.12);
	}

	:global(.search-icon) {
		color: #94A3B8;
		flex-shrink: 0;
	}

	.search-input {
		flex: 1;
		border: none;
		outline: none;
		background: transparent;
		font-size: 13.5px;
		color: #082442;
		padding: 0;
		font-family: inherit;
	}

	.search-input::placeholder {
		color: #94A3B8;
	}

	.search-clear-btn {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #F1F5F9;
		border: none;
		color: #64748B;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 0;
		transition: all 0.15s ease;
	}

	.search-clear-btn:hover {
		background: #E2E8F0;
		color: #082442;
	}

	/* B. Section Heading Row */
	.faq-header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 22px 0 16px;
	}

	.header-title-wrap {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.teal-dash {
		font-weight: 800;
		color: #00A6B2;
		font-size: 18px;
	}

	.faq-heading-text {
		font-size: 19px;
		font-weight: 800;
		color: #082442;
		margin: 0;
	}

	.btn-reset-filter-quick {
		background: none;
		border: none;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
		transition: color 0.15s ease;
	}

	.btn-reset-filter-quick:hover {
		color: #078893;
	}

	/* C. Accordion FAQ List */
	.faq-accordion-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	/* Accordion Card */
	.faq-card-item {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
		overflow: hidden;
	}

	.faq-card-item:hover {
		border-color: #CBD5E1;
		box-shadow: 0 2px 8px rgba(11, 39, 71, 0.03);
	}

	/* Active / Open Accordion Card (Sesuai Mockup) */
	.faq-card-item.is-open {
		background: #F4FBFB;
		border-color: #B8EBEF;
		box-shadow: 0 3px 12px rgba(0, 166, 178, 0.06);
	}

	/* Trigger Button */
	.faq-trigger-btn {
		width: 100%;
		padding: 14px 18px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: transparent;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 14px;
		box-sizing: border-box;
	}

	.trigger-left {
		display: flex;
		align-items: center;
		gap: 14px;
		flex: 1;
	}

	/* Number Badge 01, 02, ... */
	.faq-number-badge {
		min-width: 32px;
		height: 25px;
		border-radius: 6px;
		background: #E6F7F8;
		color: #00A6B2;
		font-size: 12px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all 0.15s ease;
	}

	.faq-card-item.is-open .faq-number-badge {
		background: #00A6B2;
		color: #FFFFFF;
	}

	.faq-question-text {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		line-height: 1.4;
	}

	.trigger-right {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.chevron-icon) {
		color: #00A6B2;
		transition: transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	:global(.chevron-icon.is-rotated) {
		transform: rotate(180deg);
	}

	/* Answer Panel */
	.faq-answer-panel {
		padding: 0 18px 16px 64px;
		animation: expandFadeIn 0.2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}

	@keyframes expandFadeIn {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.faq-answer-panel {
			animation: none;
		}
	}

	.faq-answer-text {
		font-size: 13.5px;
		line-height: 1.6;
		color: #475569;
		margin: 0;
	}

	/* Empty State */
	.faq-empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 48px 24px;
		background: #FFFFFF;
		border: 1px dashed #CBD5E1;
		border-radius: 14px;
	}

	.empty-icon-wrap {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: #E6F7F8;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 12px;
	}

	:global(.empty-icon) {
		color: #00A6B2;
	}

	.empty-title {
		font-size: 17px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 6px 0;
	}

	.empty-desc {
		font-size: 13px;
		color: #64748B;
		max-width: 440px;
		margin: 0 0 18px 0;
		line-height: 1.5;
	}

	.empty-actions {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.btn-empty-reset {
		background: #FFFFFF;
		color: #082442;
		border: 1px solid #CBD5E1;
		padding: 8px 16px;
		border-radius: 10px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.btn-empty-reset:hover {
		background: #F1F5F9;
		border-color: #94A3B8;
	}

	.btn-empty-chat {
		background: #00A6B2;
		color: #FFFFFF;
		border: none;
		padding: 8px 16px;
		border-radius: 10px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.15s ease;
	}

	.btn-empty-chat:hover {
		background: #078893;
	}

	/* BOTTOM CTA BANNER (Sesuai Mockup) */
	.faq-cta-banner {
		margin-top: 32px;
		background: #082442;
		border-radius: 16px;
		padding: 22px 28px;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.12);
		box-sizing: border-box;
	}

	/* Decorative Waves in CTA Banner */
	.cta-decor-teal-left {
		position: absolute;
		bottom: -20px;
		left: -20px;
		width: 120px;
		height: 45px;
		background: #079EAD;
		border-radius: 50%;
		opacity: 0.75;
		filter: blur(8px);
		pointer-events: none;
	}

	.cta-decor-gold-right {
		position: absolute;
		bottom: -15px;
		right: 40px;
		width: 140px;
		height: 35px;
		background: #F5B331;
		border-radius: 50%;
		opacity: 0.8;
		filter: blur(10px);
		pointer-events: none;
	}

	.cta-left-content {
		display: flex;
		align-items: center;
		gap: 18px;
		position: relative;
		z-index: 1;
		flex: 1;
	}

	.cta-icon-circle {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 4px 12px rgba(0, 166, 178, 0.35);
	}

	:global(.cta-main-icon) {
		color: #FFFFFF;
	}

	.cta-texts {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.cta-heading {
		font-size: 17.5px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0;
		line-height: 1.3;
	}

	.cta-desc {
		font-size: 12.5px;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
		max-width: 540px;
		line-height: 1.45;
	}

	.cta-actions {
		display: flex;
		align-items: center;
		gap: 12px;
		position: relative;
		z-index: 1;
		flex-shrink: 0;
	}

	/* Tombol Pertama: Emas / Kuning SDJ */
	.btn-cta-chat {
		background: #FFB629;
		color: #082442;
		border: none;
		border-radius: 10px;
		padding: 10px 18px;
		font-size: 13px;
		font-weight: 700;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		transition: all 0.15s ease;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
		white-space: nowrap;
	}

	.btn-cta-chat:hover {
		background: #EFA61A;
		transform: translateY(-1px);
	}

	/* Tombol Kedua: Outline Putih */
	.btn-cta-wa {
		background: transparent;
		border: 1.5px solid rgba(255, 255, 255, 0.75);
		color: #FFFFFF;
		border-radius: 10px;
		padding: 9px 18px;
		font-size: 13px;
		font-weight: 600;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		transition: all 0.15s ease;
		white-space: nowrap;
	}

	.btn-cta-wa:hover {
		border-color: #FFFFFF;
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-1px);
	}

	/* RESPONSIVE DESIGN */
	@media (max-width: 992px) {
		.faq-grid-layout {
			grid-template-columns: 260px 1fr;
			gap: 20px;
		}

		.faq-cta-banner {
			flex-direction: column;
			align-items: flex-start;
			gap: 18px;
		}

		.cta-actions {
			width: 100%;
			justify-content: flex-start;
		}
	}

	@media (max-width: 768px) {
		.faq-redesign-section {
			padding: 2rem 0 3rem;
		}

		.faq-container {
			padding: 0 16px;
		}

		.faq-grid-layout {
			grid-template-columns: 1fr;
			gap: 20px;
		}

		.faq-sidebar-col {
			position: static;
		}

		.sidebar-image-wrap {
			height: 150px;
		}

		/* Horizontal Category Scroll on Mobile */
		.categories-nav {
			flex-direction: row;
			overflow-x: auto;
			padding-bottom: 6px;
			gap: 8px;
			-webkit-overflow-scrolling: touch;
		}

		.category-btn {
			width: auto;
			flex-shrink: 0;
			padding: 0 12px;
		}

		.faq-answer-panel {
			padding: 0 16px 14px 16px;
		}

		.cta-left-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}

		.cta-actions {
			flex-direction: column;
			width: 100%;
		}

		.btn-cta-chat,
		.btn-cta-wa {
			width: 100%;
			justify-content: center;
		}
	}
</style>

