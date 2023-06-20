import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { RadioButtonRebirth } from './RadioButtonRebirth';

const meta: Meta<typeof RadioButtonRebirth> = {
    title: 'Ebay1/Radio/Radio/RadioButtonRebirth',
    component: RadioButtonRebirth,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof RadioButtonRebirth>;

export const Default: Story = {
    args: {
        label: 'Label',
        checked: false,
        helper: false,
        state: 'Default',
    },
};

export const Checked: Story = {
    args: {
        label: 'Label',
        checked: true,
        helper: false,
        state: 'Default',
    },
};

export const WithHelper: Story = {
    args: {
        label: 'Label',
        checked: false,
        helper: true,
        state: 'Default',
    },
};

export const Hover: Story = {
    args: {
        label: 'Label',
        checked: true,
        helper: false,
        state: 'Hover',
    },
};

export const Focus: Story = {
    args: {
        label: 'Label',
        checked: false,
        helper: false,
        state: 'Focus',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Label',
        checked: false,
        helper: false,
        state: 'Disabled',
    },
};

export const Error: Story = {
    args: {
        label: 'Label',
        checked: false,
        helper: false,
        state: 'Error',
    },
};
