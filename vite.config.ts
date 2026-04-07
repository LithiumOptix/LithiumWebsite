import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// DELETE the line that says: import runtimeErrorModal from '@replit/vite-plugin...'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // DELETE the line here that says: runtimeErrorModal(),
  ],
})
