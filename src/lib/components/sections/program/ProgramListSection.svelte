<script lang="ts">
	interface ProgramItem {
		id: string;
		category: string;
		title: string;
		desc: string;
		duration: string;
		target: string;
		image: string;
	}

	const allPrograms: ProgramItem[] = [
		{
			id: 'p1',
			category: 'Persiapan Beasiswa',
			title: 'Program Persiapan Beasiswa Dalam Negeri',
			desc: 'Pendampingan lengkap mulai dari pemilihan beasiswa, penyusunan dokumen, hingga simulasi wawancara.',
			duration: '8–12 Minggu',
			target: 'Siswa & Mahasiswa',
			image: '/images/prog-card-1.jpg'
		},
		{
			id: 'p2',
			category: 'Persiapan Beasiswa',
			title: 'Program Persiapan Beasiswa Luar Negeri',
			desc: 'Bimbingan intensif untuk pendaftaran beasiswa ke berbagai negara dengan pendekatan strategis dan terarah.',
			duration: '12–16 Minggu',
			target: 'Siswa, Mahasiswa, Fresh Graduate',
			image: '/images/prog-card-2.jpg'
		},
		{
			id: 'p3',
			category: 'Keterampilan Digital',
			title: 'Program Pelatihan Keterampilan Digital',
			desc: 'Pelatihan keterampilan digital yang relevan dengan industri dan kebutuhan dunia kerja.',
			duration: '4–12 Minggu',
			target: 'Pelajar, Mahasiswa, Profesional Muda',
			image: '/images/prog-card-3.jpg'
		},
		{
			id: 'p4',
			category: 'Manajemen Talenta',
			title: 'Program Pengembangan Talenta',
			desc: 'Pengembangan potensi individu melalui asesmen, mentoring, dan perencanaan karier.',
			duration: '8–12 Minggu',
			target: 'Pelajar & Mahasiswa',
			image: '/images/prog-card-4.jpg'
		},
		{
			id: 'p5',
			category: 'Pelatihan Khusus',
			title: 'Program Pelatihan Khusus',
			desc: 'Program tematik sesuai kebutuhan instansi, sekolah, atau organisasi dengan materi yang dapat disesuaikan.',
			duration: '4–8 Minggu',
			target: 'Institusi & Organisasi',
			image: '/images/prog-card-5.jpg'
		}
	];

	const tabs = [
		'Semua Program',
		'Persiapan Beasiswa',
		'Manajemen Talenta',
		'Keterampilan Digital',
		'Kolaborasi Kelembagaan',
		'Pelatihan Khusus'
	];

	let activeTab = $state('Semua Program');
	let searchQuery = $state('');

	let filteredPrograms = $derived(
		allPrograms.filter((prog) => {
			const matchTab = activeTab === 'Semua Program' || prog.category === activeTab;
			const matchQuery =
				searchQuery.trim() === '' ||
				prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				prog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
				prog.category.toLowerCase().includes(searchQuery.toLowerCase());
			return matchTab && matchQuery;
		})
	);
</script>

<section id="daftar-program" class="program-list-section">
	<div class="list-container">
		<!-- Header row: Title & Search -->
		<div class="header-row">
			<div class="title-col">
				<div class="section-label">
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
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Filter Tabs Bar -->
		<div class="tabs-bar">
			{#each tabs as tab}
				<button
					type="button"
					class="tab-btn {activeTab === tab ? 'active-tab' : ''}"
					onclick={() => (activeTab = tab)}
				>
					{tab}
				</button>
			{/each}
		</div>

		<!-- Cards Grid (5 cards) -->
		<div class="cards-grid">
			{#if filteredPrograms.length === 0}
				<div class="no-results">
					<p>Tidak ada program yang sesuai dengan filter atau kata kunci pencarian.</p>
				</div>
			{:else}
				{#each filteredPrograms as prog}
					<div class="prog-card">
						<div class="card-thumb-wrap">
							<img src={prog.image} alt={prog.title} class="card-thumb" loading="lazy" />
							<div class="category-chip">{prog.category}</div>
						</div>

						<div class="card-body">
							<h3 class="prog-title">{prog.title}</h3>
							<p class="prog-summary">{prog.desc}</p>

							<div class="prog-meta-list">
								<div class="meta-line">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<polyline points="12 6 12 12 16 14"></polyline>
									</svg>
									<span>{prog.duration}</span>
								</div>
								<div class="meta-line">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
									<span>{prog.target}</span>
								</div>
							</div>

							<a href="#kontak" class="card-detail-link">
								<span>Lihat Detail</span>
								<span class="link-arrow">→</span>
							</a>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>

<style>
	.program-list-section {
		background: #FFFFFF;
		padding: 2.5rem 0 3.5rem;
	}

	.list-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.header-row {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.title-col {
		max-width: 620px;
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
		margin: 0 0 0.5rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #556B82;
		margin: 0;
	}

	.search-col {
		flex-shrink: 0;
	}

	.search-box {
		display: flex;
		align-items: center;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 30px;
		padding: 3px 4px 3px 14px;
		width: 210px;
	}

	.search-input {
		flex: 1;
		border: none;
		background: transparent;
		font-size: 11px;
		color: #0F172A;
		outline: none;
	}

	.search-input::placeholder {
		color: #94A3B8;
	}

	.search-btn {
		width: 26px;
		height: 26px;
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

	.search-btn:hover {
		background: #00A6B2;
	}

	/* Filter Tabs Bar */
	.tabs-bar {
		display: flex;
		align-items: center;
		gap: 6px;
		background: #F1F5F9;
		padding: 4px;
		border-radius: 8px;
		margin-bottom: 2rem;
		overflow-x: auto;
	}

	.tab-btn {
		background: transparent;
		border: none;
		padding: 6px 14px;
		font-size: 10.5px;
		font-weight: 600;
		color: #475569;
		border-radius: 6px;
		cursor: pointer;
		white-space: nowrap;
		transition: all 0.2s ease;
	}

	.tab-btn:hover {
		color: #082442;
	}

	.tab-btn.active-tab {
		background: #082442;
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 2px 6px rgba(8, 36, 66, 0.15);
	}

	/* Cards Grid */
	.cards-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.85rem;
	}

	.no-results {
		grid-column: 1 / -1;
		padding: 3rem 1rem;
		text-align: center;
		color: #64748B;
		font-size: 12px;
	}

	.prog-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.04);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.prog-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.1);
	}

	.card-thumb-wrap {
		position: relative;
		width: 100%;
		height: 110px;
	}

	.card-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.category-chip {
		position: absolute;
		top: 8px;
		left: 8px;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(4px);
		color: #082442;
		font-size: 8px;
		font-weight: 700;
		padding: 2px 7px;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}

	.card-body {
		padding: 0.85rem 0.75rem 0.9rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.prog-title {
		font-size: 11px;
		font-weight: 800;
		color: #082442;
		line-height: 15px;
		margin: 0 0 0.45rem 0;
		min-height: 30px;
	}

	.prog-summary {
		font-size: 9.5px;
		line-height: 14px;
		color: #64748B;
		margin: 0 0 0.85rem 0;
		flex: 1;
	}

	.prog-meta-list {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-top: 0.5rem;
		border-top: 1px solid #F1F5F9;
		margin-bottom: 0.75rem;
	}

	.meta-line {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 8.5px;
		color: #475569;
		font-weight: 600;
	}

	.card-detail-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		color: #00A6B2;
		font-size: 9.5px;
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s;
	}

	.card-detail-link:hover {
		color: #082442;
	}

	.link-arrow {
		font-size: 10px;
		transition: transform 0.2s;
	}

	.card-detail-link:hover .link-arrow {
		transform: translateX(2px);
	}

	@media (max-width: 1024px) {
		.cards-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
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
	}
</style>
