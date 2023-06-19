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
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'grey',
    label: 'Button',
  },
};

export const Xl: Story = {
  args: {
    size: 'xl',
    label: 'Button',
  },
};

export const Lg: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Md: Story = {
  args: {
    size: 'md',
    label: 'Button',
  },
};

export const Sm: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};
