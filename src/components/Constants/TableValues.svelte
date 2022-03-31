<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalTrueValue, totalSmallValue } from '../../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiTrueValue
	} from '../../stores/totalMaghribiSmallValue.js';

	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let letterTable = [
		{
			letter: 'ا ى أ إ آ ء ئ ؤ',
			nafasi: '1',
			mashriqiSmall: '1',
			mashriqiBig: '1',
			maghribiSmall: '1',
			maghribiBig: '1'
		},
		{
			letter: 'ب',
			nafasi: '26',
			mashriqiSmall: '2',
			mashriqiBig: '2',
			maghribiSmall: '2',
			maghribiBig: '2'
		},
		{
			letter: 'ج',
			nafasi: '9',
			mashriqiSmall: '3',
			mashriqiBig: '3',
			maghribiSmall: '3',
			maghribiBig: '3'
		},
		{
			letter: 'د',
			nafasi: '17',
			mashriqiSmall: '4',
			mashriqiBig: '4',
			maghribiSmall: '4',
			maghribiBig: '4'
		},
		{
			letter: 'ه ة',
			nafasi: '2',
			mashriqiSmall: '5',
			mashriqiBig: '5',
			maghribiSmall: '5',
			maghribiBig: '5'
		},
		{
			letter: 'و',
			nafasi: '28',
			mashriqiSmall: '6',
			mashriqiBig: '6',
			maghribiSmall: '6',
			maghribiBig: '6'
		},
		{
			letter: 'ز',
			nafasi: '19',
			mashriqiSmall: '7',
			mashriqiBig: '7',
			maghribiSmall: '7',
			maghribiBig: '7'
		},
		{
			letter: 'ح',
			nafasi: '4',
			mashriqiSmall: '8',
			mashriqiBig: '8',
			maghribiSmall: '8',
			maghribiBig: '8'
		},
		{
			letter: 'ط',
			nafasi: '16',
			mashriqiSmall: '9',
			mashriqiBig: '9',
			maghribiSmall: '9',
			maghribiBig: '9'
		},
		{
			letter: 'ي',
			nafasi: '11',
			mashriqiSmall: '1',
			mashriqiBig: '10',
			maghribiSmall: '1',
			maghribiBig: '10'
		},
		{
			letter: 'ك',
			nafasi: '8',
			mashriqiSmall: '2',
			mashriqiBig: '20',
			maghribiSmall: '2',
			maghribiBig: '20'
		},
		{
			letter: 'ل',
			nafasi: '13',
			mashriqiSmall: '3',
			mashriqiBig: '30',
			maghribiSmall: '3',
			maghribiBig: '30'
		},
		{
			letter: 'م',
			nafasi: '27',
			mashriqiSmall: '4',
			mashriqiBig: '40',
			maghribiSmall: '4',
			maghribiBig: '40'
		},
		{
			letter: 'ن',
			nafasi: '14',
			mashriqiSmall: '5',
			mashriqiBig: '50',
			maghribiSmall: '5',
			maghribiBig: '50'
		},
		{
			letter: 'س',
			nafasi: '20',
			mashriqiSmall: '6',
			mashriqiBig: '60',
			maghribiSmall: '3',
			maghribiBig: '300'
		},
		{
			letter: 'ع',
			nafasi: '3',
			mashriqiSmall: '7',
			mashriqiBig: '70',
			maghribiSmall: '7',
			maghribiBig: '70'
		},
		{
			letter: 'ف',
			nafasi: '25',
			mashriqiSmall: '8',
			mashriqiBig: '80',
			maghribiSmall: '8',
			maghribiBig: '80'
		},
		{
			letter: 'ص',
			nafasi: '21',
			mashriqiSmall: '9',
			mashriqiBig: '90',
			maghribiSmall: '6',
			maghribiBig: '60'
		},
		{
			letter: 'ق',
			nafasi: '7',
			mashriqiSmall: '1',
			mashriqiBig: '100',
			maghribiSmall: '1',
			maghribiBig: '100'
		},
		{
			letter: 'ر',
			nafasi: '15',
			mashriqiSmall: '2',
			mashriqiBig: '200',
			maghribiSmall: '2',
			maghribiBig: '200'
		},
		{
			letter: 'ش',
			nafasi: '10',
			mashriqiSmall: '3',
			mashriqiBig: '300',
			maghribiSmall: '1',
			maghribiBig: '1000'
		},
		{
			letter: 'ت',
			nafasi: '18',
			mashriqiSmall: '4',
			mashriqiBig: '400',
			maghribiSmall: '4',
			maghribiBig: '400'
		},
		{
			letter: 'ث',
			nafasi: '23',
			mashriqiSmall: '5',
			mashriqiBig: '500',
			maghribiSmall: '5',
			maghribiBig: '500'
		},
		{
			letter: 'خ',
			nafasi: '6',
			mashriqiSmall: '6',
			mashriqiBig: '600',
			maghribiSmall: '6',
			maghribiBig: '600'
		},
		{
			letter: 'ذ',
			nafasi: '24',
			mashriqiSmall: '7',
			mashriqiBig: '700',
			maghribiSmall: '7',
			maghribiBig: '700'
		},
		{
			letter: 'ض',
			nafasi: '12',
			mashriqiSmall: '8',
			mashriqiBig: '800',
			maghribiSmall: '9',
			maghribiBig: '90'
		},
		{
			letter: 'ظ',
			nafasi: '22',
			mashriqiSmall: '9',
			mashriqiBig: '900',
			maghribiSmall: '8',
			maghribiBig: '800'
		},
		{
			letter: 'غ',
			nafasi: '5',
			mashriqiSmall: '1',
			mashriqiBig: '1000',
			maghribiSmall: '9',
			maghribiBig: '900'
		}
	];
</script>

<div>
	<h4>جدول جمل الحروف</h4>
	<table>
		<thead>
			<th>حرف</th>
			<th>نفسي</th>
			<th>مشرقي صغير</th>
			<th>مشرقي كبير</th>
			<th>مغربي صغير</th>
			<th>مغربي كبير</th>
		</thead>
		<tbody>
			{#each letterTable as letter}
				<tr>
					<td>{letter.letter}</td>

					{#if parseInt(letter.nafasi) == parseInt($totalNafasi[0]) || parseInt(letter.nafasi) == parseInt($totalSmallValue[0]) || parseInt(letter.nafasi) == parseInt($totalTrueValue[0]) || parseInt(letter.nafasi) == parseInt($totalMaghribiSmallValue[0]) || parseInt(letter.nafasi) == parseInt($totalMaghribiTrueValue[0])}
						<td class="highlight">{convertToArabicNumbers(letter.nafasi)}</td>
					{:else}
						<td>{convertToArabicNumbers(letter.nafasi)}</td>
					{/if}

					{#if parseInt(letter.mashriqiSmall) == parseInt($totalNafasi[0]) || parseInt(letter.mashriqiSmall) == parseInt($totalSmallValue[0]) || parseInt(letter.mashriqiSmall) == parseInt($totalTrueValue[0]) || parseInt(letter.mashriqiSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(letter.mashriqiSmall) == parseInt($totalMaghribiTrueValue[0])}
						<td class="highlight">{convertToArabicNumbers(letter.mashriqiSmall)}</td>
					{:else}
						<td>{convertToArabicNumbers(letter.mashriqiSmall)}</td>
					{/if}

					{#if parseInt(letter.mashriqiBig) == parseInt($totalNafasi[0]) || parseInt(letter.mashriqiBig) == parseInt($totalSmallValue[0]) || parseInt(letter.mashriqiBig) == parseInt($totalTrueValue[0]) || parseInt(letter.mashriqiBig) == parseInt($totalMaghribiSmallValue[0]) || parseInt(letter.mashriqiBig) == parseInt($totalMaghribiTrueValue[0])}
						<td class="highlight">{convertToArabicNumbers(letter.mashriqiBig)}</td>
					{:else}
						<td>{convertToArabicNumbers(letter.mashriqiBig)}</td>
					{/if}

					{#if parseInt(letter.maghribiSmall) == parseInt($totalNafasi[0]) || parseInt(letter.maghribiSmall) == parseInt($totalSmallValue[0]) || parseInt(letter.maghribiSmall) == parseInt($totalTrueValue[0]) || parseInt(letter.maghribiSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(letter.maghribiSmall) == parseInt($totalMaghribiTrueValue[0])}
						<td class="highlight">{convertToArabicNumbers(letter.maghribiSmall)}</td>
					{:else}
						<td>{convertToArabicNumbers(letter.maghribiSmall)}</td>
					{/if}

					{#if parseInt(letter.maghribiBig) == parseInt($totalNafasi[0]) || parseInt(letter.maghribiBig) == parseInt($totalSmallValue[0]) || parseInt(letter.maghribiBig) == parseInt($totalTrueValue[0]) || parseInt(letter.maghribiBig) == parseInt($totalMaghribiSmallValue[0]) || parseInt(letter.maghribiBig) == parseInt($totalMaghribiTrueValue[0])}
						<td class="highlight">{convertToArabicNumbers(letter.maghribiBig)}</td>
					{:else}
						<td>{convertToArabicNumbers(letter.maghribiBig)}</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	div {
		max-height: 600px;
		overflow: auto;
	}
	td,
	th {
		text-align: right;
		padding: 2px;
		border: 1px solid #999;
	}
	table {
		border-collapse: collapse;
	}
	a {
		text-decoration: none;
		padding: 3px;
		border-radius: 100px;
		color: black;
	}
	th {
		background: rgb(240, 255, 249);
		position: sticky;
		top: 0;
		box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
		padding-bottom: 7px;
	}
	td.highlight {
		font-weight: bold;
		background-color: rgb(181, 255, 224);
	}
	@media (max-width: 600px) {
		div {
			margin-bottom: 120px;
		}
	}
	@media (prefers-color-scheme: dark) {
		td.highlight {
			background-color: rgb(50, 95, 77);
			color: white;
		}
		th {
			background: rgb(31, 46, 40);
		}
		td,
		th {
			border: 1px solid rgb(70, 70, 70);
		}
		a {
			color: white;
		}
	}
</style>
