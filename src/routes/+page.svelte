<script>
	// @ts-nocheck
	import FaCode from 'svelte-icons/fa/FaCode.svelte';
	import GiPerson from 'svelte-icons/gi/GiPerson.svelte';

	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaCamera from 'svelte-icons/fa/FaCamera.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import IconButton from '$lib/Components/IconButton.svelte';
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
	const animationsDuration = 2000;
</script>

{#if loaded}
	<div transition:fade={{ duration: animationsDuration }} class="routes">
		<IconButton href="/projects">
			<FaCode slot="icon" />
		</IconButton>

		<IconButton href="/about">
			<GiPerson slot="icon" />
		</IconButton>
		<IconButton href="/photos">
			<FaCamera slot="icon" />
		</IconButton>
	</div>

	<div class="center_content">
		<div transition:fly={{ x: -100, duration: animationsDuration }} class="main_image_text">
			<h1>Hi, I'm Miguel</h1>
			<hr />
			<p>See what I'm up to!</p>
		</div>

		<img
			transition:fly={{ x: 100, duration: animationsDuration }}
			id="main_image"
			src="main_image.png"
			alt="The author."
		/>
	</div>

	<div transition:fade={{ duration: animationsDuration }} class="routes">
		<IconButton href="https://www.instagram.com/miguel.freitas2347/">
			<FaInstagram slot="icon" />
		</IconButton>
		<IconButton href="https://github.com/Poodlers">
			<FaGithub slot="icon" />
		</IconButton>
		<IconButton href="https://www.linkedin.com/in/miguel-freitas-838132286/">
			<FaLinkedin slot="icon" />
		</IconButton>
	</div>
{/if}

<style>
	.main_image_text {
		position: absolute;
		z-index: 2;
		color: white;
		translate: -15vw;
		font-size: 20px;
		top: 20%;
		mix-blend-mode: difference;
		animation: floating 5s linear infinite;
	}

	.center_content hr {
		width: 50%;
		margin-left: 0;
		border-width: 4px;
		border-radius: 5px;
		mix-blend-mode: difference;
		margin-top: 0;
	}

	.center_content h1 {
		font-size: 3rem;
		margin-bottom: 0;
	}

	.center_content {
		margin-top: 50px;
		margin-bottom: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	#main_image {
		width: auto;
		height: 70vh;
	}

	.routes {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	@keyframes floating {
		from {
			transform: rotate(0deg) translateX(10px) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translateX(10px) rotate(-360deg);
		}
	}

	@media only screen and (max-width: 768px) {
		.center_content {
			width: 50%;
		}
		.main_image_text {
			font-size: 15px;
		}
		.center_content h1 {
			font-size: 2.5rem;
			margin-bottom: 0;
		}
	}
</style>
