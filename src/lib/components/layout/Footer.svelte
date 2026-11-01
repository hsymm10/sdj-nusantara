<script lang="ts">
	import { footerNav } from '#lib/data/navigation';

	interface Props {
		compact?: boolean;
		variant?: 'home' | 'tentang-kami' | 'layanan' | 'program' | 'beasiswa' | 'kemitraan';
	}

	let { compact = false, variant = 'home' }: Props = $props();

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="footer {compact || variant === 'home' ? 'compact-footer' : 'page-footer'} variant-{variant}">
	<div class="footer-inner {compact || variant === 'home' ? 'compact-inner' : 'page-inner'}">
		<div class="footer-grid {compact || variant === 'home' ? 'compact-grid' : 'page-grid'}">
			<!-- Col 1: Brand Info -->
			<div class="footer-brand-col">
				<a href="/" class="footer-logo-link">
					<div class="footer-logo-wrap">
						<!-- Logo mark 26px -->
						<svg class="footer-logo-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 3L32 10.5L18 18L4 10.5L18 3Z" fill="#00A6B2"/>
							<path d="M4 14.5L18 22L32 14.5L32 17.5L18 25L4 17.5V14.5Z" fill="#4176A8"/>
							<path d="M4 21.5L18 29L32 21.5L32 24.5L18 32L4 24.5V21.5Z" fill="#F4B334"/>
						</svg>
						<div class="footer-logo-text">
							<span class="footer-brand-title">SDJNusantara</span>
							<span class="footer-brand-tagline">KONSULTAN PENDIDIKAN & PENGEMBANGAN TALENTA</span>
						</div>
					</div>
				</a>

				<p class="footer-brand-desc">
					Mendampingi individu dan institusi untuk<br />
					mengenali potensi, merencanakan pendidikan,<br />
					mengembangkan keterampilan, dan terhubung<br />
					dengan peluang.
				</p>

				<!-- Ikon sosial: LINGKARAN OUTLINE putih tipis ±20px tanpa background kotak -->
				<div class="footer-socials">
					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="YouTube">
						<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="Instagram">
						<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
							<circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"></circle>
						</svg>
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-outline-btn" aria-label="LinkedIn">
						<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Vertical Divider -->
			<div class="footer-vdivider"></div>

			<!-- Col 2: Navigasi Utama -->
			<div class="footer-nav-col">
				<h4 class="footer-col-title">Navigasi Utama</h4>
				<ul class="footer-links-list">
					{#each footerNav.navigasiUtama as item}
						<li><a href={item.href} class="footer-link">{item.label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Vertical Divider -->
			<div class="footer-vdivider"></div>

			<!-- Col 3: Pusat Informasi -->
			<div class="footer-nav-col">
				<h4 class="footer-col-title">Pusat Informasi</h4>
				<ul class="footer-links-list">
					{#each footerNav.pusatInformasi as item}
						<li><a href={item.href} class="footer-link">{item.label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Vertical Divider -->
			<div class="footer-vdivider"></div>

			<!-- Col 4: Kontak & Informasi -->
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
						<a href="tel:+6281234567890" class="footer-link">+62 812-3456-7890</a>
					</li>
					<li>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<span class="footer-text">Jakarta, Indonesia</span>
					</li>
				</ul>

				<!-- Newsletter input for Tentang Kami -->
				{#if variant === 'tentang-kami'}
					<form class="footer-newsletter" onsubmit={(e) => e.preventDefault()}>
						<input type="email" placeholder="Daftar newsletter..." class="newsletter-input" />
						<button type="submit" class="newsletter-submit-btn" aria-label="Kirim">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</button>
					</form>
				{/if}
			</div>

			<!-- Col 5: For Home, Program, Beasiswa (in-grid copyright) -->
			{#if compact || variant === 'home' || variant === 'program' || variant === 'beasiswa'}
				<!-- Vertical Divider -->
				<div class="footer-vdivider"></div>

				<div class="footer-copy-col">
					<p class="footer-copyright">
						© 2026 SDJNusantara.<br />
						Seluruh hak cipta dilindungi.
					</p>
					<div class="footer-legal-links">
						<a href="/kebijakan-privasi" class="footer-legal-link">Kebijakan Privasi</a>
						<a href="/syarat-ketentuan" class="footer-legal-link">Syarat & Ketentuan</a>
					</div>
				</div>
			{/if}
		</div>

		<!-- Bottom Bar for pages that have it -->
		{#if variant === 'tentang-kami' || variant === 'layanan' || variant === 'kemitraan' || variant === 'program'}
			<div class="footer-bottom-bar">
				<p class="footer-bottom-copy">© 2026 SDJNusantara. Seluruh hak cipta dilindungi.</p>
				<div class="footer-bottom-right">
					{#if variant !== 'program'}
						<div class="footer-bottom-links">
							<a href="/kebijakan-privasi" class="footer-bottom-link">Kebijakan Privasi</a>
							<span class="footer-bottom-sep">|</span>
							<a href="/syarat-ketentuan" class="footer-bottom-link">Syarat & Ketentuan</a>
						</div>
					{/if}
					<button class="back-to-top-btn" onclick={scrollToTop} aria-label="Kembali ke atas">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="18 15 12 9 6 15"></polyline>
						</svg>
					</button>
				</div>
			</div>
		{/if}
	</div>
</footer>

<style>
	.footer {
		background-color: #081D34;
		color: #FFFFFF;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.footer.compact-footer {
		height: 169px;
		display: flex;
		align-items: flex-start;
		overflow: hidden;
		padding-top: 24px; /* padding-top ±24px sehingga logo dan judul kolom di y≈887 */
		box-sizing: border-box;
	}

	.footer-inner {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 3rem 2rem 2.5rem;
	}

	.footer-inner.compact-inner {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2.1fr auto 1fr auto 1fr auto 1.5fr auto 1.4fr;
		gap: 0 1.25rem;
		align-items: start;
	}

	.footer-grid.compact-grid {
		align-items: flex-start;
		gap: 0 1.25rem;
	}

	.footer-vdivider {
		width: 1px;
		background: rgba(255, 255, 255, 0.12);
		align-self: stretch;
		min-height: 98px;
	}

	/* Brand Col */
	.footer-brand-col {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.footer-logo-link {
		text-decoration: none;
	}

	.footer-logo-wrap {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-logo-svg {
		width: 26px;
		height: 26px;
		flex-shrink: 0;
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
		font-size: 7px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.7);
		letter-spacing: 0.02em;
		white-space: nowrap;
		margin-top: 2px;
	}

	.footer-brand-desc {
		font-size: 10.5px;
		line-height: 14.5px;
		color: rgba(255, 255, 255, 0.65);
		margin: 0.1rem 0 0 0;
		letter-spacing: 0;
	}

	.footer-socials {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 0.35rem; /* Posisi di y≈993 */
	}

	/* LINGKARAN OUTLINE putih tipis ±20px tanpa background kotak */
	.social-outline-btn {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.social-outline-btn:hover {
		border-color: #00A6B2;
		color: #00A6B2;
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
		margin: 0 0 0.55rem 0;
		letter-spacing: 0;
	}

	.footer-links-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 19px; /* Jarak antar-link Navigasi Utama/Pusat Informasi ±19px */
	}

	.footer-link {
		font-size: 10.5px;
		color: rgba(255, 255, 255, 0.68);
		text-decoration: none;
		line-height: 1;
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
		gap: 20px; /* Jarak item kontak ±20px */
	}

	.footer-contact-list li {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		line-height: 1;
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
		margin: 0 0 0.9rem 0;
		letter-spacing: 0;
	}

	/* Kebijakan Privasi & Syarat Ketentuan sejajar dalam 1 baris jarak 20px tanpa | */
	.footer-legal-links {
		display: flex;
		align-items: center;
		gap: 20px;
		white-space: nowrap;
	}

	.footer-legal-link {
		font-size: 9px;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: none;
		letter-spacing: 0;
		transition: color 0.2s;
	}

	/* Newsletter Input for Tentang Kami */
	.footer-newsletter {
		display: flex;
		align-items: center;
		margin-top: 0.85rem;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 6px;
		overflow: hidden;
		width: 100%;
		max-width: 220px;
	}

	.newsletter-input {
		flex: 1;
		background: transparent;
		border: none;
		padding: 0.4rem 0.6rem;
		font-size: 10px;
		color: #FFFFFF;
		outline: none;
	}

	.newsletter-input::placeholder {
		color: rgba(255, 255, 255, 0.45);
	}

	.newsletter-submit-btn {
		background: #00A6B2;
		border: none;
		color: #FFFFFF;
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s;
	}

	.newsletter-submit-btn:hover {
		background: #16B6C1;
	}

	/* Page Footer (Tentang, Layanan, Program, Beasiswa, Kemitraan) */
	.footer.page-footer {
		padding: 3rem 0 1.5rem;
		box-sizing: border-box;
	}

	.footer-inner.page-inner {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
	}

	.footer-grid.page-grid {
		align-items: flex-start;
		gap: 0 1.25rem;
	}

	/* Bottom Bar */
	.footer-bottom-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid rgba(255, 255, 255, 0.12);
		margin-top: 2.2rem;
		padding-top: 1.2rem;
	}

	.footer-bottom-copy {
		font-size: 9.5px;
		color: rgba(255, 255, 255, 0.55);
		margin: 0;
	}

	.footer-bottom-right {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.footer-bottom-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-bottom-link {
		font-size: 9.5px;
		color: rgba(255, 255, 255, 0.55);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-bottom-link:hover {
		color: #00A6B2;
	}

	.footer-bottom-sep {
		font-size: 9.5px;
		color: rgba(255, 255, 255, 0.3);
	}

	.back-to-top-btn {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: #00A6B2;
		border: none;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 2px 8px rgba(0, 166, 178, 0.35);
		transition: transform 0.2s, background 0.2s;
	}

	.back-to-top-btn:hover {
		background: #16B6C1;
		transform: translateY(-2px);
	}

	@media (max-width: 1024px) {
		.footer.compact-footer {
			height: auto;
			padding: 2.5rem 1.5rem;
		}
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
		.footer-vdivider {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
