import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Ebay1/Tooltip/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof Tooltip>;


export const Default: Story = {
    args: {
        text: 'Tooltip text',
        alignment: 'left',
    },
};
