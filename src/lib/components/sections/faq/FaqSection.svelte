<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { faqData, FAQ_CATEGORIES, type FaqItem, type FaqCategory } from '#lib/data/faq';
	import { chatStore } from '#lib/stores/chat.svelte';
	import { serviceConfig } from '#lib/config/services';

	let {
		showCtaBanner = true,
		showSearch = true,
		defaultCategory = 'program'
	}: {
		showCtaBanner?: boolean;
		showSearch?: boolean;
		defaultCategory?: 'program' | 'beasiswa' | 'kemitraan' | 'hukum';
	} = $props();

	// State
	let selectedCategory = $state<'program' | 'beasiswa' | 'kemitraan' | 'hukum'>('program');
	let searchQuery = $state('');
	let openItemId = $state<string | null>('faq-01'); // First item open by default
	let sidebarHeight = $state(0);

	const visibleCategories = $derived(
		FAQ_CATEGORIES.filter((cat) => serviceConfig.legal || cat.id !== 'hukum')
	);

	onMount(() => {
		if (defaultCategory && defaultCategory !== 'program') {
			if (defaultCategory !== 'hukum' || serviceConfig.legal) {
				selectedCategory = defaultCategory;
			}
		}
	});

	// Exact category counts as specified in prompt and mockup
	const categoryCounts: Record<string, number> = {
		program: 8,
		beasiswa: 6,
		kemitraan: 5,
		hukum: 5
	};

	// Filtered FAQs based on category & search query
	let filteredFaqs = $derived.by<FaqItem[]>(() => {
		let list = faqData.filter(
			(item) => item.isActive && item.categories.includes(selectedCategory)
		);

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
		if (catId === 'hukum' && !serviceConfig.legal) return;
		selectedCategory = catId;
		const items = faqData.filter((item) => item.isActive && item.categories.includes(catId));
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
		<div
			class="faq-grid-layout"
			style="--faq-sidebar-max-height: {sidebarHeight > 0 ? `${sidebarHeight}px` : '630px'};"
		>
			<!-- LEFT COLUMN: Info Card & Category Navigation (380px) -->
			<aside class="faq-sidebar-col">
				<div class="faq-sidebar-card" bind:clientHeight={sidebarHeight}>
					<!-- Top Illustration: Young woman in beige hijab + navy blazer holding tablet -->
					<div class="sidebar-image-wrap">
						<img
							src="/images/faq-assistant-woman-mockup-2x.png"
							alt="Asisten Informasi SDJNusantara"
							class="sidebar-img"
							loading="eager"
						/>
					</div>

					<!-- Text Header -->
					<div class="sidebar-content">
						<h3 class="sidebar-title">Cari Informasi dengan Cepat</h3>
						<p class="sidebar-desc">
							{#if showSearch}
								Pilih kategori pertanyaan sesuai kebutuhan Anda atau gunakan pencarian untuk menemukan jawaban dengan lebih mudah.
							{:else}
								Pilih kategori pertanyaan sesuai kebutuhan Anda untuk menemukan jawaban dengan lebih mudah.
							{/if}
						</p>

						<!-- Categories Nav Stack -->
						<nav class="categories-nav" aria-label="Kategori FAQ">
							{#each visibleCategories as cat (cat.id)}
								{@const isActive = selectedCategory === cat.id}
								{@const count = categoryCounts[cat.id] ?? cat.count}
								<button
									type="button"
									class="category-btn {isActive ? 'is-active' : ''}"
									onclick={() => selectCategory(cat.id)}
									aria-pressed={isActive}
								>
									<div class="cat-left">
										<Icon icon={cat.icon} width="20" height="20" class="cat-icon" />
										<span class="cat-name">{cat.name}</span>
									</div>
									<span class="cat-count-badge">{count}</span>
								</button>
							{/each}
						</nav>
					</div>
				</div>
			</aside>

			<!-- RIGHT COLUMN: (Optional Search Bar), Category Heading, & Accordion FAQ -->
			<div class="faq-content-col {showSearch ? '' : 'no-search'}">
				{#if showSearch}
					<!-- A. Search Bar -->
					<div class="faq-search-bar">
						<Icon icon="lucide:search" width="20" height="20" class="search-icon" />
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
				{/if}

				<!-- B. Category Heading with Teal Dash -->
				<div class="faq-header-row">
					<div class="header-title-wrap">
						<span class="teal-dash" aria-hidden="true">—</span>
						<h2 id="faq-section-heading" class="faq-heading-text">{headingTitle}</h2>
					</div>

					{#if showSearch && searchQuery.trim()}
						<button type="button" class="btn-clear-search-link" onclick={clearSearch}>
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
											width="20"
											height="20"
											class="chevron-icon {isOpen ? 'is-rotated' : ''}"
										/>
									</div>
								</button>

								<!-- Accordion Answer Panel -->
								{#if isOpen}
									<div
										id="faq-ans-{item.id}"
										class="faq-answer-panel"
										transition:slide={{ duration: 220 }}
									>
										<p class="faq-answer-text">{item.answer}</p>
										{#if item.detail && item.detail.length > 0}
											<ul class="faq-answer-bullets">
												{#each item.detail as bullet}
													<li>{bullet}</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/if}
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>

		{#if showCtaBanner}
			<!-- BOTTOM SECTION: CTA Banner (Masih ada pertanyaan lain?) -->
			<div class="faq-cta-banner">
			<!-- SVG Wave Accents (Bottom Left Teal & Bottom Right Gold) -->
			<svg class="cta-svg-bg" viewBox="0 0 1200 150" fill="none" preserveAspectRatio="none" aria-hidden="true">
				<!-- Bottom Left Teal Wave -->
				<path d="M-40 150 C 40 80, 180 120, 260 150 Z" fill="#00A6B2" fill-opacity="0.9" />
				<!-- Bottom Right Gold & Teal Waves -->
				<path d="M960 150 C 1040 110, 1140 125, 1240 150 Z" fill="#FFB629" fill-opacity="0.85" />
				<path d="M1020 150 C 1100 85, 1180 100, 1250 150 Z" fill="#00A6B2" fill-opacity="0.75" />
			</svg>

			<!-- Left Side: Chat Icon + Texts -->
			<div class="cta-left-content">
				<div class="cta-icon-circle">
					<Icon icon="fluent:chat-bubbles-question-24-filled" width="30" height="30" class="cta-main-icon" />
				</div>
				<div class="cta-texts">
					<h3 class="cta-heading">Masih ada pertanyaan lain?</h3>
					<p class="cta-desc">
						Tim SDJNusantara siap membantu Anda mendapatkan informasi yang lebih lengkap, cepat, dan sesuai kebutuhan.
					</p>
				</div>
			</div>

			<!-- Center Divider Line -->
			<div class="cta-center-divider" aria-hidden="true"></div>

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
					<Icon icon="tabler:brand-whatsapp" width="19" height="19" />
					<span>Hubungi via WhatsApp</span>
				</a>
			</div>
		</div>
		{/if}
	</div>
</section>

<style>
	/* SECTION WRAPPER */
	.faq-redesign-section {
		background: #F4F9FC;
		padding: 52px 0 72px;
		width: 100%;
		font-family: inherit;
		box-sizing: border-box;
	}

	.faq-container {
		width: 100%;
		max-width: 1320px;
		margin: 0 auto;
		padding: 0 24px;
		box-sizing: border-box;
	}

	/* 2-COLUMN GRID LAYOUT (Desktop: 380px Sidebar + minmax(0, 1fr) Content, Gap 32px, Align Start) */
	.faq-grid-layout {
		display: grid;
		grid-template-columns: 380px minmax(0, 1fr);
		gap: 32px;
		align-items: start;
		width: 100%;
		box-sizing: border-box;
	}

	/* LEFT COLUMN: SIDEBAR CARD */
	.faq-sidebar-col {
		position: sticky;
		top: 68px;
		width: 100%;
		min-width: 0;
		box-sizing: border-box;
	}

	.faq-sidebar-card {
		width: 100%;
		height: auto;
		background: #FFFFFF;
		border-radius: 20px;
		border: 1px solid #DCE7F0;
		box-shadow: 0 4px 20px -2px rgba(8, 36, 66, 0.05), 0 2px 6px -1px rgba(8, 36, 66, 0.03);
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Top Illustration */
	.sidebar-image-wrap {
		position: relative;
		width: 100%;
		height: 240px;
		background: #F8FCFD;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sidebar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
	}

	/* Sidebar Content */
	.sidebar-content {
		padding: 24px 24px 28px;
	}

	.sidebar-title {
		font-size: 22px;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px 0;
		line-height: 1.25;
		letter-spacing: -0.01em;
	}

	.sidebar-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: #64748B;
		margin: 0 0 20px 0;
	}

	/* Category Navigation Stack (4 items, 8px gap) */
	.categories-nav {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.category-btn {
		width: 100%;
		height: 48px;
		border-radius: 14px;
		padding: 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #FFFFFF;
		border: 1px solid #DCE7F0;
		cursor: pointer;
		transition: all 0.18s cubic-bezier(0.22, 0.61, 0.36, 1);
		box-sizing: border-box;
		text-align: left;
	}

	.cat-left {
		display: flex;
		align-items: center;
		gap: 12px;
		flex: 1;
		min-width: 0;
	}

	:global(.cat-icon) {
		color: #00A6B2;
		flex-shrink: 0;
		transition: color 0.15s ease;
	}

	.cat-name {
		font-size: 14px;
		font-weight: 600;
		color: #0B2948;
		transition: color 0.15s ease;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.cat-count-badge {
		font-size: 12px;
		font-weight: 700;
		padding: 2.5px 9px;
		border-radius: 999px;
		background: #F1F5F9;
		color: #64748B;
		transition: all 0.15s ease;
	}

	/* Inactive Hover State */
	.category-btn:hover:not(.is-active) {
		border-color: #00A6B2;
		background: #F8FCFD;
		transform: translateX(2px);
	}

	.category-btn:hover:not(.is-active) .cat-name {
		color: #00A6B2;
	}

	/* Active Category State (Teal background, White Text & Icon, Translucent Badge) */
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
		display: flex;
		flex-direction: column;
		width: 100%;
		min-width: 0;
		min-height: 0;
		max-height: var(--faq-sidebar-max-height, 630px);
		box-sizing: border-box;
	}

	/* A. Interactive Search Bar (Height 62px, Radius 16px, Border #DCE7F0) */
	.faq-search-bar {
		flex-shrink: 0;
		width: 100%;
		height: 60px;
		background: #FFFFFF;
		border: 1px solid #DCE7F0;
		border-radius: 16px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		gap: 14px;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.03);
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.faq-search-bar:focus-within {
		border-color: #00A6B2;
		box-shadow: 0 0 0 3px rgba(0, 166, 178, 0.12);
	}

	:global(.search-icon) {
		color: #00A6B2;
		flex-shrink: 0;
	}

	.search-input {
		flex: 1;
		border: none;
		outline: none;
		background: transparent;
		font-size: 14.5px;
		color: #0B2948;
		padding: 0;
		font-family: inherit;
	}

	.search-input::placeholder {
		color: #94A3B8;
	}

	.search-clear-btn {
		width: 26px;
		height: 26px;
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
		color: #0B2948;
	}

	/* B. Category Heading Row */
	.faq-header-row {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin: 26px 0 18px;
	}

	.faq-content-col.no-search .faq-header-row {
		margin: 0 0 18px;
		padding: 4px 0 14px;
		border-bottom: 1px solid #DCE7F0;
	}

	.header-title-wrap {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.teal-dash {
		font-weight: 800;
		color: #00A6B2;
		font-size: 24px;
		line-height: 1;
	}

	.faq-heading-text {
		font-size: 24px;
		font-weight: 800;
		color: #0B2948;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.btn-clear-search-link {
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

	.btn-clear-search-link:hover {
		color: #078893;
	}

	/* C. Accordion FAQ List (10px gap, scrollable within desktop sidebar height) */
	.faq-accordion-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex: 1 1 auto;
		width: 100%;
		min-width: 0;
		min-height: 0;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0 6px 4px 0;
		box-sizing: border-box;
		scrollbar-width: thin;
		scrollbar-color: #CBD5E1 transparent;
	}

	.faq-accordion-list::-webkit-scrollbar {
		width: 6px;
	}

	.faq-accordion-list::-webkit-scrollbar-track {
		background: transparent;
	}

	.faq-accordion-list::-webkit-scrollbar-thumb {
		background: #CBD5E1;
		border-radius: 999px;
	}

	.faq-accordion-list::-webkit-scrollbar-thumb:hover {
		background: #94A3B8;
	}

	/* Accordion Card (Border Radius 16px, Border #DCE7F0) */
	.faq-card-item {
		flex-shrink: 0;
		width: 100%;
		height: auto;
		min-width: 0;
		background: #FFFFFF;
		border: 1px solid #DCE7F0;
		border-radius: 16px;
		box-sizing: border-box;
		transition: background-color 0.2s cubic-bezier(0.22, 0.61, 0.36, 1),
			border-color 0.2s cubic-bezier(0.22, 0.61, 0.36, 1),
			box-shadow 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	.faq-card-item:hover {
		border-color: #CBD5E1;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.03);
	}

	/* Active / Open Accordion Card (Background Cyan Sangat Muda, Border Teal Muda) */
	.faq-card-item.is-open {
		background: #F0F9FA;
		border-color: #9DE1E5;
		box-shadow: 0 3px 12px rgba(0, 166, 178, 0.06);
	}

	/* Trigger Button (Min Height 58px, Height Auto) */
	.faq-trigger-btn {
		width: 100%;
		height: auto;
		min-height: 58px;
		min-width: 0;
		padding: 14px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: transparent;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 16px;
		box-sizing: border-box;
	}

	.trigger-left {
		display: flex;
		align-items: center;
		gap: 14px;
		flex: 1;
		min-width: 0;
	}

	/* Number Badge 01, 02, ... */
	.faq-number-badge {
		min-width: 34px;
		height: 28px;
		border-radius: 8px;
		background: #DDF4F5;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 800;
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
		font-size: 15.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.4;
		white-space: normal;
		overflow-wrap: anywhere;
		word-break: break-word;
		min-width: 0;
		flex: 1;
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

	/* Answer Panel: Width 100%, Height Auto, Position Static, Consistent Padding */
	.faq-answer-panel {
		width: 100%;
		height: auto;
		min-width: 0;
		position: static;
		padding: 4px 24px 20px 68px;
		box-sizing: border-box;
	}

	.faq-answer-text {
		width: 100%;
		font-size: 14.5px;
		line-height: 1.6;
		color: #475569;
		margin: 0;
		white-space: normal;
		overflow-wrap: anywhere;
		word-break: break-word;
		box-sizing: border-box;
	}

	.faq-answer-bullets {
		width: 100%;
		margin: 10px 0 0;
		padding-left: 18px;
		list-style-type: disc;
		display: flex;
		flex-direction: column;
		gap: 6px;
		box-sizing: border-box;
	}

	.faq-answer-bullets li {
		width: 100%;
		font-size: 13.5px;
		line-height: 1.55;
		color: #64748B;
		white-space: normal;
		overflow-wrap: anywhere;
		word-break: break-word;
		box-sizing: border-box;
	}

	/* Empty State */
	.faq-empty-state {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 48px 24px;
		background: #FFFFFF;
		border: 1px dashed #CBD5E1;
		border-radius: 16px;
	}

	.empty-icon-wrap {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: #DDF4F5;
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
		color: #0B2948;
		margin: 0 0 6px 0;
	}

	.empty-desc {
		font-size: 13.5px;
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
		color: #0B2948;
		border: 1px solid #CBD5E1;
		padding: 9px 18px;
		border-radius: 10px;
		font-size: 13.5px;
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
		padding: 9px 18px;
		border-radius: 10px;
		font-size: 13.5px;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.15s ease;
	}

	.btn-empty-chat:hover {
		background: #078893;
	}

	/* BOTTOM CTA BANNER (Background #062D4B, Radius 20px, Height ~150px) */
	.faq-cta-banner {
		margin-top: 38px;
		background: #062D4B;
		border-radius: 20px;
		min-height: 140px;
		padding: 26px 36px;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		box-shadow: 0 10px 30px rgba(6, 45, 75, 0.14);
		box-sizing: border-box;
	}

	.cta-svg-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	/* Left Side: Circular Teal Icon + Texts */
	.cta-left-content {
		display: flex;
		align-items: center;
		gap: 20px;
		flex: 1;
		position: relative;
		z-index: 2;
	}

	.cta-icon-circle {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 4px 14px rgba(0, 166, 178, 0.35);
	}

	:global(.cta-main-icon) {
		color: #FFFFFF;
	}

	.cta-texts {
		max-width: 620px;
	}

	.cta-heading {
		font-size: 21px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 5px 0;
		letter-spacing: -0.01em;
	}

	.cta-desc {
		font-size: 13.5px;
		line-height: 1.48;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
	}

	/* Center Vertical Divider Line */
	.cta-center-divider {
		width: 1px;
		height: 48px;
		background: rgba(0, 166, 178, 0.35);
		flex-shrink: 0;
		position: relative;
		z-index: 2;
	}

	/* Right Side: Action Buttons */
	.cta-actions {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
		position: relative;
		z-index: 2;
	}

	.btn-cta-chat {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #FFB629;
		color: #0B2948;
		border: none;
		padding: 12px 22px;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.18s ease;
		white-space: nowrap;
		box-shadow: 0 4px 12px rgba(255, 182, 41, 0.25);
	}

	.btn-cta-chat:hover {
		background: #FFAF1A;
		transform: translateY(-1px);
		box-shadow: 0 6px 16px rgba(255, 182, 41, 0.32);
	}

	.btn-cta-wa {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: transparent;
		color: #FFFFFF;
		border: 1.5px solid rgba(255, 255, 255, 0.75);
		padding: 11px 22px;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 700;
		text-decoration: none;
		transition: all 0.18s ease;
		white-space: nowrap;
	}

	.btn-cta-wa:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: #FFFFFF;
		transform: translateY(-1px);
	}

	/* RESPONSIVE BREAKPOINTS */
	@media (max-width: 1024px) {
		.faq-grid-layout {
			grid-template-columns: minmax(0, 1fr);
			gap: 28px;
		}

		.faq-sidebar-col {
			position: static;
		}

		.faq-content-col {
			max-height: none;
		}

		.faq-accordion-list {
			flex: none;
			overflow-y: visible;
			overflow-x: visible;
			padding-right: 0;
			padding-bottom: 0;
		}

		.faq-cta-banner {
			flex-direction: column;
			align-items: flex-start;
			padding: 24px;
		}

		.cta-center-divider {
			display: none;
		}

		.cta-actions {
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	@media (max-width: 768px) {
		.faq-redesign-section {
			padding: 32px 0 48px;
		}

		.faq-container {
			padding: 0 16px;
		}

		.sidebar-image-wrap {
			height: 200px;
		}

		.categories-nav {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 8px;
		}

		.faq-header-row {
			margin: 20px 0 14px;
		}

		.faq-content-col.no-search .faq-header-row {
			margin: 0 0 14px;
			padding: 0 0 12px;
		}

		.faq-heading-text {
			font-size: 20px;
		}

		.faq-answer-panel {
			padding: 4px 20px 18px 20px;
		}

		.btn-cta-chat,
		.btn-cta-wa {
			width: 100%;
			justify-content: center;
		}

		.cta-actions {
			flex-direction: column;
			gap: 10px;
		}
	}

	@media (max-width: 480px) {
		.categories-nav {
			grid-template-columns: minmax(0, 1fr);
		}

		.faq-trigger-btn {
			padding: 12px 16px;
		}

		.faq-number-badge {
			min-width: 28px;
			height: 25px;
			font-size: 11.5px;
		}

		.faq-question-text {
			font-size: 14px;
		}

		.faq-answer-panel {
			padding: 4px 16px 16px 16px;
		}
	}
</style>
