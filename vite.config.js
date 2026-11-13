import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: resolve(__dirname, 'cv.html'),
        // Les lettres ne sont construites que pour l'export PDF, jamais publiées.
        ...(mode === 'pdf' ? { lettre: resolve(__dirname, 'lettre.html') } : {}),
      },
    },
  },
}));
