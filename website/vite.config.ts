import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: https://rcityphotography.com (GitHub Pages)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
