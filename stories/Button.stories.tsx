import type { Meta, StoryObj } from '@storybook/react';

import Button from '../src/components/base/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
    shape: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Primary Disabled',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: 'Secondary Disabled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Disabled',
    disabled: true,
  },
};

export const PrimaryCircle: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    children: 'PrimaryCircle',
  },
};

export const PrimaryDisabledCircle: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    disabled: true,
    children: 'Primary Disabled Circle',
  },
};

export const SecondaryCircle: Story = {
  args: {
    variant: 'secondary',
    shape: 'circle',
    children: 'Secondary Circle',
  },
};

export const SecondaryDisabledCircle: Story = {
  args: {
    variant: 'secondary',
    shape: 'circle',
    disabled: true,
    children: 'Secondary Disabled Circle',
  },
};

export const OutlinedCircle: Story = {
  args: {
    variant: 'outlined',
    shape: 'circle',
    children: 'Outlined Circle',
  },
};

export const OutlinedDisabledCircle: Story = {
  args: {
    variant: 'outlined',
    shape: 'circle',
    children: 'Outlined Disabled Circle',
  },
};
