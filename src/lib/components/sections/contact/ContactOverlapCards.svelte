<script lang="ts">
	import { contactConfig } from '#lib/config/contact';
</script>

<div class="overlap-wrapper">
	<div class="overlap-card">
		<!-- Col 1: Email -->
		<a href="mailto:{contactConfig.email}" class="card-col">
			<div class="col-icon">
				<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<rect x="2" y="4" width="20" height="16" rx="2"></rect>
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Email</span>
				<span class="col-value">{contactConfig.email}</span>
				<span class="col-sub">Kami akan merespons secepatnya</span>
			</div>
		</a>

		<div class="divider"></div>

		<!-- Col 2: WhatsApp -->
		<a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" class="card-col">
			<div class="col-icon">
				<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">WhatsApp</span>
				<span class="col-value">{contactConfig.phone}</span>
				<span class="col-sub">Konsultasi cepat melalui WhatsApp</span>
			</div>
		</a>

		<div class="divider"></div>

		<!-- Col 3: Jam Operasional -->
		<div class="card-col">
			<div class="col-icon">
				<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Jam Operasional</span>
				<!-- WAJIB DIVERIFIKASI/DIISI (content-master bagian 15) -->
				<span class="col-value">Senin – Jumat</span>
				<span class="col-sub">08.00 – 17.00 WIB</span>
			</div>
		</div>

		<div class="divider"></div>

		<!-- Col 4: Lokasi -->
		<a href={contactConfig.mapsUrl} target="_blank" rel="noopener noreferrer" class="card-col">
			<div class="col-icon">
				<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Lokasi</span>
				<!-- WAJIB DIVERIFIKASI/DIISI (content-master bagian 15) -->
				<span class="col-value">{contactConfig.address}</span>
				<span class="col-sub">Pertemuan dapat dilakukan secara online maupun offline</span>
			</div>
		</a>
	</div>
</div>

<style>
	.overlap-wrapper {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 1352px;
		margin: -14px auto 0;
		box-sizing: border-box;
	}

	.overlap-card {
		background: #FFFFFF;
		border-radius: 21px;
		box-shadow: 0 8px 30px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.85);
		display: grid;
		grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
		align-items: center;
		padding: 18px 28px;
		height: 120px;
		box-sizing: border-box;
	}

	.card-col {
		display: flex;
		align-items: center;
		gap: 16px;
		text-decoration: none;
		color: inherit;
		transition: opacity 0.2s ease;
	}

	a.card-col:hover {
		opacity: 0.85;
	}

	.col-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.col-text {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.col-label {
		font-size: 17px;
		font-weight: 700;
		color: #082442;
		line-height: 1.2;
	}

	.col-value {
		font-size: 17px;
		font-weight: 600;
		color: #082442;
		line-height: 1.25;
	}

	.col-sub {
		font-size: 13px;
		color: #64748B;
		line-height: 1.35;
	}

	.divider {
		width: 1px;
		height: 56px;
		background: #E2E8F0;
		margin: 0 16px;
	}

	@media (max-width: 1440px) {
		.overlap-wrapper {
			padding: 0 24px;
		}
	}

	@media (max-width: 1100px) {
		.overlap-card {
			grid-template-columns: 1fr 1fr;
			gap: 20px;
			padding: 20px;
		}
		.divider {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.overlap-card {
			grid-template-columns: 1fr;
			gap: 18px;
			padding: 18px;
			border-radius: 16px;
		}
		.col-icon svg {
			width: 32px;
			height: 32px;
		}
		.col-label, .col-value {
			font-size: 15px;
		}
		.col-sub {
			font-size: 12px;
		}
	}
</style>
