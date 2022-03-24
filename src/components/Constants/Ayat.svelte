<script>
	import ayat from '../Functions/ayat';
	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let surahs = [
		{
			surahName: 'الفاتحة'
		},
		{
			surahName: 'البقرة'
		},
		{
			surahName: 'آل عمران'
		},
		{
			surahName: 'النساء'
		},
		{
			surahName: 'المائدة'
		},
		{
			surahName: 'الأنعام'
		},
		{
			surahName: 'الأعراف'
		},
		{
			surahName: 'الأنفال'
		},
		{
			surahName: 'التوبة'
		},
		{
			surahName: 'يونس'
		},
		{
			surahName: 'هود'
		},
		{
			surahName: 'يوسف'
		},
		{
			surahName: 'الرعد'
		},
		{
			surahName: 'ابراهيم'
		},
		{
			surahName: 'الحجر'
		},
		{
			surahName: 'النحل'
		},
		{
			surahName: 'الإسراء'
		},
		{
			surahName: 'الكهف'
		},
		{
			surahName: 'مريم'
		},
		{
			surahName: 'طه'
		},
		{
			surahName: 'الأنبياء'
		},
		{
			surahName: 'الحج'
		},
		{
			surahName: 'المؤمنون'
		},
		{
			surahName: 'النور'
		},
		{
			surahName: 'الفرقان'
		},
		{
			surahName: 'الشعراء'
		},
		{
			surahName: 'النمل'
		},
		{
			surahName: 'القصص'
		},
		{
			surahName: 'العنكبوت'
		},
		{
			surahName: 'الروم'
		},
		{
			surahName: 'لقمان'
		},
		{
			surahName: 'السجدة'
		},
		{
			surahName: 'الأحزاب'
		},
		{
			surahName: 'سبإ'
		},
		{
			surahName: 'فاطر'
		},
		{
			surahName: 'يس'
		},
		{
			surahName: 'الصافات'
		},
		{
			surahName: 'ص'
		},
		{
			surahName: 'الزمر'
		},
		{
			surahName: 'غافر'
		},
		{
			surahName: 'فصلت'
		},
		{
			surahName: 'الشورى'
		},
		{
			surahName: 'الزخرف'
		},
		{
			surahName: 'الدخان'
		},
		{
			surahName: 'الجاثية'
		},
		{
			surahName: 'الأحقاف'
		},
		{
			surahName: 'محمد'
		},
		{
			surahName: 'الفتح'
		},
		{
			surahName: 'الحجرات'
		},
		{
			surahName: 'ق'
		},
		{
			surahName: 'الذاريات'
		},
		{
			surahName: 'الطور'
		},
		{
			surahName: 'النجم'
		},
		{
			surahName: 'القمر'
		},
		{
			surahName: 'الرحمن'
		},
		{
			surahName: 'الواقعة'
		},
		{
			surahName: 'الحديد'
		},
		{
			surahName: 'المجادلة'
		},
		{
			surahName: 'الحشر'
		},
		{
			surahName: 'الممتحنة'
		},
		{
			surahName: 'الصف'
		},
		{
			surahName: 'الجمعة'
		},
		{
			surahName: 'المنافقون'
		},
		{
			surahName: 'التغابن'
		},
		{
			surahName: 'الطلاق'
		},
		{
			surahName: 'التحريم'
		},
		{
			surahName: 'الملك'
		},
		{
			surahName: 'القلم'
		},
		{
			surahName: 'الحاقة'
		},
		{
			surahName: 'المعارج'
		},
		{
			surahName: 'نوح'
		},
		{
			surahName: 'الجن'
		},
		{
			surahName: 'المزمل'
		},
		{
			surahName: 'المدثر'
		},
		{
			surahName: 'القيامة'
		},
		{
			surahName: 'الانسان'
		},
		{
			surahName: 'المرسلات'
		},
		{
			surahName: 'النبإ'
		},
		{
			surahName: 'النازعات'
		},
		{
			surahName: 'عبس'
		},
		{
			surahName: 'التكوير'
		},
		{
			surahName: 'الإنفطار'
		},
		{
			surahName: 'المطففين'
		},
		{
			surahName: 'الإنشقاق'
		},
		{
			surahName: 'البروج'
		},
		{
			surahName: 'الطارق'
		},
		{
			surahName: 'الأعلى'
		},
		{
			surahName: 'الغاشية'
		},
		{
			surahName: 'الفجر'
		},
		{
			surahName: 'البلد'
		},
		{
			surahName: 'الشمس'
		},
		{
			surahName: 'الليل'
		},
		{
			surahName: 'الضحى'
		},
		{
			surahName: 'الشرح'
		},
		{
			surahName: 'التين'
		},
		{
			surahName: 'العلق'
		},
		{
			surahName: 'القدر'
		},
		{
			surahName: 'البينة'
		},
		{
			surahName: 'الزلزلة'
		},
		{
			surahName: 'العاديات'
		},
		{
			surahName: 'القارعة'
		},
		{
			surahName: 'التكاثر'
		},
		{
			surahName: 'العصر'
		},
		{
			surahName: 'الهمزة'
		},
		{
			surahName: 'الفيل'
		},
		{
			surahName: 'قريش'
		},
		{
			surahName: 'الماعون'
		},
		{
			surahName: 'الكوثر'
		},
		{
			surahName: 'الكافرون'
		},
		{
			surahName: 'النصر'
		},
		{
			surahName: 'المسد'
		},
		{
			surahName: 'الإخلاص'
		},
		{
			surahName: 'الفلق'
		},
		{
			surahName: 'الناس'
		}
	];
	let selectedSurah;
</script>

<div>
	<br>
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
			<p><span class="ayah-number">({convertToArabicNumbers(ayah.ayahNumber)})</span>{" " + ayah.text + " "}</p>
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
	span.ayah-number {
		background-color: rgb(252, 217, 215);
		border-radius: 360px;
	}
	p {
		display: inline;
	}
</style>
