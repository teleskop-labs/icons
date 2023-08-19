import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import ds from 'vite-plugin-dts'
import { libInjectCss, scanEntries } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const folders = ['core', 'bitbucket', 'editor', 'emoji', 'hipchat', 'jira', 'media-services']

function scan(paths: string[]) {
  const parts = paths.map((name) => {
    const entries = scanEntries(`src/${name}`)

    if (entries['index']) {
      delete entries['index']
    }

    const result: Record<string, string> = {}

    for (const key in entries) {
      if (Object.hasOwn(entries, key)) {
        result[`${name}/${key}`] = entries[key]!
      }
    }

    return result
  })

  let entries: Record<string, string> = {}

  for (const part of parts) {
    entries = {
      ...entries,
      ...part,
    }
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
      targets: folders.map((name) => {
        return {
          src: `src/${name}/index.ts`,
          dest: name,
          rename: 'index.js',
          transform: (contents: string) => contents.toString().replaceAll(/.vue/g, ''),
        }
      }),
    }),
  ],
  build: {
    target: 'esnext',
    cssTarget: 'chrome115',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        ...scan(folders),
      },
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
