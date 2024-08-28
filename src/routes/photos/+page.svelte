<script>
	// @ts-nocheck
	import IconButton from '$lib/Components/IconButton.svelte';
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import { fly, fade, slide } from 'svelte/transition';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import { onMount } from 'svelte';
	import { linear, quintOut } from 'svelte/easing';

	let loaded = false;
	onMount(() => {
		loaded = true;

		return () => {
			loaded = false;
		};
	});
	const animationsDuration = 1000;

	let images = [
		{
			src: 'abobora.jpeg',
			alt: 'Me holding a pumpkin!',
			description: `This is a picture of me holding a Saitama pumpkin (from One Punch Man). I took it 
				while on Erasmus in Lódz, Poland. The ESN section there organized a
				pumpkin carving event and I had a lot of fun! I think it turned out pretty well!
				Everyone should have the chance to carve a pumpkin at least once in their life!`
		},
		{
			src: 'amigos_paredes.jpeg',
			alt: 'Me posing with my friends at Paredes de Coura festival.',
			description: `This picture was taken at the Paredes de Coura festival. 
			It's a music festival that takes place in a small village in northern Portugal.
			I went there with my friends and we had a blast! We saw some amazing bands and had a lot of fun! Cooking in 
			the campout was a lot of fun too! I can't wait to go back!`
		},
		{
			src: 'exploring_wilderness.jpeg',
			alt: 'Me and my girlfriend posing on a nature trail!',
			description: `I took this picture while exploring the wilderness with my girlfriend. It was a beautiful day
			but it is always a beautiful day when you are hiking in the moutains, especially when you are with someone you
			love! We had a lot of fun and we saw some amazing views! I knew we had to take a picture when I saw 
			this cool stick. I think it turned out pretty well! My only regret in life is not having taken the stick home.`
		},
		{
			src: 'smelling_flowers.jpeg',
			alt: 'Me smelling some flowers!',
			description: `Smelled some flowers in a beautiful garden in Lódz, Poland. This was taken just two weeks into my Erasmus 
			experience. I was still getting to know the city and I stumbled upon this beautiful garden that was full of flowers from 
			all over the world. Had a lot of fun exploring the place and failing to identify almost every single flower. I think I've
			gotten better at it since then!`
		}
	];

	let currentImage = 0;
	let clicked = null;
</script>

{#if loaded}
	<div in:fly={{ duration: animationsDuration, y: 100, opacity: 0.1 }} class="wrapper">
		<div class="home_button">
			<IconButton href="/">
				<FaHome slot="icon" />
			</IconButton>
		</div>
		<br />
		<div class="carrousel">
			<button
				id="left_button"
				on:click={() => (
					(currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1),
					(clicked = 'left')
				)}
			>
				<FaArrowLeft />
			</button>
			{#key images[currentImage]}
				<img
					id="current_image"
					src={images[currentImage].src}
					alt={images[currentImage].alt}
					in:fly={{ duration: 1000, x: clicked == 'left' ? 100 : -100 }}
				/>
			{/key}
			<button
				id="right_button"
				on:click={() => (
					(currentImage = currentImage === images.length - 1 ? 0 : currentImage + 1),
					(clicked = 'right')
				)}
			>
				<FaArrowRight />
			</button>
		</div>
		{#key images[currentImage]}
			<p class="description" in:fly={{ duration: 1000, x: clicked == 'left' ? 100 : -100 }}>
				{images[currentImage].description}
			</p>
		{/key}
	</div>
{/if}

<style>
	.description {
		text-align: center;
		margin-top: 2rem;
	}

	#right_button {
		position: absolute;
		right: 0;
	}

	#left_button {
		position: absolute;
		left: 0;
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		width: 3rem;
		height: 3rem;
	}

	.carrousel {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}

	/* For mobile phones: */
	.wrapper {
		width: 90%;

		flex-direction: column;
		display: flex;
		justify-content: center;
	}
	#current_image {
		height: auto;
		width: 70%;
	}

	@media only screen and (min-width: 600px) {
		#current_image {
			height: auto;
			width: 50%;
		}
	}

	@media only screen and (min-width: 900px) {
		#current_image {
			height: auto;
			width: 25%;
		}
	}

	.home_button {
		width: 100%;

		display: flex;
		justify-content: center;
	}
</style>
