import path from 'node:path'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const computedRendererNames = ["firstRenderer", "secondRenderer"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    mainFields: ['module', 'main', 'jsnext:main', 'jsnext'],
  },
  build: {
    target: 'modules',
    cssTarget: 'chrome115',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      // entry: resolve(__dirname, 'dist/main.js'),
      entry: path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/index.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
