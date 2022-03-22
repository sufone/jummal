<script>
	import SavedValues from '../components/SavedValues.svelte';

	import Calculator from '../components/Calculator.svelte';
</script>

<svelte:head>
	<title>حساب الجمل</title>
</svelte:head>

<index>
	<h1>حساب الجمل</h1>
	<Calculator />

	<!-- till it's developed
    <SavedValues />
    -->
</index>

<style>
	index {
		text-align: center;
	}
</style>
