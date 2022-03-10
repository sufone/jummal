import { writable, derived } from 'svelte/store';

export const letterInput = writable('');

export const letterInputCleaned = derived(letterInput, ($letterInput) =>
	$letterInput.replace(/[\sًٌٍَُِّْ]+/g, '')
);
