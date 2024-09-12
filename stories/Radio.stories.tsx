import type { Meta, StoryObj } from '@storybook/react';

import Radio from '../src/components/base/Radio';

const meta = {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio',
    name: 'radio',
  },
};
export const Checked: Story = {
  args: {
    label: 'Radio',
    name: 'radio',
    checked: true,
  },
};
