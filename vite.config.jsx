import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/PORTV3",
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: ["https://my-portfolio-v38v.onrender.com"]
  }
})