import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Ebay1/Buttons/Button-rebirth',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'xl',
    outline: false,
    ghost: false,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'grey',
    size: 'xl',
    outline: false,
    ghost: false,
    label: 'Button',
  },
};

export const Xl: Story = {
  args: {
    color: 'primary',
    size: 'xl',
    outline: false,
    ghost: false,
    label: 'Button',
  },
};

export const Lg: Story = {
  args: {
    color: 'primary',
    size: 'lg',
    outline: false,
    ghost: false,
    label: 'Button',
  },
};

export const Md: Story = {
  args: {
    color: 'primary',
    size: 'md',
    outline: false,
    ghost: false,
    label: 'Button',
  },
};

export const Sm: Story = {
  args: {
    color: 'primary',
    size: 'sm',
    outline: false,
    ghost: false,
    label: 'Button',
  },
};
