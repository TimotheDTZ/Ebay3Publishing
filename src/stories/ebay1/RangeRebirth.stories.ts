// RangeRebirth.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { RangeRebirth } from './RangeRebirth';

const meta: Meta<typeof RangeRebirth> = {
    title: 'Ebay1/Range/RangeRebirth',
    component: RangeRebirth,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof RangeRebirth>;

export const Default: Story = {
    args: {},
};

export const WithTickImages: Story = {
    args: {
        tick: true,
    },
};

export const WithFocusStatus: Story = {
    args: {
        status: 'focus',
    },
};

export const WithValueAttribute: Story = {
    args: {
        attribute: 'value',
    },
};

export const WithStepLabels: Story = {
    args: {
        attribute: 'step-labels',
    },
};
