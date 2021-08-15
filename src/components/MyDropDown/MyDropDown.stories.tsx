import react from "react";
import { Story, Meta } from "@storybook/react";
import { MyDropDown, IDropDownProps } from "./MyDropDown";

export default {
  title: "MyComponents/MyDropDown",
  component: MyDropDown
} as Meta;

const Template: Story<IDropDownProps> = (args) => <MyDropDown {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Default Place Holder",
  label: "Default Label",
  options : [
    { key: 'fruitsHeader', text: 'Fruits', itemType: 0 },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: 0 },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: 0 },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
  ],
  styles : {
    dropdown: { width: 300 }
  }
};
