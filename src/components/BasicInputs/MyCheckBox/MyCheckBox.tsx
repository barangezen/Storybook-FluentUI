import * as React from 'react';
import { Checkbox, Stack } from '@fluentui/react';

const stackTokens = { childrenGap: 10 };

export interface ICheckBoxProps {
    label: string;
    defaultChecked : boolean;
    disabled : boolean;
}

export const MyCheckBox: React.FC<ICheckBoxProps> = ({
    label,
    defaultChecked,
    disabled
}) => {
    return (
        <Stack tokens={stackTokens}>
          <Checkbox label={label} onChange={_onChange} />
        </Stack>
      );
}

function _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean) {
    console.log(`The option has been changed to ${isChecked}.`);
  }