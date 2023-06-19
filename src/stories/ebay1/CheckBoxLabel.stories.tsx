import React from 'react';
import { Meta, Story } from '@storybook/react';
import CheckBoxLabel, { CheckBoxLabelProps } from './CheckBoxLabel';

const meta: Meta<typeof CheckBoxLabel> = {
    title: 'Ebay1/CheckBox/CheckBoxLabel',
    component: CheckBoxLabel,
    argTypes: {
        label: {
            control: {
                type: 'select',
                options: ['Label Only', 'Label + Helper', 'Label + Error'],
            },
        },
    },
} as Meta;

export default meta;

type CheckBoxLabelStory = Story<CheckBoxLabelProps>;

export const Default: CheckBoxLabelStory = (args) => <CheckBoxLabel {...args} />;
Default.args = {
    label: 'Label Only',
};
