<script>
	import Constants from './Constants.svelte';
</script>

<div id="main">
	<div id="side-constants">
		<Constants selectedTab={1} />
	</div>
	<div id="side-constants">
		<Constants selectedTab={2} />
	</div>
</div>

<style>
	div#main {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
        margin-top: 20px;
	}
	div#side-constants {
		min-width: 50%;
	}
	@media (max-width: 850px) {
		div#main {
			display: flex;
			flex-direction: column-reverse;
		}
	}
</style>
