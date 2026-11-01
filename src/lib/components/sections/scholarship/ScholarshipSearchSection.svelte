<script lang="ts">
	import { scholarshipsData, scholarshipDisclaimer, type Scholarship } from '#lib/data/scholarships';

	let searchQuery = $state('');
	let selectedCategory = $state('Semua Kategori');
	let selectedJenjang = $state('Semua Jenjang');
	let selectedNegara = $state('Semua Negara');
	let selectedPendanaan = $state('Semua Jenis');
	let selectedStatus = $state('Semua Status');

	let filteredScholarships = $derived(
		scholarshipsData.filter((sch) => {
			const matchQuery =
				searchQuery.trim() === '' ||
				sch.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
				sch.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase()) ||
				sch.negara.toLowerCase().includes(searchQuery.toLowerCase()) ||
				sch.jenjang.toLowerCase().includes(searchQuery.toLowerCase());

			const matchCat =
				selectedCategory === 'Semua Kategori' || sch.kategori === selectedCategory;

			const matchJenjang =
				selectedJenjang === 'Semua Jenjang' || sch.jenjang.includes(selectedJenjang);

			const matchNegara =
				selectedNegara === 'Semua Negara' ||
				(selectedNegara === 'Dalam Negeri' && sch.cakupan === 'Dalam Negeri') ||
				(selectedNegara === 'Luar Negeri' && sch.cakupan === 'Luar Negeri') ||
				sch.negara.includes(selectedNegara);

			const matchPendanaan =
				selectedPendanaan === 'Semua Jenis' || sch.jenisPendanaan === selectedPendanaan;

			const matchStatus =
				selectedStatus === 'Semua Status' || sch.status === selectedStatus;

			return (
				matchQuery && matchCat && matchJenjang && matchNegara && matchPendanaan && matchStatus
			);
		})
	);
</script>

<section id="cari-beasiswa" class="sch-search-section">
	<div class="sch-search-container">
		<!-- Section Header -->
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

		<!-- Wide Search Input -->
		<div class="wide-search-bar">
			<div class="search-input-wrap">
				<svg class="search-icon-left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
				<input
					type="text"
					placeholder="Cari nama beasiswa, penyelenggara, atau kata kunci..."
					bind:value={searchQuery}
					class="search-text-input"
				/>
			</div>
			<button type="button" class="btn-search-round" aria-label="Cari Beasiswa">
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
			</button>
		</div>

		<!-- 5 Dropdown Filters -->
		<div class="filters-row">
			<div class="filter-group">
				<label for="filter-cat" class="filter-lbl">Kategori</label>
				<select id="filter-cat" bind:value={selectedCategory} class="filter-select">
					<option value="Semua Kategori">Semua Kategori</option>
					<option value="Pemerintah">Pemerintah</option>
					<option value="Universitas">Universitas</option>
					<option value="Lembaga Internasional">Lembaga Internasional</option>
					<option value="Swasta">Swasta</option>
					<option value="Daerah">Daerah</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="filter-jenjang" class="filter-lbl">Jenjang Pendidikan</label>
				<select id="filter-jenjang" bind:value={selectedJenjang} class="filter-select">
					<option value="Semua Jenjang">Semua Jenjang</option>
					<option value="S1">S1 (Sarjana)</option>
					<option value="S2">S2 (Master)</option>
					<option value="S3">S3 (Doktoral)</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="filter-negara" class="filter-lbl">Negara Tujuan</label>
				<select id="filter-negara" bind:value={selectedNegara} class="filter-select">
					<option value="Semua Negara">Semua Negara</option>
					<option value="Dalam Negeri">Dalam Negeri</option>
					<option value="Luar Negeri">Luar Negeri</option>
					<option value="Inggris">Inggris</option>
					<option value="Jepang">Jepang</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="filter-pendanaan" class="filter-lbl">Jenis Pendanaan</label>
				<select id="filter-pendanaan" bind:value={selectedPendanaan} class="filter-select">
					<option value="Semua Jenis">Semua Jenis</option>
					<option value="Fully Funded">Fully Funded</option>
					<option value="Partial Funded">Partial Funded</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="filter-status" class="filter-lbl">Status Pendaftaran</label>
				<select id="filter-status" bind:value={selectedStatus} class="filter-select">
					<option value="Semua Status">Semua Status</option>
					<option value="Buka">Buka</option>
					<option value="Segera Dibuka">Segera Dibuka</option>
					<option value="Ditutup">Ditutup</option>
				</select>
			</div>
		</div>

		<!-- Beasiswa Terbaru Header -->
		<div class="terbaru-header">
			<div class="terbaru-text-col">
				<h3 class="terbaru-title">Beasiswa Terbaru</h3>
				<p class="terbaru-sub">Informasi beasiswa terbaru dari berbagai penyelenggara terpercaya.</p>
			</div>
			<a href="#cari-beasiswa" class="terbaru-link">
				<span>Lihat Semua Beasiswa</span>
				<span class="link-arrow">→</span>
			</a>
		</div>

		<!-- 4 Cards Grid -->
		<div class="sch-cards-grid">
			{#if filteredScholarships.length === 0}
				<div class="no-sch">
					<p>Tidak ada beasiswa yang sesuai dengan kriteria pencarian Anda.</p>
				</div>
			{:else}
				{#each filteredScholarships as sch}
					<div class="sch-card">
						<div class="sch-thumb-wrap">
							<img src={sch.image} alt={sch.nama} class="sch-thumb" loading="lazy" />
							<div class="sch-scope-pill">{sch.cakupan}</div>
							<button type="button" class="bookmark-btn" aria-label="Simpan beasiswa">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
								</svg>
							</button>
						</div>

						<div class="sch-card-body">
							<h4 class="sch-name">{sch.nama}</h4>

							<div class="sch-info-list">
								<!-- Penyelenggara -->
								<div class="info-item">
									<div class="info-icon">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
										</svg>
									</div>
									<span class="info-val">{sch.penyelenggara}</span>
								</div>

								<!-- Jenjang -->
								<div class="info-item">
									<div class="info-icon">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
											<line x1="16" y1="2" x2="16" y2="6"></line>
											<line x1="8" y1="2" x2="8" y2="6"></line>
										</svg>
									</div>
									<span class="info-val">{sch.jenjang}</span>
								</div>

								<!-- Negara -->
								<div class="info-item">
									<div class="info-icon">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="10"></circle>
											<line x1="2" y1="12" x2="22" y2="12"></line>
											<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
										</svg>
									</div>
									<span class="info-val">{sch.negara}</span>
								</div>

								<!-- Pendanaan -->
								<div class="info-item">
									<div class="info-icon">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="8" r="7"></circle>
											<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
										</svg>
									</div>
									<span class="info-val">{sch.pendanaan}</span>
								</div>
							</div>

							<!-- Card Footer / Meta -->
							<div class="sch-card-footer">
								<div class="badge-updated-wrap">
									<span class="gov-badge">{sch.kategori}</span>
									<span class="update-text">{sch.updatedAt}</span>
								</div>
								<a href="#kontak" class="sch-detail-link">
									<span>Lihat Detail</span>
									<span class="link-arrow">→</span>
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Disclaimer -->
		<div class="disclaimer-wrap">
			<p class="disclaimer-text">
				<span class="disclaimer-star">*</span>
				{scholarshipDisclaimer}
			</p>
		</div>
	</div>
</section>

<style>
	.sch-search-section {
		background: #FFFFFF;
		padding: 2.5rem 0 3rem;
	}

	.sch-search-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.search-header {
		margin-bottom: 1.5rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: 22px;
		line-height: 28px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.45rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #556B82;
		margin: 0;
		max-width: 700px;
	}

	/* Wide Search Input Bar */
	.wide-search-bar {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 30px;
		padding: 4px 6px 4px 16px;
		margin-bottom: 1.25rem;
		box-shadow: 0 2px 10px rgba(8, 36, 66, 0.04);
	}

	.search-input-wrap {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.search-icon-left {
		flex-shrink: 0;
	}

	.search-text-input {
		flex: 1;
		border: none;
		background: transparent;
		font-size: 11.5px;
		color: #082442;
		outline: none;
	}

	.search-text-input::placeholder {
		color: #94A3B8;
	}

	.btn-search-round {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #082442;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		flex-shrink: 0;
		transition: background 0.2s;
	}

	.btn-search-round:hover {
		background: #00A6B2;
	}

	/* 5 Filters Row */
	.filters-row {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.85rem;
		margin-bottom: 2.5rem;
	}

	.filter-group {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.filter-lbl {
		font-size: 9.5px;
		font-weight: 700;
		color: #082442;
	}

	.filter-select {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 8px;
		padding: 7px 10px;
		font-size: 10.5px;
		color: #334155;
		font-weight: 500;
		outline: none;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.filter-select:focus {
		border-color: #00A6B2;
	}

	/* Terbaru Header */
	.terbaru-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.terbaru-title {
		font-size: 18px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.35rem 0;
	}

	.terbaru-sub {
		font-size: 11px;
		color: #64748B;
		margin: 0;
	}

	.terbaru-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s;
	}

	.terbaru-link:hover {
		color: #082442;
	}

	/* 4 Cards Grid */
	.sch-cards-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.no-sch {
		grid-column: 1 / -1;
		padding: 3rem 1rem;
		text-align: center;
		color: #64748B;
		font-size: 12px;
	}

	.sch-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.04);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.sch-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.1);
	}

	.sch-thumb-wrap {
		position: relative;
		width: 100%;
		height: 115px;
	}

	.sch-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.sch-scope-pill {
		position: absolute;
		top: 8px;
		left: 8px;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(4px);
		color: #082442;
		font-size: 8.5px;
		font-weight: 700;
		padding: 2px 7px;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}

	.bookmark-btn {
		position: absolute;
		top: 8px;
		right: 8px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: rgba(8, 36, 66, 0.55);
		backdrop-filter: blur(4px);
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s;
	}

	.bookmark-btn:hover {
		background: #00A6B2;
	}

	.sch-card-body {
		padding: 1rem 0.85rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.sch-name {
		font-size: 11.5px;
		font-weight: 800;
		color: #082442;
		line-height: 15px;
		margin: 0 0 0.85rem 0;
		min-height: 30px;
	}

	.sch-info-list {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 1rem;
		flex: 1;
	}

	.info-item {
		display: flex;
		align-items: flex-start;
		gap: 6px;
	}

	.info-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.info-val {
		font-size: 9px;
		line-height: 13px;
		color: #475569;
		font-weight: 500;
	}

	.sch-card-footer {
		padding-top: 0.65rem;
		border-top: 1px solid #F1F5F9;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.badge-updated-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.gov-badge {
		background: rgba(244, 179, 52, 0.18);
		color: #B4780D;
		font-size: 8px;
		font-weight: 700;
		padding: 1px 6px;
		border-radius: 4px;
	}

	.update-text {
		font-size: 8px;
		color: #94A3B8;
	}

	.sch-detail-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		color: #00A6B2;
		font-size: 9.5px;
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s;
		align-self: flex-start;
		margin-top: 2px;
	}

	.sch-detail-link:hover {
		color: #082442;
	}

	.link-arrow {
		font-size: 10px;
		transition: transform 0.2s;
	}

	.sch-detail-link:hover .link-arrow {
		transform: translateX(2px);
	}

	/* Disclaimer */
	.disclaimer-wrap {
		padding: 0.75rem 0.5rem;
	}

	.disclaimer-text {
		font-size: 9px;
		line-height: 14px;
		color: #8C9CAE;
		margin: 0;
		font-style: italic;
	}

	.disclaimer-star {
		color: #00A6B2;
		font-weight: 700;
	}

	@media (max-width: 1024px) {
		.filters-row {
			grid-template-columns: repeat(3, 1fr);
		}
		.sch-cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.filters-row {
			grid-template-columns: 1fr;
		}
		.sch-cards-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
