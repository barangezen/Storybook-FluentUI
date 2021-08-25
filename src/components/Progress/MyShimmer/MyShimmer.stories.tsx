import react from 'react';
import {  Story, Meta } from '@storybook/react';
import { MyShimmer , IShimmerProps } from './MyShimmer';
export default {
  title: 'MyComponents/Progress/MyShimmer',
  component: MyShimmer
} as Meta ;

const Template: Story<IShimmerProps> = (args) => <MyShimmer {...args} />;

export const Default = Template.bind({});

Default.args = {
   headerText : 'Default Header',
   shimmerWithElementFirstRow: [
    { type: 2 },
    { type:3 , width: '2%' },
    { type: 1},
   ],
   shimmerWithElementSecondRow : [
    { type: 2, height: 24 },
    { type: 3, width: '2%' },
    { type: 1, height: 16, width: '20%' },
    { type: 3, width: '5%' },
    { type: 1, height: 16, width: '20%' },
    { type: 3, width: '10%' },
    { type: 1, height: 16, width: '15%' },
    { type: 3, width: '10%' },
    { type: 1, height: 16 },
   ],
   shimmerWithElementThirdRow : [
    { type: 2, height: 24 },
    { type: 3, width: '2%' },
    { type: 1, height: 16, width: '20%' },
    { type: 3, width: '5%' },
    { type: 1, height: 16, width: '20%' },
    { type: 3, width: '10%' },
    { type: 1, height: 16, width: '15%' },
    { type: 3, width: '10%' },
    { type: 1, height: 16 },
   ]
}