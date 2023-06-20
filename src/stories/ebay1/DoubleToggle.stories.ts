import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DoubleToggle } from './DoubleToggle';

const meta: Meta<typeof DoubleToggle> = {
    title: 'Ebay1/Toggle/DoubleToggle',
    component: DoubleToggle,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof DoubleToggle>;

export const Default: Story = {
    args: {
        labelLeft: 'Label',
        labelRight: 'Label',
        Side: 'right',
        onChange: (side) => {
            console.log(`New side: ${side}`);
        },
    },
};
