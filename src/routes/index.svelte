<svelte:options immutable={true} />

<script>
	import PokeCard from '@components/PokeCard.svelte';
	import Search from '@components/Search.svelte';
	import filteredPokemon from '@stores/filteredPokemon';
</script>

<svelte:head><title>SvelteKit Poxedex</title></svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit PokéDex</h1>

<Search />

<section class="grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $filteredPokemon as poke}
		<PokeCard {poke} />
	{/each}
</section>
