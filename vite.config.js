import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'three': 'three',
      'three/examples/jsm': 'three/examples/jsm'
    }
  },
  build: {
    rollupOptions: {
      input: '/index.html',
      external: ['style.css']
    },
    chunkSizeWarningLimit: 1000 // Adjust the limit to a higher value
  }
});
