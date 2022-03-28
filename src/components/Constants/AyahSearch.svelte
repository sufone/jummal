<script>
	import ayat from '../Functions/ayat';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';

    let searchFilter = "الله"
</script>

<div>
	<br />
	<h4>آيات</h4>
<textarea bind:value={searchFilter} />
 <ol>
     {#each ayat.filter(ayah => ayah.text.replace(/[\sًٌٍَُِّْ]+/g, '').includes(searchFilter)) as ayah, i}
        <li>﴿{ayah.text}﴾ [{ayah.surahName}: {convertToArabicNumbers(ayah.ayahNumber)}]</li>
    {/each}
 </ol>   
    </div>
 

    <style>
        ol {
            text-align: right;
        }
    </style>