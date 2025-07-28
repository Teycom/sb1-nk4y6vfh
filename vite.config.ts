import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',               // <-- caminhos relativos
  build: {
    outDir: 'dist',         // <-- garante a pasta de saída
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});