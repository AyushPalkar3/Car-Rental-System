import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img',
          dest: 'assets'
        },
        {
          src: 'src/assets/admin',
          dest: 'assets'
        }
      ]
    })
  ],
  define: {
    global: 'window', // or 'globalThis' depending on the library
  },
})
