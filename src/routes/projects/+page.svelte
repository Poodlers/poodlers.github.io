<script>
	// @ts-nocheck
	import IconButton from '$lib/Components/IconButton.svelte';
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import ProjectCard from '$lib/Components/ProjectCard.svelte';
	import { projects } from '$lib/Data/projects';
	import { flip } from 'svelte/animate';
	import { cubicOut, quintOut } from 'svelte/easing';

	let loaded = false;

	const animationsDuration = 1000;

	let currentIndex = 1;
	let scrollDirection = 0;

	let currentlyDisplayedProjects = getClosestElements(projects, currentIndex);
	function getClosestElements(array, index) {
		const length = array.length;

		// Get the elements at the three closest indices in a circular manner
		const prevIndex = (index - 1 + length) % length; // Previous element
		const currentIndex = index; // Current element
		const nextIndex = (index + 1) % length; // Next element

		return [array[prevIndex], array[currentIndex], array[nextIndex]];
	}

	function onScroll(e) {
		scrollDirection = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
		clearInterval(interval);
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % projects.length;
			currentlyDisplayedProjects = getClosestElements(projects, currentIndex);
		}, 10000);
		if (scrollDirection < 0) {
			// Scrolling down
			currentIndex = (currentIndex + 1) % projects.length;
		} else {
			// Scrolling up
			currentIndex = (currentIndex - 1 + projects.length) % projects.length;
		}

		currentlyDisplayedProjects = getClosestElements(projects, currentIndex);
	}

	let interval;

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

		<div class="container" on:mousewheel={(e) => onScroll(e)}>
			<ul class="slider">
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
							isMainProject={i === 1}
							projectName={project.projectName}
							projectDescription={project.projectDescription}
							projectLink={project.projectLink}
							projectImage={project.projectImage}
						/>
					</div>
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style>
	.home_button {
		width: 100%;
		position: absolute;
		top: 30px;
		display: flex;
		justify-content: center;
	}

	.container {
		overflow: hidden;
		margin-top: 40px;
	}

	.slider {
		padding: 0;
		margin: 0;
	}
	/* For mobile phones: */
	.wrapper {
		width: 95%;
		position: relative;
		min-height: 100vh;
		flex-direction: column;
		display: flex;
		justify-content: center;
	}

	@media only screen and (min-width: 600px) {
		/* For tablets: */
		.wrapper {
			width: 90%;
		}
	}

	@media only screen and (min-width: 900px) {
		/* For desktop: */
		.wrapper {
			width: 80%;
		}
	}
</style>
