import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'), // Set 'src' as the root directory
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Ensure the output directory is outside 'src'
  },
});
