<script>
	import ayat from '../Functions/ayat';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let searchFilter = 'فرط';
    let showAyahReference = true
</script>

<div>
	<br />
	<h4>آيات</h4>
    <div class="top-box-container">
        <textarea bind:value={searchFilter} />
        <label>
            <input type=checkbox bind:checked={showAyahReference}>
            عمض اسم السورة
        </label>

    </div>
	<ol>
		{#each ayat.filter((ayah) => ayah.text
				.replace(/[ًٌٍَُِّْ]+/g, '')
				.includes(searchFilter.replace(/[ًٌٍَُِّْ]+/g, ''))) as ayah, i}
			<li>﴿{ayah.text}﴾ [{ayah.surahName}: {convertToArabicNumbers(ayah.ayahNumber)}]</li>
		{/each}
	</ol>
</div>

<style>
	ol {
		text-align: right;
        list-style: arabic-indic;
	}
	div {
		max-height: 600px;
		overflow: auto;
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
