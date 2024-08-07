import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: 'src', // Set the root to 'src' if your index.html is inside src
    build: {
        outDir: '../dist', // Output directory for build files
        emptyOutDir: true,
    },
});
