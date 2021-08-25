import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyComboBox, IComboBoxProps } from './MyComboBox';

export default {
  title: 'MyComponents/BasicInputs/MyComboBox',
  component: MyComboBox
} as Meta ;

const Template: Story<IComboBoxProps> = (args) => <MyComboBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  label:'Default Label',
  options : [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  ],
  styles: { root: { maxWidth: 300 } }

}