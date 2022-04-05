<script>
	import Calculator from './Calculator/Calculator.svelte';
</script>

<div>
	<Calculator />
</div>

<style>
	div {
		padding-top: 10px;
		min-height: 600px;
		max-height: 600px;
		overflow: auto;
	}
	:global(input, textarea, button, select, a, div) {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
</style>
