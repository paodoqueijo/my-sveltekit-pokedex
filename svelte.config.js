import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		vite: {
			resolve: {
				extensions: ['.ts', '.tsx', '.js'],
				alias: {
					'@components': path.resolve('./src/components'),
					'@stores': path.resolve('./src/stores'),
					'@util': path.resolve('./src/util'),
				},
			},
		},
	},
};

export default config;
