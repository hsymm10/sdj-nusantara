<script lang="ts">
	import { onMount } from 'svelte';
	import { scholarshipsData, scholarshipDisclaimer, type Scholarship } from '#lib/data/scholarships';
	import { scholarshipsEnMap, scholarshipDisclaimerEn } from '#lib/i18n/dataEn';
	import DetailModal from '#lib/components/ui/DetailModal.svelte';
	import ScholarshipDetail from '#lib/components/sections/scholarship/ScholarshipDetail.svelte';
	import SearchToggle from '#lib/components/ui/SearchToggle.svelte';
	import FilterPopover, { type FilterValues } from '#lib/components/ui/FilterPopover.svelte';
	import ActiveChips from '#lib/components/ui/ActiveChips.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	interface Props {
		selectedCategory?: string;
	}

	let { selectedCategory = $bindable('Semua Kategori') }: Props = $props();

	let searchQuery = $state('');
	let selectedJenjang = $state('Semua Jenjang');
	let selectedNegara = $state('Semua Negara');
	let selectedPendanaan = $state('Semua Jenis');
	let selectedStatus = $state('Semua Status');
	let selectedPenyelenggara = $state('Semua Penyelenggara');

	// Local bookmark toggle state
	let bookmarked = $state<Record<string, boolean>>({});

	function toggleBookmark(id: string) {
		bookmarked[id] = !bookmarked[id];
	}

	// Filter values representation
	let filterValues = $derived<FilterValues>({
		kategori: selectedCategory,
		jenjang: selectedJenjang,
		negara: selectedNegara,
		pendanaan: selectedPendanaan,
		status: selectedStatus,
		penyelenggara: selectedPenyelenggara
	});

	let activeFilterCount = $derived(
		(selectedCategory !== 'Semua Kategori' ? 1 : 0) +
		(selectedJenjang !== 'Semua Jenjang' ? 1 : 0) +
		(selectedNegara !== 'Semua Negara' ? 1 : 0) +
		(selectedPendanaan !== 'Semua Jenis' ? 1 : 0) +
		(selectedStatus !== 'Semua Status' ? 1 : 0) +
		(selectedPenyelenggara !== 'Semua Penyelenggara' ? 1 : 0)
	);

	let hasActiveFilters = $derived(
		activeFilterCount > 0 || searchQuery.trim().length > 0
	);

	// Filter data
	let filteredScholarships = $derived(
		scholarshipsData.filter((sch) => {
			const q = searchQuery.trim().toLowerCase();
			const matchQuery =
				q === '' ||
				sch.nama.toLowerCase().includes(q) ||
				sch.penyelenggara.toLowerCase().includes(q) ||
				sch.negara.toLowerCase().includes(q) ||
				sch.jenjang.toLowerCase().includes(q) ||
				sch.pendanaan.toLowerCase().includes(q);

			const matchCat =
				selectedCategory === 'Semua Kategori' || sch.kategori === selectedCategory;

			const matchJenjang =
				selectedJenjang === 'Semua Jenjang' || sch.jenjang.includes(selectedJenjang);

			const matchNegara =
				selectedNegara === 'Semua Negara' ||
				(selectedNegara === 'Dalam Negeri' && sch.cakupan === 'Dalam Negeri') ||
				(selectedNegara === 'Luar Negeri' && sch.cakupan === 'Luar Negeri') ||
				sch.negara.toLowerCase().includes(selectedNegara.toLowerCase());

			const matchPendanaan =
				selectedPendanaan === 'Semua Jenis' || sch.jenisPendanaan === selectedPendanaan;

			const matchStatus =
				selectedStatus === 'Semua Status' || sch.status === selectedStatus;

			const matchPenyelenggara =
				selectedPenyelenggara === 'Semua Penyelenggara' ||
				sch.penyelenggara.toLowerCase().includes(selectedPenyelenggara.toLowerCase());

			return (
				matchQuery && matchCat && matchJenjang && matchNegara && matchPendanaan && matchStatus && matchPenyelenggara
			);
		})
	);

	function calculateDraftMatches(draft: FilterValues): number {
		return scholarshipsData.filter((sch) => {
			const q = searchQuery.trim().toLowerCase();
			const matchQuery =
				q === '' ||
				sch.nama.toLowerCase().includes(q) ||
				sch.penyelenggara.toLowerCase().includes(q) ||
				sch.negara.toLowerCase().includes(q) ||
				sch.jenjang.toLowerCase().includes(q) ||
				sch.pendanaan.toLowerCase().includes(q);

			const matchCat =
				draft.kategori === 'Semua Kategori' || sch.kategori === draft.kategori;

			const matchJenjang =
				draft.jenjang === 'Semua Jenjang' || sch.jenjang.includes(draft.jenjang);

			const matchNegara =
				draft.negara === 'Semua Negara' ||
				(draft.negara === 'Dalam Negeri' && sch.cakupan === 'Dalam Negeri') ||
				(draft.negara === 'Luar Negeri' && sch.cakupan === 'Luar Negeri') ||
				sch.negara.toLowerCase().includes(draft.negara.toLowerCase());

			const matchPendanaan =
				draft.pendanaan === 'Semua Jenis' || sch.jenisPendanaan === draft.pendanaan;

			const matchStatus =
				draft.status === 'Semua Status' || sch.status === draft.status;

			const matchPenyelenggara =
				!draft.penyelenggara ||
				draft.penyelenggara === 'Semua Penyelenggara' ||
				sch.penyelenggara.toLowerCase().includes(draft.penyelenggara.toLowerCase());

			return (
				matchQuery && matchCat && matchJenjang && matchNegara && matchPendanaan && matchStatus && matchPenyelenggara
			);
		}).length;
	}

	function handleApplyFilters(applied: FilterValues) {
		selectedCategory = applied.kategori;
		selectedJenjang = applied.jenjang;
		selectedNegara = applied.negara;
		selectedPendanaan = applied.pendanaan;
		selectedStatus = applied.status;
		selectedPenyelenggara = applied.penyelenggara || 'Semua Penyelenggara';
	}

	function handleResetFilters() {
		resetAllFilters();
	}

	function resetAllFilters() {
		searchQuery = '';
		selectedCategory = 'Semua Kategori';
		selectedJenjang = 'Semua Jenjang';
		selectedNegara = 'Semua Negara';
		selectedPendanaan = 'Semua Jenis';
		selectedStatus = 'Semua Status';
		selectedPenyelenggara = 'Semua Penyelenggara';
	}

	interface ChipItem {
		id: string;
		label: string;
		type: string;
	}

	let activeChipsList = $derived.by<ChipItem[]>(() => {
		const list: ChipItem[] = [];
		if (searchQuery.trim()) {
			list.push({ id: 'search', label: `Cari: "${searchQuery.trim()}"`, type: 'search' });
		}
		if (selectedCategory !== 'Semua Kategori') {
			list.push({ id: 'kategori', label: `Kategori: ${selectedCategory}`, type: 'kategori' });
		}
		if (selectedJenjang !== 'Semua Jenjang') {
			list.push({ id: 'jenjang', label: `Jenjang: ${selectedJenjang}`, type: 'jenjang' });
		}
		if (selectedNegara !== 'Semua Negara') {
			list.push({ id: 'negara', label: `Negara: ${selectedNegara}`, type: 'negara' });
		}
		if (selectedPendanaan !== 'Semua Jenis') {
			list.push({ id: 'pendanaan', label: `Pendanaan: ${selectedPendanaan}`, type: 'pendanaan' });
		}
		if (selectedStatus !== 'Semua Status') {
			list.push({ id: 'status', label: `Status: ${selectedStatus}`, type: 'status' });
		}
		if (selectedPenyelenggara !== 'Semua Penyelenggara') {
			list.push({ id: 'penyelenggara', label: `Penyelenggara: ${selectedPenyelenggara}`, type: 'penyelenggara' });
		}
		return list;
	});

	function handleRemoveChip(id: string, type: string) {
		if (type === 'search') searchQuery = '';
		else if (type === 'kategori') selectedCategory = 'Semua Kategori';
		else if (type === 'jenjang') selectedJenjang = 'Semua Jenjang';
		else if (type === 'negara') selectedNegara = 'Semua Negara';
		else if (type === 'pendanaan') selectedPendanaan = 'Semua Jenis';
		else if (type === 'status') selectedStatus = 'Semua Status';
		else if (type === 'penyelenggara') selectedPenyelenggara = 'Semua Penyelenggara';
	}

	// Modal State
	let selectedScholarshipModal = $state<Scholarship | null>(null);
	let activeTriggerElement = $state<HTMLElement | null>(null);

	let currentIndex = $derived(
		selectedScholarshipModal
			? filteredScholarships.findIndex((s) => s.id === selectedScholarshipModal?.id)
			: -1
	);

	function openModal(sch: Scholarship, triggerEl?: HTMLElement) {
		selectedScholarshipModal = sch;
		if (triggerEl) activeTriggerElement = triggerEl;
		if (typeof window !== 'undefined') {
			history.replaceState(null, '', `#beasiswa-${sch.id}`);
		}
	}

	function closeModal() {
		selectedScholarshipModal = null;
		if (typeof window !== 'undefined') {
			const cleanUrl = window.location.pathname + window.location.search;
			history.replaceState(null, '', cleanUrl);
		}
	}

	function goToPrev() {
		if (filteredScholarships.length <= 1 || currentIndex < 0) return;
		const nextIdx = (currentIndex - 1 + filteredScholarships.length) % filteredScholarships.length;
		const prevSch = filteredScholarships[nextIdx];
		if (prevSch) {
			openModal(prevSch, activeTriggerElement ?? undefined);
		}
	}

	function goToNext() {
		if (filteredScholarships.length <= 1 || currentIndex < 0) return;
		const nextIdx = (currentIndex + 1) % filteredScholarships.length;
		const nextSch = filteredScholarships[nextIdx];
		if (nextSch) {
			openModal(nextSch, activeTriggerElement ?? undefined);
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			const hash = window.location.hash;
			if (hash.startsWith('#beasiswa-')) {
				const id = hash.replace('#beasiswa-', '');
				const targetSch = scholarshipsData.find((s) => s.id === id);
				if (targetSch) {
					openModal(targetSch);
				}
			}
		}
	});
</script>

<section id="cari-beasiswa" class="sch-search-section">
	<div class="sch-search-container">
		<!-- Section Header (±y 578 on 1536) -->
		<div class="search-header">
			<div class="section-label">
				<span class="label-dash">—</span>
				<span class="label-text">{i18n.pick('Cari Beasiswa', 'Find Scholarships')}</span>
			</div>
			<h2 class="section-title">{i18n.pick('Temukan Beasiswa yang Sesuai dengan Tujuan Anda', 'Find Scholarships That Match Your Goals')}</h2>
			<p class="section-desc">
				{i18n.pick(
					'Gunakan pencarian dan filter untuk menemukan program beasiswa yang sesuai dengan minat, jenjang pendidikan, dan negara tujuan Anda.',
					'Use search and filters to discover scholarship programs aligned with your interests, education level, and destination country.'
				)}
			</p>
		</div>

		<!-- Toolbar Cari & Filter Popover -->
		<div class="sch-toolbar-row">
			<div class="sch-toolbar-controls">
				<SearchToggle
					value={searchQuery}
					onChange={(val) => (searchQuery = val)}
					placeholderClosed={i18n.pick('Cari beasiswa...', 'Search scholarships...')}
					placeholderOpen={i18n.pick('Cari nama beasiswa, penyelenggara, atau kata kunci...', 'Search scholarship name, provider, or keyword...')}
				/>
				<FilterPopover
					values={filterValues}
					activeCount={activeFilterCount}
					calculateCount={calculateDraftMatches}
					onApply={handleApplyFilters}
					onReset={handleResetFilters}
				/>
			</div>

			<div class="sch-toolbar-meta">
				<span class="results-count-text">
					{@html i18n.pick(`Menampilkan <strong>${filteredScholarships.length}</strong> beasiswa`, `Showing <strong>${filteredScholarships.length}</strong> scholarships`)}
				</span>
				{#if hasActiveFilters}
					<button type="button" class="btn-quick-reset" onclick={resetAllFilters}>
						{i18n.pick('Reset semua', 'Reset all')}
					</button>
				{/if}
			</div>
		</div>

		<!-- Active Filter Chips -->
		<ActiveChips
			chips={activeChipsList}
			onRemove={handleRemoveChip}
			onClearAll={resetAllFilters}
		/>

		<!-- Beasiswa Terbaru Header (±y 878 on 1536) -->
		<div class="terbaru-header">
			<div class="terbaru-text-col">
				<h3 class="terbaru-title">{i18n.pick('Beasiswa Terbaru', 'Latest Scholarships')}</h3>
				<p class="terbaru-sub">{i18n.pick('Informasi beasiswa terbaru dari berbagai penyelenggara terpercaya.', 'Latest scholarship opportunities from trusted providers.')}</p>
			</div>
			<button type="button" class="terbaru-link-btn" onclick={resetAllFilters}>
				<span>{i18n.pick('Lihat Semua Beasiswa', 'View All Scholarships')}</span>
				<span class="link-arrow">→</span>
			</button>
		</div>

		<!-- 4 Cards Grid (x ±75→1467, gap ±16px, height ±500px, radius ±15px) -->
		<div class="sch-cards-grid">
			{#if filteredScholarships.length === 0}
				<div class="no-sch-box">
					<div class="no-sch-icon-wrap">
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</div>
					<h3 class="no-sch-title">{i18n.pick('Belum ada beasiswa yang cocok', 'No matching scholarships found')}</h3>
					<p class="no-sch-sub">{i18n.pick('Coba sesuaikan kata kunci pencarian atau atur ulang filter Anda untuk melihat peluang lainnya.', 'Try adjusting your search keywords or resetting your filters to explore more opportunities.')}</p>
					<div class="no-sch-actions">
						<button type="button" class="btn-reset-filters" onclick={resetAllFilters}>
							{i18n.pick('Atur Ulang Filter', 'Reset Filters')}
						</button>
						<a href="/kontak" class="btn-consult-empty">
							{i18n.pick('Konsultasikan Beasiswa yang Anda Cari', 'Consult on the Scholarship You Seek')}
						</a>
					</div>
				</div>
			{:else}
				{#each filteredScholarships as sch (sch.id)}
					{@const dSch = i18n.lang === 'en' && scholarshipsEnMap[sch.id] ? { ...sch, ...scholarshipsEnMap[sch.id] } : sch}
					<div class="sch-card">
						<!-- Card Thumbnail with Scope Pill & Bookmark Toggle -->
						<div class="sch-thumb-wrap">
							<img
								src={sch.image}
								alt={dSch.nama}
								class="sch-thumb"
								loading="lazy"
							/>
							<div class="sch-scope-pill">{dSch.cakupan}</div>
							<button
								type="button"
								class="bookmark-btn {bookmarked[sch.id] ? 'is-active' : ''}"
								onclick={() => toggleBookmark(sch.id)}
								aria-label={i18n.pick(`Simpan beasiswa ${dSch.nama}`, `Save scholarship ${dSch.nama}`)}
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill={bookmarked[sch.id] ? '#F5B331' : 'none'} stroke={bookmarked[sch.id] ? '#F5B331' : '#FFFFFF'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
								</svg>
							</button>
						</div>

						<!-- Card Body -->
						<div class="sch-card-body">
							<!-- Title (bold ±20px) -->
							<h4 class="sch-name">{dSch.nama}</h4>

							<!-- Penyelenggara with NEUTRAL round institution icon -->
							<div class="org-row">
								<div class="neutral-org-icon" aria-hidden="true">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M3 21h18"></path>
										<path d="M3 10h18"></path>
										<path d="M5 6l7-3 7 3"></path>
										<path d="M4 10v11"></path>
										<path d="M20 10v11"></path>
										<path d="M8 14v4"></path>
										<path d="M12 14v4"></path>
										<path d="M16 14v4"></path>
									</svg>
								</div>
								<span class="org-name">{dSch.penyelenggara}</span>
							</div>

							<!-- 3 Rows Meta with Teal Icons (±14px) -->
							<div class="sch-meta-list">
								<!-- Jenjang -->
								<div class="meta-row-item">
									<div class="meta-icon-teal" aria-hidden="true">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
											<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
										</svg>
									</div>
									<span class="meta-text">{dSch.jenjang}</span>
								</div>

								<!-- Negara -->
								<div class="meta-row-item">
									<div class="meta-icon-teal" aria-hidden="true">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
											<circle cx="12" cy="10" r="3"></circle>
										</svg>
									</div>
									<span class="meta-text">{dSch.negara}</span>
								</div>

								<!-- Pendanaan -->
								<div class="meta-row-item">
									<div class="meta-icon-teal" aria-hidden="true">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="9"></circle>
											<path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1"></path>
											<path d="M12 6v2m0 8v2"></path>
										</svg>
									</div>
									<span class="meta-text">{dSch.pendanaan}</span>
								</div>
							</div>

							<!-- Bottom Block Aligned across cards (margin-top: auto) -->
							<div class="sch-card-footer">
								<div class="meta-badge-row">
									<span class="soft-gold-badge">{dSch.kategori}</span>
									<span class="updated-date">{dSch.updatedAt}</span>
								</div>
								<button
									type="button"
									class="detail-action-link"
									onclick={(e) => openModal(sch, e.currentTarget)}
									aria-label={i18n.pick(`Lihat detail beasiswa ${sch.nama}`, `View scholarship details ${sch.nama}`)}
								>
									<span>{i18n.pick('Lihat Detail', 'View Detail')}</span>
									<span class="arrow-glyph" aria-hidden="true">→</span>
								</button>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Disclaimer (2 lines italic tipis ±13px) -->
		<div class="disclaimer-wrap">
			<p class="disclaimer-text">
				{i18n.pick(
					'*Contoh data referensi. Verifikasi informasi dan persyaratan terbaru selalu melalui situs resmi masing-masing penyelenggara beasiswa. SDJNusantara tidak menjanjikan kelulusan beasiswa; keputusan mutlak berada pada pihak penyelenggara.',
					'*Reference sample data. Always verify the latest information and requirements on each scholarship provider’s official website. SDJNusantara does not guarantee scholarship admission; final decisions rest solely with the provider.'
				)}
			</p>
		</div>
	</div>
</section>

<!-- Modal Detail Beasiswa -->
{#if selectedScholarshipModal}
	<DetailModal
		isOpen={true}
		title={i18n.lang === 'en' && scholarshipsEnMap[selectedScholarshipModal.id]
			? scholarshipsEnMap[selectedScholarshipModal.id].nama
			: selectedScholarshipModal.nama}
		categoryLabel={i18n.lang === 'en' && scholarshipsEnMap[selectedScholarshipModal.id]
			? scholarshipsEnMap[selectedScholarshipModal.id].kategori
			: selectedScholarshipModal.kategori}
		imageSrc={selectedScholarshipModal.image}
		imageAlt={selectedScholarshipModal.nama}
		fullPageRoute={`/layanan/pendidikan/beasiswa/${selectedScholarshipModal.id}`}
		chatQuestion={i18n.pick(
			`Halo, saya ingin menanyakan mengenai persiapan pendaftaran beasiswa ${selectedScholarshipModal?.nama ?? ''}.`,
			`Hello, I would like to ask about preparing an application for the ${selectedScholarshipModal?.nama ?? ''} scholarship.`
		)}
		currentIndex={currentIndex >= 0 ? currentIndex : undefined}
		totalCount={filteredScholarships.length}
		onClose={closeModal}
		onPrev={goToPrev}
		onNext={goToNext}
		triggerElement={activeTriggerElement}
		bookmarked={!!bookmarked[selectedScholarshipModal.id]}
		onToggleBookmark={() => selectedScholarshipModal && toggleBookmark(selectedScholarshipModal.id)}
	>
		<ScholarshipDetail scholarship={selectedScholarshipModal} />
	</DetailModal>
{/if}

<style>
	.sch-search-section {
		background: #FFFFFF;
		padding: 0.95rem 0 0.85rem;
		width: 100%;
	}

	/* Container: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-search-container {
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-search-container {
			max-width: 1500px;
		}
	}

	/* Section Header (±y 578 on 1536) */
	.search-header {
		margin-bottom: 0.65rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.35rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(22px, 1.95vw, 29px);
		line-height: 1.2;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.35rem 0;
		white-space: nowrap;
	}

	.section-desc {
		font-size: 14px;
		line-height: 20px;
		color: #475569;
		margin: 0;
		max-width: 1100px;
		white-space: nowrap;
	}

	/* Toolbar Cari & Filter Popover */
	.sch-toolbar-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-top: 0.85rem;
		margin-bottom: 0.75rem;
		width: 100%;
		flex-wrap: wrap;
	}

	.sch-toolbar-controls {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: nowrap;
	}

	.sch-toolbar-meta {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.results-count-text {
		font-size: 13.5px;
		color: #64748B;
	}

	.results-count-text strong {
		color: #082442;
		font-weight: 700;
	}

	.btn-quick-reset {
		background: none;
		border: none;
		color: #079EAD;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		padding: 4px 8px;
		border-radius: 6px;
		text-decoration: underline;
		transition: color 0.15s ease;
	}

	.btn-quick-reset:hover {
		color: #057A85;
	}

	/* Empty State */
	.no-sch-box {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 48px 24px;
		background: #F8FAFC;
		border: 1px dashed #CBD5E1;
		border-radius: 16px;
		margin: 16px 0;
	}

	.no-sch-icon-wrap {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: #E6F7F8;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 14px;
	}

	.no-sch-title {
		font-size: 18px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 6px 0;
	}

	.no-sch-sub {
		font-size: 13.5px;
		color: #64748B;
		max-width: 440px;
		margin: 0 0 18px 0;
		line-height: 1.5;
	}

	.no-sch-actions {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.btn-reset-filters {
		background: #FFFFFF;
		color: #082442;
		border: 1px solid #CBD5E1;
		padding: 9px 16px;
		border-radius: 10px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.btn-reset-filters:hover {
		background: #F1F5F9;
		border-color: #94A3B8;
	}

	.btn-consult-empty {
		background: #F5B331;
		color: #082442;
		border: none;
		padding: 9px 18px;
		border-radius: 10px;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		transition: background 0.15s ease;
	}

	.btn-consult-empty:hover {
		background: #E5A320;
	}

	/* Beasiswa Terbaru Header (±y 878 on 1536) */
	.terbaru-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.terbaru-title {
		font-size: clamp(22px, 1.85vw, 28px);
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.25rem 0;
	}

	.terbaru-sub {
		font-size: 14px;
		color: #475569;
		margin: 0;
	}

	.terbaru-link-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: none;
		border: none;
		color: #00A6B2;
		font-size: 14px;
		font-weight: 700;
		cursor: pointer;
		padding: 0;
		transition: color 0.2s ease;
	}

	.terbaru-link-btn:hover {
		color: #088894;
	}

	.link-arrow {
		font-size: 16px;
		font-weight: 800;
		transition: transform 0.2s ease;
	}

	.terbaru-link-btn:hover .link-arrow {
		transform: translateX(4px);
	}

	/* 4 Cards Grid: gap ±16px, radius ±15px, shadow */
	.sch-cards-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		width: 100%;
	}

	.no-sch-box {
		grid-column: 1 / -1;
		background: #F8FAFC;
		border: 1px dashed #CBD5E1;
		border-radius: 14px;
		padding: 3rem 2rem;
		text-align: center;
	}

	.no-sch-title {
		font-size: 16px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 0.5rem 0;
	}

	.no-sch-sub {
		font-size: 14px;
		color: #64748B;
		margin: 0 0 1.25rem 0;
	}

	.btn-reset-filters {
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 13.5px;
		font-weight: 700;
		padding: 8px 18px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.btn-reset-filters:hover {
		background: #088894;
	}

	.sch-card {
		background: #FFFFFF;
		border-radius: 15px;
		border: 1px solid #E2E8F0;
		box-shadow: 0 4px 20px rgba(11, 39, 71, 0.06);
		display: flex;
		flex-direction: column;
		height: 495px;
		overflow: hidden;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.sch-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 26px rgba(11, 39, 71, 0.1);
	}

	/* Card Thumbnail (16:9, height ±170px) */
	.sch-thumb-wrap {
		position: relative;
		width: 100%;
		height: 170px;
		background: #082442;
		overflow: hidden;
		flex-shrink: 0;
	}

	.sch-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.sch-scope-pill {
		position: absolute;
		top: 10px;
		left: 10px;
		background: #FFFFFF;
		color: #082442;
		font-size: 11px;
		font-weight: 700;
		padding: 3px 9px;
		border-radius: 6px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	/* Bookmark Toggle Button */
	.bookmark-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: rgba(8, 36, 66, 0.45);
		border: 1px solid rgba(255, 255, 255, 0.35);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.bookmark-btn:hover {
		background: rgba(8, 36, 66, 0.7);
		border-color: #FFFFFF;
	}

	.bookmark-btn.is-active {
		background: #FFFFFF;
		border-color: #F5B331;
	}

	/* Card Body */
	.sch-card-body {
		padding: 1.15rem 1.15rem 1rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.sch-name {
		font-size: 17.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 8px 0;
		min-height: 44px;
	}

	/* Penyelenggara row with NEUTRAL round institution icon */
	.org-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
		min-height: 26px;
	}

	.neutral-org-icon {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.org-name {
		font-size: 12px;
		color: #475569;
		line-height: 1.35;
	}

	/* 3 Rows Meta with Teal Icons (±14px) */
	.sch-meta-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 0.75rem;
	}

	.meta-row-item {
		display: flex;
		align-items: flex-start;
		gap: 8px;
	}

	.meta-icon-teal {
		width: 16px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.meta-text {
		font-size: 13px;
		color: #334155;
		line-height: 1.35;
	}

	/* Bottom Block Aligned (margin-top: auto) */
	.sch-card-footer {
		margin-top: auto;
		padding-top: 10px;
		border-top: 1px solid #F1F5F9;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.meta-badge-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.soft-gold-badge {
		background: #FEF3C7;
		color: #92400E;
		font-size: 11px;
		font-weight: 700;
		padding: 2.5px 8px;
		border-radius: 6px;
	}

	.updated-date {
		font-size: 11px;
		color: #94A3B8;
	}

	.detail-action-link {
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		display: inline-flex;
		align-items: center;
		gap: 5px;
		text-decoration: none;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: color 0.2s ease;
	}

	.detail-action-link:hover {
		color: #088894;
	}

	.arrow-glyph {
		font-size: 14px;
		transition: transform 0.2s ease;
	}

	.detail-action-link:hover .arrow-glyph {
		transform: translateX(4px);
	}

	/* Disclaimer (2 lines italic tipis ±13px) */
	.disclaimer-wrap {
		margin-top: 0.85rem;
		padding-top: 0.15rem;
	}

	.disclaimer-text {
		font-size: 12.5px;
		line-height: 18px;
		color: #64748B;
		font-style: italic;
		margin: 0;
	}

	@media (max-width: 1200px) {
		.sch-search-container {
			padding: 0 1.5rem;
		}
		.section-title,
		.section-desc {
			white-space: normal;
		}
		.sch-cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 767px) {
		.sch-toolbar-row {
			flex-direction: column;
			align-items: stretch;
			gap: 12px;
		}
		.sch-toolbar-controls {
			width: 100%;
			justify-content: flex-start;
		}
		.sch-toolbar-meta {
			justify-content: space-between;
			width: 100%;
		}
	}

	@media (max-width: 640px) {
		.sch-search-section {
			padding: 1.5rem 0;
		}
		.sch-cards-grid {
			grid-template-columns: 1fr;
		}
		.terbaru-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
