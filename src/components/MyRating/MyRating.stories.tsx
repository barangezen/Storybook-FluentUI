import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyRating, IRatingProps } from './MyRating';

export default {
  title: 'MyComponents/MyRating',
  component: MyRating
} as Meta ;

const Template: Story<IRatingProps> = (args) => <MyRating {...args} />;

export const Default = Template.bind({});

Default.args = {
    max : 5,
    size : 1,
    defaultRating: 3,
    ariaLabel: 'Small stars with 0 stars allowed',
    ariaLabelFormat: '{0} of {1} stars'
}