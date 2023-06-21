// InformationDialog.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { InformationDialog } from './InformationDialog';

const meta: Meta<typeof InformationDialog> = {
    title: 'Ebay1/Dialog/InformationDialog',
    component: InformationDialog,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof InformationDialog>;

export const Default: Story = {
    args: {
        icon: 'https://cdn1.iconfinder.com/data/icons/feather-2/24/info-16.png',
        title: 'Dialog title',
        text: 'Dictum adipiscing iaculis nisl eu. Leo turpis pellentesque sit iaculis.',
        breakpoints: 'sm (16px margin)',
        Status: 'Info',
        withAction: false,
    },
};
