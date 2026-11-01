<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<section class="cta-kemitraan">
	<div class="cta-bg">
		<img
			src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop"
			alt="SDJNusantara gedung"
			class="cta-img"
			crossorigin="anonymous"
		/>
	</div>
	<div class="cta-overlay"></div>
	<div class="cta-content">
		<div class="cta-inner">
			<h2 class="cta-heading">
				Mari Bersinergi Bersama<br />
				<span class="gold">SDJNusantara</span>
			</h2>
			<p class="cta-desc">
				Bergabunglah dengan jaringan mitra institusi pendidikan, perusahaan, dan organisasi
				yang telah mempercayakan pengembangan sumber daya manusia kepada kami.
			</p>
			<div class="cta-actions">
				<a href="/kontak" class="cta-btn-gold">
					Hubungi Kami
					<Icon icon="mdi:arrow-right" width="18" height="18" />
				</a>
				<a href="/kemitraan" class="cta-btn-outline">
					Ajukan Kemitraan
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-kemitraan {
		position: relative;
		padding: 5rem 2rem;
		overflow: hidden;
	}

	.cta-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.cta-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 55%;
	}

	.cta-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background: rgba(8,33,61,0.82);
	}

	.cta-content {
		position: relative;
		z-index: 2;
	}

	.cta-inner {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.cta-heading {
		font-size: 2.25rem;
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.25;
	}

	.gold {
		color: #D9A441;
	}

	.cta-desc {
		font-size: 0.9rem;
		color: rgba(255,255,255,0.75);
		line-height: 1.8;
		max-width: 520px;
	}

	.cta-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.cta-btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.75rem 1.5rem;
		background: #D9A441;
		color: #FFFFFF;
		font-weight: 700;
		font-size: 0.875rem;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
	}

	.cta-btn-gold:hover {
		background: #c4922e;
		transform: translateY(-1px);
	}

	.cta-btn-outline {
		display: inline-flex;
		align-items: center;
		padding: 0.75rem 1.5rem;
		border: 2px solid rgba(255,255,255,0.6);
		color: #FFFFFF;
		font-weight: 600;
		font-size: 0.875rem;
		border-radius: 6px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.cta-btn-outline:hover {
		background: rgba(255,255,255,0.12);
		border-color: #FFFFFF;
	}

	@media (max-width: 640px) {
		.cta-heading {
			font-size: 1.75rem;
		}
		.cta-actions {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
