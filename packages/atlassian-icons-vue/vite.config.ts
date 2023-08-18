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
  ...['bitbucket', 'editor', 'emoji', 'hipchat', 'jira', 'media-services'].reduce(
    (acc, name) => {
      const entry = getEntry(name)

      return {
        ...acc,
        [`${name}/index`]: entry,
      }
    },
    {} as Record<string, string>,
  ),
  index: getEntry(),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), ds()],
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
      external: ['vue', '@nado/ui-kit-icon'],
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
