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
          transform: (contents: string) => contents.toString().replaceAll(/.vue/g, '.js'),
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
      entry: scan(),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
})
