import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Ebay1/Dropdown/Dropdown',
    component: Dropdown,
} as Meta;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default = {
    args: {
        isOpen: false,
        size: 'md',
        direction: 'left',
    },
};
