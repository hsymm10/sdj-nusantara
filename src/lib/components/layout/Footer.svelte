<script lang="ts">
	import Icon from '@iconify/svelte';
	import logoSdj from '#lib/assets/logo_sdj.png';

	interface Props {
		compact?: boolean;
		variant?: string;
	}

	let { compact = true, variant = 'home' }: Props = $props();
</script>

<footer class="footer compact-footer">
	<div class="footer-inner compact-inner">
		<div class="footer-grid compact-grid">
			<!-- Col 1: Brand Info, Alamat Perusahaan & No. HP Resmi -->
			<div class="footer-brand-col">
				<a href="/" class="footer-logo-link">
					<div class="footer-logo-wrap">
						<!-- Logo mark 26px -->
						<div class="footer-logo-badge">
							<img src={logoSdj} alt="Logo SDJNusantara" class="footer-logo-img" />
						</div>
						<div class="footer-logo-text">
							<span class="footer-brand-title">SDJNusantara</span>
							<span class="footer-brand-tagline">Strategic Your Partner</span>
						</div>
					</div>
				</a>

				<!-- Alamat Perusahaan Resmi (Graha Aktiva) & No. HP dari Kartu Nama -->
				<div class="footer-brand-address">
					<p class="footer-address-text">
						Gedung Graha Aktiva Lt. GF (suite B3A),<br />
						Jl. H. R. Rasuna Said No.6, Kuningan Tim.,<br />
						Jakarta Selatan 12950
					</p>
					<p class="footer-phone-text">
						<a href="tel:+6285880724733" class="footer-phone-link" aria-label="Telepon / WhatsApp">
							<span class="phone-label">No. HP:</span> +62 858-8072-4733
						</a>
					</p>
				</div>

				<!-- Ikon sosial Iconify: Instagram, TikTok, Email terhubung aktif -->
				<div class="footer-socials">
					<a href="https://instagram.com/sdjnusantara" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="Instagram">
						<Icon icon="ri:instagram-line" width="13" height="13" />
					</a>
					<a href="https://tiktok.com/@sdjnusantara" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="TikTok">
						<Icon icon="ri:tiktok-fill" width="13" height="13" />
					</a>
					<a href="mailto:info@sdjnusantara.com" class="social-outline-btn" aria-label="Email">
						<Icon icon="ri:mail-line" width="13" height="13" />
					</a>
				</div>
			</div>

			<!-- Vertical Divider -->
			<div class="footer-vdivider"></div>

			<!-- Col 2: Navigasi Utama -->
			<div class="footer-nav-col">
				<h4 class="footer-col-title">Navigasi Utama</h4>
				<ul class="footer-links-list">
					<li><a href="/" class="footer-link">Beranda</a></li>
					<li><a href="/tentang-kami" class="footer-link">Tentang Kami</a></li>
					<li><a href="/layanan" class="footer-link">Layanan</a></li>
					<li><a href="/kemitraan" class="footer-link">Kemitraan</a></li>
					<li><a href="/artikel" class="footer-link">Artikel & Wawasan</a></li>
					<li><a href="/kontak" class="footer-link">Kontak</a></li>
				</ul>
			</div>

			<!-- Vertical Divider -->
			<div class="footer-vdivider"></div>

			<!-- Col 3: Kontak & Informasi -->
			<div class="footer-contact-col">
				<h4 class="footer-col-title">Kontak & Informasi</h4>
				<ul class="footer-contact-list">
					<li>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
						<a href="mailto:info@sdjnusantara.com" class="footer-link">info@sdjnusantara.com</a>
					</li>
					<li>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
						<a href="tel:+6285880724733" class="footer-link">+62 858-8072-4733</a>
					</li>
					<li>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<span class="footer-text">Gedung Graha Aktiva, Jakarta Selatan</span>
					</li>
				</ul>
			</div>

			<!-- Vertical Divider -->
			<div class="footer-vdivider"></div>

			<!-- Col 4: Hak Cipta & Legalitas -->
			<div class="footer-copy-col">
				<p class="footer-copyright">
					© 2026 SDJNusantara.<br />
					Seluruh hak cipta dilindungi.
				</p>
				<div class="footer-legal-links">
					<a href="/kebijakan-privasi" class="footer-legal-link">Kebijakan Privasi</a>
					<span class="footer-legal-sep" aria-hidden="true">|</span>
					<a href="/syarat-ketentuan" class="footer-legal-link">Syarat & Ketentuan</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: #0B2948;
		color: #FFFFFF;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		min-height: 220px;
		height: auto;
		display: flex;
		align-items: flex-start;
		padding: 24px 0 24px;
		box-sizing: border-box;
		width: 100%;
	}

	.footer-inner {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 24px 1rem 24px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.footer-inner {
			max-width: 1500px;
		}
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2.1fr auto 1.2fr auto 1.8fr auto 1.6fr;
		gap: 0 1.5rem;
		align-items: flex-start;
	}

	.footer-vdivider {
		width: 1px;
		background: rgba(255, 255, 255, 0.12);
		height: 110px;
		flex-shrink: 0;
	}

	/* Brand Col */
	.footer-brand-col {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.footer-logo-link {
		text-decoration: none;
	}

	.footer-logo-wrap {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-logo-badge {
		width: 26px;
		height: 26px;
		background: #FFFFFF;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px;
		flex-shrink: 0;
	}

	.footer-logo-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.footer-logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.footer-brand-title {
		font-size: 14px;
		font-weight: 800;
		color: #FFFFFF;
		letter-spacing: -0.01em;
	}

	.footer-brand-tagline {
		font-size: 8px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.75);
		letter-spacing: 0.04em;
		white-space: nowrap;
		margin-top: 2px;
	}

	.footer-brand-address {
		margin-top: 6px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.footer-address-text {
		font-size: 10px;
		line-height: 14.5px;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		letter-spacing: 0;
	}

	.footer-phone-text {
		margin: 2px 0 0 0;
	}

	.footer-phone-link {
		font-size: 10px;
		color: #16B6C1;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 4px;
		transition: color 0.2s ease;
	}

	.footer-phone-link:hover {
		color: #F5B331;
		text-decoration: underline;
	}

	.phone-label {
		color: rgba(255, 255, 255, 0.55);
	}

	.footer-socials {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 10px;
	}

	/* LINGKARAN OUTLINE putih tipis ±24px tanpa background kotak */
	.social-outline-btn {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.35);
		background: rgba(255, 255, 255, 0.04);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.social-outline-btn:hover {
		border-color: #00A6B2;
		color: #00A6B2;
		background: rgba(0, 166, 178, 0.15);
		transform: translateY(-2px);
	}

	/* Nav & Link Cols */
	.footer-nav-col,
	.footer-contact-col,
	.footer-copy-col {
		display: flex;
		flex-direction: column;
	}

	.footer-col-title {
		font-size: 10.5px;
		font-weight: 700;
		color: #FFFFFF;
		margin: 0 0 12px 0;
		letter-spacing: 0;
		white-space: nowrap;
	}

	.footer-links-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px; /* Jarak antar-link Navigasi Utama/Pusat Informasi ±19px antar baseline */
	}

	.footer-links-list li {
		margin: 0;
		padding: 0;
		height: 11px;
		display: flex;
		align-items: center;
		line-height: 11px;
	}

	.footer-link {
		font-size: 10.5px;
		color: rgba(255, 255, 255, 0.68);
		text-decoration: none;
		line-height: 11px;
		letter-spacing: 0;
		transition: color 0.2s ease;
	}

	.footer-link:hover {
		color: #00A6B2;
	}

	.footer-contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 7px; /* Jarak item kontak ±20px antar baseline */
	}

	.footer-contact-list li {
		margin: 0;
		padding: 0;
		height: 13px;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		line-height: 13px;
	}

	.footer-text {
		font-size: 10.5px;
		color: rgba(255, 255, 255, 0.68);
		letter-spacing: 0;
	}

	/* Copyright Col */
	.footer-copyright {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.65);
		line-height: 14.5px;
		margin: 0 0 16px 0;
		letter-spacing: 0;
	}

	/* Kebijakan Privasi & Syarat Ketentuan */
	.footer-legal-links {
		display: flex;
		align-items: center;
		gap: 8px;
		white-space: nowrap;
	}

	.footer-legal-sep {
		font-size: 9px;
		color: rgba(255, 255, 255, 0.35);
	}

	.footer-legal-link {
		font-size: 9px;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: none;
		letter-spacing: 0;
		transition: color 0.2s;
	}

	@media (max-width: 1099px) {
		.footer {
			height: auto;
			padding: 2.5rem 1.5rem 2rem;
		}
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 2rem 1.5rem;
		}
		.footer-vdivider {
			display: none;
		}
		.footer-brand-col {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 767px) {
		.footer {
			padding: 2rem 1.25rem 1.75rem;
		}
		.footer-grid {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}
		.footer-brand-col {
			grid-column: 1 / -1;
		}
		.footer-contact-col {
			grid-column: 1 / -1;
		}
		.footer-copy-col {
			grid-column: 1 / -1;
			border-top: 1px solid rgba(255, 255, 255, 0.1);
			padding-top: 1.25rem;
			margin-top: 0.5rem;
		}
		.footer-col-title {
			font-size: 13px;
			white-space: nowrap;
		}
		.footer-link,
		.footer-text,
		.footer-copyright {
			font-size: 12px;
			line-height: 1.5;
		}
		.footer-legal-links {
			gap: 16px;
			flex-wrap: wrap;
		}
		.footer-legal-link {
			font-size: 11.5px;
		}
	}
</style>
