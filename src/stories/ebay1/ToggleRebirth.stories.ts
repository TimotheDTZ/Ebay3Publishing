import type { Meta, StoryObj } from '@storybook/react';
import { ToggleRebirth } from './ToggleRebirth';

const meta: Meta<typeof ToggleRebirth> = {
    title: 'Ebay1/Toggle/ToggleRebirth',
    component: ToggleRebirth,
    tags: ['autodocs'],
};
type Story = StoryObj<typeof ToggleRebirth>;
export default meta;

export const Default: Story = {
    args: {
        label: false,
        checked: false,
    },
};
export const WithLabel: Story = {
    args: {
        label: true,
        checked: false,
    },
};
export const Checked: Story = {
    args: {
        label: false,
        checked: true,
    },
};
export const CheckedWithLabel: Story = {
    args: {
        label: true,
        checked: true,
    },
};
