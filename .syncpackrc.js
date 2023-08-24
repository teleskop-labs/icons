// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  // dependencyTypes: ['dev', 'prod'],
  source: ['package.json', 'configs/*/package.json'],
  versionGroups: [
    {
      label: 'Внутренние пакеты конфигурации должны быть привязаны к "*" (это означает, что приемлема любая версия).',
      packages: ['**'],
      dependencies: [
        '@teleskop-labs/ui-kit-icon',
      ],
      dependencyTypes: ['dev'],
      pinVersion: 'workspace:*',
    },
  ],
}

module.exports = config
