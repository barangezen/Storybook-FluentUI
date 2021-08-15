import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Toggle } from '@fluentui/react/lib/Toggle';

const stackTokens: IStackTokens = { childrenGap: 10 };


export interface IMyToggleProps{
    label : string;
    defaultChecked : boolean ;
    onText : string ;
    disabled : boolean;
    offText : string ;
    inlineLabel : boolean;
    role :  'checkbox' | 'switch' | 'menuitemcheckbox';
}

export const MyToggle: React.FC<IMyToggleProps> = ({
    label,
    defaultChecked,
    onText,
    offText,
    disabled,
    inlineLabel,
    role
}) => {
  return (
    <Stack tokens={stackTokens}>
      <Toggle label={label} defaultChecked={defaultChecked} onText={onText} offText={offText} onChange={_onChange} />

      <Toggle label={label} onText={onText} offText={offText} onChange={_onChange} />

      <Toggle label={label} defaultChecked={defaultChecked}  disabled onText={onText} offText={offText} />

      <Toggle label={label} disabled onText={onText} offText={offText} />

      <Toggle label={label} inlineLabel onText={onText} offText={offText} onChange={_onChange} />

      <Toggle label={label} inlineLabel disabled onText={onText} offText={offText} />

      <Toggle label={label} inlineLabel onChange={_onChange} />

      <Toggle label={label} inlineLabel disabled />

      <Toggle
        label={label} 
        defaultChecked={defaultChecked} 
        onText={onText}
        offText={offText}
        onChange={_onChange}
        role= {role}
      />
    </Stack>
  );
};

function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}
