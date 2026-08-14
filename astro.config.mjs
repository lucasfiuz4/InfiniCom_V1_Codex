import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [alpine(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
