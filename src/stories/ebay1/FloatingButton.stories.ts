// FloatingButton.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { FloatingButton } from './FloatingButton';

const meta: Meta<typeof FloatingButton> = {
    title: 'Ebay1/FloatingButton/FloatingButton',
    component: FloatingButton,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
    args: {},
};

export const Focused: Story = {
    args: {
        status: 'Focused',
    },
};

export const Hovered: Story = {
    args: {
        status: 'Hovered',
    },
};

export const Pressed: Story = {
    args: {
        status: 'Pressed',
    },
};

export const Disabled: Story = {
    args: {
        status: 'Disabled',

        disabled: true,
    },
};

export const Extended: Story = {
    args: {
        extended: true,
        label: 'Extended Button',
    },
};
