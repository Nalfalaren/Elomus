import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../src/components/base/Tag';

const meta = {
  title: 'Example/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    type: 'error',
  },
};
