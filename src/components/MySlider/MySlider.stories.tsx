import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MySlider, ISliderProps } from './MySlider';

export default {
  title: 'MyComponents/MySlider',
  component: MySlider
} as Meta ;

const Template: Story<ISliderProps> = (args) => <MySlider {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Default label',
    min : 0,
    max : 50,
    step: 10,
    defaultValue: 20,
    showValue : true,
    snapToStep : false ,
    disabled : false ,
    stackStyles : { root: { maxWidth: 300 } },
    stackTokens : { childrenGap: 20 },
    originFromZero : true ,
}