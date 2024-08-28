<!--
@component
	This component consists of a generic text button. It is used to create buttons with text.
		@param href - string - HREF to redirect to.
		@param text - string - Text to display on the button.
-->

<script lang="ts">
	export let href: string = '/';
	export let text: string = 'Button';
</script>

<div>
	<a {href} class="text_button">
		{text}
	</a>
</div>

<style>
	.text_button {
		display: block;
		padding: 0.5rem 1rem;
		background-color: #00bfb2;
		color: #faf4d3;
		border-radius: 0.5rem;
		text-align: center;
		text-decoration: none;
		transition: background-color 0.5s;
		font-weight: bold;
		border: solid 2px #00bfb2;
	}

	.text_button:hover {
		background-color: #586f7c;

		color: #00bfb2;
	}
</style>
