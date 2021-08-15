import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyLabel, ILabelProps } from './MyLabel';
import { tryStatement } from '@babel/types';

export default {
  title: 'MyComponents/MyLabel',
  component: MyLabel
} as Meta ;

const Template: Story<ILabelProps> = (args) => <MyLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
    disabled: true,
    required: true,
    htmlFor : 'anInput',
    id : '5'
}