import * as React from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { Label } from '@fluentui/react/lib/Label';
import { IStackProps, Stack } from '@fluentui/react/lib/Stack';


 export interface ISpinnerProps {
     size : SpinnerSize;
     labelText : string ; 
 }

export const MySpinner: React.FC<ISpinnerProps> = ({
    size,
    labelText,
}) => {
  // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
  const rowProps: IStackProps = { horizontal: true, verticalAlign: 'center' };

  const tokens = {
    sectionStack: {
      childrenGap: 10,
    },
    spinnerStack: {
      childrenGap: 20,
    },
  };

  return (
    <Stack tokens={tokens.sectionStack}>
      <Stack {...rowProps} tokens={tokens.spinnerStack}>
        <Label>{labelText}</Label>
        <Spinner size={size} />
      </Stack>
    </Stack>
  );
};
