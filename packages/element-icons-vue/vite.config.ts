import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import ds from 'vite-plugin-dts'
import { libInjectCss, scanEntries } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'

function scan() {
  const entries = scanEntries('src')

  if (entries['index']) {
    delete entries['index']
  }

  return entries
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ds({
      entryRoot: './src',
      cleanVueFileName: true,
      tsconfigPath: 'tsconfig.app.json',
    }),
    libInjectCss(),
    viteStaticCopy({
      targets: [
        {
          src: `src/index.ts`,
          dest: '',
          rename: 'index.js',
          transform: (contents: string) => contents.toString().replaceAll(/.vue/g, ''),
        },
      ],
    }),
  ],
  build: {
    target: 'esnext',
    cssTarget: 'chrome115',
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: scan(),
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        preserveModules: false,
        // Put chunk files at <output>/chunks
        chunkFileNames: 'chunks/[name].[hash].js',
        // Put chunk styles at <output>/assets
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
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
