import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ensures assets resolve correctly when served from GitHub Pages subpath.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

