import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme:{
        extends: {
          colors: {
            primary: '#f97316',       // Orange 500
            accent: '#fb923c',        // Orange 400
            emphasis: '#c2410c',      // Orange 700
            warning: '#fcd34d',       // Amber 300
            background: '#fdfaf6',    // Warm Gray 50
            text: '#0f172a',          // Slate 900
            muted: '#9ca3af'          // Gray 400
          }
        }
      }
    })],
})
