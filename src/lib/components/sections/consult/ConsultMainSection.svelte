<script lang="ts">
	import { contactConfig } from '#lib/config/contact';

	let fullName = $state('');
	let email = $state('');
	let whatsapp = $state('');
	let topic = $state('');
	let notes = $state('');
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
		if (!topic) {
			errorMsg = 'Silakan pilih topik konsultasi.';
			return;
		}
		if (!agreed) {
			errorMsg = 'Anda harus menyetujui Kebijakan Privasi dan Syarat & Ketentuan.';
			return;
		}

		// Success state
		isSubmitted = true;

		// Format text for WhatsApp direct redirect
		const formattedPhone = whatsapp.replace(/^0/, '').replace(/^\+62/, '').trim();
		const message = `Halo SDJNusantara, saya ingin mengajukan konsultasi:%0A%0A` +
			`*Nama:* ${encodeURIComponent(fullName)}%0A` +
			`*Email:* ${encodeURIComponent(email)}%0A` +
			`*WhatsApp:* +62${encodeURIComponent(formattedPhone)}%0A` +
			`*Topik:* ${encodeURIComponent(topic)}%0A` +
			(notes.trim() ? `*Kebutuhan:* ${encodeURIComponent(notes.trim())}` : '');

		const targetUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${message}`;
		
		// Open WhatsApp in new tab
		window.open(targetUrl, '_blank', 'noopener,noreferrer');
	}

	function resetForm() {
		fullName = '';
		email = '';
		whatsapp = '';
		topic = '';
		notes = '';
		agreed = false;
		isSubmitted = false;
		errorMsg = '';
	}
</script>

<section class="consult-main-section">
	<div class="consult-container">
		<!-- Left Column: Mengapa Konsultasi & Alur Konsultasi -->
		<div class="consult-left-col">
			<!-- Mengapa Konsultasi -->
			<div class="why-consult">
				<div class="section-badge-line">
					<span class="badge-dash"></span>
					<h2 class="why-title">Mengapa Konsultasi di SDJNusantara?</h2>
				</div>
				<p class="why-desc">
					Konsultasi bersama tim ahli kami membantu Anda mendapatkan arah, strategi, dan solusi terbaik dalam perjalanan pendidikan dan pengembangan diri.
				</p>

				<!-- 4 Features 2x2 Grid -->
				<div class="features-grid">
					<!-- Feature 1 -->
					<div class="feature-item">
						<div class="feature-icon-box">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						</div>
						<div class="feature-text">
							<h3 class="feature-title">Tim Profesional</h3>
							<p class="feature-desc">Didampingi oleh konsultan berpengalaman di bidang pendidikan dan talenta.</p>
						</div>
					</div>

					<!-- Feature 2 -->
					<div class="feature-item">
						<div class="feature-icon-box">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<circle cx="12" cy="12" r="6"></circle>
								<circle cx="12" cy="12" r="2"></circle>
							</svg>
						</div>
						<div class="feature-text">
							<h3 class="feature-title">Solusi Tepat Sasaran</h3>
							<p class="feature-desc">Rekomendasi sesuai kebutuhan, potensi, dan tujuan Anda.</p>
						</div>
					</div>

					<!-- Feature 3 -->
					<div class="feature-item">
						<div class="feature-icon-box">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
								<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						</div>
						<div class="feature-text">
							<h3 class="feature-title">Pilihan Program Lengkap</h3>
							<p class="feature-desc">Akses berbagai program pendidikan dan pengembangan talenta yang relevan.</p>
						</div>
					</div>

					<!-- Feature 4 -->
					<div class="feature-item">
						<div class="feature-icon-box">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="16" y1="2" x2="16" y2="6"></line>
								<line x1="8" y1="2" x2="8" y2="6"></line>
								<line x1="3" y1="10" x2="21" y2="10"></line>
							</svg>
						</div>
						<div class="feature-text">
							<h3 class="feature-title">Proses Mudah & Cepat</h3>
							<p class="feature-desc">Pengajuan konsultasi yang praktis dengan jadwal fleksibel.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Alur Konsultasi Box -->
			<div class="flow-box" id="alur-konsultasi">
				<div class="section-badge-line">
					<span class="badge-dash"></span>
					<h2 class="flow-title">Alur Konsultasi</h2>
				</div>
				<p class="flow-desc">
					Proses sederhana untuk mendapatkan sesi konsultasi dengan tim SDJNusantara.
				</p>

				<!-- 4 Steps Horizontal with Arrows -->
				<div class="steps-row">
					<!-- Step 1 -->
					<div class="step-card">
						<div class="step-icon-wrap">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								<polyline points="14 2 14 8 20 8"></polyline>
								<line x1="16" y1="13" x2="8" y2="13"></line>
								<line x1="16" y1="17" x2="8" y2="17"></line>
							</svg>
						</div>
						<span class="step-num">01</span>
						<span class="step-label">Ajukan Permohonan</span>
					</div>

					<div class="step-arrow">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>

					<!-- Step 2 -->
					<div class="step-card">
						<div class="step-icon-wrap">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="16" y1="2" x2="16" y2="6"></line>
								<line x1="8" y1="2" x2="8" y2="6"></line>
								<line x1="3" y1="10" x2="21" y2="10"></line>
							</svg>
						</div>
						<span class="step-num">02</span>
						<span class="step-label">Konfirmasi Jadwal</span>
					</div>

					<div class="step-arrow">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>

					<!-- Step 3 -->
					<div class="step-card">
						<div class="step-icon-wrap">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
								<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
							</svg>
						</div>
						<span class="step-num">03</span>
						<span class="step-label">Sesi Konsultasi</span>
					</div>

					<div class="step-arrow">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>

					<!-- Step 4 -->
					<div class="step-card">
						<div class="step-icon-wrap">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
						</div>
						<span class="step-num">04</span>
						<span class="step-label">Dapatkan Rekomendasi</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Right Column: Form Card -->
		<div class="consult-right-col" id="form-konsultasi">
			<div class="form-card">
				<h2 class="form-title">Ajukan Konsultasi</h2>
				<p class="form-subtitle">
					Isi formulir berikut, dan tim kami akan segera menghubungi Anda untuk menjadwalkan sesi konsultasi.
				</p>

				{#if isSubmitted}
					<div class="success-alert">
						<div class="success-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
						</div>
						<div>
							<h3 class="success-title">Permohonan Konsultasi Terkirim!</h3>
							<p class="success-desc">
								Terima kasih, {fullName}. Permohonan Anda telah diarahkan ke WhatsApp kami. Tim SDJNusantara akan segera menindaklanjuti.
							</p>
							<button type="button" class="btn-reset" onclick={resetForm}>
								Kirim Permohonan Lain
							</button>
						</div>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="consult-form">
						{#if errorMsg}
							<div class="error-badge">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="12" y1="8" x2="12" y2="12"></line>
									<line x1="12" y1="16" x2="12.01" y2="16"></line>
								</svg>
								<span>{errorMsg}</span>
							</div>
						{/if}

						<!-- Row 1: Nama Lengkap & Email -->
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
								<label for="email">Email <span class="required">*</span></label>
								<input
									type="email"
									id="email"
									bind:value={email}
									placeholder="Masukkan alamat email"
									required
								/>
							</div>
						</div>

						<!-- Row 2: Nomor WhatsApp & Topik Konsultasi -->
						<div class="form-row-2">
							<div class="form-group">
								<label for="whatsapp">Nomor WhatsApp <span class="required">*</span></label>
								<div class="phone-input-wrap">
									<div class="country-prefix">
										<!-- Bendera Indonesia SVG merah-putih -->
										<svg width="14" height="10" viewBox="0 0 16 12" fill="none" class="id-flag">
											<rect width="16" height="6" fill="#E11927" />
											<rect y="6" width="16" height="6" fill="#FFFFFF" />
											<rect width="16" height="12" stroke="#CBD5E1" stroke-width="0.5" fill="none" />
										</svg>
										<span class="prefix-text">+62</span>
										<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2">
											<polyline points="6 9 12 15 18 9"></polyline>
										</svg>
									</div>
									<input
										type="tel"
										id="whatsapp"
										bind:value={whatsapp}
										placeholder="812-3456-7890"
										required
										class="input-with-prefix"
									/>
								</div>
							</div>

							<div class="form-group">
								<label for="topic">Topik Konsultasi <span class="required">*</span></label>
								<div class="select-wrap">
									<select id="topic" bind:value={topic} required>
										<option value="" disabled selected>Pilih topik konsultasi</option>
										<option value="Talent Management">Talent Management</option>
										<option value="Beasiswa">Beasiswa</option>
										<option value="Pelatihan">Pelatihan</option>
										<option value="Sertifikasi">Sertifikasi</option>
										<option value="Kemitraan">Kemitraan</option>
										<option value="Lainnya">Lainnya</option>
									</select>
									<svg class="select-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</div>
							</div>
						</div>

						<!-- Row 3: Pesan / Kebutuhan Konsultasi -->
						<div class="form-group">
							<label for="notes">Pesan / Kebutuhan Konsultasi</label>
							<textarea
								id="notes"
								bind:value={notes}
								rows="3"
								placeholder="Ceritakan secara singkat kebutuhan atau pertanyaan Anda..."
							></textarea>
						</div>

						<!-- Privacy Checkbox (Wajib per content-master Bagian 9) -->
						<div class="privacy-wrap">
							<label class="checkbox-label">
								<input type="checkbox" bind:checked={agreed} required />
								<span class="checkbox-text">
									Saya setuju dengan <a href="/kebijakan-privasi" target="_blank">Kebijakan Privasi</a> dan <a href="/syarat-ketentuan" target="_blank">Syarat & Ketentuan</a> yang berlaku.
								</span>
							</label>
						</div>

						<!-- Submit Button Gold -->
						<button type="submit" class="btn-submit-gold">
							<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="22" y1="2" x2="11" y2="13"></line>
								<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
							</svg>
							<span>Kirim Permohonan Konsultasi</span>
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.consult-main-section {
		width: 100%;
		background: #F8FAFC;
		padding: 1.5rem 0 1.5rem;
		box-sizing: border-box;
	}

	.consult-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 570px 1fr;
		gap: 20px;
		align-items: start;
	}

	/* Left Column Styles */
	.section-badge-line {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 6px;
	}

	.badge-dash {
		width: 16px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.why-title {
		font-size: 16px;
		font-weight: 800;
		color: #082442;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.why-desc {
		font-size: 11px;
		line-height: 1.5;
		color: #556B82;
		margin: 0 0 16px;
	}

	/* 4 Features 2x2 Grid */
	.features-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px 14px;
		margin-bottom: 20px;
	}

	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 10px;
	}

	.feature-icon-box {
		width: 32px;
		height: 32px;
		border-radius: 9px;
		background: rgba(22, 182, 193, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.feature-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.feature-title {
		font-size: 11.5px;
		font-weight: 700;
		color: #082442;
		margin: 0;
	}

	.feature-desc {
		font-size: 10px;
		line-height: 1.45;
		color: #5D7289;
		margin: 0;
	}

	/* Alur Konsultasi Box */
	.flow-box {
		background: #EBF7F9;
		border: 1px solid rgba(22, 182, 193, 0.22);
		border-radius: 16px;
		padding: 16px 20px 18px;
		box-sizing: border-box;
	}

	.flow-title {
		font-size: 14.5px;
		font-weight: 800;
		color: #082442;
		margin: 0;
	}

	.flow-desc {
		font-size: 10.5px;
		color: #556B82;
		margin: 0 0 14px;
	}

	.steps-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 6px;
	}

	.step-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 3px;
		flex: 1;
	}

	.step-icon-wrap {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: #FFFFFF;
		box-shadow: 0 2px 6px rgba(22, 182, 193, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2px;
	}

	.step-num {
		font-size: 9.5px;
		font-weight: 700;
		color: #16B6C1;
	}

	.step-label {
		font-size: 9.5px;
		font-weight: 700;
		line-height: 1.25;
		color: #082442;
	}

	.step-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #16B6C1;
		flex-shrink: 0;
		margin-bottom: 12px;
	}

	/* Right Column: Form Card */
	.form-card {
		background: #FFFFFF;
		border-radius: 18px;
		padding: 22px 24px;
		box-shadow: 0 8px 30px rgba(8, 36, 66, 0.07);
		border: 1px solid rgba(226, 232, 240, 0.85);
		box-sizing: border-box;
	}

	.form-title {
		font-size: 17px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 4px;
		letter-spacing: -0.01em;
	}

	.form-subtitle {
		font-size: 10.5px;
		line-height: 1.45;
		color: #64748B;
		margin: 0 0 16px;
	}

	.consult-form {
		display: flex;
		flex-direction: column;
		gap: 12px;
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
		font-size: 10.5px;
		font-weight: 700;
		color: #082442;
	}

	.required {
		color: #E11927;
	}

	.form-group input,
	.form-group textarea,
	.select-wrap select {
		width: 100%;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 8px;
		padding: 7px 11px;
		font-size: 11px;
		color: #082442;
		font-family: inherit;
		box-sizing: border-box;
		transition: all 0.2s;
	}

	.form-group input:focus,
	.form-group textarea:focus,
	.select-wrap select:focus {
		outline: none;
		border-color: #16B6C1;
		background: #FFFFFF;
		box-shadow: 0 0 0 3px rgba(22, 182, 193, 0.12);
	}

	.phone-input-wrap {
		display: flex;
		align-items: center;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 8px;
		overflow: hidden;
		transition: all 0.2s;
	}

	.phone-input-wrap:focus-within {
		border-color: #16B6C1;
		background: #FFFFFF;
		box-shadow: 0 0 0 3px rgba(22, 182, 193, 0.12);
	}

	.country-prefix {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 7px 8px 7px 10px;
		background: #F1F5F9;
		border-right: 1px solid #E2E8F0;
		flex-shrink: 0;
	}

	.id-flag {
		border-radius: 1px;
	}

	.prefix-text {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
	}

	.input-with-prefix {
		border: none !important;
		background: transparent !important;
		box-shadow: none !important;
		padding: 7px 10px !important;
	}

	.select-wrap {
		position: relative;
		width: 100%;
	}

	.select-wrap select {
		appearance: none;
		padding-right: 28px;
		cursor: pointer;
	}

	.select-chevron {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
	}

	.form-group textarea {
		resize: vertical;
		min-height: 60px;
	}

	.privacy-wrap {
		display: flex;
		align-items: flex-start;
		gap: 6px;
		margin-top: -2px;
	}

	.checkbox-label {
		display: flex;
		align-items: flex-start;
		gap: 7px;
		cursor: pointer;
	}

	.checkbox-label input {
		margin-top: 2px;
		accent-color: #16B6C1;
		width: 13px;
		height: 13px;
	}

	.checkbox-text {
		font-size: 10px;
		line-height: 1.4;
		color: #556B82;
	}

	.checkbox-text a {
		color: #079EAD;
		text-decoration: underline;
	}

	.btn-submit-gold {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		width: 100%;
		background: #F5B331;
		color: #082442;
		border: none;
		border-radius: 8px;
		padding: 9px 16px;
		font-size: 11.5px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.28);
		transition: all 0.2s;
		margin-top: 2px;
	}

	.btn-submit-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.error-badge {
		display: flex;
		align-items: center;
		gap: 6px;
		background: #FEF2F2;
		border: 1px solid #FECACA;
		color: #DC2626;
		padding: 6px 10px;
		border-radius: 6px;
		font-size: 10px;
		font-weight: 600;
	}

	.success-alert {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		background: #EBF8F9;
		border: 1px solid rgba(22, 182, 193, 0.35);
		border-radius: 10px;
		padding: 16px;
	}

	.success-icon {
		background: #FFFFFF;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(7, 158, 173, 0.15);
		flex-shrink: 0;
	}

	.success-title {
		font-size: 13px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 4px;
	}

	.success-desc {
		font-size: 10.5px;
		line-height: 1.45;
		color: #4B6382;
		margin: 0 0 10px;
	}

	.btn-reset {
		background: #079EAD;
		color: #FFFFFF;
		border: none;
		border-radius: 6px;
		padding: 5px 12px;
		font-size: 10px;
		font-weight: 600;
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		.consult-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 640px) {
		.features-grid {
			grid-template-columns: 1fr;
		}

		.steps-row {
			flex-direction: column;
			gap: 12px;
		}

		.step-arrow {
			transform: rotate(90deg);
			margin: 0;
		}

		.form-row-2 {
			grid-template-columns: 1fr;
		}
	}
</style>
