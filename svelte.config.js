import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path === '/not-found' && referrer === '/404') {
          return;
        }
  
        throw new Error(message);
      }
    }
  },
  extensions: ['.svelte', '.md'],
  preprocess: vitePreprocess()
};
export default config;
