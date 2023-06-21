import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Ebay1/Textarea/Textarea',
    component: Textarea,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        label: 'Label',
    },
};

export const WithValue: Story = {
    args: {
        label: 'Label',
        withValue: true,
        valueText: 'Sit justo, porta sit risus, neque lacus et pharetra, enim. Risus in consectetur dolor, eu dictum.',
    },
};

export const Styled: Story = {
    args: {
        label: 'Label',
        styleSelector: 'Default',
    },
};

export const WithHelper: Story = {
    args: {
        label: 'Label',
        helper: true,
    },
};
