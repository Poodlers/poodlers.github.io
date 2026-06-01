<script lang="ts">
	// @ts-nocheck
	import IconButton from '$lib/Components/IconButton.svelte';
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import ProjectCard from '$lib/Components/ProjectCard.svelte';
	import { projects } from '$lib/Data/projects';
	import { flip } from 'svelte/animate';
	import { cubicOut, quintOut } from 'svelte/easing';
	import ProjectFilters from '$lib/Components/ProjectFilters.svelte';

	let loaded = false;
	let currentIndex = 0;
	const animationsDuration = 1000;
	let isScrolling = false;
	let interval;
	let scrollDirection = 0;

	let selectedType = 'All';
	let selectedTags: string[] = [];

	$: projectTypes = [...new Set(projects.map((project) => project.projectType).filter(Boolean))];

	$: projectTags = [...new Set(projects.flatMap((project) => project.projectTags ?? []))];

	$: filteredProjects = projects.filter((project) => {
		const matchesType = selectedType === 'All' || project.projectType === selectedType;
		const matchesTags =
			selectedTags.length === 0 || selectedTags.every((tag) => project.projectTags?.includes(tag));

		return matchesType && matchesTags;
	});

	$: if (filteredProjects.length && currentIndex >= filteredProjects.length) {
		currentIndex = 0;
	}

	$: currentlyDisplayedProjects = getClosestElements(filteredProjects, currentIndex);

	function getClosestElements(array, index) {
		const length = array.length;

		if (!length) return [];
		if (length === 1) return [array[0]];
		if (length === 2) return currentIndex === 0 ? [array[0], array[1]] : [array[1], array[0]];

		const prevIndex = (index - 1 + length) % length;
		const currIndex = index;
		const nextIndex = (index + 1) % length;

		return [array[prevIndex], array[currIndex], array[nextIndex]];
	}

	function onScroll(e) {
		if (isScrolling) return;

		isScrolling = true;
		scrollDirection = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

		clearInterval(interval);
		interval = setInterval(nextProject, 10000);

		getNewClosestElements(scrollDirection);

		setTimeout(() => {
			isScrolling = false;
		}, 500);
	}

	function nextProject() {
		if (!filteredProjects.length) return;

		currentIndex = (currentIndex + 1) % filteredProjects.length;
	}

	function getNewClosestElements(scrollDirection) {
		if (!filteredProjects.length) return;

		if (scrollDirection < 0) {
			currentIndex = (currentIndex + 1) % filteredProjects.length;
		} else {
			currentIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
		}
	}

	function onClickProjectCard(index) {
		getNewClosestElements(index == 0 ? 1 : -1);
	}

	onMount(() => {
		loaded = true;
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % projects.length;
			currentlyDisplayedProjects = getClosestElements(projects, currentIndex);
		}, 10000);

		return () => {
			clearInterval(interval);
			loaded = false;
		};
	});

	function customScale(node, options) {
		return {
			duration: options.duration,
			easing: cubicOut,
			css: (t) => `transform:scaleX(${t}); transform-origin: top left;`
		};
	}
</script>

{#if loaded}
	<div transition:fly={{ duration: animationsDuration, x: 100, easing: cubicOut }} class="wrapper">
		<div class="home_button">
			<IconButton href="/">
				<FaHome slot="icon" />
			</IconButton>
		</div>
		<ProjectFilters
			{projectTypes}
			{projectTags}
			{selectedType}
			{selectedTags}
			on:typeChange={(event) => {
				selectedType = event.detail;
				currentIndex = 0;
			}}
			on:tagsChange={(event) => {
				selectedTags = event.detail;
				currentIndex = 0;
			}}
		/>
		<div class="container" on:wheel={onScroll}>
			<ul class="slider">
				{#if currentlyDisplayedProjects.length}
					{#each currentlyDisplayedProjects as project, i (project.projectName)}
						<div
							animate:flip={{ duration: 700, easing: cubicOut }}
							class="project_card"
							in:fly={{
								duration: 700,
								easing: quintOut,
								y: scrollDirection === 1 ? -100 : 100
							}}
						>
							<ProjectCard
								on:click={() => onClickProjectCard(i)}
								isMainProject={currentlyDisplayedProjects.length == 1 ? true : i === 1}
								projectName={project.projectName}
								projectDescription={project.projectDescription}
								projectLinks={project.projectLinks}
								projectImage={project.projectImage}
								projectType={project.projectType}
								projectTags={project.projectTags}
							/>
						</div>
					{/each}
				{:else}
					<p class="empty_state">No projects match the selected filters.</p>
				{/if}
			</ul>
		</div>
	</div>
{/if}

<style>
	.home_button {
		width: 100%;
		position: absolute;
		top: 15px;
		display: flex;
		justify-content: center;
	}

	.container {
		overflow: hidden;
		margin-top: 1.5rem;
		min-height: 640px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slider {
		padding: 0;
		margin: 0;
		width: 100%;
		min-height: 640px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.project_card {
		width: 100%;
	}

	.empty_state {
		color: #2f4550;
		text-align: center;
		margin-top: 2rem;
		font-weight: 600;
	}
	/* For mobile phones: */
	.wrapper {
		width: 95%;
		position: relative;
		min-height: 100vh;
		flex-direction: column;
		display: flex;
		justify-content: flex-start;
		padding-top: 4rem;
	}

	@media only screen and (min-width: 600px) {
		/* For tablets: */
		.wrapper {
			width: 90%;
		}
	}
	@media only screen and (max-width: 599px) {
		.container,
		.slider {
			min-height: 560px;
		}
	}

	@media only screen and (min-width: 900px) {
		/* For desktop: */
		.wrapper {
			width: 80%;
		}
	}
</style>
