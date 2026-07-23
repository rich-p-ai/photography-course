import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://rich-p-ai.github.io/photography-course/
export default defineConfig({
  base: '/photography-course/',
  plugins: [react()],
})
