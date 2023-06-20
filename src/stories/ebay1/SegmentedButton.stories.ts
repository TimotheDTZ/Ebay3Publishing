import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { SegmentedButton } from './SegmentedButton';

const meta: Meta<typeof SegmentedButton> = {
    title: 'Ebay1/SegmentedButton/SegmentedButton',
    component: SegmentedButton,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof SegmentedButton>;

export const Default: Story = {
    args: {
        segments: 5,
        size: 'medium',
    },
};
