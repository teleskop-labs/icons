import path from 'node:path'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import ds from 'vite-plugin-dts'

function getEntry(name?: string) {
  if (!name) {
    return path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/index.ts')
  }

  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), `./src/${name}/index.ts`)
}

const entries = {
  index: getEntry(),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ds({
      // staticImport: true,
      outDir: 'dist/types',
      // insertTypesEntry: true,
      tsconfigPath: 'tsconfig.app.json',
    }),
  ],
  build: {
    target: 'modules',
    cssTarget: 'chrome115',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: entries,
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
  resolve: {
    alias: {
      '@icon': fileURLToPath(new URL('ui-kit-icon', import.meta.url)),
    },
  },
})