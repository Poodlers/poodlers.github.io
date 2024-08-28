<!--
@component
	This component consists of a text block with a title and text. 
		@param title - string - Title of the text.
		@param text - string - Markdown string containing the text to be displayed.
-->

<script lang="ts">
	export let title: string = 'Title';
	export let text: string = 'Text';
</script>

<div class="text_block">
	<div>
		<h1>{title}</h1>
		<hr />
	</div>
	<p>{@html text}</p>
</div>

<style>
	.text_block {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;

		color: #000;
		width: 60%;
		border-radius: 1rem;
		opacity: 0.6;
		font-size: 0.91rem;
		transition: opacity 1s;
	}

	hr {
		width: 50%;
		height: 0;
		margin-left: 0;
		border-width: 2px;
		border-radius: 5px;
		border-color: #000;
		color: #000;
		margin-top: 0;
	}

	h1 {
		margin-bottom: 0.1rem;
	}

	p {
		white-space: pre-line;
		margin: 0 auto;
	}
</style>
