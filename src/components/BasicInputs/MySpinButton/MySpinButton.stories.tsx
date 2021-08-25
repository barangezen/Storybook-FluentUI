import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MySpinButton, ISpinButtonProps } from './MySpinButton';

export default {
  title: 'MyComponents/BasicInputs/MySpinButton',
  component: MySpinButton
} as Meta ;

const Template: Story<ISpinButtonProps> = (args) => <MySpinButton {...args} />;

export const Default = Template.bind({});

Default.args = {
    label : 'Default Label',
    defaultValue : '0',
    min : 0,
    max : 100,
    step : 1,
    incrementButtonAriaLabel :'Increase value by 1',
    decrementButtonAriaLabel : 'Decrease value by 1',
    styles : { spinButtonWrapper: { width: 75 } },
    disabled: false 
}