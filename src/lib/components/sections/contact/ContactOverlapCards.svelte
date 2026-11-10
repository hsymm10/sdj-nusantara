<script lang="ts">
	import { contactConfig } from '#lib/config/contact';
</script>

<div class="overlap-wrapper">
	<div class="overlap-card">
		<!-- Col 1: Email -->
		<a href="mailto:{contactConfig.email}" class="card-col">
			<div class="col-icon" aria-hidden="true">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
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

		<div class="divider" aria-hidden="true"></div>

		<!-- Col 2: WhatsApp -->
		<a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" class="card-col">
			<div class="col-icon" aria-hidden="true">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">WhatsApp</span>
				<span class="col-value">{contactConfig.phone}</span>
				<span class="col-sub">Konsultasi cepat melalui WhatsApp</span>
			</div>
		</a>

		<div class="divider" aria-hidden="true"></div>

		<!-- Col 3: Jam Operasional -->
		<div class="card-col">
			<div class="col-icon" aria-hidden="true">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Jam Operasional</span>
				<span class="col-value">Senin – Jumat</span>
				<span class="col-sub">08.00 – 17.00 WIB</span>
			</div>
		</div>

		<div class="divider" aria-hidden="true"></div>

		<!-- Col 4: Lokasi -->
		<a href={contactConfig.mapsUrl} target="_blank" rel="noopener noreferrer" class="card-col">
			<div class="col-icon" aria-hidden="true">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Lokasi</span>
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
		max-width: 1425px;
		margin: -16px auto 0;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.overlap-wrapper {
			max-width: 1500px;
		}
	}

	.overlap-card {
		width: 100%;
		min-height: 118px;
		height: auto;
		background: #FFFFFF;
		border: 1px solid #E2EAF1;
		border-radius: 26px;
		padding: 16px 26px;
		box-shadow: 0 10px 32px rgba(16, 43, 73, 0.075), 0 3px 10px rgba(16, 43, 73, 0.03);
		display: grid;
		grid-template-columns:
			minmax(0, 1fr) auto
			minmax(0, 1fr) auto
			minmax(0, 0.85fr) auto
			minmax(0, 1.35fr);
		align-items: center;
		box-sizing: border-box;
	}

	.card-col {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 4px 6px;
		border-radius: 15px;
		text-decoration: none;
		color: inherit;
		min-width: 0;
		transition: background-color 0.2s ease;
		box-sizing: border-box;
	}

	a.card-col:hover {
		background: #ECF9FA;
	}

	.col-icon {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: #E8F7F9;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.col-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
		flex: 1;
	}

	.col-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #08AAB5;
		line-height: 1.25;
	}

	.col-value {
		font-size: 15px;
		font-weight: 600;
		color: #102B49;
		line-height: 1.3;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.col-sub {
		font-size: 12px;
		color: #64748B;
		line-height: 1.38;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.divider {
		width: 1px;
		height: 62%;
		min-height: 54px;
		background: #E2EAF1;
		margin: 0 12px;
		flex-shrink: 0;
	}

	@media (max-width: 1460px) {
		.overlap-wrapper {
			padding: 0 24px;
		}
	}

	@media (max-width: 1180px) {
		.overlap-card {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			height: auto;
			min-height: 0;
			gap: 16px 20px;
			padding: 20px 22px;
			border-radius: 22px;
		}

		.divider {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.overlap-wrapper {
			padding: 0 16px;
			margin-top: -12px;
		}

		.overlap-card {
			grid-template-columns: minmax(0, 1fr);
			gap: 14px;
			padding: 16px;
			border-radius: 18px;
		}

		.col-icon {
			width: 40px;
			height: 40px;
		}

		.col-icon svg {
			width: 22px;
			height: 22px;
		}

		.col-value {
			font-size: 14px;
		}

		.col-sub {
			font-size: 12px;
		}
	}
</style>
