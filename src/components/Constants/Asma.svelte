<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalSmallValue } from '../../stores/totalSmallValue.js';
	import { totalTrueValue } from '../../stores/totalTrueValue.js';
	import { totalMaghribiSmallValue } from '../../stores/totalMaghribiSmallValue.js';
	import { totalMaghribiTrueValue } from '../../stores/totalMaghribiTrueValue.js';

	import convertToArabicNumbers from '../Functions/convertToArabic.js';
	const letters = {
		ا: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ى: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		أ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		إ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		آ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ء: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ئ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ؤ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ب: { trueValue: 2, smallValue: 2, maghribiTrue: 2, maghribiSmall: 2, nafasi: 26 },
		ج: { trueValue: 3, smallValue: 3, maghribiTrue: 3, maghribiSmall: 3, nafasi: 9 },
		د: { trueValue: 4, smallValue: 4, maghribiTrue: 4, maghribiSmall: 4, nafasi: 17 },
		ه: { trueValue: 5, smallValue: 5, maghribiTrue: 5, maghribiSmall: 5, nafasi: 2 },
		ة: { trueValue: 5, smallValue: 5, maghribiTrue: 5, maghribiSmall: 5, nafasi: 2 },
		و: { trueValue: 6, smallValue: 6, maghribiTrue: 6, maghribiSmall: 6, nafasi: 28 },
		ز: { trueValue: 7, smallValue: 7, maghribiTrue: 7, maghribiSmall: 7, nafasi: 19 },
		ح: { trueValue: 8, smallValue: 8, maghribiTrue: 8, maghribiSmall: 8, nafasi: 4 },
		ط: { trueValue: 9, smallValue: 9, maghribiTrue: 9, maghribiSmall: 9, nafasi: 16 },
		ي: { trueValue: 10, smallValue: 1, maghribiTrue: 10, maghribiSmall: 1, nafasi: 11 },
		ك: { trueValue: 20, smallValue: 2, maghribiTrue: 20, maghribiSmall: 2, nafasi: 8 },
		ل: { trueValue: 30, smallValue: 3, maghribiTrue: 30, maghribiSmall: 3, nafasi: 13 },
		م: { trueValue: 40, smallValue: 4, maghribiTrue: 40, maghribiSmall: 4, nafasi: 27 },
		ن: { trueValue: 50, smallValue: 5, maghribiTrue: 50, maghribiSmall: 5, nafasi: 14 },
		س: { trueValue: 60, smallValue: 6, maghribiTrue: 300, maghribiSmall: 3, nafasi: 20 },
		ع: { trueValue: 70, smallValue: 7, maghribiTrue: 70, maghribiSmall: 7, nafasi: 3 },
		ف: { trueValue: 80, smallValue: 8, maghribiTrue: 80, maghribiSmall: 8, nafasi: 25 },
		ص: { trueValue: 90, smallValue: 9, maghribiTrue: 60, maghribiSmall: 6, nafasi: 21 },
		ق: { trueValue: 100, smallValue: 1, maghribiTrue: 100, maghribiSmall: 1, nafasi: 7 },
		ر: { trueValue: 200, smallValue: 2, maghribiTrue: 200, maghribiSmall: 2, nafasi: 15 },
		ش: { trueValue: 300, smallValue: 3, maghribiTrue: 1000, maghribiSmall: 1, nafasi: 10 },
		ت: { trueValue: 400, smallValue: 4, maghribiTrue: 400, maghribiSmall: 4, nafasi: 18 },
		ث: { trueValue: 500, smallValue: 5, maghribiTrue: 500, maghribiSmall: 5, nafasi: 23 },
		خ: { trueValue: 600, smallValue: 6, maghribiTrue: 600, maghribiSmall: 6, nafasi: 6 },
		ذ: { trueValue: 700, smallValue: 7, maghribiTrue: 700, maghribiSmall: 7, nafasi: 24 },
		ض: { trueValue: 800, smallValue: 8, maghribiTrue: 90, maghribiSmall: 9, nafasi: 12 },
		ظ: { trueValue: 900, smallValue: 9, maghribiTrue: 800, maghribiSmall: 8, nafasi: 22 },
		غ: { trueValue: 1000, smallValue: 1, maghribiTrue: 900, maghribiSmall: 9, nafasi: 5 }
	};

	// Universal function to handle calculating from any system
	function calc(system, input) {
		let value = 0;
		for (let i = 0; i < input.length; i += 1) {
			console.log(input);
			value += letters[input.charAt(i)][system];
		}
		let valueString = JSON.stringify(value);

		return convertToArabicNumbers(valueString);
	}

	let names = [
		{
			number: '2',
			name: 'الرحمن'
		},
		{
			number: '3',
			name: 'الرحيم'
		},
		{
			number: '4',
			name: 'الملك'
		},
		{
			number: '5',
			name: 'القدّوس'
		},
		{
			number: '6',
			name: 'السلام'
		},
		{
			number: '7',
			name: 'المؤمن'
		},
		{
			number: '8',
			name: 'المهيمن'
		},
		{
			number: '9',
			name: 'العزيز'
		},
		{
			number: '10',
			name: 'الجبار'
		},
		{
			number: '11',
			name: 'المتكبّر'
		},
		{
			number: '12',
			name: 'الخالق'
		},
		{
			number: '13',
			name: 'البارئ'
		},
		{
			number: '14',
			name: 'المصور'
		},
		{
			number: '15',
			name: 'الغفار'
		},
		{
			number: '16',
			name: 'القهّار'
		},
		{
			number: '17',
			name: 'الوهّاب'
		},
		{
			number: '18',
			name: 'الرزاق'
		},
		{
			number: '19',
			name: 'الفتاح'
		},
		{
			number: '20',
			name: 'العليم'
		},
		{
			number: '21',
			name: 'القابض'
		},
		{
			number: '22',
			name: 'الباسط'
		},
		{
			number: '23',
			name: 'الخافض'
		},
		{
			number: '24',
			name: 'الرافع'
		},
		{
			number: '25',
			name: 'المعز'
		},
		{
			number: '26',
			name: 'المذل'
		},
		{
			number: '27',
			name: 'السميع'
		},
		{
			number: '28',
			name: 'البصير'
		},
		{
			number: '29',
			name: 'الحكم'
		},
		{
			number: '30',
			name: 'العدل'
		},
		{
			number: '31',
			name: 'اللطيف'
		},
		{
			number: '32',
			name: 'الخبير'
		},
		{
			number: '33',
			name: 'الحليم'
		},
		{
			number: '34',
			name: 'العظيم'
		},
		{
			number: '35',
			name: 'الغفور'
		},
		{
			number: '36',
			name: 'الشكور'
		},
		{
			number: '37',
			name: 'العلي'
		},
		{
			number: '38',
			name: 'الكبير'
		},
		{
			number: '39',
			name: 'الحفيظ'
		},
		{
			number: '40',
			name: 'المُقيت'
		},
		{
			number: '41',
			name: 'الحسيب'
		},
		{
			number: '42',
			name: 'الجليل'
		},
		{
			number: '43',
			name: 'الكريم'
		},
		{
			number: '44',
			name: 'الرقيب'
		},
		{
			number: '45',
			name: 'المجيب'
		},
		{
			number: '46',
			name: 'الواسع'
		},
		{
			number: '47',
			name: 'الحكيم'
		},
		{
			number: '48',
			name: 'الودود'
		},
		{
			number: '49',
			name: 'المجيد'
		},
		{
			number: '50',
			name: 'الباعث'
		},
		{
			number: '51',
			name: 'الشهيد'
		},
		{
			number: '52',
			name: 'الحق'
		},
		{
			number: '53',
			name: 'الوكيل'
		},
		{
			number: '54',
			name: 'القوي'
		},
		{
			number: '55',
			name: 'المتين'
		},
		{
			number: '56',
			name: 'الولي'
		},
		{
			number: '57',
			name: 'الحميد'
		},
		{
			number: '58',
			name: 'المحصي'
		},
		{
			number: '59',
			name: 'المبدئ'
		},
		{
			number: '60',
			name: 'المعيد'
		},
		{
			number: '61',
			name: 'المحيي'
		},
		{
			number: '62',
			name: 'المميت'
		},
		{
			number: '63',
			name: 'الحي'
		},
		{
			number: '64',
			name: 'القيوم'
		},
		{
			number: '65',
			name: 'الواجد'
		},
		{
			number: '66',
			name: 'الماجد'
		},
		{
			number: '67',
			name: 'الواحد'
		},
		{
			number: '68',
			name: 'الصمد'
		},
		{
			number: '69',
			name: 'القادر'
		},
		{
			number: '70',
			name: 'المقتدر'
		},
		{
			number: '71',
			name: 'المقدم'
		},
		{
			number: '72',
			name: 'المؤخر'
		},
		{
			number: '73',
			name: 'الأول'
		},
		{
			number: '74',
			name: 'الآخر'
		},
		{
			number: '75',
			name: 'الظاهر'
		},
		{
			number: '76',
			name: 'الباطن'
		},
		{
			number: '77',
			name: 'الوالي'
		},
		{
			number: '78',
			name: 'المتعالِ'
		},
		{
			number: '79',
			name: 'البر'
		},
		{
			number: '80',
			name: 'التواب'
		},
		{
			number: '81',
			name: 'المنتقم'
		},
		{
			number: '82',
			name: 'العفو'
		},
		{
			number: '83',
			name: 'الرؤوف'
		},
		{
			number: '84',
			name: 'مالك الملك'
		},
		{
			number: '85',
			name: 'ذو الجلال والإكرام'
		},
		{
			number: '86',
			name: 'المقسط'
		},
		{
			number: '87',
			name: 'الجامع'
		},
		{
			number: '88',
			name: 'الغني'
		},
		{
			number: '89',
			name: 'المغني'
		},
		{
			number: '90',
			name: 'المانع'
		},
		{
			number: '91',
			name: 'الضار'
		},
		{
			number: '92',
			name: 'النافع'
		},
		{
			number: '93',
			name: 'النور'
		},
		{
			number: '94',
			name: 'الهادي'
		},
		{
			number: '95',
			name: 'البديع'
		},
		{
			number: '96',
			name: 'الباقي'
		},
		{
			number: '97',
			name: 'الوارث'
		},
		{
			number: '98',
			name: 'الرشيد'
		},
		{
			number: '99',
			name: 'الصبور'
		},
		{
			number: '100',
			name: 'الجميل'
		},
		{
			number: '101',
			name: 'القاهر'
		},
		{
			number: '102',
			name: 'القريب'
		},
		{
			number: '103',
			name: 'الراشد'
		},
		{
			number: '104',
			name: 'الرب'
		},
		{
			number: '105',
			name: 'المبين'
		},
		{
			number: '106',
			name: 'البرهان'
		},
		{
			number: '107',
			name: 'الشديد'
		},
		{
			number: '108',
			name: 'الواقي'
		},
		{
			number: '109',
			name: 'البار'
		},
		{
			number: '110',
			name: 'ذو القوة'
		},
		{
			number: '111',
			name: 'القائم'
		},
		{
			number: '112',
			name: 'الدائم'
		},
		{
			number: '113',
			name: 'الحافظ'
		},
		{
			number: '114',
			name: 'الفاطر'
		},
		{
			number: '115',
			name: 'السامع'
		},
		{
			number: '116',
			name: 'المعطي'
		},
		{
			number: '117',
			name: 'الكافي'
		},
		{
			number: '118',
			name: 'الأبد'
		},
		{
			number: '119',
			name: 'العالم'
		},
		{
			number: '120',
			name: 'الصادق'
		},
		{
			number: '121',
			name: 'القديم'
		},
		{
			number: '122',
			name: 'الوتر'
		},
		{
			number: '123',
			name: 'الأحد'
		},
		{
			number: '124',
			name: 'المالك'
		},
		{
			number: '125',
			name: 'المليك'
		},
		{
			number: '126',
			name: 'الجواد'
		},
		{
			number: '127',
			name: 'الخلاق'
		},
		{
			number: '128',
			name: 'الديان'
		},
		{
			number: '129',
			name: 'الرازق'
		},
		{
			number: '130',
			name: 'الرفيق'
		},
		{
			number: '131',
			name: 'السيد'
		},
		{
			number: '132',
			name: 'السبوح'
		},
		{
			number: '133',
			name: 'السريع'
		},
		{
			number: '134',
			name: 'الستار'
		},
		{
			number: '135',
			name: 'الشافي'
		},
		{
			number: '136',
			name: 'الشاكر'
		},
		{
			number: '137',
			name: 'الطيب'
		},
		{
			number: '138',
			name: 'الأعلى'
		},
		{
			number: '139',
			name: 'العلام'
		},
		{
			number: '140',
			name: 'الغافر'
		},
		{
			number: '141',
			name: 'الفاتح'
		},
		{
			number: '142',
			name: 'القدير'
		},
		{
			number: '143',
			name: 'الكفيل'
		},
		{
			number: '144',
			name: 'المعين'
		},
		{
			number: '145',
			name: 'المنان'
		},
		{
			number: '146',
			name: 'الموسع'
		},
		{
			number: '147',
			name: 'المنعم'
		},
		{
			number: '148',
			name: 'المفرج'
		},
		{
			number: '149',
			name: 'المعافي'
		},
		{
			number: '150',
			name: 'المُطعم'
		},
		{
			number: '151',
			name: 'الناصر'
		},
		{
			number: '152',
			name: 'النذير'
		},
		{
			number: '153',
			name: 'الوافي'
		},
		{
			number: '154',
			name: 'عالم الغيب والشهادة'
		},
		{
			number: '155',
			name: 'ذو الفضل العظيم'
		},
		{
			number: '156',
			name: 'ذو العرش المجيد'
		},
		{
			number: '157',
			name: 'ذو الطول والإحسان'
		},
		{
			number: '158',
			name: 'ذو الرحمة الواسعة'
		},
		{
			number: '159',
			name: 'ذو الجبروت والملكوت'
		},
		{
			number: '160',
			name: 'فاطر السموات والأرض'
		},
		{
			number: '161',
			name: 'فالق الحب والنوى'
		},
		{
			number: '162',
			name: 'منزل الكتاب'
		},
		{
			number: '163',
			name: 'سريع الحساب'
		},
		{
			number: '164',
			name: 'علام الغيوب'
		},
		{
			number: '165',
			name: 'غافر الذنب'
		},
		{
			number: '166',
			name: 'قابل التوب'
		},
		{
			number: '167',
			name: 'فارج الهم'
		},
		{
			number: '168',
			name: 'كاشف الكرب'
		},
		{
			number: '169',
			name: 'مقلب القلوب'
		},
		{
			number: '170',
			name: 'خير الفاصلين'
		},
		{
			number: '171',
			name: 'ذو المعارج'
		},
		{
			number: '172',
			name: 'خير الناصرين'
		},
		{
			number: '173',
			name: 'خير الفاتحين'
		},
		{
			number: '174',
			name: 'خير الراحمين'
		},
		{
			number: '175',
			name: 'خير الغافرين'
		},
		{
			number: '176',
			name: 'أرحم الراحمين'
		},
		{
			number: '177',
			name: 'المحيط'
		},
		{
			number: '178',
			name: 'الحنان'
		},
		{
			number: '179',
			name: 'الأكرم'
		},
		{
			number: '180',
			name: 'الإله'
		},
		{
			number: '181',
			name: 'المسعَّر'
		},
		{
			number: '182',
			name: 'الدهر'
		},
		{
			number: '183',
			name: 'رفيع الدرجات'
		},
		{
			number: '184',
			name: 'شديد المحال'
		},
		{
			number: '185',
			name: 'عدو الكافرين'
		},
		{
			number: '186',
			name: 'الحفي'
		},
		{
			number: '187',
			name: 'نور السماوات والأرض'
		},
		{
			number: '188',
			name: 'الغيور'
		},
		{
			number: '189',
			name: 'المنذر'
		},
		{
			number: '190',
			name: 'المدبر'
		},
		{
			number: '191',
			name: 'مخزي الكافرين'
		},
		{
			number: '192',
			name: 'النصير'
		},
		{
			number: '193',
			name: 'خير المنزلين'
		},
		{
			number: '194',
			name: 'خير الماكرين'
		},
		{
			number: '195',
			name: 'متم نوره'
		},
		{
			number: '196',
			name: 'المستعان'
		},
		{
			number: '197',
			name: 'المعبود'
		},
		{
			number: '198',
			name: 'أهل التقوى'
		},
		{
			number: '199',
			name: 'أهل المغفرة'
		},
		{
			number: '200',
			name: 'واسع المغفرة'
		},
		{
			number: '201',
			name: 'أحكم الحاكمين'
		},
		{
			number: '202',
			name: 'خير الحاكمين'
		},
		{
			number: '203',
			name: 'خير الرازقين'
		},
		{
			number: '204',
			name: 'أحسن الخالقين'
		},
		{
			number: '205',
			name: 'خير الحافظين'
		},
		{
			number: '206',
			name: 'الفعال لما يريد'
		},
		{
			number: '207',
			name: 'خير الوارثين'
		},
		{
			number: '208',
			name: 'فالق الإصباح'
		},
		{
			number: '209',
			name: 'نعم المولى'
		},
		{
			number: '210',
			name: 'كاشف الضر'
		},
		{
			number: '211',
			name: 'مخرج الحي من الميت'
		},
		{
			number: '212',
			name: 'مخرج الميت من الحي'
		},
		{
			number: '213',
			name: 'جاعل الليل سكناً'
		},
		{
			number: '214',
			name: 'أسرع الحاسبين'
		},
		{
			number: '215',
			name: 'ولي المؤمنين'
		},
		{
			number: '216',
			name: 'الغالب على أمره'
		},
		{
			number: '217',
			name: 'البالغ أمره'
		},
		{
			number: '218',
			name: 'ذو الانتقام'
		},
		{
			number: '219',
			name: 'المغيث'
		},
		{
			number: '220',
			name: 'المولى'
		},
		{
			number: '221',
			name: 'الحييّ'
		},
		{
			number: '222',
			name: 'المحسن'
		},
		{
			number: '223',
			name: 'الفرد'
		}
	];
</script>

<div>
	<h4>الأسماء الحسنى</h4>

	<table>
		<thead>
			<tr>
				<td>الرقم</td>
				<td>الاسم</td>
				<td>الجمل: ن</td>
				<td>الجمل: شص</td>
				<td>الجمل: شك</td>
				<td>الجمل: غص</td>
				<td>الجمل: غك</td>
			</tr>
		</thead>
			<tr>
				<td>{convertToArabicNumbers("1")}</td>
				<td>الله</td>
				<td>{convertToArabicNumbers("29")}</td>
				<td>{convertToArabicNumbers("12")}</td>
				<td>{convertToArabicNumbers("66")}</td>
				<td>{convertToArabicNumbers("12")}</td>
				<td>{convertToArabicNumbers("66")}</td>
			</tr>
		{#each names as name}
			<tr>
				<td></td>
				<td>{name.name}</td>
				<td>{calc('nafasi', name.name.replace(/[\sًٌٍَُِّْ]+/g, '').replace(/ال/, ''))}</td> 
				<td>{calc('smallValue', name.name.replace(/[\sًٌٍَُِّْ]+/g, '').replace(/ال/, ''))}</td>
				<td>{calc('trueValue', name.name.replace(/[\sًٌٍَُِّْ]+/g, '').replace(/ال/, ''))}</td>
				<td>{calc('maghribiSmall', name.name.replace(/[\sًٌٍَُِّْ]+/g, '').replace(/ال/, ''))}</td>
				<td>{calc('maghribiTrue', name.name.replace(/[\sًٌٍَُِّْ]+/g, '').replace(/ال/, ''))}</td>

			</tr>
		{/each}
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
</style>
