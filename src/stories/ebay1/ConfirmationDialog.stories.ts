// ConfirmationDialog.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmationDialog } from './ConfirmationDialog';

const meta: Meta<typeof ConfirmationDialog> = {
    title: 'Ebay1/Dialog/ConfirmationDialog',
    component: ConfirmationDialog,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof ConfirmationDialog>;

export const Default: Story = {
    args: {
        title: 'Dialog title',
        text: 'Dictum adipiscing iaculis nisl eu. Leo turpis pellentesque sit iaculis.',
        breakpoints: 'sm (16px margin)',
        actions: 'Single Button',
        hasCloseIcon: false,
    },
};
