import * as React from 'react';
import { SpinButton, ISpinButtonStyles } from '@fluentui/react/lib/SpinButton';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';

/* const stackTokens: IStackTokens = { childrenGap: 20 }; */
// By default the field grows to fit available width. Constrain the width instead.
/* const styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } }; */

export interface ISpinButtonProps {
    label : string ;
    defaultValue: string ; 
    min : number;
    max : number ;
    step : number ;
    incrementButtonAriaLabel : string ;
    decrementButtonAriaLabel : string ;
    styles : Partial<ISpinButtonStyles>;
    disabled : boolean;
}

export const MySpinButton: React.FC<ISpinButtonProps> = ({
    label,
    defaultValue,
    min,
    max,
    step,
    incrementButtonAriaLabel,
    decrementButtonAriaLabel,
    styles,
    disabled,   
}) => {
    const stackTokens: IStackTokens = { childrenGap: 20 }
  return (
    <Stack tokens={stackTokens}>
      <SpinButton
        label={label}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        incrementButtonAriaLabel={incrementButtonAriaLabel}
        decrementButtonAriaLabel={decrementButtonAriaLabel}
        styles={styles}
      />
      <SpinButton
        label={label}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        incrementButtonAriaLabel={incrementButtonAriaLabel}
        decrementButtonAriaLabel={decrementButtonAriaLabel}
        styles={styles}
      />
      <SpinButton
         label={label}
         defaultValue={defaultValue}
         min={min}
         max={max}
         step={step}
         incrementButtonAriaLabel={incrementButtonAriaLabel}
         decrementButtonAriaLabel={decrementButtonAriaLabel}
         styles={styles}
         disabled={disabled}
      />
    </Stack>
  );
};
