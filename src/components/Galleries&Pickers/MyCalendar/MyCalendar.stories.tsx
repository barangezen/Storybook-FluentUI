import react from 'react';
import {  Story, Meta } from '@storybook/react';
import {ICalendarProps, MyCalendar} from '../MyCalendar/MyCalendar'


export default {
  title: 'MyComponents/Galleries&Pickers/MyCalendar',
  component: MyCalendar
} as Meta ;

const Template: Story<ICalendarProps> = (args) => <MyCalendar {...args} />;

export const Default = Template.bind({});

Default.args = {
   showGoToToday: false 
}