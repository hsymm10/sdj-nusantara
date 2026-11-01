<script lang="ts">
	// ServicesStatsOverlap.svelte - Overlapping 5 horizontal service items
</script>

<div class="stats-overlap-wrap">
	<div class="stats-overlap-container">
		<div class="stats-card">
			<!-- Item 01 -->
			<div class="service-item">
				<div class="service-icon">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="9" cy="7" r="4"></circle>
						<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">01</span>
					<span class="service-title">Talent Management &amp; Development Center</span>
				</div>
			</div>

			<div class="vdivider"></div>

			<!-- Item 02 -->
			<div class="service-item">
				<div class="service-icon">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 20.66l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65z"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">02</span>
					<span class="service-title">Scholarship Academy</span>
				</div>
			</div>

			<div class="vdivider"></div>

			<!-- Item 03 -->
			<div class="service-item">
				<div class="service-icon">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
						<line x1="16" y1="2" x2="16" y2="6"></line>
						<line x1="8" y1="2" x2="8" y2="6"></line>
						<line x1="3" y1="10" x2="21" y2="10"></line>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">03</span>
					<span class="service-title">Skills Development &amp; Certification</span>
				</div>
			</div>

			<div class="vdivider"></div>

			<!-- Item 04 -->
			<div class="service-item">
				<div class="service-icon">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
						<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">04</span>
					<span class="service-title">Institutional &amp; Strategic Partnership</span>
				</div>
			</div>

			<div class="vdivider"></div>

			<!-- Item 05 -->
			<div class="service-item">
				<div class="service-icon">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
						<line x1="8" y1="21" x2="16" y2="21"></line>
						<line x1="12" y1="17" x2="12" y2="21"></line>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">05</span>
					<span class="service-title">Digital Education &amp; Learning Platform</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.stats-overlap-wrap {
		position: relative;
		z-index: 10;
		margin-top: -32px;
		margin-bottom: 2rem;
	}

	.stats-overlap-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.stats-card {
		background: #FFFFFF;
		border-radius: 14px;
		box-shadow: 0 8px 30px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.8);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.5rem;
	}

	.service-item {
		display: flex;
		align-items: center;
		gap: 10px;
		flex: 1;
		padding: 0 0.5rem;
	}

	.service-icon {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.08);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.service-meta {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.service-num {
		font-size: 10px;
		font-weight: 700;
		color: #00A6B2;
		line-height: 1;
	}

	.service-title {
		font-size: 10px;
		font-weight: 700;
		color: #082442;
		line-height: 13px;
	}

	.vdivider {
		width: 1px;
		height: 42px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.stats-card {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}
		.vdivider {
			display: none;
		}
	}
</style>
