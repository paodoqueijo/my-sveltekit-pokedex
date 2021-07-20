<script>
	import filteredPokemon from '@stores/filteredPokemon';

	import pokemon from '@stores/pokemon';

	let searchTerm = '';

	$: {
		if (searchTerm) {
			filteredPokemon.set(
				$pokemon.filter((poke) => poke.name.includes(searchTerm.toLowerCase())),
			);
		} else {
			filteredPokemon.set([...$pokemon]);
		}
	}
</script>

<input
	class="w-full rounded-md text-lg p-4 my-6 border-2 border-gray-200"
	type="text"
	placeholder="Search"
	bind:value={searchTerm}
/>
