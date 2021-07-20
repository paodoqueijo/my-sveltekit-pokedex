<script lang="ts">
	export let obj: { [x: string]: any };

	const keys = Object.keys(obj);
</script>

<ul class="max-w-md">
	{#each keys as key}
		<li class="capitalize px-4">
			{#if isNaN(parseInt(key))}
				<b>{key}:</b>
			{/if}

			{#if typeof obj[key] === 'object'}
				<svelte:self obj={obj[key]} />
			{:else}
				{obj[key]}
			{/if}

			{#if !isNaN(parseInt(key))}
				<span class="h-full w-4 inline-block bg-teal-400" />
			{/if}
		</li>
	{/each}
</ul>

<style>
</style>
