<!--
@component
	This component consists of project card. It is used to display information about projects.
		@param projectName - string - Name of the project.
		@param projectDescription - string - Description of the project.
        @param projectLinks - {text: string, link: string}[] - List of links to the project.
        @param projectImage - string - Image of the project.
-->
<script lang="ts">
	import TextButton from './TextButton.svelte';

	export let projectName: string = 'Project';
	export let projectDescription: string = 'Description';
	export let projectLinks: { link: string; text: string }[] = [];
	export let projectImage: string = '';
	export let isMainProject: boolean = false;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function alertClick() {
		if (isMainProject) return;
		dispatch('click');
	}
</script>

<button class="card_body" class:main_project={isMainProject} on:click={alertClick}>
	<img class="project_image" src={projectImage} alt={projectName} />
	<div class="project_text_info">
		<h1>{projectName}</h1>
		{#if isMainProject}
			<hr />
			<p>{projectDescription}</p>
			<div class="links_container">
				{#each projectLinks as link}
					<TextButton href={link.link} text={link.text} />
				{/each}
			</div>
		{/if}
	</div>
</button>

<style>
	.links_container {
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
	}
	.card_body {
		display: flex;
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		background-color: #586f7c;
		width: 60%;
		padding: 0.7rem;
		margin-bottom: 0.5rem;
		border-radius: 1rem;
		opacity: 0.6;
		font-size: 0.9rem;
		transition: opacity 1s;
	}

	h1 {
		margin-bottom: 0.1rem;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	hr {
		width: 100%;
		margin-left: 0;
		border-width: 2px;
		border-radius: 5px;
		border-color: #faf4d3;
		margin-top: 0;
	}

	.card_body h1 {
		font-size: 0.9rem;
		text-align: center;
	}

	.main_project h1 {
		font-size: 2rem;
		text-align: left;
	}

	.main_project {
		width: 85% !important;
		flex-direction: column;
		padding: 3vw 3vh;
		opacity: 1;
		font-size: 1rem;
		cursor: auto;
		text-align: left;
	}

	.card_body .project_image {
		height: 5vh;
		width: auto;
	}

	.main_project .project_image {
		height: 30vw;
		width: auto;
	}

	@media only screen and (min-width: 600px) {
		/* For tablets: */

		.card_body {
			padding: 1rem;
			margin-bottom: 0.5rem;
			font-size: 0.7rem;
		}
		.main_project {
			padding: 4vw 4vh;
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 900px) {
		/* For desktop: */

		.main_project .project_image {
			height: 14vw;
			width: auto;
		}

		.card_body {
			padding: 1.3rem;
			flex-direction: row;
			margin-bottom: 1rem;
			font-size: 1rem;
		}
		.main_project {
			padding: 6vw 6vh;
			font-size: 1.1rem;
		}
	}

	.project_text_info {
		color: #faf4d3;
		flex-grow: 1;
	}

	.card_body .project_text_info {
		margin-left: 1rem;
	}
</style>
