import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/samurai-knives-web/', // השם של הריפוזיטורי שלך
  plugins: [react()],
})
