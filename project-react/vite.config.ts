import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/top-match': {
        target: 'https://whoyou-ah-b6ghhmgvdka7dhdj.canadacentral-01.azurewebsites.net',
        changeOrigin: true
      }
    }
  }
})
