<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from '#lib/components/ui/Logo.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	interface Props {
		compact?: boolean;
		variant?: string;
	}

	let { compact = true, variant = 'home' }: Props = $props();
</script>

<footer class="footer">
	<div class="footer-inner">
		<div class="footer-grid">
			<!-- Kolom 1: Identitas SDJ Nusantara -->
			<div class="footer-brand-col">
				<a href="/" class="footer-logo-link" aria-label={i18n.pick('SDJ Nusantara Beranda', 'SDJ Nusantara Home')}>
					<Logo size="footer" variant="light" />
				</a>

				<!-- Alamat Perusahaan Resmi (Graha Aktiva) -->
				<p class="footer-address-text">
					Gedung Graha Aktiva Lt. GF (suite B3A),<br />
					Jl. H. R. Rasuna Said No.6, Kuningan Tim.,<br />
					Jakarta Selatan 12950
				</p>

				<!-- Ikon sosial Iconify: Instagram, TikTok, Email -->
				<div class="footer-socials" aria-label={i18n.pick('Media Sosial SDJ Nusantara', 'SDJ Nusantara Social Media')}>
					<a href="https://instagram.com/sdjnusantara" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="Instagram">
						<Icon icon="ri:instagram-line" width="14" height="14" />
					</a>
					<a href="https://tiktok.com/@sdjnusantara" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="TikTok">
						<Icon icon="ri:tiktok-fill" width="14" height="14" />
					</a>
					<a href="mailto:info@sdjnusantara.com" class="social-outline-btn" aria-label="Email">
						<Icon icon="ri:mail-line" width="14" height="14" />
					</a>
				</div>
			</div>

			<!-- Vertical Divider 1 (Desktop & Tablet) -->
			<div class="footer-vdivider" aria-hidden="true"></div>

			<!-- Kolom 2: Kontak & Informasi -->
			<div class="footer-contact-col">
				<h4 class="footer-col-title">{i18n.pick('Kontak & Informasi', 'Contact & Information')}</h4>
				<ul class="footer-contact-list">
					<li>
						<Icon icon="ri:mail-line" width="15" height="15" class="contact-icon" aria-hidden="true" />
						<a href="mailto:info@sdjnusantara.com" class="footer-link">info@sdjnusantara.com</a>
					</li>
					<li>
						<Icon icon="ri:phone-line" width="15" height="15" class="contact-icon" aria-hidden="true" />
						<a href="tel:+6285880724733" class="footer-link">+62 858-8072-4733</a>
					</li>
					<li>
						<Icon icon="ri:map-pin-line" width="15" height="15" class="contact-icon" aria-hidden="true" />
						<span class="footer-text">Gedung Graha Aktiva, Jakarta Selatan</span>
					</li>
				</ul>
			</div>

			<!-- Vertical Divider 2 (Desktop & Tablet) -->
			<div class="footer-vdivider" aria-hidden="true"></div>

			<!-- Kolom 3: Informasi Legal -->
			<div class="footer-legal-col">
				<h4 class="footer-col-title">{i18n.pick('Informasi Legal', 'Legal Information')}</h4>
				<div class="footer-copyright">
					<p class="copyright-line">© 2026 SDJ Nusantara.</p>
					<p class="copyright-line">{i18n.pick('Seluruh hak cipta dilindungi.', 'All rights reserved.')}</p>
				</div>
				<div class="footer-legal-links">
					<a href="/kebijakan-privasi" class="footer-legal-link">{i18n.dict.footer.privacyPolicy}</a>
					<span class="footer-legal-sep" aria-hidden="true">|</span>
					<a href="/syarat-ketentuan" class="footer-legal-link">{i18n.dict.footer.terms}</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: #082442;
		color: #FFFFFF;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		width: 100%;
		padding: 30px 0 28px;
		box-sizing: border-box;
	}

	.footer-inner {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.footer-inner {
			max-width: 1500px;
		}
	}

	/* Grid Desktop */
	.footer-grid {
		display: grid;
		grid-template-columns: 1.35fr auto 1.25fr auto 1.15fr;
		gap: 0 2.25rem;
		align-items: flex-start;
	}

	/* Garis Pemisah Vertikal */
	.footer-vdivider {
		width: 1px;
		background: rgba(255, 255, 255, 0.12);
		height: 105px;
		flex-shrink: 0;
		align-self: center;
	}

	/* Kolom 1: Brand & Identitas */
	.footer-brand-col {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-logo-link {
		text-decoration: none;
		display: inline-block;
		width: fit-content;
	}

	.footer-address-text {
		font-size: 11.5px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.72);
		margin: 0;
		letter-spacing: 0.01em;
	}

	.footer-socials {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 2px;
	}

	/* Lingkaran outline Iconify */
	.social-outline-btn {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.35);
		background: rgba(255, 255, 255, 0.04);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.88);
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		box-sizing: border-box;
	}

	.social-outline-btn:hover {
		border-color: #00A6B2;
		color: #00A6B2;
		background: rgba(0, 166, 178, 0.15);
		transform: translateY(-2px);
	}

	/* Kolom 2: Kontak & Informasi */
	.footer-contact-col {
		display: flex;
		flex-direction: column;
	}

	.footer-col-title {
		font-size: 12.5px;
		font-weight: 700;
		color: #FFFFFF;
		margin: 2px 0 12px 0;
		letter-spacing: 0.01em;
		white-space: nowrap;
	}

	.footer-contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-contact-list li {
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		gap: 9px;
		line-height: 1.35;
	}

	:global(.contact-icon) {
		color: #00A6B2;
		flex-shrink: 0;
	}

	.footer-link {
		font-size: 11.5px;
		color: rgba(255, 255, 255, 0.78);
		text-decoration: none;
		transition: color 0.2s ease;
		letter-spacing: 0.01em;
	}

	.footer-link:hover {
		color: #00A6B2;
		text-decoration: underline;
	}

	.footer-text {
		font-size: 11.5px;
		color: rgba(255, 255, 255, 0.78);
		letter-spacing: 0.01em;
	}

	/* Kolom 3: Informasi Legal */
	.footer-legal-col {
		display: flex;
		flex-direction: column;
		padding-right: 3.5rem; /* Space to prevent NALARA button from overlapping on desktop */
	}

	.footer-copyright {
		margin: 0 0 12px 0;
	}

	.copyright-line {
		font-size: 11.5px;
		color: rgba(255, 255, 255, 0.72);
		line-height: 1.5;
		margin: 0;
		letter-spacing: 0.01em;
	}

	.footer-legal-links {
		display: flex;
		align-items: center;
		gap: 8px;
		white-space: nowrap;
	}

	.footer-legal-sep {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.35);
	}

	.footer-legal-link {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.65);
		text-decoration: none;
		letter-spacing: 0.01em;
		transition: color 0.2s ease;
	}

	.footer-legal-link:hover {
		color: #00A6B2;
		text-decoration: underline;
	}

	/* Responsive Tablet (768px – 1023px) */
	@media (max-width: 1023px) {
		.footer {
			padding: 26px 0;
		}

		.footer-inner {
			padding: 0 1.5rem;
		}

		.footer-grid {
			grid-template-columns: 1.3fr auto 1.2fr auto 1.1fr;
			gap: 0 1.25rem;
		}

		.footer-vdivider {
			height: 98px;
		}

		.footer-legal-col {
			padding-right: 4rem;
		}
	}

	/* Responsive Mobile (< 768px) */
	@media (max-width: 767px) {
		.footer {
			padding: 26px 0 34px;
		}

		.footer-inner {
			padding: 0 1.25rem;
		}

		.footer-grid {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.footer-vdivider {
			display: none;
		}

		.footer-brand-col {
			gap: 10px;
		}

		.footer-address-text {
			font-size: 12px;
			line-height: 1.5;
		}

		.footer-socials {
			margin-top: 4px;
		}

		.social-outline-btn {
			width: 28px;
			height: 28px;
		}

		.footer-contact-col {
			border-top: 1px solid rgba(255, 255, 255, 0.08);
			padding-top: 18px;
		}

		.footer-col-title {
			font-size: 13px;
			margin: 0 0 10px 0;
		}

		.footer-contact-list {
			gap: 10px;
		}

		.footer-link,
		.footer-text {
			font-size: 12px;
		}

		.footer-legal-col {
			border-top: 1px solid rgba(255, 255, 255, 0.08);
			padding-top: 18px;
			padding-right: 4.5rem; /* Avoid NALARA button overlap */
		}

		.copyright-line {
			font-size: 12px;
		}

		.footer-copyright {
			margin: 0 0 10px 0;
		}

		.footer-legal-links {
			gap: 10px;
			flex-wrap: wrap;
		}

		.footer-legal-link {
			font-size: 11.5px;
		}
	}
</style>
