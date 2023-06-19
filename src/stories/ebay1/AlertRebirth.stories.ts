import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AlertRebirth } from './AlertRebirth';

const meta: Meta<typeof AlertRebirth> = {
    title: 'Ebay1/Alert/Alert/AlertRebirth',
    component: AlertRebirth,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof AlertRebirth>;

export const Danger: Story = {
    args: {
        alertStyle: 'danger',
    }
};

export const Success: Story = {
    args: {
        alertStyle: 'success',
    }
};

export const Information: Story = {
    args: {
        alertStyle: 'information',
    }
};

export const Warning: Story = {
    args: {
        alertStyle: 'warning',
    }
};

export const Trick: Story = {
    args: {
        alertStyle: 'trick',
    }
};
