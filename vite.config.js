import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: "/Practice3_ViteReact/",
  build: {
    outDir: 'build',  // теперь билд будет в `build` вместо `dist`
  }
})
