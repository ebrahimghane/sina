import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SinaWidget',
      fileName: 'sina-sdk',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        entryFileNames: 'sina-sdk.js',
        // Ensure CSS is inlined in the bundle
        assetFileNames: (assetInfo) => {
          // Don't emit separate CSS files
          if (assetInfo.name?.endsWith('.css')) {
            return 'dummy.css'; // This won't be used since we inline
          }
          return assetInfo.name || 'asset';
        },
      },
    },
    // Don't emit separate CSS files
    cssCodeSplit: false,
    // Minify for production (using esbuild which is faster and built-in)
    minify: 'esbuild',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@sina/api': resolve(__dirname, '../../packages/api/src'),
      '@sina/shared-utils': resolve(__dirname, '../../packages/shared-utils/src'),
      '@sina/ui': resolve(__dirname, '../../packages/ui/src'),
    },
  },
});

