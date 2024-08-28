<!--
@component
	This component consists of project card. It is used to display information about projects.
		@param projectName - string - Name of the project.
		@param projectDescription - string - Description of the project.
        @param projectLink - string - Link to the project.
        @param projectImage - string - Image of the project.
-->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import TextButton from './TextButton.svelte';

	export let projectName: string = 'Project';
	export let projectDescription: string = 'Description';
	export let projectLink: string = '';
	export let projectImage: string = '';
	export let isMainProject: boolean = false;
</script>

<div class="card_body" class:main_project={isMainProject}>
	<img class="project_image" src={projectImage} alt={projectName} />
	<div class="project_text_info">
		<h1>{projectName}</h1>
		{#if isMainProject}
			<hr />
			<p>{projectDescription}</p>
			{#if projectLink != ''}
				<TextButton href={projectLink} text="View code" />
			{/if}
		{/if}
	</div>
</div>

<style>
	.card_body {
		display: flex;
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		background-color: #586f7c;
		width: 60%;
		padding: 1rem;
		margin-bottom: 0.5rem;
		border-radius: 1rem;
		opacity: 0.6;
		font-size: 0.7rem;
		transition: opacity 1s;
	}

	h1 {
		margin-bottom: 0.1rem;
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
		font-size: 1rem;
		text-align: center;
	}

	.main_project h1 {
		font-size: 2rem;
		text-align: left;
	}

	.main_project {
		width: 80% !important;
		flex-direction: column;
		padding: 4vw 4vh;
		opacity: 1;
		font-size: 1rem;
	}

	.card_body .project_image {
		width: 10%;
		height: auto;
	}

	.main_project .project_image {
		height: 30vw;
		width: auto;
	}

	@media only screen and (min-width: 600px) {
		/* For tablets: */

		.card_body {
			padding: 1.5rem;
			margin-bottom: 0.5rem;
			font-size: 0.7rem;
		}
		.main_project {
			padding: 5vw 5vh;
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 900px) {
		/* For desktop: */
		.main_project {
			padding: 6vw 6vh;
		}

		.main_project .project_image {
			height: 14vw;
			width: auto;
		}

		.card_body {
			padding: 2rem;
			flex-direction: row;
			margin-bottom: 1rem;
			font-size: 1rem;
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
