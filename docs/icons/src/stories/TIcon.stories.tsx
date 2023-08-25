import type { Meta, StoryObj } from '@storybook/vue3'
import { TIconLike, TIconWarning } from '@teleskop-labs/atlassian-icons-vue'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

const meta = {
  title: 'Components/TIcon',
  component: TIcon,
  render: (args) => ({
    setup() {
      return () => <TIconLike {...args} />
    },
  }),
} satisfies Meta<typeof TIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    label: {
      control: 'text',
    },
    testId: {
      control: 'text',
    },
  },
  args: {
    size: 'medium',
    primaryColor: 'currentColor',
    secondaryColor: 'var(--t-sys-elevation-surface)',
    label: undefined,
    testId: undefined,
  },
}

export const CustomSize: Story = {
  argTypes: {
    height: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
  },
  args: {
    height: 32,
    width: 32,
  },
}

export const CustomColor: Story = {
  render: (args) => ({
    setup() {
      return () => <TIconWarning {...args} />
    },
  }),
  args: {
    primaryColor: 'var(--t-sys-color-icon-brand)',
    secondaryColor: 'red',
  },
}
