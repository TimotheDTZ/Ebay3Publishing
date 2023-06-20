import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { SubHeader } from './SubHeader';

const meta: Meta<typeof SubHeader> = {
    title: 'Ebay1/Header/CheckBox/SubHeader',
    component: SubHeader,
    argTypes: {
        device: {
            control: {
                type: 'select',
                options: ['Desktop', 'Mobile', 'Mobile w/data'],
            },
        },
    },
} as Meta;

export default meta;
type Story = StoryObj<typeof SubHeader>;

export const Desktop: Story = {
    args: {
        device: 'Desktop',
    }
};

export const Mobile: Story = {
    args: {
        device: 'Mobile',
    }
};

export const MobileWithData: Story = {
    args: {
        device: 'Mobile w/data',
    }
};
