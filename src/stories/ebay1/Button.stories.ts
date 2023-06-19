import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Ebay1/Buttons/ButtonRebirth',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    variant: {
      control: {
        type: 'select',
        options: ['Ghost', 'Outline', 'None'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['Default', 'Disabled', 'Focused', 'Hovered', 'Skeleton'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['None', 'Left', 'Right', 'Icon Only'],
      },
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
    variant: 'None',
    state: 'Default',
    label: 'Button',
    icon: 'None',
  },
};

export const Secondary: Story = {
  args: {
    color: 'grey',
    size: 'xl',
    variant: 'None',
    state: 'Default',
    label: 'Button',
    icon: 'None',
  },
};

export const Xl: Story = {
  args: {
    color: 'primary',
    size: 'xl',
    variant: 'None',
    state: 'Default',
    label: 'Button',
    icon: 'None',
  },
};

export const Lg: Story = {
  args: {
    color: 'primary',
    size: 'lg',
    variant: 'None',
    state: 'Default',
    label: 'Button',
    icon: 'None',
  },
};

export const Md: Story = {
  args: {
    color: 'primary',
    size: 'md',
    variant: 'None',
    state: 'Default',
    label: 'Button',
    icon: 'None',
  },
};

export const Sm: Story = {
  args: {
    color: 'primary',
    size: 'sm',
    variant: 'None',
    state: 'Default',
    label: 'Button',
    icon: 'None',
  },
};
