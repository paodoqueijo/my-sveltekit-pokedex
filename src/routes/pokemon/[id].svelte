<script context="module">
	export const load = async ({ page }) => {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const poke = await res.json();
		return { props: { poke } };
	};
</script>

<script lang="ts">
	import NestedList from '@components/NestedList.svelte';

	interface Pokemon {
		name: 'string';
		height: number;
		types: object;
		weight: number;
		id: number;
		sprites: object;
		abilities: Array<object>;
	}

	export let poke: Pokemon;
	const { abilities, height, id, types, weight } = poke;
	const obj = { id, height, weight, types, abilities };
</script>

<section class="max-w-l mx-auto ">
	<h2 class="text-4xl text-center my-8 uppercase">{poke.name}</h2>
	<div class="flex flex-col md:flex-row p-10 items-center bg-purple-100  ">
		<img
			class="h-60 w-60 shadow-md bg-gray-100 my-10"
			src={poke.sprites['front_default']}
			alt={poke.name}
		/>
		<NestedList {obj} />
	</div>
</section>
