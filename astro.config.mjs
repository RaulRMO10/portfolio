import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build
export default defineConfig({
  // ⚠️ Após o deploy, troque pela sua URL real (ex.: https://raulmartins.dev)
  site: 'https://raulrmo.vercel.app',
  integrations: [tailwind()],
});
