import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MySearchBox,ISearchBoxProps } from './MySearchBox';

export default {
  title: 'MyComponents/BasicInputs/MySearchBox',
  component: MySearchBox
} as Meta ;

const Template: Story<ISearchBoxProps> = (args) => <MySearchBox {...args} />;

export const Default = Template.bind({});

Default.args = {
   placeholder : 'Default Place Holder',
   disableAnimation: false,
   stackTokens : { childrenGap: 20 }
}