// UMD build — vanilla only, no React, works in plain HTML via script tag
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vanilla.ts'),
      name: 'OtagaEffects',
      formats: ['umd'],
      fileName: () => 'index.umd.js',
    },
    emptyOutDir: false,
  },
});
