import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 3000,
    open: true
  },
  base: './',
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
}) 