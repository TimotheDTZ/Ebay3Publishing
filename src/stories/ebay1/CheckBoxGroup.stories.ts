import { Meta, StoryObj } from '@storybook/react';
import CheckBoxGroup from './CheckBoxGroup';

const meta: Meta<typeof CheckBoxGroup> = {
    title: 'Ebay1/CheckBox/CheckBoxGroup',
    component: CheckBoxGroup,
    tags: ['autodocs'],
} as Meta;

export default meta;

type CheckBoxGroupStory = StoryObj<typeof CheckBoxGroup>;

export const Stacked: CheckBoxGroupStory = {
    args: {
        title: 'Stacked Checkboxes',
        position: 'Stacked',
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedOptions: [],
        onChange: (selectedOptions) => console.log(selectedOptions),
    }
};

export const Inline: CheckBoxGroupStory = {
    args: {
        title: 'Inline Checkboxes',
        position: 'Inline',
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedOptions: [],
        onChange: (selectedOptions) => console.log(selectedOptions),
    },
};
