// Input.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Ebay1/Input/Input',
    component: Input,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Label',
        state: 'default',
        withValue: false,
        helper: false,
        icon: 'none',
    },
};

export const WithValue: Story = {
    args: {
        label: 'Label',
        state: 'default',
        withValue: true,
        value: 'Example Value',
        helper: false,
        icon: 'none',
    },
};

export const WithHelper: Story = {
    args: {
        label: 'Label',
        state: 'default',
        withValue: false,
        helper: true,
        helperText: 'Example helper text',
        icon: 'none',
    },
};

export const WithIconLeft: Story = {
    args: {
        label: 'Label',
        state: 'default',
        withValue: false,
        helper: false,
        icon: 'left',
    },
};

export const WithIconRight: Story = {
    args: {
        label: 'Label',
        state: 'default',
        withValue: false,
        helper: false,
        icon: 'right',
    },
};

export const WithButton: Story = {
    args: {
        label: 'Label',
        state: 'default',
        withValue: false,
        helper: false,
        icon: 'button',
    },
};
