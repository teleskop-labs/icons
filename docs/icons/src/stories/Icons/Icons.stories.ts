import type { Meta } from '@storybook/vue3'
import { h } from 'vue'

import AtlassianIcons from './AtlassianIcons.vue'
import ElementIcons from './ElementIcons.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Icons/Icons',
} satisfies Meta

export const Atlassian = () => ({
  setup: () => () => h(AtlassianIcons),
})

export const Element = () => ({
  setup: () => () => h(ElementIcons),
})
