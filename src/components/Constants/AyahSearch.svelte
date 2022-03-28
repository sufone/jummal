<script>
	import ayat from '../Functions/ayat';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let searchFilter = 'فرطنا';
	let showAyahReference = true;
	$: ayatFiltered = ayat.filter((ayah) =>
		ayah.text.replace(/[ًٌٍَُِّْ]+/g, '').includes(searchFilter.replace(/[ًٌٍَُِّْ]+/g, ''))
	);
</script>

<div id="container">
	<br />
	<h4>آيات</h4>
	<div class="top-box-container">
		<textarea bind:value={searchFilter} />
		<label>
			<input type="checkbox" bind:checked={showAyahReference} />
			عرض اسم السورة
		</label>
	</div>
	{#if searchFilter.length > 1}
		<span>عدد الآيات: {ayatFiltered.length}</span>
		{#each ayatFiltered as ayah, i}
			<ol>
				<li>
					﴿{ayah.text}﴾
					{#if showAyahReference}
						[{ayah.surahName}: {convertToArabicNumbers(ayah.ayahNumber)}]
					{/if}
				</li>
			</ol>
		{/each}
	{/if}
</div>

<style>
	ol {
		list-style: arabic-indic;
	}
	div#container {
		min-height: 500px;
		max-height: 600px;
		max-width: 644px;
		overflow: auto;
		text-align: right;
	}
	div.top-box-container {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
	@media (max-width: 600px) {
		div {
			margin-bottom: 120px;
		}
	}
</style>
