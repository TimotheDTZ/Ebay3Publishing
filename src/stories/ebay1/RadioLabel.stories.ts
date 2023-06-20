// RadioLabel.stories.ts
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import RadioLabel, { RadioLabelProps } from './RadioLabel';

const meta: Meta<typeof RadioLabel> = {
    title: 'Ebay1/Radio/HiddenComponent/RadioLabel',
    component: RadioLabel,
};
export default meta;
type Story = StoryObj<typeof RadioLabel>;

export const Default: Story = {
    args: {
        withLabel: false,
    },
};

export const LabelOnly: Story = {
    args: {
        withLabel: true,
        helperText: '',
        errorText: '',
    },
};

export const LabelAndHelper: Story = {
    args: {
        withLabel: true,
        helperText: 'Helper',
        errorText: '',
    },
};

export const LabelAndError: Story = {
    args: {
        withLabel: true,
        helperText: 'Error',
        errorText: 'Error',
    },
};
