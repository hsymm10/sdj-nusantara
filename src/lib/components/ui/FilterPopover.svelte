<script lang="ts">
	import { tick } from 'svelte';

	export interface FilterValues {
		kategori: string;
		jenjang: string;
		negara: string;
		pendanaan: string;
		status: string;
		penyelenggara?: string;
	}

	interface Props {
		values: FilterValues;
		activeCount: number;
		calculateCount?: (draft: FilterValues) => number;
		onApply: (applied: FilterValues) => void;
		onReset: () => void;
	}

	let {
		values,
		activeCount = 0,
		calculateCount,
		onApply,
		onReset
	}: Props = $props();

	let isOpen = $state(false);
	let popoverEl = $state<HTMLElement | null>(null);
	let triggerBtnEl = $state<HTMLButtonElement | null>(null);

	// Draft state di dalam popover (perubahan belum diterapkan sampai klik Terapkan)
	let draftValues = $state<FilterValues>({
		kategori: values.kategori || 'Semua Kategori',
		jenjang: values.jenjang || 'Semua Jenjang',
		negara: values.negara || 'Semua Negara',
		pendanaan: values.pendanaan || 'Semua Jenis',
		status: values.status || 'Semua Status',
		penyelenggara: values.penyelenggara || 'Semua Penyelenggara'
	});

	// Hitung hasil sementara jika fungsi calculateCount disediakan
	let previewCount = $derived(
		calculateCount ? calculateCount(draftValues) : null
	);

	function openPopover() {
		// Sinkronkan draft dengan nilai aktif saat dibuka
		draftValues = {
			kategori: values.kategori || 'Semua Kategori',
			jenjang: values.jenjang || 'Semua Jenjang',
			negara: values.negara || 'Semua Negara',
			pendanaan: values.pendanaan || 'Semua Jenis',
			status: values.status || 'Semua Status',
			penyelenggara: values.penyelenggara || 'Semua Penyelenggara'
		};
		isOpen = true;
	}

	function closePopover() {
		isOpen = false;
		triggerBtnEl?.focus();
	}

	function handleToggle() {
		if (isOpen) {
			closePopover();
		} else {
			openPopover();
		}
	}

	function handleApply() {
		onApply({ ...draftValues });
		isOpen = false;
		triggerBtnEl?.focus();
	}

	function handleResetDraft() {
		draftValues = {
			kategori: 'Semua Kategori',
			jenjang: 'Semua Jenjang',
			negara: 'Semua Negara',
			pendanaan: 'Semua Jenis',
			status: 'Semua Status',
			penyelenggara: 'Semua Penyelenggara'
		};
		onReset();
		isOpen = false;
		triggerBtnEl?.focus();
	}

	function handleClickOutside(e: MouseEvent) {
		if (!isOpen) return;
		const target = e.target as Node;
		if (
			popoverEl &&
			!popoverEl.contains(target) &&
			triggerBtnEl &&
			!triggerBtnEl.contains(target)
		) {
			closePopover();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'Escape') {
			e.preventDefault();
			closePopover();
		}
	}
</script>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<div class="filter-popover-wrapper">
	<!-- Trigger Button (Tinggi 48px, sejajar tombol Cari) -->
	<button
		type="button"
		class="filter-trigger-btn {activeCount > 0 ? 'has-active' : ''} {isOpen ? 'is-active' : ''}"
		onclick={handleToggle}
		bind:this={triggerBtnEl}
		aria-haspopup="dialog"
		aria-expanded={isOpen}
		aria-controls="filter-dialog"
	>
		<div class="filter-icon-container">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
			</svg>
			{#if activeCount > 0}
				<span class="active-badge" aria-label="{activeCount} filter aktif">{activeCount}</span>
			{/if}
		</div>
		<span class="filter-btn-label">Filter</span>
	</button>

	<!-- Popover Container / Mobile Bottom Sheet -->
	{#if isOpen}
		<!-- Mobile backdrop -->
		<div class="popover-mobile-backdrop" onclick={closePopover} aria-hidden="true"></div>

		<div
			id="filter-dialog"
			class="popover-floating-card"
			role="dialog"
			aria-label="Filter beasiswa"
			bind:this={popoverEl}
		>
			<div class="mobile-sheet-handle" aria-hidden="true"></div>
			<div class="popover-arrow-notch" aria-hidden="true"></div>

			<!-- Popover Header -->
			<div class="popover-header">
				<div class="popover-title-row">
					<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 22 3"></polygon>
					</svg>
					<h3 class="popover-title">Filter Beasiswa</h3>
				</div>
				<button
					type="button"
					class="popover-close-btn"
					onclick={closePopover}
					aria-label="Tutup filter"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			</div>

			<!-- Grid 2 Kolom x 3 Baris Controls -->
			<div class="popover-grid-body">
				<!-- 1. Kategori -->
				<div class="control-group">
					<label for="filter-pop-kategori" class="control-label">Kategori</label>
					<div class="select-box">
						<select id="filter-pop-kategori" bind:value={draftValues.kategori} class="custom-select">
							<option value="Semua Kategori">Semua Kategori</option>
							<option value="Pemerintah">Pemerintah</option>
							<option value="Universitas">Universitas</option>
							<option value="Lembaga Internasional">Lembaga Internasional</option>
							<option value="Swasta">Swasta</option>
							<option value="Daerah">Daerah</option>
						</select>
						<div class="select-chevron" aria-hidden="true">▼</div>
					</div>
				</div>

				<!-- 2. Jenjang Pendidikan -->
				<div class="control-group">
					<label for="filter-pop-jenjang" class="control-label">Jenjang Pendidikan</label>
					<div class="select-box">
						<select id="filter-pop-jenjang" bind:value={draftValues.jenjang} class="custom-select">
							<option value="Semua Jenjang">Semua Jenjang</option>
							<option value="S1">S1</option>
							<option value="S2">S2</option>
							<option value="S3">S3</option>
						</select>
						<div class="select-chevron" aria-hidden="true">▼</div>
					</div>
				</div>

				<!-- 3. Negara Tujuan -->
				<div class="control-group">
					<label for="filter-pop-negara" class="control-label">Negara Tujuan</label>
					<div class="select-box">
						<select id="filter-pop-negara" bind:value={draftValues.negara} class="custom-select">
							<option value="Semua Negara">Semua Negara</option>
							<option value="Dalam Negeri">Dalam Negeri</option>
							<option value="Luar Negeri">Luar Negeri</option>
							<option value="Inggris">Inggris</option>
							<option value="Jepang">Jepang</option>
						</select>
						<div class="select-chevron" aria-hidden="true">▼</div>
					</div>
				</div>

				<!-- 4. Jenis Pendanaan -->
				<div class="control-group">
					<label for="filter-pop-pendanaan" class="control-label">Jenis Pendanaan</label>
					<div class="select-box">
						<select id="filter-pop-pendanaan" bind:value={draftValues.pendanaan} class="custom-select">
							<option value="Semua Jenis">Semua Jenis</option>
							<option value="Fully Funded">Fully Funded</option>
							<option value="Partial Funded">Partial Funded</option>
						</select>
						<div class="select-chevron" aria-hidden="true">▼</div>
					</div>
				</div>

				<!-- 5. Status Pendaftaran -->
				<div class="control-group">
					<label for="filter-pop-status" class="control-label">Status Pendaftaran</label>
					<div class="select-box">
						<select id="filter-pop-status" bind:value={draftValues.status} class="custom-select">
							<option value="Semua Status">Semua Status</option>
							<option value="Buka">Buka</option>
							<option value="Segera Dibuka">Segera Dibuka</option>
							<option value="Ditutup">Ditutup</option>
						</select>
						<div class="select-chevron" aria-hidden="true">▼</div>
					</div>
				</div>

				<!-- 6. Penyelenggara -->
				<div class="control-group">
					<label for="filter-pop-penyelenggara" class="control-label">Penyelenggara</label>
					<div class="select-box">
						<select id="filter-pop-penyelenggara" bind:value={draftValues.penyelenggara} class="custom-select">
							<option value="Semua Penyelenggara">Semua Penyelenggara</option>
							<option value="Kementerian">Pemerintah RI / Kemdikbud</option>
							<option value="UK Government">UK Government (Chevening)</option>
							<option value="Government of Japan">Government of Japan (MEXT)</option>
							<option value="Kementerian Keuangan">LPDP Kemenkeu</option>
						</select>
						<div class="select-chevron" aria-hidden="true">▼</div>
					</div>
				</div>
			</div>

			<!-- Footer Popover -->
			<div class="popover-footer">
				<button
					type="button"
					class="btn-filter-reset"
					onclick={handleResetDraft}
				>
					Reset
				</button>

				<button
					type="button"
					class="btn-filter-apply"
					onclick={handleApply}
				>
					{#if previewCount !== null}
						Terapkan Filter ({previewCount})
					{:else}
						Terapkan Filter
					{/if}
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.filter-popover-wrapper {
		position: relative;
		display: inline-block;
	}

	/* Trigger Button */
	.filter-trigger-btn {
		height: 48px;
		padding: 0 18px;
		background: #FFFFFF;
		border: 1px solid #D6E6EC;
		border-radius: 14px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		cursor: pointer;
		transition: all 0.15s ease;
		box-sizing: border-box;
	}

	.filter-trigger-btn:hover {
		border-color: #079EAD;
		box-shadow: 0 2px 10px rgba(7, 158, 173, 0.08);
	}

	.filter-trigger-btn.has-active {
		border-color: #079EAD;
		background: #F4FBFB;
		color: #079EAD;
	}

	.filter-trigger-btn.is-active {
		border-color: #079EAD;
		box-shadow: 0 0 0 3px rgba(7, 158, 173, 0.15);
	}

	.filter-icon-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.active-badge {
		position: absolute;
		top: -7px;
		right: -9px;
		min-width: 17px;
		height: 17px;
		padding: 0 4px;
		border-radius: 9999px;
		background: #079EAD;
		color: #FFFFFF;
		font-size: 10px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	.popover-mobile-backdrop {
		display: none;
	}

	/* Floating Popover Card */
	.popover-floating-card {
		position: absolute;
		top: calc(100% + 10px);
		left: 0;
		z-index: 50;
		width: 520px;
		max-width: 92vw;
		background: #FFFFFF;
		border-radius: 18px;
		border: 1px solid #E3EAF1;
		box-shadow: 0 18px 40px rgba(8, 36, 66, 0.16), 0 2px 6px rgba(8, 36, 66, 0.06);
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		box-sizing: border-box;
		animation: popoverFadeIn 180ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}

	@keyframes popoverFadeIn {
		from {
			opacity: 0;
			transform: translateY(8px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.popover-floating-card {
			animation: popoverSimpleFade 150ms ease-out forwards;
		}
		@keyframes popoverSimpleFade {
			from { opacity: 0; }
			to { opacity: 1; }
		}
	}

	.mobile-sheet-handle {
		display: none;
	}

	/* Arrow Notch */
	.popover-arrow-notch {
		position: absolute;
		top: -7px;
		left: 28px;
		width: 12px;
		height: 12px;
		background: #FFFFFF;
		border-left: 1px solid #E3EAF1;
		border-top: 1px solid #E3EAF1;
		transform: rotate(45deg);
	}

	/* Popover Header */
	.popover-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 12px;
		border-bottom: 1px solid #F1F5F9;
	}

	.popover-title-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.popover-title {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
		margin: 0;
	}

	.popover-close-btn {
		width: 28px;
		height: 28px;
		border-radius: 8px;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		color: #64748B;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.popover-close-btn:hover {
		background: #E2E8F0;
		color: #082442;
	}

	/* 2-Column Grid Body */
	.popover-grid-body {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 14px 16px;
	}

	.control-group {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.control-label {
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
	}

	.select-box {
		position: relative;
		width: 100%;
	}

	.custom-select {
		width: 100%;
		height: 44px;
		padding: 0 32px 0 12px;
		background: #FFFFFF;
		border: 1px solid #CBD5E1;
		border-radius: 12px;
		font-size: 13px;
		color: #1E293B;
		appearance: none;
		-webkit-appearance: none;
		cursor: pointer;
		transition: all 0.15s ease;
		box-sizing: border-box;
	}

	.custom-select:hover {
		border-color: #079EAD;
	}

	.custom-select:focus {
		outline: none;
		border-color: #079EAD;
		box-shadow: 0 0 0 3px rgba(7, 158, 173, 0.15);
	}

	.select-chevron {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 9px;
		color: #082442;
		pointer-events: none;
	}

	/* Popover Footer */
	.popover-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 14px;
		border-top: 1px solid #F1F5F9;
	}

	.btn-filter-reset {
		background: none;
		border: none;
		padding: 8px 12px;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		cursor: pointer;
		border-radius: 8px;
		transition: background 0.15s ease;
	}

	.btn-filter-reset:hover {
		background: #F1F5F9;
	}

	.btn-filter-apply {
		height: 44px;
		padding: 0 20px;
		background: #079EAD;
		color: #FFFFFF;
		font-size: 13.5px;
		font-weight: 700;
		border: none;
		border-radius: 12px;
		cursor: pointer;
		transition: background 0.15s ease, transform 0.1s ease;
	}

	.btn-filter-apply:hover {
		background: #068794;
		transform: translateY(-1px);
	}

	/* Mobile ≤ 767px: Bottom Sheet */
	@media (max-width: 767px) {
		.popover-mobile-backdrop {
			display: block;
			position: fixed;
			inset: 0;
			background: rgba(8, 36, 66, 0.45);
			backdrop-filter: blur(4px);
			z-index: 9998;
		}

		.popover-floating-card {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			top: auto;
			width: 100vw;
			max-width: 100vw;
			border-radius: 22px 22px 0 0;
			z-index: 9999;
			max-height: 85vh;
			overflow-y: auto;
			animation: sheetUp 200ms ease-out forwards;
			padding: 20px 20px 24px;
		}

		@keyframes sheetUp {
			from {
				transform: translateY(100%);
			}
			to {
				transform: translateY(0);
			}
		}

		.popover-arrow-notch {
			display: none;
		}

		.mobile-sheet-handle {
			display: block;
			width: 38px;
			height: 4px;
			background: #CBD5E1;
			border-radius: 9999px;
			margin: -8px auto 12px;
		}

		.popover-grid-body {
			grid-template-columns: 1fr;
			gap: 12px;
		}
	}
</style>
