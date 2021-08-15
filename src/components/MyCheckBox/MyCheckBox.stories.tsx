import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyCheckBox , ICheckBoxProps} from './MyCheckBox';

export default {
    title: "MyComponents/MyCheckBox",
    component: MyCheckBox,
    label : 'Default Label'
  } as Meta;

  const Template: Story<ICheckBoxProps>= (args) => <MyCheckBox  {...args} />;

  export const Default = Template.bind({});

  Default.args = {
    label : 'Default Label',
    defaultChecked : false ,
    disabled : false ,
  }