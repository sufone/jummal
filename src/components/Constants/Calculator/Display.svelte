<script>
	export let total;
	export let totalArr;
	export let buttons;
</script>

<div class="calculator">
	<div id="display">
		{#if total !== 'err'}
			<div>
				<div class="top">{totalArr.join(' ')}</div>
			</div>
			<div>
				<div class="bottom">{total}</div>
			</div>
		{:else}
			<div>{total}</div>
		{/if}
	</div>
	{#each buttons as button}
		<button id={button.id} on:click={button.func}>{button.value}</button>
	{/each}
</div>

<style>
	.calculator {
		display: grid;
		grid-template-columns: 24% 24% 24% 24%;
		grid-gap: 4px;
		color: #444;
		width: 215px;
		padding: 5px;
    border-radius: 8px;
		background-color: rgb(251, 255, 253);
    padding: 20px;
		user-select: none;
    margin: 0 auto;

	}

	#display {
		grid-column: 1 / span 4;
		height: 60px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
		border: solid 1px rgb(132, 187, 164);
		background-color: rgb(181, 255, 224);
		border-radius: 8px;
		padding: 0 5px;
	}

	#display > div {
		text-align: right;
		box-sizing: border-box;
		height: 50%;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		text-align: right;
		overflow: hidden;
		white-space: nowrap;
	}

	#display > div > div {
		float: right;
	}

	.top {
		font-size: 0.8em;
		line-height: 200%;
	}

	.bottom {
		font-size: 1.2em;
		line-height: 100%;
	}

	button {
		height: 40px;
		font-weight: 700;
		font-size: 1.2em;
		border-radius: 8px;
    color: black;
    border: 1px solid rgb(175, 229, 208);
    background-color: rgb(240, 255, 249);
    box-shadow: rgb(175, 229, 208, 0.4) 0px 1px, rgb(175, 229, 208, 0.3) 0px 2px, rgb(175, 229, 208, 0.2) 0px 3px, rgb(175, 229, 208, 0.1) 0px 4px, rgb(175, 229, 208, 0.05) 0px 5px;
    transition: all 0.1s ease; 
	}
  button:hover {
    background-color: rgb(219, 255, 240);
  }
  button:active {
    background-color: rgb(181, 255, 224);
    box-shadow: rgb(175, 229, 208, 0.4) 0px 1px;
  }

	#ac {
		grid-column: 1 / span 2;
	}

	#clear {
		grid-column: 3 / span 2;
	}

	#add {
		height: initial;
		grid-column: 4;
		grid-row: 4 / span 2;
	}
	#equal {
		height: initial;
		grid-column: 4;
		grid-row: 6 / span 2;
	}
	#zero {
		grid-column: 1 / span 2;
	}
</style>
