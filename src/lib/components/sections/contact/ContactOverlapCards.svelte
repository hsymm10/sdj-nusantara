<script lang="ts">
	import { contactConfig } from '#lib/config/contact';
</script>

<div class="overlap-wrapper">
	<div class="overlap-card">
		<!-- Col 1: Email -->
		<a href="mailto:{contactConfig.email}" class="card-col">
			<div class="col-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<rect x="2" y="4" width="20" height="16" rx="2"></rect>
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Email</span>
				<strong class="col-value">{contactConfig.email}</strong>
				<span class="col-sub">Kami akan merespons secepatnya</span>
			</div>
		</a>

		<div class="divider"></div>

		<!-- Col 2: WhatsApp -->
		<a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" class="card-col">
			<div class="col-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">WhatsApp</span>
				<strong class="col-value">{contactConfig.phone}</strong>
				<span class="col-sub">Konsultasi cepat melalui WhatsApp</span>
			</div>
		</a>

		<div class="divider"></div>

		<!-- Col 3: Jam Operasional -->
		<div class="card-col">
			<div class="col-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Jam Operasional</span>
				<strong class="col-value">Senin – Jumat</strong>
				<span class="col-sub">08.00 – 17.00 WIB</span>
			</div>
		</div>

		<div class="divider"></div>

		<!-- Col 4: Lokasi -->
		<a href={contactConfig.mapsUrl} target="_blank" rel="noopener noreferrer" class="card-col">
			<div class="col-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
			</div>
			<div class="col-text">
				<span class="col-label">Lokasi</span>
				<strong class="col-value">{contactConfig.address}</strong>
				<span class="col-sub">Pertemuan dapat dilakukan online maupun offline</span>
			</div>
		</a>
	</div>
</div>

<style>
	.overlap-wrapper {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 1086px;
		margin: -36px auto 0;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.overlap-card {
		background: #FFFFFF;
		border-radius: 16px;
		box-shadow: 0 8px 30px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.85);
		display: grid;
		grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
		align-items: center;
		padding: 18px 24px;
		box-sizing: border-box;
	}

	.card-col {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		text-decoration: none;
		color: inherit;
		transition: opacity 0.2s;
	}

	a.card-col:hover {
		opacity: 0.85;
	}

	.col-icon {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.col-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.col-label {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
	}

	.col-value {
		font-size: 11.5px;
		font-weight: 700;
		color: #079EAD;
	}

	.col-sub {
		font-size: 9.5px;
		color: #64748B;
		line-height: 1.35;
	}

	.divider {
		width: 1px;
		height: 48px;
		background: #E2E8F0;
		margin: 0 10px;
	}

	@media (max-width: 1024px) {
		.overlap-card {
			grid-template-columns: 1fr 1fr;
			gap: 16px;
		}
		.divider {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.overlap-card {
			grid-template-columns: 1fr;
			margin-top: -24px;
		}
	}
</style>
