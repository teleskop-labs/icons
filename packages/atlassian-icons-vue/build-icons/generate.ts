import { appendFile } from 'node:fs'
import { readFile } from 'node:fs/promises'
import * as path from 'node:path'

import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import { findWorkspacePackages } from '@pnpm/workspace.find-packages'
import chalk from 'chalk'
import consola from 'consola'
import glob from 'fast-glob'
import { emptyDir, ensureDir, ensureFile, outputFile } from 'fs-extra'

import { pathComponents } from './paths'

async function getSvgFiles() {
  const pkgs = await findWorkspacePackages((await findWorkspaceDir(process.cwd()))!)

  const pkg = pkgs.find((_pkg) => _pkg.manifest.name === '@teleskop-labs/atlassian-icons-svg')!

  return glob('src/**/*.svg', { cwd: pkg.dir, absolute: true })
}

function snakeToCamel(string: string) {
  let res = string.replaceAll(/-./g, (x) => x[1]!.toUpperCase())

  res = res.charAt(0).toUpperCase() + res.slice(1)

  return res
}

function getName(file: string) {
  let dirname = path.dirname(file).split('/').pop()

  dirname = dirname === 'src' ? '/core' : `/${dirname}`

  let filename = path.basename(file).replace('.svg', '')

  filename = snakeToCamel(filename)

  filename = `TIcon${filename}`
  const componentName = filename

  return {
    dirname,
    componentName,
  }
}

async function transformToVueComponent(file: string) {
  const content = await readFile(file, 'utf8')
  const { dirname, componentName } = getName(file)
  const vue = `<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: '${componentName}',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    ${content}
  </TIcon>
</template>`

  outputFile(path.resolve(`${pathComponents}${dirname}`, `${componentName}.vue`), vue, 'utf8')

  generateEntry(dirname, componentName, componentName)
}

async function generateEntry(dirname: string, filename: string, componentName: string) {
  const text = `export { default as ${componentName} } from './${filename}.vue'\n`

  await ensureFile(path.resolve(`${pathComponents}${dirname}`, 'index.ts'))
  await appendFile(path.resolve(`${pathComponents}${dirname}`, 'index.ts'), text, (err) => {
    if (err) {
      throw err
    }
  })
}

consola.info(chalk.blue('generating vue components'))
await ensureDir(pathComponents)
await emptyDir(pathComponents)
const files = await getSvgFiles()

consola.info(chalk.blue('generating vue files'))
await Promise.all(files.map((file) => transformToVueComponent(file)))
