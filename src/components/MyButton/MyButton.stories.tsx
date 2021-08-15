import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { IButtonProps, MyButton } from './MyButtons';

export default {
    title: "MyComponents/MyButton",
    component: MyButton,
  } as Meta;

  const Template: Story<IButtonProps> = (args) => <MyButton {...args} />;

  export const Default = Template.bind({});

  Default.args = {
    text : 'MyButton',
    allowDisabledFocus : false ,
    disabled : false , 
    checked : false ,
}

