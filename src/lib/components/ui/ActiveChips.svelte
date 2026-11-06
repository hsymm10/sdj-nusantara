<script lang="ts">
	interface ChipItem {
		id: string;
		label: string;
		type: string;
	}

	interface Props {
		chips: ChipItem[];
		onRemove: (id: string, type: string) => void;
		onClearAll: () => void;
	}

	let { chips = [], onRemove, onClearAll }: Props = $props();
</script>

{#if chips.length > 0}
	<div class="active-chips-wrap" aria-label="Filter aktif">
		<div class="chips-scroll-area">
			<span class="chips-label">Filter aktif:</span>

			{#each chips as chip (chip.id + chip.type)}
				<div class="chip-item">
					<span class="chip-text">{chip.label}</span>
					<button
						type="button"
						class="chip-close-btn"
						onclick={() => onRemove(chip.id, chip.type)}
						aria-label="Hapus filter {chip.label}"
					>
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>
			{/each}

			<button
				type="button"
				class="chip-clear-all-btn"
				onclick={onClearAll}
			>
				Hapus semua
			</button>
		</div>
	</div>
{/if}

<style>
	.active-chips-wrap {
		width: 100%;
		margin-top: 10px;
	}

	.chips-scroll-area {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.chips-label {
		font-size: 12.5px;
		font-weight: 600;
		color: #64748B;
	}

	.chip-item {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 4px 10px;
		background: #E6F7F8;
		border: 1px solid #B8EBEF;
		border-radius: 9999px;
		font-size: 12.5px;
		font-weight: 600;
		color: #079EAD;
		transition: all 0.15s ease;
	}

	.chip-item:hover {
		background: #D5F3F5;
		border-color: #079EAD;
	}

	.chip-close-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: none;
		border: none;
		color: #079EAD;
		cursor: pointer;
		padding: 0;
		transition: all 0.15s ease;
	}

	.chip-close-btn:hover {
		background: #079EAD;
		color: #FFFFFF;
	}

	.chip-clear-all-btn {
		background: none;
		border: none;
		padding: 0 4px;
		color: #64748B;
		font-size: 12px;
		font-weight: 600;
		text-decoration: underline;
		cursor: pointer;
		transition: color 0.15s ease;
	}

	.chip-clear-all-btn:hover {
		color: #082442;
	}
</style>

