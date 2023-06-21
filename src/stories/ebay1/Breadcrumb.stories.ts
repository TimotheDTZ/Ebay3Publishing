// Breadcrumb.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Ebay1/Breadcrumb/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    args: {
        breadcrumbs: ['Home', 'Page title'],
        breakpoints: 'lg+',
        backgroundColor: 'G000',
        showTitle: false,
    },
};
