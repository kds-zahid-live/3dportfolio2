import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This is important for Vercel
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist'
    sourcemap: true, // Optional: generate source maps for easier debugging
  },
  server: {
    port: 3000, // This can be adjusted based on your needs
    open: true, // Automatically open the browser on server start
  },
  // Optional: if you're using a specific CSS preprocessor, add it here
  css: {
    preprocessorOptions: {
      scss: {
        // Additional options for SCSS
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
});
