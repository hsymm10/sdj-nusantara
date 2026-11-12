<script lang="ts">
	import { tick } from "svelte";
	import { i18n } from "#lib/stores/i18n.svelte";

	interface Props {
		value: string;
		placeholderClosed?: string;
		placeholderOpen?: string;
		onChange: (val: string) => void;
	}

	let {
		value = "",
		placeholderClosed,
		placeholderOpen,
		onChange,
	}: Props = $props();

	const resolvedClosed = $derived(
		placeholderClosed ??
			i18n.pick("Cari beasiswa...", "Search scholarships..."),
	);
	const resolvedOpen = $derived(
		placeholderOpen ??
			i18n.pick(
				"Cari nama beasiswa, penyelenggara, atau kata kunci...",
				"Search scholarship name, provider, or keyword...",
			),
	);

	let isOpen = $state(false);
	let inputEl = $state<HTMLInputElement | null>(null);
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;

	function handleOpen() {
		isOpen = true;
		tick().then(() => {
			inputEl?.focus();
		});
	}

	function handleClose() {
		isOpen = false;
	}

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		const val = target.value;
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			onChange(val);
		}, 200);
	}

	function handleClear() {
		if (inputEl) {
			inputEl.value = "";
		}
		onChange("");
		handleClose();
	}

	function handleKeydown(e: KeyboardEvent) {
		// Tekan '/' untuk membuka pencarian jika sedang di luar input
		if (
			e.key === "/" &&
			!isOpen &&
			document.activeElement?.tagName !== "INPUT" &&
			document.activeElement?.tagName !== "TEXTAREA"
		) {
			e.preventDefault();
			handleOpen();
			return;
		}

		if (isOpen && e.key === "Escape") {
			e.preventDefault();
			handleClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="search-toggle-wrap {isOpen ? 'is-open' : 'is-closed'}">
	{#if !isOpen}
		<button
			type="button"
			class="search-trigger-btn"
			onclick={handleOpen}
			aria-label={i18n.pick(
				"Buka pencarian (tekan /)",
				"Open search (press /)",
			)}
		>
			<svg
				class="search-icon"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#64748B"
				stroke-width="2.2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</svg>
			<span class="search-placeholder-text">
				{value ? value : resolvedClosed}
			</span>
			<span class="search-kbd-hint" aria-hidden="true">/</span>
		</button>
	{:else}
		<div class="search-expanded-bar">
			<svg
				class="search-icon-inside"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#079EAD"
				stroke-width="2.2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</svg>

			<input
				type="text"
				defaultValue={value}
				oninput={handleInput}
				placeholder={resolvedOpen}
				class="search-active-input"
				bind:this={inputEl}
				aria-label={i18n.pick("Ketik pencarian", "Type search query")}
			/>

			{#if value || (inputEl && inputEl.value)}
				<button
					type="button"
					class="search-clear-btn"
					onclick={handleClear}
					aria-label={i18n.pick('Hapus kata kunci pencarian', 'Clear search keyword')}
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			{/if}

			<button
				type="button"
				class="search-submit-round"
				onclick={handleClose}
				aria-label={i18n.pick('Selesai mencari', 'Finish searching')}
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#FFFFFF"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.search-toggle-wrap {
		position: relative;
		height: 48px;
		transition: all 200ms cubic-bezier(0.22, 0.61, 0.36, 1);
		box-sizing: border-box;
	}

	.search-toggle-wrap.is-closed {
		width: 260px;
	}

	.search-toggle-wrap.is-open {
		width: 480px;
		max-width: calc(100vw - 120px);
	}

	.search-trigger-btn {
		width: 100%;
		height: 48px;
		padding: 0 14px;
		background: #ffffff;
		border: 1px solid #d6e6ec;
		border-radius: 14px;
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		text-align: left;
		transition: all 0.15s ease;
		box-sizing: border-box;
	}

	.search-trigger-btn:hover {
		border-color: #079ead;
		box-shadow: 0 2px 10px rgba(7, 158, 173, 0.08);
	}

	.search-trigger-btn:focus-visible {
		outline: 2px solid #079ead;
		outline-offset: 2px;
	}

	.search-placeholder-text {
		font-size: 13.5px;
		color: #64748b;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: 1;
	}

	.search-kbd-hint {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		background: #f1f5f9;
		color: #94a3b8;
		font-size: 11px;
		font-weight: 700;
		border-radius: 6px;
		border: 1px solid #e2e8f0;
	}

	/* Expanded Active State */
	.search-expanded-bar {
		width: 100%;
		height: 48px;
		padding: 0 4px 0 14px;
		background: #ffffff;
		border: 1.5px solid #079ead;
		border-radius: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
		box-shadow: 0 4px 16px rgba(7, 158, 173, 0.12);
		box-sizing: border-box;
	}

	.search-icon-inside {
		flex-shrink: 0;
	}

	.search-active-input {
		flex: 1;
		height: 100%;
		border: none;
		outline: none;
		background: transparent;
		font-size: 13.5px;
		color: #082442;
		padding: 0;
	}

	.search-active-input::placeholder {
		color: #94a3b8;
	}

	.search-clear-btn {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #f1f5f9;
		border: none;
		color: #64748b;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 0;
		transition: all 0.15s ease;
	}

	.search-clear-btn:hover {
		background: #e2e8f0;
		color: #082442;
	}

	.search-submit-round {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background: #082442;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		flex-shrink: 0;
		transition: background 0.15s ease;
	}

	.search-submit-round:hover {
		background: #079ead;
	}

	@media (max-width: 767px) {
		.search-toggle-wrap.is-closed {
			width: 100%;
			flex: 1;
		}

		.search-toggle-wrap.is-open {
			width: 100%;
			flex: 1;
			max-width: 100%;
		}

		.search-kbd-hint {
			display: none;
		}
	}
</style>
