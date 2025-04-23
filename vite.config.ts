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
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name: any) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : "";
          // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
          // Otherwise, avoid them because they can refer to NTFS alternate data streams.
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      },
    },
  },
})
