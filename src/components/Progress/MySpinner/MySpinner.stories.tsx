import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MySpinner, ISpinnerProps } from './MySpinner';
import { tryStatement } from '@babel/types';

export default {
  title: 'MyComponents/Progress/MySpinner',
  component: MySpinner
} as Meta ;

const Template: Story<ISpinnerProps> = (args) => <MySpinner {...args} />;

export const xSmall = Template.bind({});

xSmall.args = {
    labelText : 'xSmall Spinner',
    size : 0
}

export const Small = Template.bind({});
Small.args = {
    labelText : 'Small Spinner',
    size : 1
}

export const Medium = Template.bind({});
Medium.args = {
    labelText : 'Medium Spinner',
    size : 2
}

export const Large = Template.bind({});
Large.args = {
    labelText : 'Large Spinner',
    size : 3
}


