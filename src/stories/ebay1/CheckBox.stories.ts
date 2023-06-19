import type { Meta, Story, StoryObj } from '@storybook/react';

import { CheckBox } from './CheckBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CheckBox> = {
    title: 'Ebay1/CheckBox/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: {
                type: 'select',
                options: ['Checked', 'Indeterminate', 'None'],
            },
        },
        state: {
            control: {
                type: 'select',
                options: ['Default', 'Hover', 'Focus', 'Disabled', 'Error'],
            },
        },
    },
};

export default meta;
type CheckBoxStory = StoryObj<typeof CheckBox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: CheckBoxStory = {
    args: {
        label: false,
        checked: 'None',
        state: 'Default',
        helper: false,
    },
};

export const WithLabel: CheckBoxStory = {
    args: {
        label: true,
        checked: 'None',
        state: 'Default',
        helper: false,
    },
};

export const Checked: CheckBoxStory = {
    args: {
        label: false,
        checked: 'Checked',
        state: 'Default',
        helper: false,
    },
};

export const Indeterminate: CheckBoxStory = {
    args: {
        label: false,
        checked: 'Indeterminate',
        state: 'Default',
        helper: false,
    },
};

export const Hover: CheckBoxStory = {
    args: {
        label: false,
        checked: 'None',
        state: 'Hover',
        helper: false,
    },
};

export const Focus: CheckBoxStory = {
    args: {
        label: false,
        checked: 'None',
        state: 'Focus',
        helper: false,
    },
};

export const Disabled: CheckBoxStory = {
    args: {
        label: false,
        checked: 'None',
        state: 'Disabled',
        helper: false,
    },
};

export const Error: CheckBoxStory = {
    args: {
        label: false,
        checked: 'None',
        state: 'Error',
        helper: false,
    },
};

export const WithHelperText: CheckBoxStory = {
    args: {
        label: false,
        checked: 'None',
        state: 'Default',
        helper: true,
    },
};
