import type { Meta, StoryObj } from '@storybook/react';

import { RatingsRebirth } from './RatingsRebirth';

const meta: Meta<typeof RatingsRebirth> = {
    title: 'Ebay1/Rating/RatingsRebirth',
    component: RatingsRebirth,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['Md', 'Sm'],
            },
        },
        showLink: {
            control: 'boolean',
        },
        rate: {
            control: {
                type: 'range',
                min: 0,
                max: 5,
                step: 0.5,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof RatingsRebirth>;

export const Default: Story = {
    args: {},
};

export const WithLink: Story = {
    args: {
        showLink: true,
    },
};

export const SizeMd: Story = {
    args: {
        size: 'Md',
    },
};

export const SizeSm: Story = {
    args: {
        size: 'Sm',
    },
};
