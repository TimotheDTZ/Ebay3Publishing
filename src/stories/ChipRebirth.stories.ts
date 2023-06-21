import type { Meta, StoryObj } from '@storybook/react';

import { ChipRebirth } from './ChipRebirth';

const meta: Meta<typeof ChipRebirth> = {
    title: 'Ebay1/Chip/ChipRebirth',
    component: ChipRebirth,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['sm', 'lg'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'default'],
            },
        },
        iconLeft: {
            control: {
                type: 'boolean',
            },
        },
        iconRight: {
            control: {
                type: 'boolean',
            },
        },
        state: {
            control: {
                type: 'select',
                options: ['default', 'hover', 'focus'],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ChipRebirth>;

export const Default: Story = {
    args: {},
};

export const WithIconLeft: Story = {
    args: {
        iconLeft: true,
    },
};

export const WithIconRight: Story = {
    args: {
        iconRight: true,
    },
};

export const CustomSize: Story = {
    args: {
        size: 'sm',
    },
};

export const CustomColor: Story = {
    args: {
        color: 'primary',
    },
};

export const CustomState: Story = {
    args: {
        state: 'hover',
    },
};
