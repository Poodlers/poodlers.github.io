<!--
@component
	This component consists of a generic route button. It is used to create buttons with icons.
		@param href - string - HREF to redirect to.
		
-->
<script lang="ts">
	export let href: string = '/';
</script>

<div>
	<a {href} class="route_icon">
		<slot name="icon"></slot>
	</a>
</div>

<style>
	.route_icon {
		display: block;
		width: 2rem;
		height: 2rem;
		color: #000;
	}
</style>
