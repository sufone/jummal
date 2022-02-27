<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalSmallValue } from '../../stores/totalSmallValue.js';
	import { totalTrueValue } from '../../stores/totalTrueValue.js';
	import { totalMaghribiSmallValue } from '../../stores/totalMaghribiSmallValue.js';
	import { totalMaghribiTrueValue } from '../../stores/totalMaghribiTrueValue.js';

	import convertToArabicNumbers from '../Functions/convertToArabic.js';
	

	let names = [
		{
			الرقم: '1',
			الاسم: 'الله',
			jummalNafasi: '29',
			jummalSmall: '12',
			jummalTrue: '66',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '66'
		},
		{
			الرقم: '2',
			الاسم: 'الرحمن',
			jummalNafasi: '60',
			jummalSmall: '19',
			jummalTrue: '298',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '298'
		},
		{
			الرقم: '3',
			الاسم: 'الرحيم',
			jummalNafasi: '57',
			jummalSmall: '15',
			jummalTrue: '258',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '258'
		},
		{
			الرقم: '4',
			الاسم: 'الملك',
			jummalNafasi: '48',
			jummalSmall: '9',
			jummalTrue: '90',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '90'
		},
		{
			الرقم: '5',
			الاسم: 'القدّوس',
			jummalNafasi: '72',
			jummalSmall: '17',
			jummalTrue: '170',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '410'
		},
		{
			الرقم: '6',
			الاسم: 'السلام',
			jummalNafasi: '61',
			jummalSmall: '14',
			jummalTrue: '131',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '371'
		},
		{
			الرقم: '7',
			الاسم: 'المؤمن',
			jummalNafasi: '69',
			jummalSmall: '14',
			jummalTrue: '131',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '131'
		},
		{
			الرقم: '8',
			الاسم: 'المهيمن',
			jummalNafasi: '81',
			jummalSmall: '19',
			jummalTrue: '145',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '145'
		},
		{
			الرقم: '9',
			الاسم: 'العزيز',
			jummalNafasi: '52',
			jummalSmall: '22',
			jummalTrue: '94',
			jummalMaghribiSmall: '22',
			jummalMaghribiTrue: '94'
		},
		{
			الرقم: '10',
			الاسم: 'الجبار',
			jummalNafasi: '51',
			jummalSmall: '8',
			jummalTrue: '206',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '206'
		},
		{
			الرقم: '11',
			الاسم: 'المتكبّر',
			jummalNafasi: '94',
			jummalSmall: '14',
			jummalTrue: '662',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '662'
		},
		{
			الرقم: '12',
			الاسم: 'الخالق',
			jummalNafasi: '27',
			jummalSmall: '11',
			jummalTrue: '731',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '731'
		},
		{
			الرقم: '13',
			الاسم: 'البارئ',
			jummalNafasi: '43',
			jummalSmall: '6',
			jummalTrue: '204',
			jummalMaghribiSmall: '6',
			jummalMaghribiTrue: '204'
		},
		{
			الرقم: '14',
			الاسم: 'المصور',
			jummalNafasi: '91',
			jummalSmall: '21',
			jummalTrue: '336',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '306'
		},
		{
			الرقم: '15',
			الاسم: 'الغفار',
			jummalNafasi: '46',
			jummalSmall: '12',
			jummalTrue: '1281',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '1181'
		},
		{
			الرقم: '16',
			الاسم: 'القهّار',
			jummalNafasi: '25',
			jummalSmall: '9',
			jummalTrue: '306',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '306'
		},
		{
			الرقم: '17',
			الاسم: 'الوهّاب',
			jummalNafasi: '57',
			jummalSmall: '14',
			jummalTrue: '14',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '14'
		},
		{
			الرقم: '18',
			الاسم: 'الرزاق',
			jummalNafasi: '42',
			jummalSmall: '11',
			jummalTrue: '308',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '308'
		},
		{
			الرقم: '19',
			الاسم: 'الفتاح',
			jummalNafasi: '48',
			jummalSmall: '21',
			jummalTrue: '489',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '489'
		},
		{
			الرقم: '20',
			الاسم: 'العليم',
			jummalNafasi: '54',
			jummalSmall: '15',
			jummalTrue: '150',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '150'
		},
		{
			الرقم: '21',
			الاسم: 'القابض',
			jummalNafasi: '46',
			jummalSmall: '12',
			jummalTrue: '903',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '193'
		},
		{
			الرقم: '22',
			الاسم: 'الباسط',
			jummalNafasi: '63',
			jummalSmall: '18',
			jummalTrue: '72',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '312'
		},
		{
			الرقم: '23',
			الاسم: 'الخافض',
			jummalNafasi: '44',
			jummalSmall: '23',
			jummalTrue: '1481',
			jummalMaghribiSmall: '24',
			jummalMaghribiTrue: '771'
		},
		{
			الرقم: '24',
			الاسم: 'الرافع',
			jummalNafasi: '44',
			jummalSmall: '18',
			jummalTrue: '351',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '351'
		},
		{
			الرقم: '25',
			الاسم: 'المعز',
			jummalNafasi: '49',
			jummalSmall: '18',
			jummalTrue: '117',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '117'
		},
		{
			الرقم: '26',
			الاسم: 'المذل',
			jummalNafasi: '64',
			jummalSmall: '14',
			jummalTrue: '770',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '770'
		},
		{
			الرقم: '27',
			الاسم: 'السميع',
			jummalNafasi: '61',
			jummalSmall: '18',
			jummalTrue: '180',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '420'
		},
		{
			الرقم: '28',
			الاسم: 'البصير',
			jummalNafasi: '73',
			jummalSmall: '14',
			jummalTrue: '302',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '272'
		},
		{
			الرقم: '29',
			الاسم: 'الحكم',
			jummalNafasi: '39',
			jummalSmall: '14',
			jummalTrue: '68',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '68'
		},
		{
			الرقم: '30',
			الاسم: 'العدل',
			jummalNafasi: '33',
			jummalSmall: '14',
			jummalTrue: '104',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '104'
		},
		{
			الرقم: '31',
			الاسم: 'اللطيف',
			jummalNafasi: '65',
			jummalSmall: '21',
			jummalTrue: '129',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '129'
		},
		{
			الرقم: '32',
			الاسم: 'الخبير',
			jummalNafasi: '58',
			jummalSmall: '11',
			jummalTrue: '812',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '812'
		},
		{
			الرقم: '33',
			الاسم: 'الحليم',
			jummalNafasi: '55',
			jummalSmall: '16',
			jummalTrue: '88',
			jummalMaghribiSmall: '16',
			jummalMaghribiTrue: '88'
		},
		{
			الرقم: '34',
			الاسم: 'العظيم',
			jummalNafasi: '63',
			jummalSmall: '21',
			jummalTrue: '1020',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '920'
		},
		{
			الرقم: '35',
			الاسم: 'الغفور',
			jummalNafasi: '73',
			jummalSmall: '17',
			jummalTrue: '1286',
			jummalMaghribiSmall: '25',
			jummalMaghribiTrue: '1186'
		},
		{
			الرقم: '36',
			الاسم: 'الشكور',
			jummalNafasi: '61',
			jummalSmall: '13',
			jummalTrue: '526',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '1226'
		},
		{
			الرقم: '37',
			الاسم: 'العلي',
			jummalNafasi: '27',
			jummalSmall: '11',
			jummalTrue: '110',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '110'
		},
		{
			الرقم: '38',
			الاسم: 'الكبير',
			jummalNafasi: '60',
			jummalSmall: '7',
			jummalTrue: '232',
			jummalMaghribiSmall: '7',
			jummalMaghribiTrue: '232'
		},
		{
			الرقم: '39',
			الاسم: 'الحفيظ',
			jummalNafasi: '62',
			jummalSmall: '26',
			jummalTrue: '998',
			jummalMaghribiSmall: '25',
			jummalMaghribiTrue: '898'
		},
		{
			الرقم: '40',
			الاسم: 'المُقيت',
			jummalNafasi: '63',
			jummalSmall: '10',
			jummalTrue: '550',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '550'
		},
		{
			الرقم: '41',
			الاسم: 'الحسيب',
			jummalNafasi: '61',
			jummalSmall: '17',
			jummalTrue: '80',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '320'
		},
		{
			الرقم: '42',
			الاسم: 'الجليل',
			jummalNafasi: '46',
			jummalSmall: '10',
			jummalTrue: '73',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '73'
		},
		{
			الرقم: '43',
			الاسم: 'الكريم',
			jummalNafasi: '61',
			jummalSmall: '9',
			jummalTrue: '270',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '270'
		},
		{
			الرقم: '44',
			الاسم: 'الرقيب',
			jummalNafasi: '59',
			jummalSmall: '6',
			jummalTrue: '312',
			jummalMaghribiSmall: '6',
			jummalMaghribiTrue: '312'
		},
		{
			الرقم: '45',
			الاسم: 'المجيب',
			jummalNafasi: '73',
			jummalSmall: '10',
			jummalTrue: '55',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '55'
		},
		{
			الرقم: '46',
			الاسم: 'الواسع',
			jummalNafasi: '52',
			jummalSmall: '20',
			jummalTrue: '137',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '377'
		},
		{
			الرقم: '47',
			الاسم: 'الحكيم',
			jummalNafasi: '50',
			jummalSmall: '15',
			jummalTrue: '78',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '78'
		},
		{
			الرقم: '48',
			الاسم: 'الودود',
			jummalNafasi: '90',
			jummalSmall: '20',
			jummalTrue: '20',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '20'
		},
		{
			الرقم: '49',
			الاسم: 'المجيد',
			jummalNafasi: '64',
			jummalSmall: '12',
			jummalTrue: '57',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '57'
		},
		{
			الرقم: '50',
			الاسم: 'الباعث',
			jummalNafasi: '53',
			jummalSmall: '15',
			jummalTrue: '573',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '573'
		},
		{
			الرقم: '51',
			الاسم: 'الشهيد',
			jummalNafasi: '40',
			jummalSmall: '13',
			jummalTrue: '319',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '1019'
		},
		{
			الرقم: '52',
			الاسم: 'الحق',
			jummalNafasi: '11',
			jummalSmall: '9',
			jummalTrue: '108',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '108'
		},
		{
			الرقم: '53',
			الاسم: 'الوكيل',
			jummalNafasi: '60',
			jummalSmall: '12',
			jummalTrue: '66',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '66'
		},
		{
			الرقم: '54',
			الاسم: 'القوي',
			jummalNafasi: '46',
			jummalSmall: '8',
			jummalTrue: '116',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '116'
		},
		{
			الرقم: '55',
			الاسم: 'المتين',
			jummalNafasi: '70',
			jummalSmall: '14',
			jummalTrue: '500',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '500'
		},
		{
			الرقم: '56',
			الاسم: 'الولي',
			jummalNafasi: '52',
			jummalSmall: '10',
			jummalTrue: '46',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '46'
		},
		{
			الرقم: '57',
			الاسم: 'الحميد',
			jummalNafasi: '59',
			jummalSmall: '17',
			jummalTrue: '62',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '62'
		},
		{
			الرقم: '58',
			الاسم: 'المحصي',
			jummalNafasi: '63',
			jummalSmall: '22',
			jummalTrue: '148',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '118'
		},
		{
			الرقم: '59',
			الاسم: 'المبدئ',
			jummalNafasi: '71',
			jummalSmall: '11',
			jummalTrue: '47',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '47'
		},
		{
			الرقم: '60',
			الاسم: 'المعيد',
			jummalNafasi: '58',
			jummalSmall: '16',
			jummalTrue: '124',
			jummalMaghribiSmall: '16',
			jummalMaghribiTrue: '124'
		},
		{
			الرقم: '61',
			الاسم: 'المحيي',
			jummalNafasi: '53',
			jummalSmall: '14',
			jummalTrue: '68',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '68'
		},
		{
			الرقم: '62',
			الاسم: 'المميت',
			jummalNafasi: '83',
			jummalSmall: '13',
			jummalTrue: '490',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '490'
		},
		{
			الرقم: '63',
			الاسم: 'الحي',
			jummalNafasi: '15',
			jummalSmall: '9',
			jummalTrue: '18',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '18'
		},
		{
			الرقم: '64',
			الاسم: 'القيوم',
			jummalNafasi: '73',
			jummalSmall: '12',
			jummalTrue: '156',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '156'
		},
		{
			الرقم: '65',
			الاسم: 'الواجد',
			jummalNafasi: '55',
			jummalSmall: '14',
			jummalTrue: '14',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '14'
		},
		{
			الرقم: '66',
			الاسم: 'الماجد',
			jummalNafasi: '54',
			jummalSmall: '12',
			jummalTrue: '48',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '48'
		},
		{
			الرقم: '67',
			الاسم: 'الواحد',
			jummalNafasi: '50',
			jummalSmall: '19',
			jummalTrue: '19',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '19'
		},
		{
			الرقم: '68',
			الاسم: 'الصمد',
			jummalNafasi: '65',
			jummalSmall: '17',
			jummalTrue: '134',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '104'
		},
		{
			الرقم: '69',
			الاسم: 'القادر',
			jummalNafasi: '40',
			jummalSmall: '8',
			jummalTrue: '305',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '305'
		},
		{
			الرقم: '70',
			الاسم: 'المقتدر',
			jummalNafasi: '84',
			jummalSmall: '15',
			jummalTrue: '744',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '744'
		},
		{
			الرقم: '71',
			الاسم: 'المقدم',
			jummalNafasi: '78',
			jummalSmall: '13',
			jummalTrue: '184',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '184'
		},
		{
			الرقم: '72',
			الاسم: 'المؤخر',
			jummalNafasi: '49',
			jummalSmall: '13',
			jummalTrue: '841',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '841'
		},
		{
			الرقم: '73',
			الاسم: 'الأول',
			jummalNafasi: '42',
			jummalSmall: '10',
			jummalTrue: '37',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '37'
		},
		{
			الرقم: '74',
			الاسم: 'الآخر',
			jummalNafasi: '22',
			jummalSmall: '9',
			jummalTrue: '801',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '801'
		},
		{
			الرقم: '75',
			الاسم: 'الظاهر',
			jummalNafasi: '40',
			jummalSmall: '17',
			jummalTrue: '1106',
			jummalMaghribiSmall: '16',
			jummalMaghribiTrue: '1006'
		},
		{
			الرقم: '76',
			الاسم: 'الباطن',
			jummalNafasi: '57',
			jummalSmall: '17',
			jummalTrue: '62',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '62'
		},
		{
			الرقم: '77',
			الاسم: 'الوالي',
			jummalNafasi: '53',
			jummalSmall: '11',
			jummalTrue: '47',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '47'
		},
		{
			الرقم: '78',
			الاسم: 'المتعالِ',
			jummalNafasi: '62',
			jummalSmall: '19',
			jummalTrue: '541',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '541'
		},
		{
			الرقم: '79',
			الاسم: 'البر',
			jummalNafasi: '41',
			jummalSmall: '4',
			jummalTrue: '202',
			jummalMaghribiSmall: '4',
			jummalMaghribiTrue: '202'
		},
		{
			الرقم: '80',
			الاسم: 'التواب',
			jummalNafasi: '73',
			jummalSmall: '13',
			jummalTrue: '409',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '409'
		},
		{
			الرقم: '81',
			الاسم: 'المنتقم',
			jummalNafasi: '93',
			jummalSmall: '18',
			jummalTrue: '630',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '630'
		},
		{
			الرقم: '82',
			الاسم: 'العفو',
			jummalNafasi: '56',
			jummalSmall: '21',
			jummalTrue: '156',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '156'
		},
		{
			الرقم: '83',
			الاسم: 'الرؤوف',
			jummalNafasi: '69',
			jummalSmall: '17',
			jummalTrue: '287',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '287'
		},
		{
			الرقم: '84',
			الاسم: 'مالك الملك',
			jummalNafasi: '97',
			jummalSmall: '19',
			jummalTrue: '181',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '181'
		},
		{
			الرقم: '85',
			الاسم: 'ذو الجلال والإكرام',
			jummalNafasi: '182',
			jummalSmall: '43',
			jummalTrue: '1069',
			jummalMaghribiSmall: '43',
			jummalMaghribiTrue: '1069'
		},
		{
			الرقم: '86',
			الاسم: 'المقسط',
			jummalNafasi: '70',
			jummalSmall: '20',
			jummalTrue: '209',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '449'
		},
		{
			الرقم: '87',
			الاسم: 'الجامع',
			jummalNafasi: '40',
			jummalSmall: '15',
			jummalTrue: '114',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '114'
		},
		{
			الرقم: '88',
			الاسم: 'الغني',
			jummalNafasi: '30',
			jummalSmall: '7',
			jummalTrue: '1060',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '960'
		},
		{
			الرقم: '89',
			الاسم: 'المغني',
			jummalNafasi: '57',
			jummalSmall: '11',
			jummalTrue: '1100',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '1000'
		},
		{
			الرقم: '90',
			الاسم: 'المانع',
			jummalNafasi: '45',
			jummalSmall: '17',
			jummalTrue: '161',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '161'
		},
		{
			الرقم: '91',
			الاسم: 'الضار',
			jummalNafasi: '28',
			jummalSmall: '11',
			jummalTrue: '1001',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '291'
		},
		{
			الرقم: '92',
			الاسم: 'النافع',
			jummalNafasi: '43',
			jummalSmall: '21',
			jummalTrue: '201',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '201'
		},
		{
			الرقم: '93',
			الاسم: 'النور',
			jummalNafasi: '57',
			jummalSmall: '13',
			jummalTrue: '256',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '256'
		},
		{
			الرقم: '94',
			الاسم: 'الهادي',
			jummalNafasi: '31',
			jummalSmall: '11',
			jummalTrue: '20',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '20'
		},
		{
			الرقم: '95',
			الاسم: 'البديع',
			jummalNafasi: '57',
			jummalSmall: '14',
			jummalTrue: '86',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '86'
		},
		{
			الرقم: '96',
			الاسم: 'الباقي',
			jummalNafasi: '45',
			jummalSmall: '5',
			jummalTrue: '113',
			jummalMaghribiSmall: '5',
			jummalMaghribiTrue: '113'
		},
		{
			الرقم: '97',
			الاسم: 'الوارث',
			jummalNafasi: '67',
			jummalSmall: '14',
			jummalTrue: '707',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '707'
		},
		{
			الرقم: '98',
			الاسم: 'الرشيد',
			jummalNafasi: '53',
			jummalSmall: '10',
			jummalTrue: '514',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '1214'
		},
		{
			الرقم: '99',
			الاسم: 'الصبور',
			jummalNafasi: '90',
			jummalSmall: '19',
			jummalTrue: '298',
			jummalMaghribiSmall: '16',
			jummalMaghribiTrue: '268'
		},
		{
			الرقم: '100',
			الاسم: 'الجميل',
			jummalNafasi: '60',
			jummalSmall: '11',
			jummalTrue: '83',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '83'
		},
		{
			الرقم: '101',
			الاسم: 'القاهر',
			jummalNafasi: '25',
			jummalSmall: '9',
			jummalTrue: '306',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '306'
		},
		{
			الرقم: '102',
			الاسم: 'القريب',
			jummalNafasi: '59',
			jummalSmall: '6',
			jummalTrue: '312',
			jummalMaghribiSmall: '6',
			jummalMaghribiTrue: '312'
		},
		{
			الرقم: '103',
			الاسم: 'الراشد',
			jummalNafasi: '43',
			jummalSmall: '10',
			jummalTrue: '505',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '1205'
		},
		{
			الرقم: '104',
			الاسم: 'الرب',
			jummalNafasi: '41',
			jummalSmall: '4',
			jummalTrue: '202',
			jummalMaghribiSmall: '4',
			jummalMaghribiTrue: '202'
		},
		{
			الرقم: '105',
			الاسم: 'المبين',
			jummalNafasi: '78',
			jummalSmall: '12',
			jummalTrue: '102',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '102'
		},
		{
			الرقم: '106',
			الاسم: 'البرهان',
			jummalNafasi: '58',
			jummalSmall: '15',
			jummalTrue: '258',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '258'
		},
		{
			الرقم: '107',
			الاسم: 'الشديد',
			jummalNafasi: '55',
			jummalSmall: '12',
			jummalTrue: '318',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '1018'
		},
		{
			الرقم: '108',
			الاسم: 'الواقي',
			jummalNafasi: '47',
			jummalSmall: '9',
			jummalTrue: '117',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '117'
		},
		{
			الرقم: '109',
			الاسم: 'البار',
			jummalNafasi: '42',
			jummalSmall: '5',
			jummalTrue: '203',
			jummalMaghribiSmall: '5',
			jummalMaghribiTrue: '203'
		},
		{
			الرقم: '110',
			الاسم: 'ذو القوة',
			jummalNafasi: '89',
			jummalSmall: '25',
			jummalTrue: '817',
			jummalMaghribiSmall: '25',
			jummalMaghribiTrue: '817'
		},
		{
			الرقم: '111',
			الاسم: 'القائم',
			jummalNafasi: '36',
			jummalSmall: '7',
			jummalTrue: '142',
			jummalMaghribiSmall: '7',
			jummalMaghribiTrue: '142'
		},
		{
			الرقم: '112',
			الاسم: 'الدائم',
			jummalNafasi: '46',
			jummalSmall: '10',
			jummalTrue: '46',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '46'
		},
		{
			الرقم: '113',
			الاسم: 'الحافظ',
			jummalNafasi: '52',
			jummalSmall: '26',
			jummalTrue: '989',
			jummalMaghribiSmall: '25',
			jummalMaghribiTrue: '889'
		},
		{
			الرقم: '114',
			الاسم: 'الفاطر',
			jummalNafasi: '57',
			jummalSmall: '20',
			jummalTrue: '290',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '290'
		},
		{
			الرقم: '115',
			الاسم: 'السامع',
			jummalNafasi: '51',
			jummalSmall: '18',
			jummalTrue: '171',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '411'
		},
		{
			الرقم: '116',
			الاسم: 'المعطي',
			jummalNafasi: '57',
			jummalSmall: '21',
			jummalTrue: '129',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '129'
		},
		{
			الرقم: '117',
			الاسم: 'الكافي',
			jummalNafasi: '45',
			jummalSmall: '12',
			jummalTrue: '111',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '111'
		},
		{
			الرقم: '118',
			الاسم: 'الأبد',
			jummalNafasi: '44',
			jummalSmall: '7',
			jummalTrue: '7',
			jummalMaghribiSmall: '7',
			jummalMaghribiTrue: '7'
		},
		{
			الرقم: '119',
			الاسم: 'العالم',
			jummalNafasi: '44',
			jummalSmall: '15',
			jummalTrue: '141',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '141'
		},
		{
			الرقم: '120',
			الاسم: 'الصادق',
			jummalNafasi: '46',
			jummalSmall: '15',
			jummalTrue: '195',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '165'
		},
		{
			الرقم: '121',
			الاسم: 'القديم',
			jummalNafasi: '62',
			jummalSmall: '10',
			jummalTrue: '154',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '154'
		},
		{
			الرقم: '122',
			الاسم: 'الوتر',
			jummalNafasi: '61',
			jummalSmall: '12',
			jummalTrue: '606',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '606'
		},
		{
			الرقم: '123',
			الاسم: 'الأحد',
			jummalNafasi: '22',
			jummalSmall: '13',
			jummalTrue: '13',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '13'
		},
		{
			الرقم: '124',
			الاسم: 'المالك',
			jummalNafasi: '49',
			jummalSmall: '10',
			jummalTrue: '91',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '91'
		},
		{
			الرقم: '125',
			الاسم: 'المليك',
			jummalNafasi: '59',
			jummalSmall: '10',
			jummalTrue: '100',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '100'
		},
		{
			الرقم: '126',
			الاسم: 'الجواد',
			jummalNafasi: '55',
			jummalSmall: '14',
			jummalTrue: '14',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '14'
		},
		{
			الرقم: '127',
			الاسم: 'الخلاق',
			jummalNafasi: '27',
			jummalSmall: '11',
			jummalTrue: '731',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '731'
		},
		{
			الرقم: '128',
			الاسم: 'الديان',
			jummalNafasi: '43',
			jummalSmall: '11',
			jummalTrue: '65',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '65'
		},
		{
			الرقم: '129',
			الاسم: 'الرازق',
			jummalNafasi: '42',
			jummalSmall: '11',
			jummalTrue: '308',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '308'
		},
		{
			الرقم: '130',
			الاسم: 'الرفيق',
			jummalNafasi: '58',
			jummalSmall: '12',
			jummalTrue: '390',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '390'
		},
		{
			الرقم: '131',
			الاسم: 'السيد',
			jummalNafasi: '48',
			jummalSmall: '11',
			jummalTrue: '74',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '314'
		},
		{
			الرقم: '132',
			الاسم: 'السبوح',
			jummalNafasi: '78',
			jummalSmall: '22',
			jummalTrue: '76',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '316'
		},
		{
			الرقم: '133',
			الاسم: 'السريع',
			jummalNafasi: '49',
			jummalSmall: '16',
			jummalTrue: '340',
			jummalMaghribiSmall: '13',
			jummalMaghribiTrue: '580'
		},
		{
			الرقم: '134',
			الاسم: 'الستار',
			jummalNafasi: '54',
			jummalSmall: '13',
			jummalTrue: '661',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '901'
		},
		{
			الرقم: '135',
			الاسم: 'الشافي',
			jummalNafasi: '47',
			jummalSmall: '13',
			jummalTrue: '391',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '1091'
		},
		{
			الرقم: '136',
			الاسم: 'الشاكر',
			jummalNafasi: '34',
			jummalSmall: '8',
			jummalTrue: '521',
			jummalMaghribiSmall: '6',
			jummalMaghribiTrue: '1221'
		},
		{
			الرقم: '137',
			الاسم: 'الطيب',
			jummalNafasi: '53',
			jummalSmall: '12',
			jummalTrue: '21',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '21'
		},
		{
			الرقم: '138',
			الاسم: 'الأعلى',
			jummalNafasi: '18',
			jummalSmall: '12',
			jummalTrue: '102',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '102'
		},
		{
			الرقم: '139',
			الاسم: 'العلام',
			jummalNafasi: '44',
			jummalSmall: '15',
			jummalTrue: '141',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '141'
		},
		{
			الرقم: '140',
			الاسم: 'الغافر',
			jummalNafasi: '46',
			jummalSmall: '12',
			jummalTrue: '1281',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '1181'
		},
		{
			الرقم: '141',
			الاسم: 'الفاتح',
			jummalNafasi: '48',
			jummalSmall: '21',
			jummalTrue: '489',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '489'
		},
		{
			الرقم: '142',
			الاسم: 'القدير',
			jummalNafasi: '50',
			jummalSmall: '8',
			jummalTrue: '314',
			jummalMaghribiSmall: '8',
			jummalMaghribiTrue: '314'
		},
		{
			الرقم: '143',
			الاسم: 'الكفيل',
			jummalNafasi: '57',
			jummalSmall: '14',
			jummalTrue: '140',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '140'
		},
		{
			الرقم: '144',
			الاسم: 'المعين',
			jummalNafasi: '55',
			jummalSmall: '17',
			jummalTrue: '170',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '170'
		},
		{
			الرقم: '145',
			الاسم: 'المنان',
			jummalNafasi: '56',
			jummalSmall: '15',
			jummalTrue: '141',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '141'
		},
		{
			الرقم: '146',
			الاسم: 'الموسع',
			jummalNafasi: '78',
			jummalSmall: '23',
			jummalTrue: '176',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '416'
		},
		{
			الرقم: '147',
			الاسم: 'المنعم',
			jummalNafasi: '71',
			jummalSmall: '20',
			jummalTrue: '200',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '200'
		},
		{
			الرقم: '148',
			الاسم: 'المفرج',
			jummalNafasi: '76',
			jummalSmall: '17',
			jummalTrue: '323',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '323'
		},
		{
			الرقم: '149',
			الاسم: 'المعافي',
			jummalNafasi: '67',
			jummalSmall: '21',
			jummalTrue: '201',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '201'
		},
		{
			الرقم: '150',
			الاسم: 'المُطعم',
			jummalNafasi: '73',
			jummalSmall: '24',
			jummalTrue: '159',
			jummalMaghribiSmall: '24',
			jummalMaghribiTrue: '159'
		},
		{
			الرقم: '151',
			الاسم: 'الناصر',
			jummalNafasi: '51',
			jummalSmall: '17',
			jummalTrue: '341',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '311'
		},
		{
			الرقم: '152',
			الاسم: 'النذير',
			jummalNafasi: '64',
			jummalSmall: '15',
			jummalTrue: '960',
			jummalMaghribiSmall: '15',
			jummalMaghribiTrue: '960'
		},
		{
			الرقم: '153',
			الاسم: 'الوافي',
			jummalNafasi: '65',
			jummalSmall: '16',
			jummalTrue: '97',
			jummalMaghribiSmall: '16',
			jummalMaghribiTrue: '97'
		},
		{
			الرقم: '154',
			الاسم: 'عالم الغيب والشهادة',
			jummalNafasi: '160',
			jummalSmall: '47',
			jummalTrue: '1505',
			jummalMaghribiSmall: '53',
			jummalMaghribiTrue: '2105'
		},
		{
			الرقم: '155',
			الاسم: 'ذو الفضل العظيم',
			jummalNafasi: '179',
			jummalSmall: '57',
			jummalTrue: '2667',
			jummalMaghribiSmall: '57',
			jummalMaghribiTrue: '1857'
		},
		{
			الرقم: '156',
			الاسم: 'ذو العرش المجيد',
			jummalNafasi: '158',
			jummalSmall: '41',
			jummalTrue: '1364',
			jummalMaghribiSmall: '39',
			jummalMaghribiTrue: '2064'
		},
		{
			الرقم: '157',
			الاسم: 'ذو الطول والإحسان',
			jummalNafasi: '191',
			jummalSmall: '62',
			jummalTrue: '908',
			jummalMaghribiSmall: '59',
			jummalMaghribiTrue: '1148'
		},
		{
			الرقم: '158',
			الاسم: 'ذو الرحمة الواسعة',
			jummalNafasi: '168',
			jummalSmall: '61',
			jummalTrue: '1132',
			jummalMaghribiSmall: '58',
			jummalMaghribiTrue: '1372'
		},
		{
			الرقم: '159',
			الاسم: 'ذو الجبروت والملكوت',
			jummalNafasi: '284',
			jummalSmall: '59',
			jummalTrue: '1850',
			jummalMaghribiSmall: '59',
			jummalMaghribiTrue: '1850'
		},
		{
			الرقم: '160',
			الاسم: 'فاطر السموات والأرض',
			jummalNafasi: '221',
			jummalSmall: '62',
			jummalTrue: '1835',
			jummalMaghribiSmall: '60',
			jummalMaghribiTrue: '1365'
		},
		{
			الرقم: '161',
			الاسم: 'فالق الحب والنوى',
			jummalNafasi: '161',
			jummalSmall: '45',
			jummalTrue: '315',
			jummalMaghribiSmall: '45',
			jummalMaghribiTrue: '315'
		},
		{
			الرقم: '162',
			الاسم: 'منزل الكتاب',
			jummalNafasi: '126',
			jummalSmall: '28',
			jummalTrue: '550',
			jummalMaghribiSmall: '28',
			jummalMaghribiTrue: '550'
		},
		{
			الرقم: '163',
			الاسم: 'سريع الحساب',
			jummalNafasi: '100',
			jummalSmall: '33',
			jummalTrue: '411',
			jummalMaghribiSmall: '27',
			jummalMaghribiTrue: '891'
		},
		{
			الرقم: '164',
			الاسم: 'علام الغيوب',
			jummalNafasi: '114',
			jummalSmall: '25',
			jummalTrue: '1159',
			jummalMaghribiSmall: '33',
			jummalMaghribiTrue: '1059'
		},
		{
			الرقم: '165',
			الاسم: 'غافر الذنب',
			jummalNafasi: '110',
			jummalSmall: '26',
			jummalTrue: '2033',
			jummalMaghribiSmall: '34',
			jummalMaghribiTrue: '1933'
		},
		{
			الرقم: '166',
			الاسم: 'قابل التوب',
			jummalNafasi: '119',
			jummalSmall: '19',
			jummalTrue: '541',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '541'
		},
		{
			الرقم: '167',
			الاسم: 'فارج الهم',
			jummalNafasi: '79',
			jummalSmall: '23',
			jummalTrue: '329',
			jummalMaghribiSmall: '23',
			jummalMaghribiTrue: '329'
		},
		{
			الرقم: '168',
			الاسم: 'كاشف الكرب',
			jummalNafasi: '93',
			jummalSmall: '20',
			jummalTrue: '623',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '1323'
		},
		{
			الرقم: '169',
			الاسم: 'مقلب القلوب',
			jummalNafasi: '147',
			jummalSmall: '22',
			jummalTrue: '310',
			jummalMaghribiSmall: '22',
			jummalMaghribiTrue: '310'
		},
		{
			الرقم: '170',
			الاسم: 'خير الفاصلين',
			jummalNafasi: '117',
			jummalSmall: '36',
			jummalTrue: '1071',
			jummalMaghribiSmall: '33',
			jummalMaghribiTrue: '1041'
		},
		{
			الرقم: '171',
			الاسم: 'ذو المعارج',
			jummalNafasi: '107',
			jummalSmall: '30',
			jummalTrue: '1020',
			jummalMaghribiSmall: '30',
			jummalMaghribiTrue: '1020'
		},
		{
			الرقم: '172',
			الاسم: 'خير الناصرين',
			jummalNafasi: '108',
			jummalSmall: '32',
			jummalTrue: '1211',
			jummalMaghribiSmall: '29',
			jummalMaghribiTrue: '1181'
		},
		{
			الرقم: '173',
			الاسم: 'خير الفاتحين',
			jummalNafasi: '105',
			jummalSmall: '36',
			jummalTrue: '1359',
			jummalMaghribiSmall: '36',
			jummalMaghribiTrue: '1359'
		},
		{
			الرقم: '174',
			الاسم: 'خير الراحمين',
			jummalNafasi: '104',
			jummalSmall: '30',
			jummalTrue: '1119',
			jummalMaghribiSmall: '30',
			jummalMaghribiTrue: '1119'
		},
		{
			الرقم: '175',
			الاسم: 'خير الغافرين',
			jummalNafasi: '103',
			jummalSmall: '27',
			jummalTrue: '2151',
			jummalMaghribiSmall: '35',
			jummalMaghribiTrue: '2051'
		},
		{
			الرقم: '176',
			الاسم: 'أرحم الراحمين',
			jummalNafasi: '119',
			jummalSmall: '36',
			jummalTrue: '558',
			jummalMaghribiSmall: '36',
			jummalMaghribiTrue: '558'
		},
		{
			الرقم: '177',
			الاسم: 'المحيط',
			jummalNafasi: '58',
			jummalSmall: '22',
			jummalTrue: '67',
			jummalMaghribiSmall: '22',
			jummalMaghribiTrue: '67'
		},
		{
			الرقم: '178',
			الاسم: 'الحنان',
			jummalNafasi: '33',
			jummalSmall: '19',
			jummalTrue: '109',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '109'
		},
		{
			الرقم: '179',
			الاسم: 'الأكرم',
			jummalNafasi: '51',
			jummalSmall: '9',
			jummalTrue: '261',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '261'
		},
		{
			الرقم: '180',
			الاسم: 'الإله',
			jummalNafasi: '16',
			jummalSmall: '9',
			jummalTrue: '36',
			jummalMaghribiSmall: '9',
			jummalMaghribiTrue: '36'
		},
		{
			الرقم: '181',
			الاسم: 'المسعَّر',
			jummalNafasi: '65',
			jummalSmall: '19',
			jummalTrue: '370',
			jummalMaghribiSmall: '16',
			jummalMaghribiTrue: '610'
		},
		{
			الرقم: '182',
			الاسم: 'الدهر',
			jummalNafasi: '34',
			jummalSmall: '11',
			jummalTrue: '209',
			jummalMaghribiSmall: '11',
			jummalMaghribiTrue: '209'
		},
		{
			الرقم: '183',
			الاسم: 'رفيع الدرجات',
			jummalNafasi: '114',
			jummalSmall: '32',
			jummalTrue: '968',
			jummalMaghribiSmall: '32',
			jummalMaghribiTrue: '968'
		},
		{
			الرقم: '184',
			الاسم: 'شديد المحال',
			jummalNafasi: '100',
			jummalSmall: '28',
			jummalTrue: '397',
			jummalMaghribiSmall: '26',
			jummalMaghribiTrue: '1097'
		},
		{
			الرقم: '185',
			الاسم: 'عدو الكافرين',
			jummalNafasi: '122',
			jummalSmall: '36',
			jummalTrue: '441',
			jummalMaghribiSmall: '36',
			jummalMaghribiTrue: '441'
		},
		{
			الرقم: '186',
			الاسم: 'الحفي',
			jummalNafasi: '40',
			jummalSmall: '17',
			jummalTrue: '98',
			jummalMaghribiSmall: '17',
			jummalMaghribiTrue: '98'
		},
		{
			الرقم: '187',
			الاسم: 'نور السماوات والأرض',
			jummalNafasi: '222',
			jummalSmall: '56',
			jummalTrue: '1802',
			jummalMaghribiSmall: '54',
			jummalMaghribiTrue: '1332'
		},
		{
			الرقم: '188',
			الاسم: 'الغيور',
			jummalNafasi: '59',
			jummalSmall: '10',
			jummalTrue: '1216',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '1116'
		},
		{
			الرقم: '189',
			الاسم: 'المنذر',
			jummalNafasi: '80',
			jummalSmall: '18',
			jummalTrue: '990',
			jummalMaghribiSmall: '18',
			jummalMaghribiTrue: '990'
		},
		{
			الرقم: '190',
			الاسم: 'المدبر',
			jummalNafasi: '85',
			jummalSmall: '12',
			jummalTrue: '246',
			jummalMaghribiSmall: '12',
			jummalMaghribiTrue: '246'
		},
		{
			الرقم: '191',
			الاسم: 'مخزي الكافرين',
			jummalNafasi: '137',
			jummalSmall: '37',
			jummalTrue: '1018',
			jummalMaghribiSmall: '37',
			jummalMaghribiTrue: '1018'
		},
		{
			الرقم: '192',
			الاسم: 'النصير',
			jummalNafasi: '61',
			jummalSmall: '17',
			jummalTrue: '350',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '320'
		},
		{
			الرقم: '193',
			الاسم: 'خير المنزلين',
			jummalNafasi: '130',
			jummalSmall: '34',
			jummalTrue: '997',
			jummalMaghribiSmall: '34',
			jummalMaghribiTrue: '997'
		},
		{
			الرقم: '194',
			الاسم: 'خير الماكرين',
			jummalNafasi: '108',
			jummalSmall: '24',
			jummalTrue: '1131',
			jummalMaghribiSmall: '24',
			jummalMaghribiTrue: '1131'
		},
		{
			الرقم: '195',
			الاسم: 'متم نوره',
			jummalNafasi: '131',
			jummalSmall: '30',
			jummalTrue: '741',
			jummalMaghribiSmall: '30',
			jummalMaghribiTrue: '741'
		},
		{
			الرقم: '196',
			الاسم: 'المستعان',
			jummalNafasi: '83',
			jummalSmall: '27',
			jummalTrue: '621',
			jummalMaghribiSmall: '24',
			jummalMaghribiTrue: '861'
		},
		{
			الرقم: '197',
			الاسم: 'المعبود',
			jummalNafasi: '101',
			jummalSmall: '23',
			jummalTrue: '122',
			jummalMaghribiSmall: '23',
			jummalMaghribiTrue: '122'
		},
		{
			الرقم: '198',
			الاسم: 'أهل التقوى',
			jummalNafasi: '70',
			jummalSmall: '21',
			jummalTrue: '543',
			jummalMaghribiSmall: '21',
			jummalMaghribiTrue: '543'
		},
		{
			الرقم: '199',
			الاسم: 'أهل المغفرة',
			jummalNafasi: '90',
			jummalSmall: '29',
			jummalTrue: '1361',
			jummalMaghribiSmall: '37',
			jummalMaghribiTrue: '1261'
		},
		{
			الرقم: '200',
			الاسم: 'واسع المغفرة',
			jummalNafasi: '126',
			jummalSmall: '40',
			jummalTrue: '1462',
			jummalMaghribiSmall: '45',
			jummalMaghribiTrue: '1602'
		},
		{
			الرقم: '201',
			الاسم: 'أحكم الحاكمين',
			jummalNafasi: '105',
			jummalSmall: '36',
			jummalTrue: '198',
			jummalMaghribiSmall: '36',
			jummalMaghribiTrue: '198'
		},
		{
			الرقم: '202',
			الاسم: 'خير الحاكمين',
			jummalNafasi: '97',
			jummalSmall: '30',
			jummalTrue: '939',
			jummalMaghribiSmall: '30',
			jummalMaghribiTrue: '939'
		},
		{
			الرقم: '203',
			الاسم: 'خير الرازقين',
			jummalNafasi: '99',
			jummalSmall: '26',
			jummalTrue: '1178',
			jummalMaghribiSmall: '26',
			jummalMaghribiTrue: '1178'
		},
		{
			الرقم: '204',
			الاسم: 'أحسن الخالقين',
			jummalNafasi: '91',
			jummalSmall: '37',
			jummalTrue: '910',
			jummalMaghribiSmall: '34',
			jummalMaghribiTrue: '1150'
		},
		{
			الرقم: '205',
			الاسم: 'خير الحافظين',
			jummalNafasi: '109',
			jummalSmall: '41',
			jummalTrue: '1859',
			jummalMaghribiSmall: '40',
			jummalMaghribiTrue: '1759'
		},
		{
			الرقم: '206',
			الاسم: 'الفعال لما يريد',
			jummalNafasi: '137',
			jummalSmall: '35',
			jummalTrue: '476',
			jummalMaghribiSmall: '35',
			jummalMaghribiTrue: '476'
		},
		{
			الرقم: '207',
			الاسم: 'خير الوارثين',
			jummalNafasi: '124',
			jummalSmall: '29',
			jummalTrue: '1577',
			jummalMaghribiSmall: '29',
			jummalMaghribiTrue: '1577'
		},
		{
			الرقم: '208',
			الاسم: 'فالق الإصباح',
			jummalNafasi: '99',
			jummalSmall: '34',
			jummalTrue: '313',
			jummalMaghribiSmall: '31',
			jummalMaghribiTrue: '283'
		},
		{
			الرقم: '209',
			الاسم: 'نعم المولى',
			jummalNafasi: '113',
			jummalSmall: '30',
			jummalTrue: '237',
			jummalMaghribiSmall: '30',
			jummalMaghribiTrue: '237'
		},
		{
			الرقم: '210',
			الاسم: 'كاشف الضر',
			jummalNafasi: '71',
			jummalSmall: '24',
			jummalTrue: '1401',
			jummalMaghribiSmall: '23',
			jummalMaghribiTrue: '1391'
		},
		{
			الرقم: '211',
			الاسم: 'مخرج الحي من الميت',
			jummalNafasi: '183',
			jummalSmall: '46',
			jummalTrue: '1432',
			jummalMaghribiSmall: '46',
			jummalMaghribiTrue: '1432'
		},
		{
			الرقم: '212',
			الاسم: 'مخرج الميت من الحي',
			jummalNafasi: '183',
			jummalSmall: '46',
			jummalTrue: '1432',
			jummalMaghribiSmall: '46',
			jummalMaghribiTrue: '1432'
		},
		{
			الرقم: '213',
			الاسم: 'جاعل الليل سكناً',
			jummalNafasi: '106',
			jummalSmall: '35',
			jummalTrue: '305',
			jummalMaghribiSmall: '32',
			jummalMaghribiTrue: '545'
		},
		{
			الرقم: '214',
			الاسم: 'أسرع الحاسبين',
			jummalNafasi: '115',
			jummalSmall: '39',
			jummalTrue: '462',
			jummalMaghribiSmall: '33',
			jummalMaghribiTrue: '942'
		},
		{
			الرقم: '215',
			الاسم: 'ولي المؤمنين',
			jummalNafasi: '146',
			jummalSmall: '30',
			jummalTrue: '237',
			jummalMaghribiSmall: '30',
			jummalMaghribiTrue: '237'
		},
		{
			الرقم: '216',
			الاسم: 'الغالب على أمره',
			jummalNafasi: '107',
			jummalSmall: '30',
			jummalTrue: '1380',
			jummalMaghribiSmall: '38',
			jummalMaghribiTrue: '1280'
		},
		{
			الرقم: '217',
			الاسم: 'البالغ أمره',
			jummalNafasi: '90',
			jummalSmall: '19',
			jummalTrue: '1279',
			jummalMaghribiSmall: '27',
			jummalMaghribiTrue: '1179'
		},
		{
			الرقم: '218',
			الاسم: 'ذو الانتقام',
			jummalNafasi: '120',
			jummalSmall: '29',
			jummalTrue: '1298',
			jummalMaghribiSmall: '29',
			jummalMaghribiTrue: '1298'
		},
		{
			الرقم: '219',
			الاسم: 'المغيث',
			jummalNafasi: '66',
			jummalSmall: '11',
			jummalTrue: '1550',
			jummalMaghribiSmall: '19',
			jummalMaghribiTrue: '1450'
		},
		{
			الرقم: '220',
			الاسم: 'المولى',
			jummalNafasi: '69',
			jummalSmall: '14',
			jummalTrue: '77',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '77'
		},
		{
			الرقم: '221',
			الاسم: 'الحييّ',
			jummalNafasi: '26',
			jummalSmall: '10',
			jummalTrue: '28',
			jummalMaghribiSmall: '10',
			jummalMaghribiTrue: '28'
		},
		{
			الرقم: '222',
			الاسم: 'المحسن',
			jummalNafasi: '65',
			jummalSmall: '23',
			jummalTrue: '158',
			jummalMaghribiSmall: '20',
			jummalMaghribiTrue: '398'
		},
		{
			الرقم: '223',
			الاسم: 'الفرد',
			jummalNafasi: '57',
			jummalSmall: '14',
			jummalTrue: '284',
			jummalMaghribiSmall: '14',
			jummalMaghribiTrue: '284'
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

		{#each names as name}
			<tr>
				<td>{convertToArabicNumbers(name.الرقم)}</td>
				<td>{name.الاسم}</td>

				{#if parseInt(name.jummalNafasi) == parseInt($totalNafasi[0]) || parseInt(name.jummalNafasi) == parseInt($totalSmallValue[0]) || parseInt(name.jummalNafasi) == parseInt($totalTrueValue[0]) || parseInt(name.jummalNafasi) == parseInt($totalMaghribiSmallValue[0]) || parseInt(name.jummalNafasi) == parseInt($totalMaghribiTrueValue[0])}
					<td style="font-weight: bold; background-color: #fcd9d7;"
						>{convertToArabicNumbers(name.jummalNafasi)}</td
					>
				{:else}
					<td>{convertToArabicNumbers(name.jummalNafasi)}</td>
				{/if}

				{#if parseInt(name.jummalSmall) == parseInt($totalNafasi[0]) || parseInt(name.jummalSmall) == parseInt($totalSmallValue[0]) || parseInt(name.jummalSmall) == parseInt($totalTrueValue[0]) || parseInt(name.jummalSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(name.jummalSmall) == parseInt($totalMaghribiTrueValue[0])}
					<td style="font-weight: bold; background-color: #fcd9d7;"
						>{convertToArabicNumbers(name.jummalSmall)}</td
					>
				{:else}
				<td>{convertToArabicNumbers(name.jummalSmall)}</td>
				{/if}

				{#if parseInt(name.jummalTrue) == parseInt($totalNafasi[0]) || parseInt(name.jummalTrue) == parseInt($totalSmallValue[0]) || parseInt(name.jummalTrue) == parseInt($totalTrueValue[0]) || parseInt(name.jummalTrue) == parseInt($totalMaghribiSmallValue[0]) || parseInt(name.jummalTrue) == parseInt($totalMaghribiTrueValue[0])}
					<td style="font-weight: bold; background-color: #fcd9d7;"
						>{convertToArabicNumbers(name.jummalTrue)}</td
					>
				{:else}
				<td>{convertToArabicNumbers(name.jummalTrue)}</td>
				{/if}

				{#if parseInt(name.jummalMaghribiSmall) == parseInt($totalNafasi[0]) || parseInt(name.jummalMaghribiSmall) == parseInt($totalSmallValue[0]) || parseInt(name.jummalMaghribiSmall) == parseInt($totalTrueValue[0]) || parseInt(name.jummalMaghribiSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(name.jummalMaghribiSmall) == parseInt($totalMaghribiTrueValue[0])}
					<td style="font-weight: bold; background-color: #fcd9d7;"
						>{convertToArabicNumbers(name.jummalMaghribiSmall)}</td
					>
				{:else}
				<td>{convertToArabicNumbers(name.jummalMaghribiSmall)}</td>
				{/if}

				{#if parseInt(name.jummalMaghribiTrue) == parseInt($totalNafasi[0]) || parseInt(name.jummalMaghribiTrue) == parseInt($totalSmallValue[0]) || parseInt(name.jummalMaghribiTrue) == parseInt($totalTrueValue[0]) || parseInt(name.jummalMaghribiTrue) == parseInt($totalMaghribiSmallValue[0]) || parseInt(name.jummalMaghribiTrue) == parseInt($totalMaghribiTrueValue[0])}
					<td style="font-weight: bold; background-color: #fcd9d7;"
						>{convertToArabicNumbers(name.jummalMaghribiTrue)}</td
					>
				{:else}
				<td>{convertToArabicNumbers(name.jummalMaghribiTrue)}</td>
				{/if}

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
