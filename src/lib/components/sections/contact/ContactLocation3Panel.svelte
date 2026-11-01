<script lang="ts">
	import { contactConfig } from '#lib/config/contact';
</script>

<section class="location-3panel-section" id="lokasi">
	<div class="panel-grid">
		<!-- Left Panel: Building Photo -->
		<div class="panel-left">
			<img
				src="/images/contact-building.jpg"
				alt="Gedung Kantor SDJNusantara"
				class="panel-img"
				loading="lazy"
			/>
		</div>

		<!-- Center Panel: Information Content -->
		<div class="panel-center">
			<div class="section-dash-line">
				<span class="dash"></span>
				<span class="section-tag">Lokasi Kami</span>
			</div>

			<h2 class="location-title">Kunjungi Kantor Kami</h2>

			<p class="location-desc">
				Kami terbuka untuk diskusi dan pertemuan langsung dengan institusi, mitra, maupun individu yang ingin menjalin kerja sama.
			</p>

			<!-- Address White Card -->
			<div class="address-card">
				<div class="address-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
						<circle cx="12" cy="10" r="3"></circle>
					</svg>
				</div>
				<div class="address-details">
					<strong class="address-title">Alamat Kantor</strong>
					<span class="address-main">{contactConfig.address}</span>
					<span class="address-sub">{contactConfig.addressDetail}</span>
					<a href={contactConfig.mapsUrl} target="_blank" rel="noopener noreferrer" class="btn-maps">
						<span>Buka di Google Maps</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Right Panel: Lobby Photo with Quote -->
		<div class="panel-right">
			<img
				src="/images/contact-lobby.jpg"
				alt="Lobi SDJNusantara"
				class="panel-img"
				loading="lazy"
			/>
			<div class="quote-overlay">
				<blockquote class="quote-text">
					“Pendidikan adalah investasi untuk masa depan yang lebih baik.”
				</blockquote>
			</div>
		</div>
	</div>
</section>

<style>
	.location-3panel-section {
		width: 100%;
		background: #082442;
		overflow: hidden;
		box-sizing: border-box;
	}

	.panel-grid {
		width: 100%;
		height: 380px;
		display: grid;
		grid-template-columns: 44% 31% 25%;
		align-items: stretch;
	}

	/* Left Panel */
	.panel-left {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.panel-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Center Panel */
	.panel-center {
		background: #082442;
		padding: 32px 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		border-left: 1px solid rgba(255, 255, 255, 0.08);
		border-right: 1px solid rgba(255, 255, 255, 0.08);
	}

	.section-dash-line {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 6px;
	}

	.dash {
		width: 16px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.section-tag {
		font-size: 10.5px;
		font-weight: 700;
		color: #16B6C1;
	}

	.location-title {
		font-size: 20px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 8px;
		letter-spacing: -0.01em;
	}

	.location-desc {
		font-size: 10.5px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.75);
		margin: 0 0 16px;
	}

	.address-card {
		background: #FFFFFF;
		border-radius: 12px;
		padding: 14px 16px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
	}

	.address-icon {
		margin-top: 2px;
		flex-shrink: 0;
	}

	.address-details {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.address-title {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
	}

	.address-main {
		font-size: 11.5px;
		font-weight: 700;
		color: #079EAD;
	}

	.address-sub {
		font-size: 9px;
		color: #64748B;
		line-height: 1.35;
		margin-bottom: 6px;
	}

	.btn-maps {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 10.5px;
		font-weight: 700;
		color: #082442;
		text-decoration: none;
		transition: color 0.2s;
	}

	.btn-maps:hover {
		color: #079EAD;
	}

	.btn-arrow {
		font-size: 11px;
	}

	/* Right Panel */
	.panel-right {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.quote-overlay {
		position: absolute;
		bottom: 24px;
		left: 20px;
		right: 20px;
		background: rgba(8, 36, 66, 0.85);
		backdrop-filter: blur(8px);
		border-radius: 10px;
		padding: 12px 14px;
		border: 1px solid rgba(22, 182, 193, 0.3);
		box-sizing: border-box;
	}

	.quote-text {
		font-size: 11px;
		font-weight: 600;
		font-style: italic;
		line-height: 1.45;
		color: #FFFFFF;
		margin: 0;
	}

	@media (max-width: 1024px) {
		.panel-grid {
			grid-template-columns: 1fr;
			height: auto;
		}

		.panel-left, .panel-right {
			height: 240px;
		}

		.panel-center {
			border: none;
			padding: 2.5rem 1.5rem;
		}
	}
</style>
