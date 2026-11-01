<script lang="ts">
	import { scholarshipsData, scholarshipDisclaimer } from '#lib/data/scholarships';

	interface Props {
		selectedCategory?: string;
	}

	let { selectedCategory = $bindable('Semua Kategori') }: Props = $props();

	let searchQuery = $state('');
	let selectedJenjang = $state('Semua Jenjang');
	let selectedNegara = $state('Semua Negara');
	let selectedPendanaan = $state('Semua Jenis');
	let selectedStatus = $state('Semua Status');

	// Local bookmark toggle state
	let bookmarked = $state<Record<string, boolean>>({});

	function toggleBookmark(id: string) {
		bookmarked[id] = !bookmarked[id];
	}

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

			return (
				matchQuery && matchCat && matchJenjang && matchNegara && matchPendanaan && matchStatus
			);
		})
	);

	function resetFilters() {
		searchQuery = '';
		selectedCategory = 'Semua Kategori';
		selectedJenjang = 'Semua Jenjang';
		selectedNegara = 'Semua Negara';
		selectedPendanaan = 'Semua Jenis';
		selectedStatus = 'Semua Status';
	}
</script>

<section id="cari-beasiswa" class="sch-search-section">
	<div class="sch-search-container">
		<!-- Section Header (±y 578 on 1536) -->
		<div class="search-header">
			<div class="section-label">
				<span class="label-dash">—</span>
				<span class="label-text">Cari Beasiswa</span>
			</div>
			<h2 class="section-title">Temukan Beasiswa yang Sesuai dengan Tujuan Anda</h2>
			<p class="section-desc">
				Gunakan pencarian dan filter untuk menemukan program beasiswa yang sesuai dengan minat, jenjang pendidikan, dan negara tujuan Anda.
			</p>
		</div>

		<!-- Wide Search Input (Pill height ±50px, icon left, round navy button right) -->
		<div class="wide-search-bar">
			<div class="search-input-wrap">
				<svg class="search-icon-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
				<input
					type="text"
					placeholder="Cari nama beasiswa, penyelenggara, atau kata kunci..."
					bind:value={searchQuery}
					class="search-text-input"
					aria-label="Cari beasiswa"
				/>
			</div>
			<button type="button" class="btn-search-round" aria-label="Tombol cari beasiswa">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
			</button>
		</div>

		<!-- 5 Select Filters (Equal width, gap ±16px, bold label above) -->
		<div class="filters-row">
			<div class="filter-group">
				<label for="filter-cat" class="filter-lbl">Kategori</label>
				<div class="select-wrapper">
					<select id="filter-cat" bind:value={selectedCategory} class="filter-select">
						<option value="Semua Kategori">Semua Kategori</option>
						<option value="Pemerintah">Pemerintah</option>
						<option value="Universitas">Universitas</option>
						<option value="Lembaga Internasional">Lembaga Internasional</option>
						<option value="Swasta">Swasta</option>
						<option value="Daerah">Daerah</option>
					</select>
				</div>
			</div>

			<div class="filter-group">
				<label for="filter-jenjang" class="filter-lbl">Jenjang Pendidikan</label>
				<div class="select-wrapper">
					<select id="filter-jenjang" bind:value={selectedJenjang} class="filter-select">
						<option value="Semua Jenjang">Semua Jenjang</option>
						<option value="S1">S1</option>
						<option value="S2">S2</option>
						<option value="S3">S3</option>
					</select>
				</div>
			</div>

			<div class="filter-group">
				<label for="filter-negara" class="filter-lbl">Negara Tujuan</label>
				<div class="select-wrapper">
					<select id="filter-negara" bind:value={selectedNegara} class="filter-select">
						<option value="Semua Negara">Semua Negara</option>
						<option value="Dalam Negeri">Dalam Negeri</option>
						<option value="Luar Negeri">Luar Negeri</option>
						<option value="Inggris">Inggris</option>
						<option value="Jepang">Jepang</option>
					</select>
				</div>
			</div>

			<div class="filter-group">
				<label for="filter-pendanaan" class="filter-lbl">Jenis Pendanaan</label>
				<div class="select-wrapper">
					<select id="filter-pendanaan" bind:value={selectedPendanaan} class="filter-select">
						<option value="Semua Jenis">Semua Jenis</option>
						<option value="Fully Funded">Fully Funded</option>
						<option value="Partial Funded">Partial Funded</option>
					</select>
				</div>
			</div>

			<div class="filter-group">
				<label for="filter-status" class="filter-lbl">Status Pendaftaran</label>
				<div class="select-wrapper">
					<select id="filter-status" bind:value={selectedStatus} class="filter-select">
						<option value="Semua Status">Semua Status</option>
						<option value="Buka">Buka</option>
						<option value="Segera Dibuka">Segera Dibuka</option>
						<option value="Ditutup">Ditutup</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Beasiswa Terbaru Header (±y 878 on 1536) -->
		<div class="terbaru-header">
			<div class="terbaru-text-col">
				<h3 class="terbaru-title">Beasiswa Terbaru</h3>
				<p class="terbaru-sub">Informasi beasiswa terbaru dari berbagai penyelenggara terpercaya.</p>
			</div>
			<button type="button" class="terbaru-link-btn" onclick={resetFilters}>
				<span>Lihat Semua Beasiswa</span>
				<span class="link-arrow">→</span>
			</button>
		</div>

		<!-- 4 Cards Grid (x ±75→1467, gap ±16px, height ±500px, radius ±15px) -->
		<div class="sch-cards-grid">
			{#if filteredScholarships.length === 0}
				<div class="no-sch-box">
					<p class="no-sch-title">Tidak ada beasiswa yang cocok dengan filter yang dipilih.</p>
					<p class="no-sch-sub">Coba sesuaikan kata kunci atau atur ulang pilihan filter di atas.</p>
					<button type="button" class="btn-reset-filters" onclick={resetFilters}>
						Atur Ulang Filter
					</button>
				</div>
			{:else}
				{#each filteredScholarships as sch (sch.id)}
					<div class="sch-card">
						<!-- Card Thumbnail with Scope Pill & Bookmark Toggle -->
						<div class="sch-thumb-wrap">
							<img
								src={sch.image}
								alt={sch.nama}
								class="sch-thumb"
								loading="lazy"
							/>
							<div class="sch-scope-pill">{sch.cakupan}</div>
							<button
								type="button"
								class="bookmark-btn {bookmarked[sch.id] ? 'is-active' : ''}"
								onclick={() => toggleBookmark(sch.id)}
								aria-label="Simpan beasiswa {sch.nama}"
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill={bookmarked[sch.id] ? '#F5B331' : 'none'} stroke={bookmarked[sch.id] ? '#F5B331' : '#FFFFFF'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
								</svg>
							</button>
						</div>

						<!-- Card Body -->
						<div class="sch-card-body">
							<!-- Title (bold ±20px) -->
							<h4 class="sch-name">{sch.nama}</h4>

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
								<span class="org-name">{sch.penyelenggara}</span>
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
									<span class="meta-text">{sch.jenjang}</span>
								</div>

								<!-- Negara -->
								<div class="meta-row-item">
									<div class="meta-icon-teal" aria-hidden="true">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
											<circle cx="12" cy="10" r="3"></circle>
										</svg>
									</div>
									<span class="meta-text">{sch.negara}</span>
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
									<span class="meta-text">{sch.pendanaan}</span>
								</div>
							</div>

							<!-- Bottom Block Aligned across cards (margin-top: auto) -->
							<div class="sch-card-footer">
								<div class="meta-badge-row">
									<span class="soft-gold-badge">{sch.kategori}</span>
									<span class="updated-date">{sch.updatedAt}</span>
								</div>
								<a href="/beasiswa/{sch.id}" class="detail-action-link">
									<span>Lihat Detail</span>
									<span class="arrow-glyph" aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Disclaimer (2 lines italic tipis ±13px) -->
		<div class="disclaimer-wrap">
			<p class="disclaimer-text">
				*{scholarshipDisclaimer}
			</p>
		</div>
	</div>
</section>

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

	/* Wide Search Input (Height ±50px, pill shape, navy round button) */
	.wide-search-bar {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 999px;
		height: 50px;
		padding: 3px 4px 3px 18px;
		box-shadow: 0 2px 10px rgba(11, 39, 71, 0.04);
		margin-top: 0.75rem;
		margin-bottom: 0.85rem;
		box-sizing: border-box;
	}

	.search-input-wrap {
		display: flex;
		align-items: center;
		gap: 12px;
		flex: 1;
		height: 100%;
	}

	.search-text-input {
		flex: 1;
		border: none;
		outline: none;
		background: transparent;
		font-size: 14px;
		color: #082442;
	}

	.search-text-input::placeholder {
		color: #94A3B8;
	}

	.btn-search-round {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #0B2747;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		flex-shrink: 0;
		transition: background 0.2s ease;
	}

	.btn-search-round:hover {
		background: #00A6B2;
	}

	/* 5 Filters Row (Equal width, gap ±16px, bold label above) */
	.filters-row {
		display: flex;
		align-items: flex-end;
		gap: 16px;
		margin-bottom: 1.15rem;
		width: 100%;
	}

	.filter-group {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
	}

	.filter-lbl {
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
		margin-bottom: 5px;
	}

	.select-wrapper {
		position: relative;
		width: 100%;
	}

	/* Custom select: appearance none, white, border tipis, radius ±12px, tinggi ±50px, chevron navy */
	.filter-select {
		width: 100%;
		height: 48px;
		background-color: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		padding: 0 38px 0 16px;
		font-size: 13.5px;
		font-weight: 500;
		color: #082442;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		outline: none;
		cursor: pointer;
		box-sizing: border-box;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23082442' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 14px center;
		transition: border-color 0.2s ease;
	}

	.filter-select:focus {
		border-color: #00A6B2;
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
		.filters-row {
			flex-wrap: wrap;
		}
		.filter-group {
			flex: 1 1 calc(33.333% - 16px);
		}
		.sch-cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.sch-search-section {
			padding: 2rem 0;
		}
		.filter-group {
			flex: 1 1 100%;
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
