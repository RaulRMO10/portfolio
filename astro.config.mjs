import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build
export default defineConfig({
  // URL de produção (Vercel). Se comprar domínio próprio, troque aqui.
  site: 'https://portfolio-dusky-two-29.vercel.app',
  integrations: [tailwind()],
});
