import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyTextField, ITextFieldProps } from './MyTextField';

export default {
  title: 'MyComponents/MyTextField',
  component: MyTextField
} as Meta ;

const Template: Story<ITextFieldProps> = (args) => <MyTextField {...args} />;

export const Default = Template.bind({});

Default.args = {
   label : 'Default Label',
   disabled : false ,
   defaultValue : 'Im Disabled',
   readyOnly : false ,
   required : false,
   ariaLabel: 'Required without visible label',
   errorMessage: 'Default Error Message',
   canRevealPassword : false,
   placeholder: 'Default placeholder',
   type: 'password',
   mask: 'm\ask: (999) 999 - 9999',
   title : 'Default Title',
   revealPasswordAriaLabel: 'Show password',
   stackStyles : { root: { width: 650 } }

}