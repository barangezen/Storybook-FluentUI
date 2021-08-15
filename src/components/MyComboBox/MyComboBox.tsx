import * as React from 'react';
import { ComboBox, IComboBoxOption, IComboBoxStyles } from '@fluentui/react';

/* const options: IComboBoxOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
];
// Optional styling to make the example look nicer
const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };
 */
export interface IOptions {
    key : string ;
    text : string;
}

export interface IComboBoxProps {
    options : IOptions[],
    styles: Partial<IComboBoxStyles>;
    label : string;
}

export const MyComboBox: React.FC<IComboBoxProps> = ({
    options,
    styles,
    label
}) => {
  return (
    <div>
      <ComboBox
        defaultSelectedKey="C"
        label={label}
        options={options}
        styles={styles}
        calloutProps={{ doNotLayer: true }}
      />
      <div
        // since this example is an inline picker, it needs some forced space below
        // so when wrapped in an overflow: hidden container in the website, the dropdown shows up
        style={{ height: '10em' }}
      />
    </div>
  );
};
