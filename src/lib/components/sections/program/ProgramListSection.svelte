<script lang="ts">
	// ProgramListSection.svelte - Replikasi presisi sesuai design/program.png
	import { programsData, type ProgramItem } from '#lib/data/programs';

	interface Props {
		activeCategory?: string;
		onCategoryChange?: (cat: string) => void;
	}

	let { activeCategory = 'Semua Program', onCategoryChange }: Props = $props();

	const tabs = [
		'Semua Program',
		'Persiapan Beasiswa',
		'Manajemen Talenta',
		'Keterampilan Digital',
		'Kolaborasi Kelembagaan',
		'Pelatihan Khusus'
	];

	let searchQuery = $state('');

	function setTab(tab: string) {
		activeCategory = tab;
		if (onCategoryChange) onCategoryChange(tab);
	}

	let filteredPrograms = $derived(
		programsData.filter((prog) => {
			const matchTab = activeCategory === 'Semua Program' || prog.category === activeCategory;
			const q = searchQuery.trim().toLowerCase();
			const matchQuery =
				q === '' ||
				prog.title.toLowerCase().includes(q) ||
				prog.desc.toLowerCase().includes(q) ||
				prog.category.toLowerCase().includes(q);
			return matchTab && matchQuery;
		})
	);
</script>

<section id="daftar-program" class="program-list-section">
	<div class="list-container">
		<!-- Header row: Title & Search (x 82→1452) -->
		<div class="header-row">
			<div class="title-col">
				<div class="program-section-label">
					<span class="label-dash">—</span>
					<span class="label-text">Daftar Program</span>
				</div>
				<h2 class="section-title">Temukan Program yang Sesuai dengan Kebutuhan Anda</h2>
				<p class="section-desc">
					Berbagai program kami dirancang untuk mendukung perjalanan pendidikan dan pengembangan talenta Anda.
				</p>
			</div>

			<div class="search-col">
				<div class="search-box">
					<input
						type="text"
						placeholder="Cari program..."
						bind:value={searchQuery}
						class="search-input"
					/>
					<button type="button" class="search-btn" aria-label="Cari">
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Filter Tabs Bar (x 82→1452, tinggi ±50px) -->
		<div class="tabs-bar">
			{#each tabs as tab, idx}
				{#if idx > 0}
					<div class="tab-vdivider"></div>
				{/if}
				<button
					type="button"
					class="tab-btn {activeCategory === tab ? 'active-tab' : ''}"
					onclick={() => setTab(tab)}
				>
					{tab}
				</button>
			{/each}
		</div>

		<!-- Cards Grid (x 37→1500, tinggi ±458px) -->
		<div class="cards-grid-wrap">
			{#if activeCategory === 'Kolaborasi Kelembagaan' || filteredPrograms.length === 0}
				<div class="empty-state-card">
					<div class="empty-icon-wrap">
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path>
							<path d="M9 9v.01M9 13v.01M9 17v.01"></path>
						</svg>
					</div>
					<h3 class="empty-title">Belum ada program pada kategori ini.</h3>
					<p class="empty-desc">
						Diskusikan kebutuhan program kolaborasi khusus institusi Anda bersama tim kami.
					</p>
					<a href="/konsultasi" class="empty-btn-gold">
						<span>Konsultasikan Kebutuhan Anda</span>
						<span>→</span>
					</a>
				</div>
			{:else}
				<div class="cards-grid">
					{#each filteredPrograms as prog}
						<div class="prog-card">
							<!-- Top Photo with Category Chip (tinggi ±186px, ±40% kartu) -->
							<div class="card-thumb-wrap">
								<img src={prog.image} alt={prog.title} class="card-thumb" loading="lazy" />
								<div class="category-chip">{prog.category}</div>
							</div>

							<!-- Body -->
							<div class="card-body">
								<h3 class="prog-title">{prog.title}</h3>
								<p class="prog-summary">{prog.desc}</p>

								<!-- Meta Block at bottom (margin-top: auto) -->
								<div class="card-bottom-meta">
									<div class="meta-line">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="10"></circle>
											<polyline points="12 6 12 12 16 14"></polyline>
										</svg>
										<span>{prog.duration}</span>
									</div>

									<div class="meta-line">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
										<span>{prog.target}</span>
									</div>

									<a href="/layanan/pendidikan/program/{prog.slug}" class="detail-link">
										<span>Lihat Detail</span>
										<span class="detail-arrow">→</span>
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Content Compliance Note -->
			<div class="indicative-note">
				<p>Durasi bersifat indikatif dan dapat disesuaikan berdasarkan kurikulum serta kesepakatan layanan.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.program-list-section {
		background: #FFFFFF;
		width: 100%;
		padding: 12px 0 15px;
		box-sizing: border-box;
	}

	.list-container {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.list-container {
			max-width: 1500px;
		}
	}

	/* Header Row */
	.header-row {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 0.9rem;
	}

	.program-section-label {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 14.5px;
		font-weight: 600;
		text-transform: none;
		letter-spacing: normal;
		margin-bottom: 0.35rem;
	}

	.label-dash {
		font-weight: 700;
	}

	.section-title {
		font-size: clamp(20px, 1.8vw, 25px);
		line-height: 1.2;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.35rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 13px;
		line-height: 1.45;
		color: #475569;
		margin: 0;
	}

	/* Search Col */
	.search-box {
		position: relative;
		display: flex;
		align-items: center;
		width: 290px;
		height: 46px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 24px;
		box-shadow: 0 2px 8px rgba(11, 39, 71, 0.04);
		padding: 0 4px 0 16px;
		box-sizing: border-box;
	}

	.search-input {
		flex: 1;
		border: none;
		outline: none;
		background: transparent;
		font-size: 12.5px;
		color: #082442;
	}

	.search-input::placeholder {
		color: #94A3B8;
	}

	.search-btn {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #0B2948;
		border: none;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s;
	}

	.search-btn:hover {
		background: #00A6B2;
	}

	/* Tabs Bar (tinggi ±50px, background #F4F8FB) */
	.tabs-bar {
		display: flex;
		align-items: center;
		height: 48px;
		background: #F4F8FB;
		border-radius: 14px;
		padding: 4px;
		box-sizing: border-box;
		margin-bottom: 1.0rem;
		overflow-x: auto;
	}

	.tab-btn {
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: transparent;
		color: #082442;
		font-size: 12.5px;
		font-weight: 500;
		cursor: pointer;
		border-radius: 10px;
		transition: all 0.2s;
		white-space: nowrap;
		padding: 0 10px;
	}

	.tab-btn:hover:not(.active-tab) {
		background: rgba(11, 41, 72, 0.05);
	}

	.tab-btn.active-tab {
		background: #0B2948;
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 2px 8px rgba(11, 41, 72, 0.2);
	}

	.tab-vdivider {
		width: 1px;
		height: 20px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	/* Cards Grid (5 columns, height ±458px) */
	.cards-grid-wrap {
		width: 100%;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 15px;
		margin-bottom: 0.85rem;
	}

	.prog-card {
		background: #FFFFFF;
		height: 458px;
		border-radius: 15px;
		border: 1px solid #E2E8F0;
		box-shadow: 0 6px 20px rgba(11, 39, 71, 0.06);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.prog-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 28px rgba(11, 39, 71, 0.12);
	}

	.card-thumb-wrap {
		position: relative;
		width: 100%;
		height: 186px;
		overflow: hidden;
	}

	.card-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.category-chip {
		position: absolute;
		top: 10px;
		left: 10px;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(4px);
		color: #082442;
		font-size: 11px;
		font-weight: 700;
		padding: 4px 10px;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}

	.card-body {
		flex: 1;
		padding: 14px 14px 16px;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.prog-title {
		font-size: 14.5px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		letter-spacing: -0.01em;
	}

	.prog-summary {
		font-size: 11.5px;
		line-height: 1.45;
		color: #183553;
		margin: 0 0 12px 0;
	}

	.card-bottom-meta {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding-top: 10px;
		border-top: 1px solid #F1F5F9;
	}

	.meta-line {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 11px;
		color: #475569;
		line-height: 1.25;
		white-space: nowrap;
	}

	.detail-link {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 12.5px;
		font-weight: 700;
		text-decoration: none;
		margin-top: 6px;
		transition: gap 0.2s;
	}

	.detail-link:hover {
		gap: 9px;
	}

	.detail-arrow {
		font-size: 13px;
	}

	/* Empty State */
	.empty-state-card {
		background: #F8FAFC;
		border-radius: 16px;
		border: 1px dashed #CBD5E1;
		padding: 3rem 1.5rem;
		text-align: center;
		margin-bottom: 1rem;
	}

	.empty-icon-wrap {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
	}

	.empty-title {
		font-size: 17px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
	}

	.empty-desc {
		font-size: 13.5px;
		color: #64748B;
		margin: 0 0 1.25rem 0;
	}

	.empty-btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		padding: 9px 20px;
		font-size: 13px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.25);
	}

	/* Indicative note */
	.indicative-note {
		margin-top: 10px;
		text-align: center;
	}

	.indicative-note p {
		font-size: 11px;
		color: #94A3B8;
		margin: 0;
		font-style: italic;
	}

	@media (max-width: 1200px) {
		.cards-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 800px) {
		.header-row {
			flex-direction: column;
			align-items: flex-start;
		}

		.search-box {
			width: 100%;
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}

		.prog-card {
			height: auto;
		}

		.card-thumb-wrap {
			height: 220px;
		}
	}
</style>
