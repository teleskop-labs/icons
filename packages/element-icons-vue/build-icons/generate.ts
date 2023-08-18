import { readFile, writeFile } from 'node:fs/promises'
import * as path from 'node:path'

import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import { findWorkspacePackages } from '@pnpm/workspace.find-packages'
import chalk from 'chalk'
import consola from 'consola'
import glob from 'fast-glob'
import { emptyDir, ensureDir } from 'fs-extra'

import { pathComponents } from './paths'

async function getSvgFiles() {
  const pkgs = await findWorkspacePackages((await findWorkspaceDir(process.cwd()))!)

  const pkg = pkgs.find((_pkg) => _pkg.manifest.name === '@teleskop-labs/element-icons-svg')!

  return glob('src/**/*.svg', { cwd: pkg.dir, absolute: true })
}

function snakeToCamel(string: string) {
  let res = string.replaceAll(/-./g, (x) => x[1]!.toUpperCase())

  res = res.charAt(0).toUpperCase() + res.slice(1)

  return res
}

function getName(file: string) {
  let filename = path.basename(file).replace('.svg', '')

  filename = snakeToCamel(filename)

  filename = `NIcon${filename}`
  const componentName = filename

  return {
    componentName,
  }
}

async function transformToVueComponent(file: string) {
  const content = await readFile(file, 'utf8')

  const { componentName } = getName(file)
  const vue = `<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: '${componentName}',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    ${content}
  </NIcon>
</template>`

  writeFile(path.resolve(pathComponents, `${componentName}.vue`), vue, 'utf8')
}

async function generateEntry(files: string[]) {
  const code = files
    .map((file) => {
      const { componentName } = getName(file)

      return `export { default as ${componentName} } from './${componentName}.vue'`
    })
    .join('\n')

  await writeFile(path.resolve(pathComponents, 'index.ts'), code, 'utf8')
}

consola.info(chalk.blue('generating vue components'))
await ensureDir(pathComponents)
await emptyDir(pathComponents)
const files = await getSvgFiles()

consola.info(chalk.blue('generating vue files'))
await Promise.all(files.map((file) => transformToVueComponent(file)))

consola.info(chalk.blue('generating entry file'))
await generateEntry(files)
