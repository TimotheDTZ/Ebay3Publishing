import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
    title: 'Ebay1/Toast/Toast',
    component: Toast,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    args: {
        toastStyle: 'Danger',
        input: 'Default Toast',
    },
};

export const CustomToast: Story = {
    args: {
        toastStyle: 'Success',
        input: 'Custom Toast',
    },
};
