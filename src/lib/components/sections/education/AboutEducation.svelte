<!-- Section 03: Tentang SDJNusantara (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	import { i18n } from "#lib/stores/i18n.svelte";

	const pillars = $derived([
		{
			id: "terintegrasi",
			title: i18n.pick("Pendidikan Terintegrasi", "Integrated Education"),
			active: false,
			icon: "grad",
		},
		{
			id: "terarah",
			title: i18n.pick("Pendampingan Terarah", "Targeted Mentoring"),
			active: false,
			icon: "users",
		},
		{
			id: "aplikatif",
			title: i18n.pick("Program Aplikatif", "Practical Programs"),
			active: true,
			icon: "chart",
		},
		{
			id: "kolaborasi",
			title: i18n.pick("Jaringan Kolaborasi", "Collaborative Network"),
			active: false,
			icon: "nodes",
		},
		{
			id: "transparansi",
			title: i18n.pick("Etika & Transparansi", "Ethics & Transparency"),
			active: false,
			icon: "shield",
		},
	]);
</script>

<section class="about-section" id="tentang-sdj">
	<div class="about-container">
		<!-- Kolom 1 — Konten Utama (Kiri: 34%) -->
		<div class="about-left-col">
			<div class="section-badge">
				<span class="badge-text"
					>{i18n.pick(
						"Tentang SDJNusantara",
						"About SDJNusantara",
					)}</span
				>
			</div>
			<h2 class="about-title">
				{i18n.pick("Menjembatani Potensi", "Bridging Potential")}
				<span class="title-line"
					>{i18n.pick("dengan", "with")}
					<span class="highlight-cyan"
						>{i18n.pick("Peluang", "Education &")}</span
					></span
				>
				<span class="highlight-gold title-line"
					>{i18n.pick(
						"Pendidikan & Karier",
						"Career Opportunities",
					)}</span
				>
			</h2>
			<p class="about-desc">
				{i18n.pick(
					"SDJNusantara hadir untuk memperluas akses, membangun kompetensi, dan menghubungkan individu dengan peluang terbaik di dunia pendidikan dan dunia kerja.",
					"SDJNusantara exists to expand access, build competencies, and connect individuals with top opportunities in education and the workplace.",
				)}
			</p>
			<a href="/tentang-kami" class="about-cta-btn">
				<span
					>{i18n.pick(
						"Selengkapnya Tentang Kami",
						"More About Us",
					)}</span
				>
				<svg
					width="15"
					height="15"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Kolom 2 — Daftar Keunggulan (Tengah: 30%) -->
		<div class="about-mid-col">
			<div class="pillars-list">
				{#each pillars as p}
					<div class="pillar-card {p.active ? 'active-pillar' : ''}">
						<div class="pillar-icon-box">
							{#if p.icon === "grad"}
								<svg
									width="19"
									height="19"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.1"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path d="M12 3L2 8l10 5 10-5-10-5z" />
									<path d="M2 8v6" />
									<path d="M6 10.5v5a6 6 0 0 0 12 0v-5" />
								</svg>
							{:else if p.icon === "users"}
								<svg
									width="19"
									height="19"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.1"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path
										d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
									/>
									<circle cx="9" cy="7" r="4" />
									<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							{:else if p.icon === "chart"}
								<svg
									width="19"
									height="19"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.2"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<line x1="18" y1="20" x2="18" y2="10" />
									<line x1="12" y1="20" x2="12" y2="4" />
									<line x1="6" y1="20" x2="6" y2="14" />
								</svg>
							{:else if p.icon === "nodes"}
								<svg
									width="19"
									height="19"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.1"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<circle cx="18" cy="5" r="3" />
									<circle cx="6" cy="12" r="3" />
									<circle cx="18" cy="19" r="3" />
									<line
										x1="8.59"
										y1="13.51"
										x2="15.42"
										y2="17.49"
									/>
									<line
										x1="15.41"
										y1="6.51"
										x2="8.59"
										y2="10.49"
									/>
								</svg>
							{:else if p.icon === "shield"}
								<svg
									width="19"
									height="19"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.1"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path
										d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
									/>
									<path d="M9 12l2 2 4-4" />
								</svg>
							{/if}
						</div>
						<span class="pillar-title">{p.title}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Kolom 3 — Gambar Utama (Kanan: 36%) -->
		<div class="about-right-col">
			<div class="bldg-wrapper">
				<!-- Floating Badge: Dedikasi untuk Talenta Indonesia -->
				<div class="floating-badge">
					<div class="badge-icon" aria-hidden="true">
						<!-- Laurel wreath -->
						<svg
							width="24"
							height="24"
							viewBox="0 0 48 48"
							fill="#FFB51B"
						>
							<path
								d="M16.5 39.5c-4.8-3.4-7.5-8.8-7.5-14.7 0-4.8 1.8-9.3 5.1-12.8l2.1 2.1c-2.8 2.9-4.2 6.8-4.2 10.7 0 5 2.3 9.6 6.3 12.5l-1.8 2.2zm15 0l-1.8-2.2c4-2.9 6.3-7.5 6.3-12.5 0-3.9-1.4-7.8-4.2-10.7l2.1-2.1c3.3 3.5 5.1 8 5.1 12.8 0 5.9-2.7 11.3-7.5 14.7z"
							/>
							<circle cx="11" cy="22" r="3" />
							<circle cx="14" cy="15" r="2.8" />
							<circle cx="20" cy="10" r="2.5" />
							<circle cx="37" cy="22" r="3" />
							<circle cx="34" cy="15" r="2.8" />
							<circle cx="28" cy="10" r="2.5" />
							<circle cx="11" cy="29" r="2.8" />
							<circle cx="37" cy="29" r="2.8" />
							<circle cx="15" cy="35" r="2.5" />
							<circle cx="33" cy="35" r="2.5" />
						</svg>
					</div>
					<div class="badge-text-group">
						<span class="badge-row-1">Dedikasi untuk</span>
						<span class="badge-row-2">Talenta Indonesia</span>
					</div>
				</div>

				<!-- Building Card Frame -->
				<div class="bldg-card">
					<img
						src="/images/about-campus-hd.jpg"
						alt="Gedung Kampus SDJNusantara"
						class="bldg-img"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		position: relative;
		background: #ffffff;
		padding: 76px 0 88px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	.about-container {
		position: relative;
		width: 100%;
		max-width: 1220px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		box-sizing: border-box;
		z-index: 2;
	}

	/* Kolom 1 — Kiri: 34% */
	.about-left-col {
		flex: 0 0 34%;
		max-width: 34%;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		margin-bottom: 14px;
	}

	.badge-text {
		color: #00A6B2;
		font-size: 15px;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.about-title {
		font-size: clamp(24px, 2.25vw, 31px);
		font-weight: 800;
		color: #0b2948;
		line-height: 1.25;
		margin: 0 0 16px;
		letter-spacing: -0.015em;
	}

	.title-line {
		display: block;
	}

	.highlight-cyan {
		color: #00aab5;
	}

	.highlight-gold {
		color: #ffb923;
	}

	.about-desc {
		font-size: 13.5px;
		color: #556980;
		line-height: 1.62;
		margin: 0 0 24px;
		max-width: 360px;
	}

	.about-cta-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		padding: 11px 22px;
		background: #ffb923;
		color: #0b2948;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		white-space: nowrap;
		width: fit-content;
		max-width: 100%;
		box-shadow: 0 4px 14px rgba(255, 185, 35, 0.32);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.about-cta-btn:hover {
		background: #e6a51d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 185, 35, 0.45);
	}

	/* Kolom 2 — Tengah: 30% */
	.about-mid-col {
		flex: 0 0 30%;
		max-width: 30%;
		position: relative;
		display: flex;
		align-items: center;
	}

	.pillars-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.pillar-card {
		display: flex;
		align-items: center;
		gap: 13px;
		padding: 7px 18px 7px 8px;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 9999px;
		box-shadow: 0 2px 8px rgba(11, 41, 72, 0.04);
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.pillar-card:hover {
		transform: translateX(4px);
		box-shadow: 0 4px 14px rgba(0, 170, 181, 0.12);
		border-color: #00aab5;
	}

	.active-pillar {
		background: #f0fafa;
		border: 1.5px solid #00aab5;
		box-shadow: 0 3px 12px rgba(0, 170, 181, 0.12);
	}

	.pillar-icon-box {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #f4f8fa;
		border: 1px solid #e5ebf2;
		color: #0b2948;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all 0.2s;
	}

	.active-pillar .pillar-icon-box {
		background: #ffffff;
		border-color: transparent;
		color: #00aab5;
		box-shadow: 0 2px 6px rgba(0, 170, 181, 0.12);
	}

	.pillar-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #0b2948;
		line-height: 1.3;
	}

	/* Kolom 3 — Kanan: 36% */
	.about-right-col {
		flex: 0 0 36%;
		max-width: 36%;
	}

	.bldg-wrapper {
		position: relative;
		width: 100%;
	}

	/* Floating Badge: Dedikasi untuk Talenta Indonesia */
	.floating-badge {
		position: absolute;
		top: -16px;
		right: -8px;
		z-index: 10;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: #ffffff;
		padding: 7px 18px 7px 12px;
		border-radius: 9999px;
		border: 1px solid #e2e8f0;
		box-shadow: 0 6px 20px rgba(11, 41, 72, 0.08);
	}

	.badge-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.badge-text-group {
		display: flex;
		flex-direction: column;
		line-height: 1.25;
	}

	.badge-row-1 {
		font-size: 10.5px;
		font-weight: 600;
		color: #556980;
	}

	.badge-row-2 {
		font-size: 11px;
		font-weight: 800;
		color: #0b2948;
	}

	.bldg-card {
		position: relative;
		width: 100%;
		height: 330px;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 12px 30px rgba(11, 41, 72, 0.08);
		border: 1px solid #e2e8f0;
		background: #f1f5f9;
	}

	.bldg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}

	.bldg-card:hover .bldg-img {
		transform: scale(1.02);
	}

	@media (max-width: 1024px) {
		.about-container {
			gap: 24px;
			padding: 0 24px;
		}

		.about-left-col {
			flex: 0 0 35%;
			max-width: 35%;
			min-width: 240px;
		}

		.about-mid-col {
			flex: 0 0 30%;
			max-width: 30%;
		}

		.about-right-col {
			flex: 0 0 35%;
			max-width: 35%;
		}

		.about-cta-btn {
			padding: 10px 18px;
			font-size: 13px;
			gap: 7px;
		}

		.bldg-card {
			height: 300px;
			border-radius: 20px;
		}

		.about-title {
			font-size: 22px;
		}

		.pillar-title {
			font-size: 12.5px;
		}

		.pillar-card {
			padding: 6px 14px 6px 6px;
			gap: 10px;
		}

		.floating-badge {
			top: -14px;
			right: -6px;
			padding: 5px 14px 5px 10px;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.about-section {
			padding: 52px 0 64px;
		}

		.about-container {
			flex-direction: column;
			text-align: center;
			gap: 32px;
			padding: 0 20px;
		}

		.about-left-col,
		.about-mid-col,
		.about-right-col {
			flex: 1 1 100%;
			max-width: 100%;
			width: 100%;
		}

		.about-left-col {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.section-badge {
			justify-content: center;
		}

		.about-desc {
			max-width: 100%;
		}

		.pillar-card {
			text-align: left;
		}

		.bldg-card {
			height: 240px;
			border-radius: 20px;
		}

		.floating-badge {
			top: -12px;
			right: 8px;
		}
	}
</style>
