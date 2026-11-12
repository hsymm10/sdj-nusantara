<script lang="ts">
	import { contactConfig } from '#lib/config/contact';
	import { i18n } from '#lib/stores/i18n.svelte';
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
				<span class="col-sub">{i18n.pick('Kami akan merespons secepatnya', 'We will respond promptly')}</span>
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
				<span class="col-sub">{i18n.pick('Konsultasi cepat melalui WhatsApp', 'Fast consultation via WhatsApp')}</span>
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
				<span class="col-label">{i18n.pick('Jam Operasional', 'Operating Hours')}</span>
				<span class="col-value">{i18n.pick('Senin – Jumat', 'Monday – Friday')}</span>
				<span class="col-sub">{i18n.pick('08.00 – 17.00 WIB', '08:00 – 17:00 WIB')}</span>
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
				<span class="col-label">{i18n.pick('Lokasi', 'Location')}</span>
				<span class="col-value">{contactConfig.address}</span>
				<span class="col-sub">{i18n.pick('Pertemuan dapat dilakukan secara online maupun offline', 'Meetings available both online and in-person')}</span>
			</div>
		</a>
	</div>
</div>

<style>
	.overlap-wrapper {
		position: relative;
		z-index: 10;
		width: 93%;
		max-width: 1380px;
		margin: -16px auto 0;
		padding: 0;
		box-sizing: border-box;
	}

	.overlap-card {
		width: 100%;
		min-height: 84px;
		height: auto;
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 20px;
		padding: 12px 22px;
		box-shadow: 0 10px 32px rgba(8, 36, 66, 0.08);
		display: grid;
		grid-template-columns:
			minmax(0, 1fr) auto
			minmax(0, 1fr) auto
			minmax(0, 0.8fr) auto
			minmax(0, 1.45fr);
		align-items: center;
		box-sizing: border-box;
	}

	.card-col {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 4px 8px;
		border-radius: 14px;
		text-decoration: none;
		color: inherit;
		min-width: 0;
		transition: background-color 0.2s ease;
		box-sizing: border-box;
	}

	a.card-col:hover {
		background: rgba(7, 158, 173, 0.07);
	}

	.col-icon {
		width: 38px;
		height: 38px;
		border-radius: 10px;
		background: #E8F7F9;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.col-icon svg {
		width: 20px;
		height: 20px;
	}

	.col-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
		flex: 1;
	}

	.col-label {
		font-size: 11.5px;
		font-weight: 700;
		color: #079EAD;
		line-height: 1.2;
	}

	.col-value {
		font-size: 13.5px;
		font-weight: 600;
		color: #082442;
		line-height: 1.25;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.col-sub {
		font-size: 11px;
		color: #64748B;
		line-height: 1.28;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.divider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		margin: 0 12px;
		flex-shrink: 0;
	}

	@media (max-width: 1180px) {
		.overlap-card {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			height: auto;
			min-height: 0;
			gap: 16px 20px;
			padding: 18px 20px;
			border-radius: 20px;
		}

		.divider {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.overlap-wrapper {
			width: 100%;
			padding: 0 16px;
			margin-top: -12px;
		}

		.overlap-card {
			grid-template-columns: minmax(0, 1fr);
			gap: 14px;
			padding: 16px;
			border-radius: 16px;
		}

		.col-icon {
			width: 36px;
			height: 36px;
		}

		.col-icon svg {
			width: 19px;
			height: 19px;
		}

		.col-value {
			font-size: 13.5px;
		}

		.col-sub {
			font-size: 11.5px;
		}
	}
</style>
