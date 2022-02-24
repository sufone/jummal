<script>
	let surahsJson = [
		{
			surahName: 'الفاتحة',
			orderNormal: '١',
			numberAyat: '٧'
		},
		{
			surahName: 'البقرة',
			orderNormal: '٢',
			numberAyat: '٢٨٦'
		},
		{
			surahName: 'آل عمران',
			orderNormal: '٣',
			numberAyat: '٢٠٠'
		},
		{
			surahName: 'النساء',
			orderNormal: '٤',
			numberAyat: '١٧٦'
		},
		{
			surahName: 'المائدة',
			orderNormal: '٥',
			numberAyat: '١٢٠'
		},
		{
			surahName: 'الأنعام',
			orderNormal: '٦',
			numberAyat: '١٦٥'
		},
		{
			surahName: 'الأعراف',
			orderNormal: '٧',
			numberAyat: '٢٠٦'
		},
		{
			surahName: 'الأنفال',
			orderNormal: '٨',
			numberAyat: '٧٥'
		},
		{
			surahName: 'التوبة',
			orderNormal: '٩',
			numberAyat: '١٢٩'
		},
		{
			surahName: 'يونس',
			orderNormal: '١٠',
			numberAyat: '١٠٩'
		},
		{
			surahName: 'هود',
			orderNormal: '١١',
			numberAyat: '١٢٣'
		},
		{
			surahName: 'يوسف',
			orderNormal: '١٢',
			numberAyat: '١١١'
		},
		{
			surahName: 'الرعد',
			orderNormal: '١٣',
			numberAyat: '٤٣'
		},
		{
			surahName: 'إبراهيم',
			orderNormal: '١٤',
			numberAyat: '٥٢'
		},
		{
			surahName: 'الحجر',
			orderNormal: '١٥',
			numberAyat: '٩٩'
		},
		{
			surahName: 'النحل',
			orderNormal: '١٦',
			numberAyat: '١٢٨'
		},
		{
			surahName: 'الإسراء',
			orderNormal: '١٧',
			numberAyat: '١١١'
		},
		{
			surahName: 'الكهف',
			orderNormal: '١٨',
			numberAyat: '١١٠'
		},
		{
			surahName: 'مريم',
			orderNormal: '١٩',
			numberAyat: '٩٨'
		},
		{
			surahName: 'طه',
			orderNormal: '٢٠',
			numberAyat: '١٣٥'
		},
		{
			surahName: 'الأنبياء',
			orderNormal: '٢١',
			numberAyat: '١١٢'
		},
		{
			surahName: 'الحج',
			orderNormal: '٢٢',
			numberAyat: '٧٨'
		},
		{
			surahName: 'المؤمنون',
			orderNormal: '٢٣',
			numberAyat: '١١٨'
		},
		{
			surahName: 'النور',
			orderNormal: '٢٤',
			numberAyat: '٦٤'
		},
		{
			surahName: 'الفرقان',
			orderNormal: '٢٥',
			numberAyat: '٧٧'
		},
		{
			surahName: 'الشعراء',
			orderNormal: '٢٦',
			numberAyat: '٢٢٧'
		},
		{
			surahName: 'النمل',
			orderNormal: '٢٧',
			numberAyat: '٩٣'
		},
		{
			surahName: 'القصص',
			orderNormal: '٢٨',
			numberAyat: '٨٨'
		},
		{
			surahName: 'العنكبوت',
			orderNormal: '٢٩',
			numberAyat: '٦٩'
		},
		{
			surahName: 'الروم',
			orderNormal: '٣٠',
			numberAyat: '٦٠'
		},
		{
			surahName: 'لقمان',
			orderNormal: '٣١',
			numberAyat: '٣٤'
		},
		{
			surahName: 'السجدة',
			orderNormal: '٣٢',
			numberAyat: '٣٠'
		},
		{
			surahName: 'الأحزاب',
			orderNormal: '٣٣',
			numberAyat: '٧٣'
		},
		{
			surahName: 'سبأ',
			orderNormal: '٣٤',
			numberAyat: '٥٤'
		},
		{
			surahName: 'فاطر',
			orderNormal: '٣٥',
			numberAyat: '٤٥'
		},
		{
			surahName: 'يس',
			orderNormal: '٣٦',
			numberAyat: '٨٣'
		},
		{
			surahName: 'الصافات',
			orderNormal: '٣٧',
			numberAyat: '١٨٢'
		},
		{
			surahName: 'ص',
			orderNormal: '٣٨',
			numberAyat: '٨٨'
		},
		{
			surahName: 'الزمر',
			orderNormal: '٣٩',
			numberAyat: '٧٥'
		},
		{
			surahName: 'غافر',
			orderNormal: '٤٠',
			numberAyat: '٨٥'
		},
		{
			surahName: 'فصلت',
			orderNormal: '٤١',
			numberAyat: '٥٤'
		},
		{
			surahName: 'الشورى',
			orderNormal: '٤٢',
			numberAyat: '٥٣'
		},
		{
			surahName: 'الزخرف',
			orderNormal: '٤٣',
			numberAyat: '٨٩'
		},
		{
			surahName: 'الدخان',
			orderNormal: '٤٤',
			numberAyat: '٥٩'
		},
		{
			surahName: 'الجاثية',
			orderNormal: '٤٥',
			numberAyat: '٣٧'
		},
		{
			surahName: 'الأحقاف',
			orderNormal: '٤٦',
			numberAyat: '٣٥'
		},
		{
			surahName: 'محمد',
			orderNormal: '٤٧',
			numberAyat: '٣٨'
		},
		{
			surahName: 'الفتح',
			orderNormal: '٤٨',
			numberAyat: '٢٩'
		},
		{
			surahName: 'الحجرات',
			orderNormal: '٤٩',
			numberAyat: '١٨'
		},
		{
			surahName: 'ق',
			orderNormal: '٥٠',
			numberAyat: '٤٥'
		},
		{
			surahName: 'الذاريات',
			orderNormal: '٥١',
			numberAyat: '٦٠'
		},
		{
			surahName: 'الطور',
			orderNormal: '٥٢',
			numberAyat: '٤٩'
		},
		{
			surahName: 'النجم',
			orderNormal: '٥٣',
			numberAyat: '٦٢'
		},
		{
			surahName: 'القمر',
			orderNormal: '٥٤',
			numberAyat: '٥٥'
		},
		{
			surahName: 'الرحمن',
			orderNormal: '٥٥',
			numberAyat: '٧٨'
		},
		{
			surahName: 'الواقعة',
			orderNormal: '٥٦',
			numberAyat: '٩٦'
		},
		{
			surahName: 'الحديد',
			orderNormal: '٥٧',
			numberAyat: '٢٩'
		},
		{
			surahName: 'المجادلة',
			orderNormal: '٥٨',
			numberAyat: '٢٢'
		},
		{
			surahName: 'الحشر',
			orderNormal: '٥٩',
			numberAyat: '٢٤'
		},
		{
			surahName: 'الممتحنة',
			orderNormal: '٦٠',
			numberAyat: '١٣'
		},
		{
			surahName: 'الصف',
			orderNormal: '٦١',
			numberAyat: '١٤'
		},
		{
			surahName: 'الجمعة',
			orderNormal: '٦٢',
			numberAyat: '١١'
		},
		{
			surahName: 'المنافقون',
			orderNormal: '٦٣',
			numberAyat: '١١'
		},
		{
			surahName: 'التغابن',
			orderNormal: '٦٤',
			numberAyat: '١٨'
		},
		{
			surahName: 'الطلاق',
			orderNormal: '٦٥',
			numberAyat: '١٢'
		},
		{
			surahName: 'التحريم',
			orderNormal: '٦٦',
			numberAyat: '١٢'
		},
		{
			surahName: 'الملك',
			orderNormal: '٦٧',
			numberAyat: '٣٠'
		},
		{
			surahName: 'القلم',
			orderNormal: '٦٨',
			numberAyat: '٥٢'
		},
		{
			surahName: 'الحاقة',
			orderNormal: '٦٩',
			numberAyat: '٥٢'
		},
		{
			surahName: 'المعارج',
			orderNormal: '٧٠',
			numberAyat: '٤٤'
		},
		{
			surahName: 'نوح',
			orderNormal: '٧١',
			numberAyat: '٢٨'
		},
		{
			surahName: 'الجن',
			orderNormal: '٧٢',
			numberAyat: '٢٨'
		},
		{
			surahName: 'المزمل',
			orderNormal: '٧٣',
			numberAyat: '٢٠'
		},
		{
			surahName: 'المدثر',
			orderNormal: '٧٤',
			numberAyat: '٥٦'
		},
		{
			surahName: 'القيامة',
			orderNormal: '٧٥',
			numberAyat: '٤٠'
		},
		{
			surahName: 'الإنسان',
			orderNormal: '٧٦',
			numberAyat: '٣١'
		},
		{
			surahName: 'المرسلات',
			orderNormal: '٧٧',
			numberAyat: '٥٠'
		},
		{
			surahName: 'النبأ',
			orderNormal: '٧٨',
			numberAyat: '٤٠'
		},
		{
			surahName: 'النازعات',
			orderNormal: '٧٩',
			numberAyat: '٤٦'
		},
		{
			surahName: 'عبس',
			orderNormal: '٨٠',
			numberAyat: '٤٢'
		},
		{
			surahName: 'التكوير',
			orderNormal: '٨١',
			numberAyat: '٢٩'
		},
		{
			surahName: 'الانفطار',
			orderNormal: '٨٢',
			numberAyat: '١٩'
		},
		{
			surahName: 'المطففين',
			orderNormal: '٨٣',
			numberAyat: '٣٦'
		},
		{
			surahName: 'الانشقاق',
			orderNormal: '٨٤',
			numberAyat: '٢٥'
		},
		{
			surahName: 'البروج',
			orderNormal: '٨٥',
			numberAyat: '٢٢'
		},
		{
			surahName: 'الطارق',
			orderNormal: '٨٦',
			numberAyat: '١٧'
		},
		{
			surahName: 'الأعلى',
			orderNormal: '٨٧',
			numberAyat: '١٩'
		},
		{
			surahName: 'الغاشية',
			orderNormal: '٨٨',
			numberAyat: '٢٦'
		},
		{
			surahName: 'الفجر',
			orderNormal: '٨٩',
			numberAyat: '٣٠'
		},
		{
			surahName: 'البلد',
			orderNormal: '٩٠',
			numberAyat: '٢٠'
		},
		{
			surahName: 'الشمس',
			orderNormal: '٩١',
			numberAyat: '١٥'
		},
		{
			surahName: 'الليل',
			orderNormal: '٩٢',
			numberAyat: '٢١'
		},
		{
			surahName: 'الضحى',
			orderNormal: '٩٣',
			numberAyat: '١١'
		},
		{
			surahName: 'الشرح',
			orderNormal: '٩٤',
			numberAyat: '٨'
		},
		{
			surahName: 'التين',
			orderNormal: '٩٥',
			numberAyat: '٨'
		},
		{
			surahName: 'العلق',
			orderNormal: '٩٦',
			numberAyat: '١٩'
		},
		{
			surahName: 'القدر',
			orderNormal: '٩٧',
			numberAyat: '٥'
		},
		{
			surahName: 'البينة',
			orderNormal: '٩٨',
			numberAyat: '٨'
		},
		{
			surahName: 'الزلزلة',
			orderNormal: '٩٩',
			numberAyat: '٨'
		},
		{
			surahName: 'العاديات',
			orderNormal: '١٠٠',
			numberAyat: '١١'
		},
		{
			surahName: 'القارعة',
			orderNormal: '١٠١',
			numberAyat: '١١'
		},
		{
			surahName: 'التكاثر',
			orderNormal: '١٠٢',
			numberAyat: '٨'
		},
		{
			surahName: 'العصر',
			orderNormal: '١٠٣',
			numberAyat: '٣'
		},
		{
			surahName: 'الهمزة',
			orderNormal: '١٠٤',
			numberAyat: '٩'
		},
		{
			surahName: 'الفيل',
			orderNormal: '١٠٥',
			numberAyat: '٥'
		},
		{
			surahName: 'قريش',
			orderNormal: '١٠٦',
			numberAyat: '٤'
		},
		{
			surahName: 'الماعون',
			orderNormal: '١٠٧',
			numberAyat: '٧'
		},
		{
			surahName: 'الكوثر',
			orderNormal: '١٠٨',
			numberAyat: '٣'
		},
		{
			surahName: 'الكافرون',
			orderNormal: '١٠٩',
			numberAyat: '٦'
		},
		{
			surahName: 'النصر',
			orderNormal: '١١٠',
			numberAyat: '٣'
		},
		{
			surahName: 'المسد',
			orderNormal: '١١١',
			numberAyat: '٥'
		},
		{
			surahName: 'الإخلاص',
			orderNormal: '١١٢',
			numberAyat: '٤'
		},
		{
			surahName: 'الفلق',
			orderNormal: '١١٣',
			numberAyat: '٥'
		},
		{
			surahName: 'الناس',
			orderNormal: '١١٤',
			numberAyat: '٦'
		}
	];
</script>

<div>
	<h4>السور القرآنية</h4>

	<table>
		<thead>
			<tr>
				<td>السورة</td>
				<td>ترتيب</td>
				<td>الآيات</td>
			</tr>
		</thead>
		<tbody>
			{#each surahsJson as surah}
				<tr>
					<td>{surah.surahName}</td>
					<td>{surah.orderNormal}</td>
					<td>{surah.numberAyat}</td>
				</tr>
			{/each}
		</tbody>
	</table>

</div>

<style>
	div {
		max-height: 400px;
		overflow: auto;
	}
	td {
		text-align: right;
		padding: 2px;
	}
</style>
