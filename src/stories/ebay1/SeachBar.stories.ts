// SearchBar.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { SearchBar } from './SeachBar';

const meta: Meta<typeof SearchBar> = {
    title: 'Ebay1/SeachBar/SeachBar',
    component: SearchBar,
} as Meta;

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        attribute: 'Icon left',
        hover: false,
    },
};
