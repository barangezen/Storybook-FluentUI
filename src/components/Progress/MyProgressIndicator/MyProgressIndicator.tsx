import * as React from 'react';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';
/* 
const intervalDelay = 100;
const intervalIncrement = 0.01; */
export interface IProgressIndicatorProps{
    label : string ; 
    description : string ;
    intervalDelay: number;
    intervalIncrement : number ;
}

export const MyProgressIndicator: React.FC<IProgressIndicatorProps> = ({
    label,
    description,
    intervalDelay,
    intervalIncrement
}) => {
    const [percentComplete, setPercentComplete] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setPercentComplete((intervalIncrement + percentComplete) % 1);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <ProgressIndicator label={label} description={description} percentComplete={percentComplete} />
  );
};
