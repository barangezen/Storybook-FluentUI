import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyCustomColorPicker, IMyColorPickerProps } from './MyColorPicker';


export default {
  title: 'MyComponents/Galleries&Pickers/MyCustomColorPicker',
  component: MyCustomColorPicker
} as Meta ;

const Template: Story<IMyColorPickerProps> = (args) => <MyCustomColorPicker {...args} />;

export const Default = Template.bind({});

Default.args = {
   
   alphaOptions : [
    { key: 'alpha', text: 'Alpha' },
    { key: 'transparency', text: 'Transparency' },
    { key: 'none', text: 'None' },
   ]
}