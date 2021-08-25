import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
/* const stackStyles: Partial<IStackStyles> = { root: { width: 650 } }; */
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

export interface ITextFieldProps{
    label : string;
    disabled : boolean;
    defaultValue : string; 
    readyOnly : boolean,
    required : boolean;
    ariaLabel : string ; 
    errorMessage : string;  
    canRevealPassword: boolean;
    placeholder : string;  
    type: string;
    mask: string;
    title: string;
    revealPasswordAriaLabel: string ;
    stackStyles: Partial<IStackStyles>
}

export const MyTextField: React.FC<ITextFieldProps> = ({
    label,
    defaultValue,
    disabled,
    readyOnly,
    required,
    ariaLabel,
    errorMessage,
    canRevealPassword,
    placeholder,
    type,
    revealPasswordAriaLabel,
    title,
    mask,
    stackStyles
}) => {
  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <TextField label={label} />
        <TextField label={label} disabled={disabled} defaultValue={defaultValue} />
        <TextField label={label} readOnly={readyOnly} defaultValue={defaultValue} />
        <TextField label={label} required={required} />
        <TextField ariaLabel={ariaLabel} required={required} />
        <TextField label={label} errorMessage={errorMessage} />
      </Stack>
      <Stack {...columnProps}>
        <MaskedTextField label={label} mask={mask} title={title} />
        <TextField label={label} iconProps={iconProps} />
        <TextField label={label} placeholder={placeholder} />
        <TextField label={label} disabled={disabled} placeholder={defaultValue} />
        <TextField
          label={label}
          type={type}
          canRevealPassword = {canRevealPassword}
          revealPasswordAriaLabel={revealPasswordAriaLabel}
        />
      </Stack>
    </Stack>
  );
};
