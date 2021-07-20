<script lang="ts">
	import type { Pokemon } from '@stores/pokemon/types';
	import { capitalize } from '@util/format';
	import { fade } from 'svelte/transition';

	export let poke: Pokemon;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md  shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${poke.id}`}
	transition:fade
>
	<figure>
		<img transition:fade class="h-40 w-40 " src={poke.image} alt={poke.name} />
		<figcaption class="text-2xl">{poke.id}. {capitalize(poke.name)}</figcaption>
	</figure>
</a>
