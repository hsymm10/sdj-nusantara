<script lang="ts">
	import { contactConfig } from '#lib/config/contact';

	let fullName = $state('');
	let institution = $state('');
	let email = $state('');
	let whatsapp = $state('');
	let needType = $state('');
	let message = $state('');
	let agreed = $state(false);

	let errorMsg = $state('');
	let isSubmitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		errorMsg = '';

		if (!fullName.trim()) {
			errorMsg = 'Nama Lengkap wajib diisi.';
			return;
		}
		if (!email.trim() || !email.includes('@')) {
			errorMsg = 'Email valid wajib diisi.';
			return;
		}
		if (!whatsapp.trim()) {
			errorMsg = 'Nomor WhatsApp wajib diisi.';
			return;
		}
		if (!needType) {
			errorMsg = 'Silakan pilih jenis kebutuhan.';
			return;
		}
		if (!message.trim()) {
			errorMsg = 'Pesan / detail konsultasi wajib diisi.';
			return;
		}
		if (!agreed) {
			errorMsg = 'Anda harus menyetujui Kebijakan Privasi dan Syarat & Ketentuan.';
			return;
		}

		isSubmitted = true;

		// Format WhatsApp direct message (TODO: sambungkan ke endpoint/email admin)
		const formattedPhone = whatsapp.replace(/^0/, '').replace(/^\+62/, '').trim();
		const waText = `Halo SDJNusantara, saya ingin mengirim pesan konsultasi:%0A%0A` +
			`*Nama:* ${encodeURIComponent(fullName)}%0A` +
			(institution.trim() ? `*Instansi:* ${encodeURIComponent(institution)}%0A` : '') +
			`*Email:* ${encodeURIComponent(email)}%0A` +
			`*WhatsApp:* +62${encodeURIComponent(formattedPhone)}%0A` +
			`*Jenis Kebutuhan:* ${encodeURIComponent(needType)}%0A` +
			`*Pesan:* ${encodeURIComponent(message.trim())}`;

		const targetUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${waText}`;
		window.open(targetUrl, '_blank', 'noopener,noreferrer');
	}

	function resetForm() {
		fullName = '';
		institution = '';
		email = '';
		whatsapp = '';
		needType = '';
		message = '';
		agreed = false;
		isSubmitted = false;
		errorMsg = '';
	}
</script>

<section class="form-channels-section">
	<!-- Background image blob on the right edge (x ±1210 -> 1536, tinggi ±430px) -->
	<div class="blob-bg-wrap">
		<div class="blob-mask">
			<img
				src="/images/contact-office-reception.jpg"
				alt="Kantor SDJNusantara"
				class="blob-img"
				loading="lazy"
			/>
			<div class="blob-overlay"></div>
		</div>

		<!-- Crescent / swoosh emas di kiri-bawah foto blob -->
		<svg class="blob-swoosh" viewBox="0 0 160 90" fill="none" preserveAspectRatio="none">
			<path d="M0 90 C50 70 100 40 160 0 L160 90 Z" fill="url(#gold-blob-swoosh)" opacity="0.9" />
			<defs>
				<linearGradient id="gold-blob-swoosh" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#F5B331" />
					<stop offset="100%" stop-color="#E5A320" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="form-channels-container">
		<!-- Left Column: Form Card (x ±93 -> 760 pada 1536) -->
		<div class="form-col">
			<div class="form-card">
				<!-- Dekorasi gelombang teal+emas SVG di kiri-bawah kartu -->
				<div class="card-wave-decor">
					<svg viewBox="0 0 140 80" fill="none" class="card-wave-svg">
						<path d="M0 80 C50 70 95 40 130 0 L0 0 Z" fill="#079EAD" opacity="0.12" />
						<path d="M0 80 C35 75 75 55 105 25 L0 25 Z" fill="#F5B331" opacity="0.16" />
					</svg>
				</div>

				<h2 class="form-title">Kirim Pesan Konsultasi</h2>
				<p class="form-subtitle">
					Sampaikan kebutuhan Anda, tim kami akan segera menghubungi untuk memberikan informasi dan solusi terbaik.
				</p>

				{#if isSubmitted}
					<div class="success-alert">
						<div class="success-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
						</div>
						<div>
							<h3 class="success-title">Pesan Berhasil Terkirim!</h3>
							<p class="success-desc">
								Terima kasih, {fullName}. Permohonan konsultasi Anda telah diteruskan ke tim SDJNusantara via WhatsApp.
							</p>
							<button type="button" class="btn-reset" onclick={resetForm}>
								Kirim Pesan Lain
							</button>
						</div>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="contact-form">
						{#if errorMsg}
							<div class="error-badge">
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="12" y1="8" x2="12" y2="12"></line>
									<line x1="12" y1="16" x2="12.01" y2="16"></line>
								</svg>
								<span>{errorMsg}</span>
							</div>
						{/if}

						<!-- Row 1: Nama Lengkap* | Instansi / Organisasi (opsional) -->
						<div class="form-row-2">
							<div class="form-group">
								<label for="fullName">Nama Lengkap <span class="required">*</span></label>
								<input
									type="text"
									id="fullName"
									bind:value={fullName}
									placeholder="Masukkan nama lengkap"
									required
								/>
							</div>

							<div class="form-group">
								<label for="institution">Instansi / Organisasi</label>
								<input
									type="text"
									id="institution"
									bind:value={institution}
									placeholder="Nama instansi (opsional)"
								/>
							</div>
						</div>

						<!-- Row 2: Email* | No. WhatsApp* -->
						<div class="form-row-2">
							<div class="form-group">
								<label for="email">Email <span class="required">*</span></label>
								<input
									type="email"
									id="email"
									bind:value={email}
									placeholder="nama@email.com"
									required
								/>
							</div>

							<div class="form-group">
								<label for="whatsapp">No. WhatsApp <span class="required">*</span></label>
								<input
									type="tel"
									id="whatsapp"
									bind:value={whatsapp}
									placeholder="08xxxxxxxxxx"
									required
								/>
							</div>
						</div>

						<!-- Row 3: Jenis Kebutuhan* (Select penuh lebar) -->
						<div class="form-group">
							<label for="needType">Jenis Kebutuhan <span class="required">*</span></label>
							<div class="select-wrap">
								<select id="needType" bind:value={needType} required>
									<option value="" disabled selected>Pilih jenis kebutuhan</option>
									<option value="Talent Management">Talent Management</option>
									<option value="Beasiswa">Beasiswa</option>
									<option value="Pelatihan">Pelatihan</option>
									<option value="Sertifikasi">Sertifikasi</option>
									<option value="Kemitraan">Kemitraan</option>
									<option value="Lainnya">Lainnya</option>
								</select>
								<svg class="select-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#082442" stroke-width="2">
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</div>
						</div>

						<!-- Row 4: Pesan / Detail Konsultasi* (textarea ±80px tinggi) -->
						<div class="form-group">
							<label for="message">Pesan / Detail Konsultasi <span class="required">*</span></label>
							<textarea
								id="message"
								bind:value={message}
								rows="3"
								placeholder="Ceritakan kebutuhan Anda secara singkat..."
								required
							></textarea>
						</div>

						<!-- Checkbox Privasi: tautan tanpa garis bawah, hover teal -->
						<div class="privacy-wrap">
							<label class="checkbox-label">
								<input type="checkbox" bind:checked={agreed} required />
								<span class="checkbox-text">
									Saya setuju dengan <a href="/kebijakan-privasi" target="_blank">Kebijakan Privasi</a> dan <a href="/syarat-ketentuan" target="_blank">Syarat & Ketentuan</a> yang berlaku.
								</span>
							</label>
						</div>

						<!-- Tombol Emas Penuh Lebar ±45px dengan Ikon Pesawat Kertas -->
						<button type="submit" class="btn-submit-gold">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="22" y1="2" x2="11" y2="13"></line>
								<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
							</svg>
							<span>Kirim Pesan Konsultasi</span>
						</button>
					</form>
				{/if}
			</div>
		</div>

		<!-- Right Column: Cara Lain Menghubungi Kami (x ±800 -> 1445) -->
		<div class="channels-col">
			<div class="channels-header">
				<div class="section-dash-line">
					<span class="dash"></span>
				</div>
				<h2 class="channels-title">Cara Lain Menghubungi Kami</h2>
				<p class="channels-desc">Pilih kanal komunikasi yang paling nyaman bagi Anda.</p>
			</div>

			<!-- 3 Channel White Cards (tinggi ±120px) dengan lingkaran teal terisi ±56px berikon putih -->
			<div class="channel-cards-list">
				<!-- Card 1: WhatsApp -->
				<a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" class="channel-card">
					<div class="channel-icon-circle">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
					</div>
					<div class="channel-info">
						<span class="channel-label">WhatsApp</span>
						<strong class="channel-value">{contactConfig.phone}</strong>
						<span class="channel-sub">Konsultasi cepat dan langsung dengan tim kami.</span>
					</div>
					<div class="channel-arrow-btn">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2.5">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</a>

				<!-- Card 2: Email -->
				<a href="mailto:{contactConfig.email}" class="channel-card">
					<div class="channel-icon-circle">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="4" width="20" height="16" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
					</div>
					<div class="channel-info">
						<span class="channel-label">Email</span>
						<strong class="channel-value">{contactConfig.email}</strong>
						<span class="channel-sub">Kirim pertanyaan, proposal, atau permintaan informasi melalui email.</span>
					</div>
					<div class="channel-arrow-btn">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2.5">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</a>

				<!-- Card 3: Pertemuan Langsung -->
				<a href="/konsultasi" class="channel-card">
					<div class="channel-icon-circle">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="16" y1="2" x2="16" y2="6"></line>
							<line x1="8" y1="2" x2="8" y2="6"></line>
							<line x1="3" y1="10" x2="21" y2="10"></line>
						</svg>
					</div>
					<div class="channel-info">
						<span class="channel-label">Pertemuan Langsung</span>
						<!-- WAJIB DIVERIFIKASI/DIISI (content-master bagian 15) -->
						<strong class="channel-value">{contactConfig.address}</strong>
						<span class="channel-sub">Jadwalkan pertemuan di kantor kami atau lokasi yang disepakati.</span>
					</div>
					<div class="channel-arrow-btn">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2.5">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</a>
			</div>

			<!-- Follow Kami Card: radius ±16px, 4 ikon sosial kotak membulat ±34px -->
			<div class="follow-card">
				<span class="follow-label">Follow Kami</span>
				<span class="follow-sub">Dapatkan informasi terbaru melalui media sosial kami.</span>
				<div class="social-icons-row">
					<!-- WAJIB DIISI akun resmi -->
					<a href={contactConfig.socials.instagram} target="_blank" rel="noopener noreferrer" class="social-box-btn" aria-label="Instagram">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
							<circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"></circle>
						</svg>
					</a>
					<a href={contactConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" class="social-box-btn" aria-label="LinkedIn">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</a>
					<a href={contactConfig.socials.youtube} target="_blank" rel="noopener noreferrer" class="social-box-btn" aria-label="YouTube">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
					</a>
					<a href="/" class="social-box-btn" aria-label="Website">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="2" y1="12" x2="22" y2="12"></line>
							<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.form-channels-section {
		position: relative;
		width: 100%;
		background: #FFFFFF;
		padding: 8px 0 12px;
		box-sizing: border-box;
		overflow: hidden;
	}

	/* Blob foto resepsionis di kanan menempel tepi layar (x ±1210 -> 1536, tinggi ±430px) */
	.blob-bg-wrap {
		position: absolute;
		top: 40px;
		right: 0;
		width: 320px;
		height: 430px;
		pointer-events: none;
		z-index: 1;
	}

	.blob-mask {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 140px 0 0 140px;
		overflow: hidden;
	}

	.blob-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		opacity: 0.85;
	}

	.blob-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.95) 0%,
			rgba(255, 255, 255, 0.45) 50%,
			rgba(255, 255, 255, 0.1) 100%
		);
	}

	.blob-swoosh {
		position: absolute;
		bottom: 0;
		left: -30px;
		width: 160px;
		height: 90px;
		z-index: 2;
	}

	/* Container khusus halaman Kontak (x ±93 -> 1445 pada 1536) */
	.form-channels-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1352px;
		margin: 0 auto;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 660px 1fr;
		gap: 40px;
		align-items: start;
	}

	/* Form Column Styles */
	.form-card {
		position: relative;
		background: #FFFFFF;
		border-radius: 21px;
		padding: 20px 24px;
		box-shadow: 0 10px 35px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.9);
		overflow: hidden;
		box-sizing: border-box;
		min-height: 520px;
	}

	.card-wave-decor {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 140px;
		height: 80px;
		pointer-events: none;
		z-index: 0;
	}

	.card-wave-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.form-title {
		position: relative;
		z-index: 1;
		font-size: 24px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 5px;
		letter-spacing: -0.015em;
	}

	.form-subtitle {
		position: relative;
		z-index: 1;
		font-size: 15px;
		line-height: 1.45;
		color: #64748B;
		margin: 0 0 16px;
		max-width: 580px;
		text-wrap: pretty;
	}

	.contact-form {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 11px;
	}

	.form-row-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.form-group label {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
	}

	.required {
		color: #E11927;
	}

	/* Field PUTIH dengan border tipis #D9E2EC radius ±10px tinggi ±40px */
	.form-group input,
	.select-wrap select {
		width: 100%;
		height: 40px;
		background: #FFFFFF;
		border: 1px solid #D9E2EC;
		border-radius: 10px;
		padding: 0 12px;
		font-size: 14px;
		color: #082442;
		font-family: inherit;
		box-sizing: border-box;
		transition: all 0.2s ease;
	}

	.form-group textarea {
		width: 100%;
		height: 80px;
		background: #FFFFFF;
		border: 1px solid #D9E2EC;
		border-radius: 10px;
		padding: 10px 12px;
		font-size: 14px;
		color: #082442;
		font-family: inherit;
		box-sizing: border-box;
		resize: vertical;
		transition: all 0.2s ease;
	}

	.form-group input:focus,
	.form-group textarea:focus,
	.select-wrap select:focus {
		outline: none;
		border-color: #16B6C1;
		box-shadow: 0 0 0 3px rgba(22, 182, 193, 0.14);
	}

	.select-wrap {
		position: relative;
		width: 100%;
	}

	.select-wrap select {
		appearance: none;
		padding-right: 32px;
		cursor: pointer;
	}

	.select-chevron {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
	}

	.privacy-wrap {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		margin-top: 2px;
	}

	.checkbox-label {
		display: flex;
		align-items: flex-start;
		gap: 9px;
		cursor: pointer;
	}

	.checkbox-label input {
		margin-top: 3px;
		accent-color: #16B6C1;
		width: 15px;
		height: 15px;
	}

	.checkbox-text {
		font-size: 14px;
		line-height: 1.45;
		color: #082442;
	}

	.checkbox-text a {
		color: #082442;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s ease;
	}

	.checkbox-text a:hover {
		color: #079EAD;
	}

	.btn-submit-gold {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 100%;
		height: 45px;
		background: #F5B331;
		color: #082442;
		border: none;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.3);
		transition: all 0.2s ease;
	}

	.btn-submit-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.error-badge {
		display: flex;
		align-items: center;
		gap: 8px;
		background: #FEF2F2;
		border: 1px solid #FECACA;
		color: #DC2626;
		padding: 8px 12px;
		border-radius: 8px;
		font-size: 13px;
		font-weight: 600;
	}

	.success-alert {
		display: flex;
		align-items: flex-start;
		gap: 14px;
		background: #EBF8F9;
		border: 1px solid rgba(22, 182, 193, 0.4);
		border-radius: 12px;
		padding: 20px;
	}

	.success-icon {
		background: #FFFFFF;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(7, 158, 173, 0.15);
		flex-shrink: 0;
	}

	.success-title {
		font-size: 16px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 4px;
	}

	.success-desc {
		font-size: 13.5px;
		line-height: 1.5;
		color: #4B6382;
		margin: 0 0 12px;
	}

	.btn-reset {
		background: #079EAD;
		color: #FFFFFF;
		border: none;
		border-radius: 8px;
		padding: 6px 14px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
	}

	/* Right Column: Channels */
	.channels-col {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.section-dash-line {
		margin-bottom: 4px;
	}

	.dash {
		display: inline-block;
		width: 18px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.channels-title {
		font-size: 26px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 2px;
		letter-spacing: -0.015em;
	}

	.channels-desc {
		font-size: 14.5px;
		color: #64748B;
		margin: 0 0 8px;
	}

	.channel-cards-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.channel-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 16px;
		padding: 10px 16px;
		min-height: 82px;
		display: flex;
		align-items: center;
		gap: 14px;
		text-decoration: none;
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.channel-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.09);
		border-color: #16B6C1;
	}

	.channel-icon-circle {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.channel-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
		flex: 1;
	}

	.channel-label {
		font-size: 13px;
		font-weight: 700;
		color: #082442;
	}

	.channel-value {
		font-size: 18px;
		font-weight: 700;
		color: #082442;
	}

	.channel-sub {
		font-size: 14px;
		color: #64748B;
		line-height: 1.35;
	}

	.channel-arrow-btn {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1.5px solid rgba(22, 182, 193, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all 0.2s ease;
	}

	.channel-card:hover .channel-arrow-btn {
		background: #16B6C1;
		border-color: #16B6C1;
	}

	.channel-card:hover .channel-arrow-btn svg {
		stroke: #FFFFFF;
	}

	/* Follow Kami Card */
	.follow-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 16px;
		padding: 16px 20px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
	}

	.follow-label {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
	}

	.follow-sub {
		font-size: 13px;
		color: #64748B;
		margin-bottom: 6px;
	}

	.social-icons-row {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.social-box-btn {
		width: 34px;
		height: 34px;
		border-radius: 8px;
		background: #F1F5F9;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.social-box-btn:hover {
		background: #16B6C1;
		color: #FFFFFF;
		transform: translateY(-1px);
	}

	@media (max-width: 1440px) {
		.form-channels-container {
			padding: 0 24px;
		}
	}

	@media (max-width: 1024px) {
		.form-channels-container {
			grid-template-columns: 1fr;
			gap: 32px;
		}
		.blob-bg-wrap {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.form-row-2 {
			grid-template-columns: 1fr;
			gap: 12px;
		}
		.form-card {
			padding: 22px 18px;
			border-radius: 16px;
		}
		.form-title {
			font-size: 20px;
		}
		.form-group input,
		.select-wrap select {
			font-size: 16px; /* prevent iOS zoom */
		}
	}
</style>
