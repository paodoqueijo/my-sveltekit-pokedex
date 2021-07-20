<script>
	import Nav from '@components/Nav.svelte';
</script>

<header>
	<Nav />
</header>

<main class="p-8 max-w-6xl mx-auto">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
