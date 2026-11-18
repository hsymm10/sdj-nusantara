<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	interface DetailedItem {
		id: string;
		num: string;
		titleId: string;
		titleEn: string;
		icon: 'network' | 'layers' | 'cube' | 'users' | 'flag';
		paragraphsId: string[];
		paragraphsEn: string[];
	}

	const items: DetailedItem[] = [
		{
			id: 'latar-belakang',
			num: '01',
			titleId: 'Latar Belakang &<br/>Keyakinan Kami',
			titleEn: 'Our Background &<br/>Core Beliefs',
			icon: 'network',
			paragraphsId: [
				'SDjNusantara adalah perusahaan konsultan yang berfokus pada pengembangan talenta, penguatan kapasitas organisasi, pendidikan, serta pengembangan program strategis yang berorientasi pada kebutuhan masa kini dan masa depan.',
				'Kami percaya bahwa kualitas sumber daya manusia merupakan fondasi utama bagi kemajuan organisasi dan bangsa. Karena itu, SDj Nusantara hadir untuk membantu individu, institusi pendidikan, organisasi, perusahaan, dan berbagai pemangku kepentingan dalam mengenali potensi, mengembangkan kompetensi, memperkuat kapasitas, serta membangun peluang yang berkelanjutan.'
			],
			paragraphsEn: [
				'SDjNusantara is a consulting firm focused on talent development, institutional capacity building, education, and strategic programs oriented toward present and future needs.',
				'We believe that human resource quality is the foundational pillar for the advancement of organizations and the nation. Therefore, SDj Nusantara is here to assist individuals, educational institutions, organizations, corporations, and stakeholders in recognizing potential, developing competencies, strengthening capacity, and building sustainable opportunities.'
			]
		},
		{
			id: 'pendekatan',
			num: '02',
			titleId: 'Pendekatan<br/>Pengembangan<br/>Talenta',
			titleEn: 'Talent Development<br/>Approach',
			icon: 'layers',
			paragraphsId: [
				'Pendekatan kami menggabungkan pemetaan kebutuhan, pengembangan talenta, pendampingan, pelatihan, serta perancangan program yang disesuaikan dengan konteks dan tujuan masing-masing mitra. Setiap solusi dirancang secara terstruktur, praktis, dan berorientasi pada hasil agar mampu memberikan dampak yang nyata dan relevan.'
			],
			paragraphsEn: [
				'Our approach combines needs assessment, talent development, mentoring, training, and program design tailored to the unique context and objectives of each partner. Every solution is structured, practical, and results-oriented to deliver real and relevant impact.'
			]
		},
		{
			id: 'ruang-lingkup',
			num: '03',
			titleId: 'Ruang Lingkup<br/>Pengembangan',
			titleEn: 'Scope of<br/>Development',
			icon: 'cube',
			paragraphsId: [
				'Ruang lingkup layanan SDj Nusantara mencakup pengembangan organisasi dan sumber daya manusia, pendidikan dan pengembangan talenta, pelatihan dan peningkatan kapasitas, serta pengembangan kemitraan dan program strategis. Melalui pendekatan tersebut, kami berupaya menjembatani potensi individu dengan kebutuhan organisasi serta menghubungkan pendidikan dengan perkembangan dunia kerja dan tantangan masa depan.'
			],
			paragraphsEn: [
				'SDj Nusantara’s scope of services encompasses organizational and human capital development, education and talent cultivation, training and capacity building, as well as partnership development and strategic initiatives. Through this approach, we bridge individual potential with organizational needs and align education with modern workplace dynamics and future challenges.'
			]
		},
		{
			id: 'tim-pengalaman',
			num: '04',
			titleId: 'Tim & Pengalaman<br/>Lintas Bidang',
			titleEn: 'Multidisciplinary<br/>Team & Experience',
			icon: 'users',
			paragraphsId: [
				'SDj Nusantara didukung oleh tim yang memiliki pengalaman lintas bidang dalam pendidikan, pengembangan sumber daya manusia, kebijakan, manajemen, pengembangan organisasi, dan pengelolaan program strategis. Keberagaman pengalaman tersebut memungkinkan kami melihat setiap tantangan dari berbagai perspektif dan menghadirkan solusi yang lebih komprehensif.'
			],
			paragraphsEn: [
				'SDj Nusantara is powered by a team with cross-disciplinary expertise spanning education, human resource development, public policy, management, organizational strategy, and strategic program governance. This diverse background empowers us to examine every challenge from multiple perspectives and deliver comprehensive solutions.'
			]
		},
		{
			id: 'komitmen',
			num: '05',
			titleId: 'Komitmen Kami<br/>untuk Indonesia',
			titleEn: 'Our Commitment<br/>for Indonesia',
			icon: 'flag',
			paragraphsId: [
				'Kami juga meyakini bahwa pengembangan talenta tidak hanya berbicara tentang peningkatan keterampilan, tetapi juga tentang kemampuan untuk memahami potensi, menentukan arah, membangun karakter, memperluas wawasan, dan menciptakan kesempatan untuk berkembang.',
				'Dengan semangat kolaborasi, integritas, dan pembelajaran berkelanjutan, SDj Nusantara berkomitmen menjadi mitra strategis bagi individu dan organisasi dalam membangun kapasitas, mengembangkan talenta, serta menciptakan dampak yang berkelanjutan bagi kemajuan Indonesia.'
			],
			paragraphsEn: [
				'We also believe that talent development is not merely about upskilling, but about cultivating self-awareness, setting direction, building character, broadening perspectives, and creating opportunities to thrive.',
				'With a spirit of collaboration, integrity, and lifelong learning, SDj Nusantara is committed to being a strategic partner for individuals and organizations in building capacity, nurturing talent, and generating lasting impact for the future of Indonesia.'
			]
		}
	];
</script>

<section class="detailed-section" id="mengenal-sdjnusantara">
	<div class="detailed-container">
		<!-- Section Header -->
		<div class="section-header">
			<div class="section-label">{i18n.pick('MENGENAL SDJNUSANTARA', 'GETTING TO KNOW SDJNUSANTARA')}</div>
			<h2 class="section-title">
				{i18n.pick('Mengenal SDjNusantara', 'Getting to Know SDjNusantara')} <span class="highlight-gold">{i18n.pick('Lebih Dekat', 'Closer')}</span>
			</h2>
		</div>

		<!-- 5 Subsections / Cards -->
		<div class="cards-list">
			{#each items as item (item.id)}
				<article class="detailed-card">
					<!-- Left: Icon + Number Badge + Title -->
					<div class="card-left">
						<div class="icon-tile" aria-hidden="true">
							{#if item.icon === 'network'}
								<!-- Network / Connected Nodes SVG -->
								<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="18" cy="5" r="3"></circle>
									<circle cx="6" cy="12" r="3"></circle>
									<circle cx="18" cy="19" r="3"></circle>
									<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
									<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
								</svg>
							{:else if item.icon === 'layers'}
								<!-- Layers SVG -->
								<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
									<polyline points="2 17 12 22 22 17"></polyline>
									<polyline points="2 12 12 17 22 12"></polyline>
								</svg>
							{:else if item.icon === 'cube'}
								<!-- 3D Cube / Hexagon SVG -->
								<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
									<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
									<line x1="12" y1="22.08" x2="12" y2="12"></line>
								</svg>
							{:else if item.icon === 'users'}
								<!-- Users / Team SVG -->
								<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							{:else if item.icon === 'flag'}
								<!-- Flag SVG -->
								<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
									<line x1="4" y1="22" x2="4" y2="15"></line>
								</svg>
							{/if}
						</div>

						<div class="title-group">
							<span class="num-badge">{item.num}</span>
							<h3 class="item-title">
								{@html i18n.pick(item.titleId, item.titleEn)}
							</h3>
						</div>
					</div>

					<!-- Vertical Line Divider -->
					<div class="card-divider" aria-hidden="true"></div>

					<!-- Right: Verbatim Paragraphs -->
					<div class="card-right">
						{#each (i18n.lang === 'en' ? item.paragraphsEn : item.paragraphsId) as p}
							<p class="item-desc">{p}</p>
						{/each}
					</div>
				</article>
			{/each}
		</div>

		<!-- Centered Duo-Pill Divider (Teal + Gold) above Visi & Misi -->
		<div class="section-duo-divider" aria-hidden="true">
			<span class="duo-pill teal"></span>
			<span class="duo-pill gold"></span>
		</div>
	</div>
</section>

<style>
	.detailed-section {
		background: #FFFFFF;
		padding: 24px 0 48px 0;
		position: relative;
	}

	.detailed-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.detailed-container {
			max-width: 1500px;
		}
	}

	/* Header */
	.section-header {
		margin-bottom: 2rem;
	}

	.section-label {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		margin-bottom: 0.45rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.section-title {
		font-size: clamp(26px, 2.4vw, 34px);
		font-weight: 800;
		color: #082442;
		margin: 0;
		line-height: 1.2;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #F5B331;
	}

	/* Cards List */
	.cards-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.detailed-card {
		background: #F4F9FA;
		border: 1px solid #E1EDF0;
		border-radius: 16px;
		padding: 22px 28px;
		display: flex;
		align-items: center;
		gap: 32px;
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
		box-sizing: border-box;
	}

	.detailed-card:hover {
		border-color: #B2D8DC;
		box-shadow: 0 6px 20px rgba(0, 166, 178, 0.06);
	}

	/* Left Column */
	.card-left {
		display: flex;
		align-items: center;
		gap: 18px;
		width: 320px;
		flex-shrink: 0;
	}

	.icon-tile {
		width: 54px;
		height: 54px;
		min-width: 54px;
		background: #FFFFFF;
		border-radius: 12px;
		border: 1px solid #E2EDF0;
		box-shadow: 0 3px 10px rgba(8, 36, 66, 0.04);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #00A6B2;
	}

	.card-icon {
		width: 25px;
		height: 25px;
	}

	.title-group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
	}

	.num-badge {
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 11px;
		font-weight: 700;
		padding: 1.5px 10px;
		border-radius: 99px;
		display: inline-block;
		line-height: 1.4;
		letter-spacing: 0.03em;
	}

	.item-title {
		font-size: 16px;
		font-weight: 800;
		color: #082442;
		margin: 0;
		line-height: 1.25;
		letter-spacing: -0.01em;
	}

	/* Vertical Divider */
	.card-divider {
		width: 1px;
		align-self: stretch;
		background: #D5E5E8;
		flex-shrink: 0;
	}

	/* Right Column */
	.card-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.item-desc {
		font-size: 13px;
		line-height: 1.62;
		color: #37474F;
		margin: 0;
		text-align: left;
		text-wrap: pretty;
	}

	/* Centered Duo-Pill Divider */
	.section-duo-divider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 48px;
		width: 100%;
	}

	.duo-pill {
		width: 32px;
		height: 3.5px;
		border-radius: 99px;
		display: inline-block;
	}

	.duo-pill.teal {
		background: #00A6B2;
	}

	.duo-pill.gold {
		background: #F5B331;
	}

	/* Responsive */
	@media (max-width: 992px) {
		.detailed-card {
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
			padding: 20px;
		}

		.card-left {
			width: 100%;
		}

		.card-divider {
			width: 100%;
			height: 1px;
			align-self: auto;
		}

		.card-right {
			width: 100%;
		}
	}
</style>
