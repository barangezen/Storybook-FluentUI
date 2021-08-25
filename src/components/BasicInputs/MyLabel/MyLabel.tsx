import * as React from 'react';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';


export interface ILabelProps {
    disabled : boolean;
    required : boolean ;
    htmlFor : string;
    id : string;
}
export const MyLabel : React.FC<ILabelProps> = ({
    disabled,
    required,
    htmlFor,
    id
}) => {
  const textFieldId = useId('anInput');
  return (
    <div>
      <Label>I'm a Label</Label>
      <Label disabled={disabled}>I'm a disabled Label</Label>
      <Label required={required}>I'm a required Label</Label>
      <Label htmlFor={htmlFor}>A Label for An Input</Label>
      <TextField id={id} />
    </div>
  );
};
