import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyDatePicker, IDatePickerProps } from './MyDatePicker';

export default {
  title: 'MyComponents/Galleries&Pickers/MyDatePicker',
  component: MyDatePicker
} as Meta ;

const Template: Story<IDatePickerProps> = (args) => <MyDatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
   days: [
    { text: 'Sunday', key: 0},
    { text: 'Monday', key: 1 },
    { text: 'Tuesday', key: 2 },
    { text: 'Wednesday', key: 3 },
    { text: 'Thursday', key: 4 },
    { text: 'Friday', key: 5 },
    { text: 'Saturday', key:6 },
   ],
 
   onDropdownChange : () => console.log('Clicked')
}