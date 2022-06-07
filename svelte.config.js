import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: true,
    }),

    kit: {
        adapter: adapter(),

        // Override http methods in the Todo forms
        methodOverride: {
            allowed: ['PATCH', 'DELETE']
        },

        vite: {
            resolve: {
                alias: {
                    $icons: path.resolve('./src/icons'),
                    $sections: path.resolve('./src/lib/sections'),
                }
            }
        },
    }
};

export default config;
