<script>
	import SavedValues from '../components/SavedValues.svelte';

	import Calculator from '../components/Calculator.svelte';
import ConstantView from '../components/ConstantView.svelte';
</script>

<svelte:head>
	<title>حساب الجمل</title>
</svelte:head>

<index>
	<h1>حساب الجمل</h1>
	<Calculator />
	<ConstantView />

	<!-- till it's developed
    <SavedValues />
    -->
</index>

<style>
	h1 {
		margin: 0;
	}
	index {
		text-align: center;
	}
	@media (max-width: 600px) {
		h1 {
			font-size: 1.5rem	;
		}
	}
</style>
