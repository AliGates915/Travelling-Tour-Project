import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js
  server: {
    proxy: {
      '/auth': {
        target: 'http://auditsoftware.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
