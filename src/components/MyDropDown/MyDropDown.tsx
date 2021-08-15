import * as React from 'react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption, IDropdownProps } from '@fluentui/react/lib/Dropdown';

/* const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
}; */
/* 
const options: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];

const stackTokens: IStackTokens = { childrenGap: 20 }; */

export interface IOptions {
    key : string ;
    text : string
    itemType?: DropdownMenuItemType;
    disabled?: boolean;
}
export interface IDropDownProps {
    placeholder: string;
    label : string;
    options : IOptions[];
    styles : Partial<IDropdownStyles>;
}

export const MyDropDown: React.FC<IDropdownProps> = ({
    placeholder,
    label,
    options,
    styles
}) => {
    const stackTokens: IStackTokens = { childrenGap: 20 };
  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        placeholder={placeholder}
        label={label}
        options={options}
        styles={styles}
      />

      <Dropdown
         placeholder={placeholder}
         label={label}
         options={options}
         styles={styles}
      />

      <Dropdown
        placeholder={placeholder}
        label={label}
        options={options}
        styles={styles}
      />
    </Stack>
  );
};
