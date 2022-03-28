<script>
	import ayat from '../Functions/ayat';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';
	import surahs from '../Functions/surahs';

	
	let selectedSurah;
</script>

<div>
	<br />
	<h4>آيات سورة:</h4>
	<select bind:value={selectedSurah} id="surahSelect">
		{#each surahs as surah, i}
			{@const surahNumberIndex = JSON.stringify(i + 1)}
			<option value={i + 1}>
				{convertToArabicNumbers(surahNumberIndex)}.
				{surah.surahName}
			</option>
		{/each}
	</select>

	<div id="ayat-div">
		﴿{#each ayat.filter((item) => item.surahNumber == selectedSurah) as ayah, i}
			<p>
				{' ' + ayah.text + ' '}<span class="ayah-number">({convertToArabicNumbers(ayah.ayahNumber)})</span>
			</p>
		{/each}﴾
	</div>
</div>

<style>
	h4 {
		display: inline;
		position: sticky;
		margin-top: 5px;
	}
	div#ayat-div {
		max-height: 500px;
	}
	div {
		min-height: 500px;
		max-height: 600px;
		max-width: 50vw;
		overflow: auto;
		text-align: right;
	}
	@media (max-width: 850px) {
		div {
			max-width: 100vw;
		}
	}
	@media (max-width: 600px) {
		div {
			margin-bottom: 120px;
		}
	}
	span.ayah-number {
		background-color: rgb(240, 255, 249);
		border-radius: 360px;
	}
	p {
		display: inline;
	}
</style>
