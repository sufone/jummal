<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalSmallValue } from '../../stores/totalSmallValue.js';
	import { totalTrueValue } from '../../stores/totalTrueValue.js';
	import { totalMaghribiSmallValue } from '../../stores/totalMaghribiSmallValue.js';
	import { totalMaghribiTrueValue } from '../../stores/totalMaghribiTrueValue.js';

	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let ayahProvider = 'https://quran.ksu.edu.sa/index.php#aya={surah.orderNormal}_31';

	// https://tafsir.app/{surah.orderNormal}/{$totalNafasi[0]}

	let surahsJson = [
		{
			surahName: 'الفاتحة',
			orderNormal: '1',
			numberAyat: '7'
		},
		{
			surahName: 'البقرة',
			orderNormal: '2',
			numberAyat: '286'
		},
		{
			surahName: 'آل عمران',
			orderNormal: '3',
			numberAyat: '200'
		},
		{
			surahName: 'النساء',
			orderNormal: '4',
			numberAyat: '176'
		},
		{
			surahName: 'المائدة',
			orderNormal: '5',
			numberAyat: '120'
		},
		{
			surahName: 'الأنعام',
			orderNormal: '6',
			numberAyat: '165'
		},
		{
			surahName: 'الأعراف',
			orderNormal: '7',
			numberAyat: '206'
		},
		{
			surahName: 'الأنفال',
			orderNormal: '8',
			numberAyat: '75'
		},
		{
			surahName: 'التوبة',
			orderNormal: '9',
			numberAyat: '129'
		},
		{
			surahName: 'يونس',
			orderNormal: '10',
			numberAyat: '109'
		},
		{
			surahName: 'هود',
			orderNormal: '11',
			numberAyat: '123'
		},
		{
			surahName: 'يوسف',
			orderNormal: '12',
			numberAyat: '111'
		},
		{
			surahName: 'الرعد',
			orderNormal: '13',
			numberAyat: '43'
		},
		{
			surahName: 'إبراهيم',
			orderNormal: '14',
			numberAyat: '52'
		},
		{
			surahName: 'الحجر',
			orderNormal: '15',
			numberAyat: '99'
		},
		{
			surahName: 'النحل',
			orderNormal: '16',
			numberAyat: '128'
		},
		{
			surahName: 'الإسراء',
			orderNormal: '17',
			numberAyat: '111'
		},
		{
			surahName: 'الكهف',
			orderNormal: '18',
			numberAyat: '110'
		},
		{
			surahName: 'مريم',
			orderNormal: '19',
			numberAyat: '98'
		},
		{
			surahName: 'طه',
			orderNormal: '20',
			numberAyat: '135'
		},
		{
			surahName: 'الأنبياء',
			orderNormal: '21',
			numberAyat: '112'
		},
		{
			surahName: 'الحج',
			orderNormal: '22',
			numberAyat: '78'
		},
		{
			surahName: 'المؤمنون',
			orderNormal: '23',
			numberAyat: '118'
		},
		{
			surahName: 'النور',
			orderNormal: '24',
			numberAyat: '64'
		},
		{
			surahName: 'الفرقان',
			orderNormal: '25',
			numberAyat: '77'
		},
		{
			surahName: 'الشعراء',
			orderNormal: '26',
			numberAyat: '227'
		},
		{
			surahName: 'النمل',
			orderNormal: '27',
			numberAyat: '93'
		},
		{
			surahName: 'القصص',
			orderNormal: '28',
			numberAyat: '88'
		},
		{
			surahName: 'العنكبوت',
			orderNormal: '29',
			numberAyat: '69'
		},
		{
			surahName: 'الروم',
			orderNormal: '30',
			numberAyat: '60'
		},
		{
			surahName: 'لقمان',
			orderNormal: '31',
			numberAyat: '34'
		},
		{
			surahName: 'السجدة',
			orderNormal: '32',
			numberAyat: '30'
		},
		{
			surahName: 'الأحزاب',
			orderNormal: '33',
			numberAyat: '73'
		},
		{
			surahName: 'سبأ',
			orderNormal: '34',
			numberAyat: '54'
		},
		{
			surahName: 'فاطر',
			orderNormal: '35',
			numberAyat: '45'
		},
		{
			surahName: 'يس',
			orderNormal: '36',
			numberAyat: '83'
		},
		{
			surahName: 'الصافات',
			orderNormal: '37',
			numberAyat: '182'
		},
		{
			surahName: 'ص',
			orderNormal: '38',
			numberAyat: '88'
		},
		{
			surahName: 'الزمر',
			orderNormal: '39',
			numberAyat: '75'
		},
		{
			surahName: 'غافر',
			orderNormal: '40',
			numberAyat: '85'
		},
		{
			surahName: 'فصلت',
			orderNormal: '41',
			numberAyat: '54'
		},
		{
			surahName: 'الشورى',
			orderNormal: '42',
			numberAyat: '53'
		},
		{
			surahName: 'الزخرف',
			orderNormal: '43',
			numberAyat: '89'
		},
		{
			surahName: 'الدخان',
			orderNormal: '44',
			numberAyat: '59'
		},
		{
			surahName: 'الجاثية',
			orderNormal: '45',
			numberAyat: '37'
		},
		{
			surahName: 'الأحقاف',
			orderNormal: '46',
			numberAyat: '35'
		},
		{
			surahName: 'محمد',
			orderNormal: '47',
			numberAyat: '38'
		},
		{
			surahName: 'الفتح',
			orderNormal: '48',
			numberAyat: '29'
		},
		{
			surahName: 'الحجرات',
			orderNormal: '49',
			numberAyat: '18'
		},
		{
			surahName: 'ق',
			orderNormal: '50',
			numberAyat: '45'
		},
		{
			surahName: 'الذاريات',
			orderNormal: '51',
			numberAyat: '60'
		},
		{
			surahName: 'الطور',
			orderNormal: '52',
			numberAyat: '49'
		},
		{
			surahName: 'النجم',
			orderNormal: '53',
			numberAyat: '62'
		},
		{
			surahName: 'القمر',
			orderNormal: '54',
			numberAyat: '55'
		},
		{
			surahName: 'الرحمن',
			orderNormal: '55',
			numberAyat: '78'
		},
		{
			surahName: 'الواقعة',
			orderNormal: '56',
			numberAyat: '96'
		},
		{
			surahName: 'الحديد',
			orderNormal: '57',
			numberAyat: '29'
		},
		{
			surahName: 'المجادلة',
			orderNormal: '58',
			numberAyat: '22'
		},
		{
			surahName: 'الحشر',
			orderNormal: '59',
			numberAyat: '24'
		},
		{
			surahName: 'الممتحنة',
			orderNormal: '60',
			numberAyat: '13'
		},
		{
			surahName: 'الصف',
			orderNormal: '61',
			numberAyat: '14'
		},
		{
			surahName: 'الجمعة',
			orderNormal: '62',
			numberAyat: '11'
		},
		{
			surahName: 'المنافقون',
			orderNormal: '63',
			numberAyat: '11'
		},
		{
			surahName: 'التغابن',
			orderNormal: '64',
			numberAyat: '18'
		},
		{
			surahName: 'الطلاق',
			orderNormal: '65',
			numberAyat: '12'
		},
		{
			surahName: 'التحريم',
			orderNormal: '66',
			numberAyat: '12'
		},
		{
			surahName: 'الملك',
			orderNormal: '67',
			numberAyat: '30'
		},
		{
			surahName: 'القلم',
			orderNormal: '68',
			numberAyat: '52'
		},
		{
			surahName: 'الحاقة',
			orderNormal: '69',
			numberAyat: '52'
		},
		{
			surahName: 'المعارج',
			orderNormal: '70',
			numberAyat: '44'
		},
		{
			surahName: 'نوح',
			orderNormal: '71',
			numberAyat: '28'
		},
		{
			surahName: 'الجن',
			orderNormal: '72',
			numberAyat: '28'
		},
		{
			surahName: 'المزمل',
			orderNormal: '73',
			numberAyat: '20'
		},
		{
			surahName: 'المدثر',
			orderNormal: '74',
			numberAyat: '56'
		},
		{
			surahName: 'القيامة',
			orderNormal: '75',
			numberAyat: '40'
		},
		{
			surahName: 'الإنسان',
			orderNormal: '76',
			numberAyat: '31'
		},
		{
			surahName: 'المرسلات',
			orderNormal: '77',
			numberAyat: '50'
		},
		{
			surahName: 'النبأ',
			orderNormal: '78',
			numberAyat: '40'
		},
		{
			surahName: 'النازعات',
			orderNormal: '79',
			numberAyat: '46'
		},
		{
			surahName: 'عبس',
			orderNormal: '80',
			numberAyat: '42'
		},
		{
			surahName: 'التكوير',
			orderNormal: '81',
			numberAyat: '29'
		},
		{
			surahName: 'الانفطار',
			orderNormal: '82',
			numberAyat: '19'
		},
		{
			surahName: 'المطففين',
			orderNormal: '83',
			numberAyat: '36'
		},
		{
			surahName: 'الانشقاق',
			orderNormal: '84',
			numberAyat: '25'
		},
		{
			surahName: 'البروج',
			orderNormal: '85',
			numberAyat: '22'
		},
		{
			surahName: 'الطارق',
			orderNormal: '86',
			numberAyat: '17'
		},
		{
			surahName: 'الأعلى',
			orderNormal: '87',
			numberAyat: '19'
		},
		{
			surahName: 'الغاشية',
			orderNormal: '88',
			numberAyat: '26'
		},
		{
			surahName: 'الفجر',
			orderNormal: '89',
			numberAyat: '30'
		},
		{
			surahName: 'البلد',
			orderNormal: '90',
			numberAyat: '20'
		},
		{
			surahName: 'الشمس',
			orderNormal: '91',
			numberAyat: '15'
		},
		{
			surahName: 'الليل',
			orderNormal: '92',
			numberAyat: '21'
		},
		{
			surahName: 'الضحى',
			orderNormal: '93',
			numberAyat: '11'
		},
		{
			surahName: 'الشرح',
			orderNormal: '94',
			numberAyat: '8'
		},
		{
			surahName: 'التين',
			orderNormal: '95',
			numberAyat: '8'
		},
		{
			surahName: 'العلق',
			orderNormal: '96',
			numberAyat: '19'
		},
		{
			surahName: 'القدر',
			orderNormal: '97',
			numberAyat: '5'
		},
		{
			surahName: 'البينة',
			orderNormal: '98',
			numberAyat: '8'
		},
		{
			surahName: 'الزلزلة',
			orderNormal: '99',
			numberAyat: '8'
		},
		{
			surahName: 'العاديات',
			orderNormal: '100',
			numberAyat: '11'
		},
		{
			surahName: 'القارعة',
			orderNormal: '101',
			numberAyat: '11'
		},
		{
			surahName: 'التكاثر',
			orderNormal: '102',
			numberAyat: '8'
		},
		{
			surahName: 'العصر',
			orderNormal: '103',
			numberAyat: '3'
		},
		{
			surahName: 'الهمزة',
			orderNormal: '104',
			numberAyat: '9'
		},
		{
			surahName: 'الفيل',
			orderNormal: '105',
			numberAyat: '5'
		},
		{
			surahName: 'قريش',
			orderNormal: '106',
			numberAyat: '4'
		},
		{
			surahName: 'الماعون',
			orderNormal: '107',
			numberAyat: '7'
		},
		{
			surahName: 'الكوثر',
			orderNormal: '108',
			numberAyat: '3'
		},
		{
			surahName: 'الكافرون',
			orderNormal: '109',
			numberAyat: '6'
		},
		{
			surahName: 'النصر',
			orderNormal: '110',
			numberAyat: '3'
		},
		{
			surahName: 'المسد',
			orderNormal: '111',
			numberAyat: '5'
		},
		{
			surahName: 'الإخلاص',
			orderNormal: '112',
			numberAyat: '4'
		},
		{
			surahName: 'الفلق',
			orderNormal: '113',
			numberAyat: '5'
		},
		{
			surahName: 'الناس',
			orderNormal: '114',
			numberAyat: '6'
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
				<td>عدد الآيات</td>
				<td>الآية: ن</td>
				<td>الآية: شص</td>
				<td>الآية: شك</td>
				<td>الآية: غص</td>
				<td>الآية: غك</td>
			</tr>
		</thead>
		<tbody>
			{#each surahsJson as surah}
				<tr>
					{#if parseInt(surah.orderNormal) == parseInt($totalNafasi[0]) || parseInt(surah.orderNormal) == parseInt($totalSmallValue[0]) || parseInt(surah.orderNormal) == parseInt($totalTrueValue[0]) || parseInt(surah.orderNormal) == parseInt($totalMaghribiSmallValue[0]) || parseInt(surah.orderNormal) == parseInt($totalMaghribiTrueValue[0])}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							>{convertToArabicNumbers(surah.orderNormal)}</td
						>
					{:else}
						<td>{convertToArabicNumbers(surah.orderNormal)}</td>
					{/if}

					<td>{surah.surahName}</td>

					{#if parseInt(surah.numberAyat) == parseInt($totalNafasi[0]) || parseInt(surah.numberAyat) == parseInt($totalSmallValue[0]) || parseInt(surah.numberAyat) == parseInt($totalTrueValue[0]) || parseInt(surah.numberAyat) == parseInt($totalMaghribiSmallValue[0]) || parseInt(surah.numberAyat) == parseInt($totalMaghribiTrueValue[0])}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							>{convertToArabicNumbers(surah.numberAyat)}</td
						>
					{:else}
						<td>{convertToArabicNumbers(surah.numberAyat)}</td>
					{/if}

					{#if parseInt($totalNafasi[0]) <= parseInt(surah.numberAyat) && parseInt($totalNafasi[0]) > 0}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							><a
								target="_blank"
								href="https://quran.ksu.edu.sa/index.php#aya={surah.orderNormal}_{$totalNafasi[0]}"
								>{$totalNafasi[1]}</a
							></td
						>
					{:else}
						<td>-</td>
					{/if}

					{#if parseInt($totalSmallValue[0]) <= parseInt(surah.numberAyat) && parseInt($totalSmallValue[0]) > 0}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							><a
								target="_blank"
								href="https://quran.ksu.edu.sa/index.php#aya={surah.orderNormal}_{$totalSmallValue[0]}"
								>{$totalSmallValue[1]}</a
							></td
						>
					{:else}
						<td>-</td>
					{/if}

					{#if parseInt($totalTrueValue[0]) <= parseInt(surah.numberAyat) && parseInt($totalTrueValue[0]) > 0}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							><a
								target="_blank"
								href="https://quran.ksu.edu.sa/index.php#aya={surah.orderNormal}_{$totalTrueValue[0]}"
								>{$totalTrueValue[1]}</a
							></td
						>
					{:else}
						<td>-</td>
					{/if}

					{#if parseInt($totalMaghribiSmallValue[0]) <= parseInt(surah.numberAyat) && parseInt($totalMaghribiSmallValue[0]) > 0}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							><a
								target="_blank"
								href="https://quran.ksu.edu.sa/index.php#aya={surah.orderNormal}_{$totalMaghribiSmallValue[0]}"
								>{$totalMaghribiSmallValue[1]}</a
							></td
						>
					{:else}
						<td>-</td>
					{/if}

					{#if parseInt($totalMaghribiTrueValue[0]) <= parseInt(surah.numberAyat) && parseInt($totalMaghribiTrueValue[0]) > 0}
						<td style="font-weight: bold; background-color: #fcd9d7;"
							><a
								target="_blank"
								href="https://tafsir.app/{surah.orderNormal}/{$totalMaghribiTrueValue[0]}"
								>{$totalMaghribiTrueValue[1]}</a
							></td
						>
					{:else}
						<td>-</td>
					{/if}
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
	table {
		border-collapse: collapse;
	}
	td {
		border: 1px solid #999;
	}
	a {
		text-decoration: none;
		padding: 3px;
		border-radius: 100px;
		color: black;
	}
</style>
