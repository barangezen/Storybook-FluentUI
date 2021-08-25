import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyLink, ILinkProps } from './MyLink';

export default {
  title: 'MyComponents/BasicInputs/MyLink',
  component: MyLink
} as Meta ;

const Template: Story<ILinkProps> = (args) => <MyLink {...args} />;

export const Default = Template.bind({});

Default.args = {
    textDescription : 'Default Text Description',
    linkDescription: 'Default Link Description',
    href : 'https://developer.microsoft.com/en-us/fluentui#/controls/web/link',
    onLinkClick : () => alert('Clicked'),
    disabled: false ,
    underline : true
}