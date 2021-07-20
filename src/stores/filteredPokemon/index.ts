import type { Pokemon } from '@stores/pokemon/types';
import { writable } from 'svelte/store';

const filteredPokemon = writable<Pokemon[]>([]);

export default filteredPokemon;
