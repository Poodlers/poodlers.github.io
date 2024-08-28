<div class="outer">
	<slot></slot>
</div>

<style>
	.outer {
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
