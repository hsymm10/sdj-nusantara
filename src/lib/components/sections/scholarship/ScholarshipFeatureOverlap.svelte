<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<div class="sch-feature-overlap-wrap">
	<div class="sch-feature-container">
		<div class="feature-card">
			<!-- Column 1: Informasi Terpercaya -->
			<div class="feature-col">
				<div class="feature-icon" aria-hidden="true">
					<svg class="feat-icon-svg" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#00A6B2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
						<rect x="5" y="13" width="34" height="25" rx="5" ry="5"></rect>
						<path d="M15 13V9a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 29 9v4"></path>
						<path d="M5 22h12l5 5 5-5h12"></path>
					</svg>
				</div>
				<div class="feature-text">
					{@html i18n.pick('Informasi<br />Terpercaya', 'Trusted<br />Information')}
				</div>
			</div>

			<div class="v-divider" aria-hidden="true"></div>

			<!-- Column 2: Dalam & Luar Negeri -->
			<div class="feature-col">
				<div class="feature-icon" aria-hidden="true">
					<svg class="feat-icon-svg" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#00A6B2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="22" cy="22" r="17"></circle>
						<line x1="5" y1="22" x2="39" y2="22"></line>
						<ellipse cx="22" cy="22" rx="8.5" ry="17"></ellipse>
						<path d="M9 13.5c4-2 8.5-3 13-3s9 1 13 3"></path>
						<path d="M9 30.5c4 2 8.5 3 13 3s9-1 13-3"></path>
					</svg>
				</div>
				<div class="feature-text">
					{i18n.pick('Dalam & Luar Negeri', 'Domestic & International')}
				</div>
			</div>

			<div class="v-divider" aria-hidden="true"></div>

			<!-- Column 3: Beragam Jenjang Pendidikan -->
			<div class="feature-col">
				<div class="feature-icon" aria-hidden="true">
					<svg class="feat-icon-svg" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#00A6B2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
						<path d="M10 7h15l9 9v21a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4z"></path>
						<path d="M25 7v9h9"></path>
						<line x1="12" y1="21" x2="24" y2="21"></line>
						<line x1="12" y1="26" x2="31" y2="26"></line>
						<line x1="12" y1="31" x2="27" y2="31"></line>
						<line x1="12" y1="36" x2="20" y2="36"></line>
					</svg>
				</div>
				<div class="feature-text">
					{@html i18n.pick('Beragam Jenjang<br />Pendidikan', 'All Education<br />Levels')}
				</div>
			</div>

			<div class="v-divider" aria-hidden="true"></div>

			<!-- Column 4: Panduan & Pendampingan Profesional -->
			<div class="feature-col">
				<div class="feature-icon" aria-hidden="true">
					<svg class="feat-icon-svg" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#00A6B2" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="22" cy="14" r="5"></circle>
						<path d="M11 37v-3a7 7 0 0 1 7-7h8a7 7 0 0 1 7 7v3"></path>
						<circle cx="10" cy="17" r="4"></circle>
						<path d="M4 35v-1a5 5 0 0 1 5-5h2"></path>
						<circle cx="34" cy="17" r="4"></circle>
						<path d="M33 29h2a5 5 0 0 1 5 5v1"></path>
					</svg>
				</div>
				<div class="feature-text">
					{@html i18n.pick('Panduan &amp; Pendampingan<br />Profesional', 'Professional Guidance<br />&amp; Mentoring')}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.sch-feature-overlap-wrap {
		position: relative;
		z-index: 10;
		margin-top: -12px; /* Overlap hero <= 14px */
		margin-bottom: 2.5rem;
		width: 100%;
	}

	/* Container: x 95→1445 on 1536 (width 1350px inside 1380px container with 15px padding) */
	.sch-feature-container {
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 15px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-feature-container {
			max-width: 1500px;
		}
	}

	.feature-card {
		background: #FFFFFF;
		border-radius: 21px;
		height: 95px;
		box-shadow: 0 10px 30px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.85);
		display: flex;
		align-items: center;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	.feature-col {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 16px;
		padding-left: 28px;
		padding-right: 12px;
		box-sizing: border-box;
	}

	.feature-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 44px;
		height: 44px;
	}

	.feat-icon-svg {
		display: block;
		width: 44px;
		height: 44px;
	}

	/* Text: 2 lines navy ±17px, font-weight 700 */
	.feature-text {
		font-size: clamp(14px, 1.15vw, 16.5px);
		font-weight: 700;
		color: #082442;
		line-height: 1.25;
	}

	.v-divider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.feature-card {
			height: auto;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			padding: 1.25rem 1rem;
			gap: 1.25rem 1rem;
		}
		.feature-col {
			padding: 0.25rem 0.5rem;
		}
		.v-divider {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.sch-feature-overlap-wrap {
			margin-top: 1rem;
			margin-bottom: 1.5rem;
		}
		.feature-card {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem 0.75rem;
			border-radius: 16px;
			padding: 1.15rem 0.85rem;
		}
		.feature-col {
			padding: 0.25rem;
			gap: 10px;
		}
		.feat-icon-svg {
			width: 32px;
			height: 32px;
		}
		.feature-text {
			font-size: 13.5px;
			line-height: 1.25;
		}
	}
</style>
