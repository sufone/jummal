<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalTrueValue, totalSmallValue } from '../../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiTrueValue
	} from '../../stores/totalMaghribiSmallValue.js';

	import ayat from '../Functions/ayat';
	import quranTextRaw from '../Functions/quranRaw';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let searchFilter = 'فرطنا';
	let showAyahReference = true;
	$: ayatFiltered = ayat.filter((ayah) =>
		ayah.text.replace(/[ًٌٍَُِّْـٰ]+/g, '').includes(searchFilter.replace(/[ًٌٍَُِّْـٰ]+/g, ''))
	);

	$: numberOfMatches = (quranTextRaw.match(new RegExp(searchFilter, 'g')) || ['']).length;
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
						{#if parseInt(ayah.surahNumber) == parseInt($totalNafasi[0]) || parseInt(ayah.surahNumber) == parseInt($totalSmallValue[0]) || parseInt(ayah.surahNumber) == parseInt($totalTrueValue[0]) || parseInt(ayah.surahNumber) == parseInt($totalMaghribiSmallValue[0]) || parseInt(ayah.surahNumber) == parseInt($totalMaghribiTrueValue[0]) || parseInt(ayah.ayahNumber) == parseInt($totalNafasi[0]) || parseInt(ayah.ayahNumber) == parseInt($totalSmallValue[0]) || parseInt(ayah.ayahNumber) == parseInt($totalTrueValue[0]) || parseInt(ayah.ayahNumber) == parseInt($totalMaghribiSmallValue[0]) || parseInt(ayah.ayahNumber) == parseInt($totalMaghribiTrueValue[0])}
							<span class="highlight"
								>[{ayah.surahName}
								{convertToArabicNumbers(ayah.surahNumber)}: {convertToArabicNumbers(
									ayah.ayahNumber
								)}]</span
							>
						{:else}
							<span
								>[{ayah.surahName}
								{convertToArabicNumbers(ayah.surahNumber)}: {convertToArabicNumbers(
									ayah.ayahNumber
								)}]</span
							>
						{/if}
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
	.highlight {
		background-color: rgb(50, 95, 77);
		border-radius: 8px;
		padding: 0 4px;
	}
	@media (max-width: 600px) {
		div {
			margin-bottom: 120px;
		}
	}
</style>
