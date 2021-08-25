import * as React from 'react';
import {
  DatePicker,
  DayOfWeek,
  Dropdown,
  IDropdownOption,
  mergeStyles,
  defaultDatePickerStrings,
} from '@fluentui/react';

/* const days: IDropdownOption[] = [
  { text: 'Sunday', key: DayOfWeek.Sunday },
  { text: 'Monday', key: DayOfWeek.Monday },
  { text: 'Tuesday', key: DayOfWeek.Tuesday },
  { text: 'Wednesday', key: DayOfWeek.Wednesday },
  { text: 'Thursday', key: DayOfWeek.Thursday },
  { text: 'Friday', key: DayOfWeek.Friday },
  { text: 'Saturday', key: DayOfWeek.Saturday },
]; */
export interface IMyDropDownOptionProps{
    text : string;
    key : DayOfWeek
}
export interface IDatePickerProps{
   days : IMyDropDownOptionProps[];
  
   onDropdownChange : () => void;
}
const rootClass = mergeStyles({ maxWidth: 300, selectors: { '> *': { marginBottom: 15 } } });

export const MyDatePicker: React.FC<IDatePickerProps> = ({
    days,
    
    onDropdownChange
}) => {
  

 
  return (
    <div className={rootClass}>
      <DatePicker
        placeholder="Select a date..."
        ariaLabel="Select a date"
        // DatePicker uses English strings by default. For localized apps, you must override this prop.
        strings={defaultDatePickerStrings}
      />
      <Dropdown
      placeholder='Sunday'
        label="Select the first day of the week"
        options={days}
        onChange={onDropdownChange}
      />
    </div>
  );
};
