import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Force Vite to ignore heavy folders so it doesn't thrash your HDD
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
  build: {
    sourcemap: false, // Disabling source maps saves a massive amount of RAM during testing/building
    rollupOptions: {
      cache: false, // Disables rollup cache to prevent RAM accumulation over long coding sessions
    },
  },
})
