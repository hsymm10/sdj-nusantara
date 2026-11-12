<!-- Section 05: 5 Tahap Pelaksanaan Pendampingan Kami (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const steps = $derived([
		{
			num: '01',
			title: i18n.pick('Konsultasi &\nAnalisis Kebutuhan', 'Consultation &\nNeeds Analysis'),
			icon: 'message'
		},
		{
			num: '02',
			title: i18n.pick('Perencanaan\nProgram', 'Program\nPlanning'),
			icon: 'calendar'
		},
		{
			num: '03',
			title: i18n.pick('Pendampingan\nIntensif', 'Intensive\nMentoring'),
			icon: 'users'
		},
		{
			num: '04',
			title: i18n.pick('Evaluasi &\nUmpan Balik', 'Evaluation &\nFeedback'),
			icon: 'chart'
		},
		{
			num: '05',
			title: i18n.pick('Tindak Lanjut &\nPengembangan', 'Follow-Up &\nGrowth'),
			icon: 'trophy'
		}
	]);
</script>

<section class="steps-edu-section" id="tahap-pendampingan">
	<!-- Background Image & Gradient Overlay -->
	<div class="steps-bg-wrap" aria-hidden="true">
		<img
			src="/images/cta-pendidikan-academic-bg.jpg"
			alt=""
			class="steps-bg-img"
			loading="lazy"
			decoding="async"
		/>
		<div class="steps-bg-overlay"></div>
	</div>

	<!-- Bottom Wave Ribbons (Teal, Turquoise, Yellow) -->
	<svg class="steps-bottom-wave" viewBox="0 0 1536 64" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<defs>
			<linearGradient id="teal-ribbon-left-steps" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#08B5C0" />
				<stop offset="100%" stop-color="#008C99" />
			</linearGradient>
			<linearGradient id="teal-ribbon-right-steps" x1="0" y1="1" x2="1" y2="0">
				<stop offset="0%" stop-color="#008C99" />
				<stop offset="100%" stop-color="#08B5C0" />
			</linearGradient>
		</defs>

		<!-- Left Wave Layers -->
		<path d="M0,0 C90,4 170,22 250,64 L0,64 Z" fill="#0A5E75" />
		<path d="M0,16 C95,20 190,34 290,64 L0,64 Z" fill="url(#teal-ribbon-left-steps)" />

		<!-- Right Wave Layers -->
		<path d="M1240,64 C1340,48 1435,22 1536,10 L1536,64 Z" fill="url(#teal-ribbon-right-steps)" />
		<path d="M1360,64 C1430,52 1485,34 1536,22 L1536,64 Z" fill="#FFB820" />
	</svg>

	<div class="steps-edu-container">
		<!-- Left Column: Info & Button -->
		<div class="steps-edu-left">
			<div class="steps-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">{i18n.pick('LAYANAN PENDAMPINGAN', 'MENTORING PROCESS')}</span>
			</div>
			<h2 class="steps-title">
				{i18n.pick('5 Tahap Pelaksanaan', '5 Implementation Stages of')}
				<span class="highlight-gold">{i18n.pick('Pendampingan Kami', 'Our Mentoring')}</span>
			</h2>
			<p class="steps-desc">
				{i18n.pick(
					'Alur pendampingan yang sistematis, terukur, dan berorientasi pada hasil terbaik.',
					'A systematic, measurable mentoring workflow focused on your best outcomes.'
				)}
			</p>
			<a href="/layanan" class="steps-btn">
				<span>{i18n.pick('Pelajari Tahapannya', 'Explore the Stages')}</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right Column: 5 Steps Horizontal White Panel -->
		<div class="steps-edu-right">
			<div class="steps-cards-list">
				{#each steps as st, idx}
					<div class="step-card">
						<div class="step-icon-wrap">
							{#if st.icon === 'message'}
								<!-- Double chat bubble icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08B5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M14 9a2 2 0 0 1-2 2H6l-3 3V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2z"/>
									<path d="M18 9h2a2 2 0 0 1 2 2v8l-3-3h-5a2 2 0 0 1-2-2v-1"/>
								</svg>
							{:else if st.icon === 'calendar'}
								<!-- Calendar icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08B5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
									<circle cx="8" cy="14" r="1" fill="#08B5C0"/>
									<circle cx="12" cy="14" r="1" fill="#08B5C0"/>
									<circle cx="16" cy="14" r="1" fill="#08B5C0"/>
								</svg>
							{:else if st.icon === 'users'}
								<!-- Users 3-people group icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08B5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							{:else if st.icon === 'chart'}
								<!-- Trending chart icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08B5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<line x1="18" y1="20" x2="18" y2="10" />
									<line x1="12" y1="20" x2="12" y2="4" />
									<line x1="6" y1="20" x2="6" y2="14" />
									<polyline points="2 12 7 8 13 14 22 4" />
									<polyline points="16 4 22 4 22 10" />
								</svg>
							{:else}
								<!-- Trophy icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08B5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
									<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
									<path d="M4 22h16"/>
									<path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"/>
									<path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"/>
									<path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
								</svg>
							{/if}
						</div>

						<div class="step-num">{st.num}</div>
						<div class="step-title">{st.title}</div>
					</div>

					{#if idx < steps.length - 1}
						<div class="step-chevron" aria-hidden="true">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#08B5C0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="9 18 15 12 9 6" />
							</svg>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.steps-edu-section {
		background-color: #071D36;
		color: #FFFFFF;
		padding: 72px 0;
		position: relative;
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	/* Background Image with Cover and Right Center positioning for graduation cap */
	.steps-bg-wrap {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
	}

	.steps-bg-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: right 20% center;
		filter: brightness(0.95);
	}

	/* Subtle transparent navy overlay that keeps background library & cap clearly visible while making text easy to read */
	.steps-bg-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			rgba(7, 29, 54, 0.92) 0%,
			rgba(11, 41, 72, 0.82) 36%,
			rgba(11, 41, 72, 0.58) 68%,
			rgba(11, 41, 72, 0.28) 100%
		);
	}

	/* Bottom wave decoration */
	.steps-bottom-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 56px;
		pointer-events: none;
		z-index: 2;
	}

	/* Content Container */
	.steps-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
		box-sizing: border-box;
		position: relative;
		z-index: 3;
	}

	/* Left Column: Info */
	.steps-edu-left {
		flex: 0 0 330px;
		max-width: 330px;
	}

	.steps-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 18px;
		height: 3px;
		background: #08B5C0;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 800;
		color: #08B5C0;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.steps-title {
		font-size: clamp(24px, 2.2vw, 30px);
		line-height: 1.22;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 14px;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB820;
		display: block;
	}

	.steps-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 24px;
		max-width: 310px;
	}

	.steps-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #FFB820;
		color: #0B2948;
		font-size: 13px;
		font-weight: 700;
		padding: 11px 22px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 184, 32, 0.3);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.steps-btn:hover {
		background: #e6a51d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 184, 32, 0.42);
	}

	/* Right Column: Steps White Panel */
	.steps-edu-right {
		flex: 1;
		background: #FFFFFF;
		border-radius: 22px;
		padding: 26px 22px;
		box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
	}

	.steps-cards-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
	}

	.step-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		flex: 1;
		min-width: 0;
	}

	.step-icon-wrap {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background: #E6F8F9;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
		transition: transform 0.2s;
	}

	.step-card:hover .step-icon-wrap {
		transform: translateY(-2px);
	}

	.step-num {
		font-size: 20px;
		font-weight: 800;
		color: #08B5C0;
		margin-bottom: 4px;
		line-height: 1;
	}

	.step-title {
		font-size: 12px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		white-space: pre-line;
		text-align: center;
	}

	.step-chevron {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin: 0 2px;
	}

	.step-chevron svg {
		stroke: #08B5C0;
	}

	/* Responsive Tablet */
	@media (max-width: 1024px) {
		.steps-edu-container {
			gap: 24px;
			padding: 0 24px;
		}

		.steps-edu-left {
			flex: 0 0 270px;
			max-width: 270px;
		}

		.steps-title {
			font-size: 22px;
		}

		.steps-edu-right {
			padding: 20px 14px;
		}

		.step-num {
			font-size: 17px;
		}

		.step-title {
			font-size: 11px;
		}

		.step-icon-wrap {
			width: 42px;
			height: 42px;
		}
	}

	/* Responsive Mobile */
	@media (max-width: 768px) {
		.steps-edu-section {
			padding: 56px 0 64px;
		}

		.steps-edu-container {
			flex-direction: column;
			text-align: center;
			gap: 32px;
			padding: 0 20px;
		}

		.steps-edu-left {
			max-width: 100%;
			flex: 1 1 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.steps-desc {
			max-width: 100%;
		}

		.steps-bg-img {
			object-position: center center;
		}

		.steps-bg-overlay {
			background: rgba(7, 29, 54, 0.88);
		}

		.steps-edu-right {
			width: 100%;
			padding: 24px 18px;
			box-sizing: border-box;
		}

		.steps-cards-list {
			flex-direction: column;
			gap: 16px;
		}

		.step-card {
			width: 100%;
			flex-direction: row;
			align-items: center;
			text-align: left;
			gap: 16px;
		}

		.step-icon-wrap {
			margin-bottom: 0;
			flex-shrink: 0;
		}

		.step-num {
			margin-bottom: 0;
			font-size: 18px;
			flex-shrink: 0;
			width: 32px;
		}

		.step-title {
			text-align: left;
			white-space: normal;
			font-size: 13px;
		}

		.step-chevron {
			transform: rotate(90deg);
			margin: -4px 0;
			opacity: 0.6;
		}
	}
</style>
