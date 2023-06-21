import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { RangeBar } from './RangeBar';

const meta: Meta<typeof RangeBar> = {
    title: 'Ebay1/Range/HiddenComponent/RangeBar',
    component: RangeBar,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof RangeBar>;

export const Default: Story = {
    args: {
        complemention: '25%',
    },
};

export const FiftyPercent: Story = {
    args: {
        complemention: '50%',
    },
};

export const SeventyFivePercent: Story = {
    args: {
        complemention: '75%',
    },
};

export const FullCompletion: Story = {
    args: {
        complemention: '100%',
    },
};
