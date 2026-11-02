<script lang="ts">
	import { chatConfig } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';

	function handleSelect(queryText: string) {
		chatStore.sendUserMessage(queryText);
	}
</script>

{#if chatStore.showQuickReplies}
	<div class="quick-replies-list" role="group" aria-label="Pilihan topik cepat">
		{#each chatConfig.quickReplies as item}
			<button
				type="button"
				class="quick-reply-chip"
				onclick={() => handleSelect(item.queryText)}
			>
				<!-- Icon (Outline Teal) -->
				<span class="chip-icon" aria-hidden="true">
					{#if item.id === 'program'}
						<!-- Graduation Cap -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					{:else if item.id === 'beasiswa'}
						<!-- Award / Scholarship Ribbon -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="8" r="6"></circle>
							<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
						</svg>
					{:else if item.id === 'kemitraan'}
						<!-- Handshake -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M11 17l-5-5a3.5 3.5 0 0 1 0-5l1-1a3.5 3.5 0 0 1 5 0l1 1"></path>
							<path d="M13 7l5 5a3.5 3.5 0 0 1 0 5l-1 1a3.5 3.5 0 0 1-5 0l-1-1"></path>
						</svg>
					{:else if item.id === 'layanan'}
						<!-- Headset / Customer Support -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
							<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
						</svg>
					{/if}
				</span>

				<!-- Label -->
				<span class="chip-label">{item.label}</span>
			</button>
		{/each}
	</div>
{/if}

<style>
	.quick-replies-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 8px 0 14px 36px;
		max-width: calc(100% - 36px);
	}

	.quick-reply-chip {
		display: flex;
		align-items: center;
		gap: 12px;
		background: #FFFFFF;
		border: 1px solid #DCE6EE;
		border-radius: 9999px; /* full pill */
		padding: 10px 16px;
		cursor: pointer;
		text-align: left;
		transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
		box-shadow: 0 1px 3px rgba(11, 39, 71, 0.04);
	}

	.quick-reply-chip:hover {
		background: #E6F7F8;
		border-color: #079EAD;
		transform: translateX(3px);
		box-shadow: 0 2px 6px rgba(7, 158, 173, 0.15);
	}

	.quick-reply-chip:focus-visible {
		outline: 2px solid #079EAD;
		outline-offset: 1px;
	}

	.chip-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.chip-label {
		font-size: 13.5px;
		font-weight: 600;
		color: #082442;
		line-height: 1.3;
	}
</style>
