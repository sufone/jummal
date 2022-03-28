<script>
	import ayat from '../Functions/ayat';
	import quranTextRaw from '../Functions/quranRaw';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let searchFilter = 'فرطنا';
	let showAyahReference = true;
	$: ayatFiltered = ayat.filter((ayah) =>
		ayah.text.replace(/[ًٌٍَُِّْـٰ]+/g, '').includes(searchFilter.replace(/[ًٌٍَُِّْـٰ]+/g, ''))
	);

	$: numberOfMatches = (quranTextRaw.match(new RegExp(searchFilter, 'g')) || [""]).length;
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
	{#if searchFilter.length > 1 && ayatFiltered}
		<span>عدد الآيات: {ayatFiltered.length}</span>
		|
		<span>عدد هذه الكلمة: {numberOfMatches}</span>
		<ol>
			{#each ayatFiltered as ayah, i}
				<li>
					﴿{ayah.text}﴾
					{#if showAyahReference}
						[{ayah.surahName}: {convertToArabicNumbers(ayah.ayahNumber)}]
					{/if}
				</li>
			{/each}
		</ol>
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
		padding-right: 4px;
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
