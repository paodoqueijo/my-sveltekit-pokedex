import { writable } from 'svelte/store';
import type { Pokemon } from './types';

const pokemon = writable<Pokemon[]>([]);

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);

	const data = await res.json();
	const loadedPokemon = data.results.map((data, idx: number) => ({
		name: data.name,
		id: idx + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			idx + 1
		}.png`,
	}));

	pokemon.set(loadedPokemon);
};

fetchPokemon();

export default pokemon;
