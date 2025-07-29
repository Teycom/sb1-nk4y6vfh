export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist' },
  optimizeDeps: { exclude: ['lucide-react'] },
});