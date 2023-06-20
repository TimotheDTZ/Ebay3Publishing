// RadioGroup.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
    title: 'Ebay1/Radio/Radio/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Stacked: Story = {
    args: {
        position: 'Stacked',
        withLabel: true,
        title: 'Radio Group Title',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    }
};

export const Inline: Story = {
    args: {
        position: 'Inline',
        withLabel: true,
        title: 'Radio Group Title',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    }
};
