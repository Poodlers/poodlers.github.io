<script>
	// @ts-nocheck
	import IconButton from '$lib/Components/IconButton.svelte';
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	let loaded = false;
	let currentImage = 0;
	let direction = 'right';

	const animationsDuration = 800;

	const images = [
		{
			src: 'abobora.jpeg',
			alt: 'Me holding a carved pumpkin during Erasmus in Łódź.',
			title: 'Pumpkin Saitama',
			location: 'Łódź, Poland',
			description: `A Saitama pumpkin from an ESN pumpkin carving event during my Erasmus in Łódź. 
			I still think everyone should carve a pumpkin at least once.`
		},
		{
			src: 'amigos_paredes.jpeg',
			alt: 'Me with friends at Paredes de Coura festival.',
			title: 'Paredes de Coura',
			location: 'Portugal',
			description: `A music festival in northern Portugal with friends, concerts, camping, questionable cooking, 
			and very good memories.`
		},
		{
			src: 'exploring_wilderness.jpeg',
			alt: 'Me and my girlfriend hiking on a nature trail.',
			title: 'Cool Stick Era',
			location: 'Somewhere in the mountains',
			description: `A hiking day with my girlfriend. Beautiful views, good company, and one extremely powerful stick 
			that I sadly did not take home.`
		},
		{
			src: 'smelling_flowers.jpeg',
			alt: 'Me smelling flowers in a garden in Łódź.',
			title: 'Flower Research',
			location: 'Łódź, Poland',
			description: `Taken early in my Erasmus experience while exploring a garden full of flowers I absolutely could not identify. 
			I have improved slightly since then.`
		}
	];

	function nextImage() {
		direction = 'right';
		currentImage = (currentImage + 1) % images.length;
	}

	function previousImage() {
		direction = 'left';
		currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
	}

	function goToImage(index) {
		direction = index > currentImage ? 'right' : 'left';
		currentImage = index;
	}

	function handleKeydown(event) {
		if (event.key === 'ArrowRight') nextImage();
		if (event.key === 'ArrowLeft') previousImage();
	}

	onMount(() => {
		loaded = true;
		window.addEventListener('keydown', handleKeydown);

		return () => {
			loaded = false;
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if loaded}
	<div
		in:fly={{ duration: animationsDuration, y: 80, opacity: 0.15, easing: cubicOut }}
		class="wrapper"
	>
		<div class="home-button">
			<IconButton href="/">
				<FaHome slot="icon" />
			</IconButton>
		</div>

		<section class="intro">
			<h1>Photos</h1>
			<p>A small collection of places, people and moments I like.</p>
		</section>

		<div class="carousel" aria-label="Photo carousel">
			<button class="nav-button left" on:click={previousImage} aria-label="Previous photo">
				<FaArrowLeft />
			</button>

			<div class="image-frame">
				{#key images[currentImage].src}
					<img
						class="current-image"
						src={images[currentImage].src}
						alt={images[currentImage].alt}
						in:fly={{
							duration: 650,
							x: direction === 'left' ? 80 : -80,
							opacity: 0.4,
							easing: cubicOut
						}}
					/>
				{/key}
			</div>

			<button class="nav-button right" on:click={nextImage} aria-label="Next photo">
				<FaArrowRight />
			</button>
		</div>

		{#key images[currentImage].src}
			<div
				class="caption"
				in:fly={{
					duration: 650,
					x: direction === 'left' ? 50 : -50,
					opacity: 0.2,
					easing: cubicOut
				}}
			>
				<p class="eyebrow">{images[currentImage].location}</p>
				<h2>{images[currentImage].title}</h2>
				<p>{images[currentImage].description}</p>
			</div>
		{/key}

		<div class="dots" aria-label="Photo selector">
			{#each images as image, index}
				<button
					class:active={index === currentImage}
					on:click={() => goToImage(index)}
					aria-label={`Go to photo ${index + 1}: ${image.title}`}
				/>
			{/each}
		</div>
	</div>
{/if}

<style>
	.wrapper {
		width: min(92%, 980px);
		min-height: 100vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0.7rem 0;
	}

	.home-button {
		position: absolute;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}

	.intro {
		text-align: center;
		margin-bottom: 1.2rem;
	}

	.intro h1 {
		margin: 0;
		font-size: clamp(1.7rem, 4vw, 3.1rem);
	}

	.intro p {
		margin-top: 0.3rem;
		opacity: 0.75;
	}

	.carousel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-frame {
		width: min(78vw, 420px);
		aspect-ratio: 3 / 4;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1.5rem;
		overflow: hidden;
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
		background: rgba(255, 255, 255, 0.08);
	}

	.current-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.nav-button {
		position: absolute;
		z-index: 2;
		width: 3rem;
		height: 3rem;
		border-radius: 999px;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		transition:
			transform 160ms ease,
			background 160ms ease;
	}

	.nav-button:hover {
		transform: scale(1.06);
		background: white;
	}

	.left {
		left: 0;
	}

	.right {
		right: 0;
	}

	.caption {
		max-width: 680px;
		margin: 1.5rem auto 0;
		text-align: center;
		line-height: 1.6;
	}

	.caption h2 {
		margin: 0.1rem 0 0.5rem;
		font-size: clamp(1.3rem, 3vw, 2rem);
	}

	.caption p {
		margin: 0;
	}

	.eyebrow {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-weight: 700;
		opacity: 0.65;
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 0.55rem;
		margin-top: 1.1rem;
	}

	.dots button {
		width: 0.65rem;
		height: 0.65rem;
		border: none;
		cursor: pointer;
		opacity: 0.35;
		background: rgba(0, 0, 0, 0.9);
		transition:
			opacity 160ms ease,
			transform 160ms ease;
	}

	.dots button.active {
		opacity: 1;
		transform: scale(1.25);
	}

	@media only screen and (max-width: 600px) {
		.image-frame {
			width: 72vw;
		}

		.nav-button {
			width: 2.5rem;
			height: 2.5rem;
		}

		.left {
			left: -0.4rem;
		}

		.right {
			right: -0.4rem;
		}
	}
</style>
