// AlertIcon.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { AlertIcon } from './AlertIcon';

const meta: Meta<typeof AlertIcon> = {
    title: 'Ebay1/Alert/HiddenComponent/AlertIcon',
    component: AlertIcon,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertIcon>;

export const Alert_Icon: Story = {};
