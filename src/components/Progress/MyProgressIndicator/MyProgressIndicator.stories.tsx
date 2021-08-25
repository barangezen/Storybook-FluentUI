import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyProgressIndicator, IProgressIndicatorProps } from './MyProgressIndicator';

export default {
  title: 'MyComponents/Progress/MyProgressIndicator',
  component: MyProgressIndicator
} as Meta ;

const Template: Story<IProgressIndicatorProps> = (args) => <MyProgressIndicator {...args} />;

export const Default = Template.bind({});

Default.args = {
   label : 'Default Label',
   description : 'Default Description',
   intervalDelay : 100,
   intervalIncrement: 0.01
}