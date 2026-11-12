<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	interface Props {
		onSelectCategory?: (cat: string) => void;
	}

	let { onSelectCategory }: Props = $props();

	const categories = $derived(
		i18n.lang === 'en'
			? [
					{
						categoryName: 'Pemerintah',
						title: 'Government Scholarships',
						sub: 'Domestic and international',
						icon: 'gov'
					},
					{
						categoryName: 'Universitas',
						title: 'University Scholarships',
						sub: 'Direct from campuses and educational institutions',
						icon: 'univ'
					},
					{
						categoryName: 'Lembaga Internasional',
						title: 'International Organization Scholarships',
						sub: 'Global and multilateral organizations',
						icon: 'intl'
					},
					{
						categoryName: 'Swasta',
						title: 'Private Scholarships',
						sub: 'Corporates and non-governmental organizations',
						icon: 'private'
					},
					{
						categoryName: 'Daerah',
						title: 'Regional Scholarships',
						sub: 'Provincial, regency, and municipal governments',
						icon: 'regional'
					}
				]
			: [
					{
						categoryName: 'Pemerintah',
						title: 'Beasiswa Pemerintah',
						sub: 'Dalam dan luar negeri',
						icon: 'gov'
					},
					{
						categoryName: 'Universitas',
						title: 'Beasiswa Universitas',
						sub: 'Langsung dari kampus dan institusi pendidikan',
						icon: 'univ'
					},
					{
						categoryName: 'Lembaga Internasional',
						title: 'Beasiswa Lembaga Internasional',
						sub: 'Organisasi global dan multilateral',
						icon: 'intl'
					},
					{
						categoryName: 'Swasta',
						title: 'Beasiswa Swasta',
						sub: 'Perusahaan dan organisasi non-pemerintah',
						icon: 'private'
					},
					{
						categoryName: 'Daerah',
						title: 'Beasiswa Daerah',
						sub: 'Pemerintah provinsi, kabupaten, dan kota',
						icon: 'regional'
					}
				]
	);

	function handleCategoryClick(catName: string) {
		if (onSelectCategory) {
			onSelectCategory(catName);
		}
		const el = document.getElementById('cari-beasiswa');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section class="sch-category-section">
	<div class="sch-cat-container">
		<!-- Section Header (±y 1722 on 1536) -->
		<div class="cat-header">
			<div class="section-label">
				<span class="label-dash">—</span>
				<span class="label-text">{i18n.pick('Jenis Beasiswa', 'Scholarship Types')}</span>
			</div>
			<h2 class="section-title">{i18n.pick('Jelajahi Beasiswa Berdasarkan Kategori', 'Explore Scholarships by Category')}</h2>
			<p class="section-desc">{i18n.pick('Pilih kategori yang paling sesuai dengan tujuan dan minat Anda.', 'Choose the category that best aligns with your goals and interests.')}</p>
		</div>

		<!-- 5 Cards in a Single Row (height ±105px, radius ±12px) -->
		<div class="cat-cards-grid">
			{#each categories as item}
				<button
					type="button"
					class="cat-card"
					onclick={() => handleCategoryClick(item.categoryName)}
				>
					<!-- Solid Teal Circle ±56px with icon -->
					<div class="cat-icon-circle" aria-hidden="true">
						{#if item.icon === 'gov'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 21h18"></path>
								<path d="M3 10h18"></path>
								<path d="M5 6l7-3 7 3"></path>
								<path d="M4 10v11"></path>
								<path d="M20 10v11"></path>
								<path d="M8 14v4"></path>
								<path d="M12 14v4"></path>
								<path d="M16 14v4"></path>
							</svg>
						{:else if item.icon === 'univ'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
								<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						{:else if item.icon === 'intl'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<line x1="2" y1="12" x2="22" y2="12"></line>
								<ellipse cx="12" cy="12" rx="4.5" ry="10"></ellipse>
							</svg>
						{:else if item.icon === 'private'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="8" width="18" height="13" rx="2" ry="2"></rect>
								<path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
								<path d="M3 13h18"></path>
							</svg>
						{:else}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
						{/if}
					</div>

					<!-- Text Block: Title bold ±15px, sub ±13px line-height >=1.35 -->
					<div class="cat-text-wrap">
						<h4 class="cat-item-title">{item.title}</h4>
						<p class="cat-item-sub">{item.sub}</p>
					</div>

					<!-- Outline Arrow Button ±30px -->
					<div class="cat-arrow-circle" aria-hidden="true">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.sch-category-section {
		background: #FFFFFF;
		padding: 0.85rem 0 0.95rem;
		width: 100%;
	}

	/* Container: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-cat-container {
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-cat-container {
			max-width: 1500px;
		}
	}

	.cat-header {
		margin-bottom: 0.85rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(22px, 1.85vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.4rem 0;
	}

	.section-desc {
		font-size: 14px;
		color: #475569;
		margin: 0;
	}

	/* 5 Cards Row */
	.cat-cards-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 14px;
		width: 100%;
	}

	.cat-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		height: 105px;
		padding: 0 14px;
		box-shadow: 0 2px 10px rgba(11, 39, 71, 0.04);
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		text-align: left;
		box-sizing: border-box;
		transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.cat-card:hover {
		transform: translateY(-2px);
		border-color: #00A6B2;
		box-shadow: 0 6px 18px rgba(0, 166, 178, 0.12);
	}

	/* Solid Teal Circle ±56px */
	.cat-icon-circle {
		width: 54px;
		height: 54px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.cat-text-wrap {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4px;
	}

	.cat-item-title {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.25;
		margin: 0;
	}

	.cat-item-sub {
		font-size: 12px;
		line-height: 1.38;
		color: #64748B;
		margin: 0;
	}

	/* Outline Arrow Circle ±30px */
	.cat-arrow-circle {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1.5px solid #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.cat-card:hover .cat-arrow-circle {
		background: #00A6B2;
	}

	.cat-card:hover .cat-arrow-circle svg {
		stroke: #FFFFFF;
	}

	@media (max-width: 1280px) {
		.cat-cards-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 900px) {
		.cat-cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.cat-cards-grid {
			grid-template-columns: 1fr;
		}
		.cat-card {
			height: auto;
			min-height: 64px;
			padding: 0.85rem 1rem;
		}
	}
</style>
