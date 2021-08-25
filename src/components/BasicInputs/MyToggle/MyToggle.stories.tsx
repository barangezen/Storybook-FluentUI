import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyToggle, IMyToggleProps } from './MyToggle';

export default {
  title: 'MyComponents/BasicInputs/MyToggle',
  component: MyToggle
} as Meta ;

const Template: Story<IMyToggleProps> = (args) => <MyToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
   label : 'Default label',
   defaultChecked: false,
   onText: 'On',
   offText: 'Off',
   disabled: false,
   inlineLabel: false,
   role : 'checkbox'
}