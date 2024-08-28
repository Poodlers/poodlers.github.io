<script>
	// @ts-nocheck
	import IconButton from '$lib/Components/IconButton.svelte';
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import TextBlock from '$lib/Components/TextBlock.svelte';
	import { aboutMe, whatImUpTo } from '$lib/Data/aboutMe';
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
	const animationsDuration = 1000;
</script>

{#if loaded}
	<div transition:fly={{ duration: animationsDuration, x: -100, easing: cubicOut }} class="wrapper">
		<div class="home_button">
			<IconButton href="/">
				<FaHome slot="icon" />
			</IconButton>
		</div>
		<div class="container">
			<TextBlock title="About me" text={aboutMe} />
			<div class="photo_with_text">
				<img id="author_img" src="miguel_frio.jpeg" alt="Me!" />
				<TextBlock title="What I'm up to" text={whatImUpTo} />
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.photo_with_text {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#author_img {
		height: auto;
		width: 70%;
		border-radius: 0.4rem;
	}

	#author_img {
		animation:
			shadow-pulse 4s infinite alternate,
			floating 4s infinite linear;
	}

	@media only screen and (min-width: 600px) {
		.container {
			flex-direction: column;
		}

		#author_img {
			height: auto;
			width: 60%;
		}
	}

	@media only screen and (min-width: 1000px) {
		.container {
			flex-direction: row;
		}

		#author_img {
			height: auto;
			width: 27%;
		}
	}

	.wrapper {
		width: 90%;
		min-height: 100%;
		position: relative;
		flex-direction: column;
		display: flex;
		justify-content: center;
	}

	.home_button {
		width: 100%;
		margin-top: 50px;
		display: flex;
		justify-content: center;
	}

	/* Keyframes for the shadow animation */
	@keyframes shadow-pulse {
		0% {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		}
		50% {
			box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
		}
		100% {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		}
	}

	@keyframes floating {
		from {
			transform: rotate(0deg) translateX(5px) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translateX(5px) rotate(-360deg);
		}
	}
</style>
