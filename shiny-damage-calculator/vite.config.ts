import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      component: path.resolve(__dirname, 'src/component'),
      css: path.resolve(__dirname, 'src/css'),
      reducer: path.resolve(__dirname, 'src/reducer.ts'),
      reportWebVitals: path.resolve(__dirname, 'src/reportWebVitals.ts'),
      simulator: path.resolve(__dirname, 'src/simulator.ts'),
      state: path.resolve(__dirname, 'src/state.ts'),
      utility: path.resolve(__dirname, 'src/utility.ts')
    }
  },
  build: {
    outDir: 'build',
    reportCompressedSize: false
  }
});
