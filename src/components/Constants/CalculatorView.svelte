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
	td,
	th {
		text-align: right;
		padding: 2px;
		border: 1px solid #999;
	}
	table {
		border-collapse: collapse;
	}
	th {
		background: rgb(240, 255, 249);
		position: sticky;
		top: 0;
		box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
		padding-bottom: 7px;
	}
	td.highlight {
		font-weight: bold;
		background-color: rgb(181, 255, 224);
	}
	:global(input, textarea, button, select, a, div) {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	@media (prefers-color-scheme: dark) {
		td.highlight {
			background-color: rgb(50, 95, 77);
			color: white;
		}
		th {
			background: rgb(31, 46, 40);
		}
		td,
		th {
			border: 1px solid rgb(70, 70, 70);
		}
		a {
			color: white;
		}
	}
</style>
