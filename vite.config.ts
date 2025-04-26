import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// 安装 @types/node 以解决类型声明问题，不然报错Cannot find module 'path' or its corresponding type declarations.
import path from 'path';

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // 关键配置，启用 Vue 的自动导入
      dts: 'src/auto-imports.d.ts', // 生成类型声明文件
      eslintrc: {
        enabled: true // 生成 .eslintrc-auto-import.json 文件
      }
    })
  ],
  base: 'music-web',
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
