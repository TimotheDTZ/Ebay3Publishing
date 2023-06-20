import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { RangePointer } from './RangePointer';

const meta: Meta<typeof RangePointer> = {
    title: 'Ebay1/Range/HiddenComponent/RangePointer',
    component: RangePointer,
} as Meta;


export default meta;
type Story = StoryObj<typeof RangePointer>;

export const Default: Story = {
    args: {
        status: 'Default',
    },
};

export const Focus: Story = {
    args: {
        status: 'Focus',
    },
};
