import { writable } from 'svelte-local-storage-store';

export const saved = writable("saved", []);