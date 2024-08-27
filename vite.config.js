// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Define base path based on the environment
  const isProduction = command === 'build';
  const base = isProduction ? '/my-personal-space/' : '/';

  return {
    plugins: [vue()],
    base: base, // Set base path based on environment
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});