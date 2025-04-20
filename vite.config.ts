import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // auto-import内置vue、vue-router、react这些常见基本库的引入规则
        "vue",
        "vue-router",
      ]
    })
  ],
  server: {
    port: 6996,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'src/components')
    }
  },
})
