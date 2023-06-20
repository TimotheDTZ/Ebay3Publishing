import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AlertLabel } from './AlertLabel';

const meta: Meta<typeof AlertLabel> = {
    component: AlertLabel,
    title: 'Ebay1/Alert/HiddenComponent/AlertLabel',
} as Meta;
export default meta;
type Story = StoryObj<typeof AlertLabel>;

export const Primary: Story = {
    args: {
        withTitle: false,
        withLink: false,
        title: "Alert Label Title",
    },
};

export const WithTitle: Story = {
    args: {
        withTitle: true,
        withLink: false,
        title: "Alert Label Title",
    },

};

export const WithLink: Story = {
    args: {
        withTitle: false,
        withLink: true,
        title: "Alert Label Title"

    },
};

export const WithTitleAndLink: Story = {
    args: {
        withTitle: true,
        withLink: true,
        title: "Alert Label Title"

    },
};
