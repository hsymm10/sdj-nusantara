<script lang="ts">
	import { chatConfig } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';

	function handleSelect(queryText: string) {
		chatStore.sendUserMessage(queryText);
	}
</script>

{#if chatStore.showQuickReplies}
	<div class="quick-replies-grid" role="group" aria-label="Pilihan topik cepat">
		{#each chatConfig.quickReplies as item, idx}
			<button
				type="button"
				class="quick-reply-chip"
				style="--stagger-delay: {idx * 40}ms"
				onclick={() => handleSelect(item.queryText)}
			>
				<!-- Icon (Teal Outline/Solid 20px) -->
				<span class="chip-icon" aria-hidden="true">
					{#if item.iconType === 'program'}
						<!-- Topi Toga -->
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					{:else if item.iconType === 'beasiswa'}
						<!-- Kado / Hadiah -->
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="3" y="8" width="18" height="4" rx="1"></rect>
							<path d="M12 8v13"></path>
							<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
							<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
						</svg>
					{:else if item.iconType === 'talenta'}
						<!-- Kelompok Orang / Talenta -->
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					{:else if item.iconType === 'konsultasi'}
						<!-- Headset Konsultasi -->
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
							<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
						</svg>
					{:else if item.iconType === 'kemitraan'}
						<!-- Jabat Tangan Kerja Sama -->
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M11 17l-5-5a3.5 3.5 0 0 1 0-5l1-1a3.5 3.5 0 0 1 5 0l1 1"></path>
							<path d="M13 7l5 5a3.5 3.5 0 0 1 0 5l-1 1a3.5 3.5 0 0 1-5 0l-1-1"></path>
						</svg>
					{:else if item.iconType === 'lainnya'}
						<!-- Tiga Titik -->
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2">
							<circle cx="12" cy="12" r="1.5" fill="#079EAD"></circle>
							<circle cx="18" cy="12" r="1.5" fill="#079EAD"></circle>
							<circle cx="6" cy="12" r="1.5" fill="#079EAD"></circle>
						</svg>
					{/if}
				</span>

				<!-- Label Navy 13.5px Weight 600 -->
				<span class="chip-label">{item.label}</span>
			</button>
		{/each}
	</div>
{/if}

<style>
	/* Grid 2 Kolom x 3 Baris Rata Lebar Area Percakapan */
	.quick-replies-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 10px;
		margin: 8px 0 14px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.quick-reply-chip {
		display: flex;
		align-items: center;
		gap: 10px;
		background: #F4F8FB;
		border: 1px solid #D6E6EC;
		border-radius: 9999px; /* full pill */
		height: 42px;
		padding: 0 12px;
		cursor: pointer;
		text-align: left;
		transition: border-color 0.16s ease, background-color 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
		box-sizing: border-box;
		animation: chipFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: var(--stagger-delay, 0ms);
		opacity: 0;
		outline: none;
	}

	.quick-reply-chip:hover {
		background: #EAF7F9;
		border-color: #079EAD;
		transform: translateY(-1px);
		box-shadow: 0 3px 8px rgba(7, 158, 173, 0.15);
	}

	.quick-reply-chip:focus-visible {
		border-color: #079EAD;
		outline: 2px solid #079EAD;
		outline-offset: 1px;
	}

	.chip-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 20px;
		height: 20px;
	}

	.chip-label {
		font-size: 13px;
		font-weight: 600;
		color: #082442;
		line-height: 1.25;
		white-space: normal;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	@keyframes chipFadeIn {
		0% {
			opacity: 0;
			transform: translateY(6px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.quick-reply-chip {
			animation: none;
			opacity: 1;
		}
	}

	@media (max-width: 640px) {
		.quick-replies-grid {
			gap: 8px;
		}

		.quick-reply-chip {
			height: 40px;
			padding: 0 10px;
			gap: 8px;
		}

		.chip-label {
			font-size: 12px;
		}
	}
</style>
