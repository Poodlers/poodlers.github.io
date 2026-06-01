<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '$lib/Actions/clickOutside.ts';

	export let projectTypes: string[] = [];
	export let projectTags: string[] = [];
	export let selectedType: string = 'All';
	export let selectedTags: string[] = [];

	const dispatch = createEventDispatcher();
	let tagsOpen = false;

	function selectType(type: string) {
		dispatch('typeChange', type);
	}

	function toggleTag(tag: string) {
		const nextTags = selectedTags.includes(tag)
			? selectedTags.filter((t) => t !== tag)
			: [...selectedTags, tag];

		dispatch('tagsChange', nextTags);
	}

	function clearTags() {
		dispatch('tagsChange', []);
	}
</script>

<div class="filters">
	<div class="type_filters">
		<button class:active={selectedType === 'All'} on:click={() => selectType('All')}> All </button>

		{#each projectTypes as type}
			<button class:active={selectedType === type} on:click={() => selectType(type)}>
				{type}
			</button>
		{/each}
	</div>

	<div class="tag_filter" use:clickOutside on:outclick={() => (tagsOpen = false)}>
		<button class="filter_button" on:click={() => (tagsOpen = !tagsOpen)}>
			☰ Tags
			{#if selectedTags.length}
				<span>{selectedTags.length}</span>
			{/if}
		</button>

		{#if tagsOpen}
			<div class="tag_dropdown">
				{#each projectTags as tag}
					<button class:active={selectedTags.includes(tag)} on:click={() => toggleTag(tag)}>
						{tag}
					</button>
				{/each}

				{#if selectedTags.length}
					<button class="clear" on:click={clearTags}>Clear tags</button>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.filters {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin: 1rem auto 1rem;
		width: 100%;
		align-items: center;
		position: relative;
		z-index: 20;
	}

	.type_filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
		max-width: 900px;
	}

	button {
		border: 1px solid rgba(47, 69, 80, 0.35);
		background: rgba(47, 69, 80, 0.08);
		color: #2f4550;
		border-radius: 999px;
		padding: 0.4rem 0.85rem;
		cursor: pointer;
		font-weight: 600;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	button:hover {
		background: rgba(47, 69, 80, 0.16);
		transform: translateY(-1px);
	}

	button.active {
		background: #2f4550;
		color: #f6f0ed;
		border-color: #2f4550;
	}

	.tag_filter {
		position: relative;
	}

	.filter_button {
		background: #586f7c;
		color: #f6f0ed;
		border-color: #586f7c;
	}

	.filter_button:hover {
		background: #2f4550;
	}

	.filter_button span {
		margin-left: 0.35rem;
		font-weight: bold;
	}

	.tag_dropdown {
		position: absolute;
		top: 125%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 30;
		width: min(90vw, 460px);
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		padding: 0.9rem;
		border-radius: 1rem;
		background: #2f4550;
		box-shadow: 0 14px 35px rgba(47, 69, 80, 0.28);
	}

	.tag_dropdown button {
		color: #f6f0ed;
		border-color: rgba(246, 240, 237, 0.35);
		background: rgba(246, 240, 237, 0.08);
	}

	.tag_dropdown button:hover {
		background: rgba(246, 240, 237, 0.18);
	}

	.tag_dropdown button.active {
		background: #f6f0ed;
		color: #2f4550;
		border-color: #f6f0ed;
	}

	.clear {
		width: 100%;
		margin-top: 0.4rem;
	}
</style>
