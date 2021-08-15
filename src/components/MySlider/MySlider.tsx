import * as React from 'react';
import { Slider, IStackTokens, Stack, IStackStyles } from '@fluentui/react';

/* const stackStyles: Partial<IStackStyles> = { root: { maxWidth: 300 } }; */
/* const stackTokens: IStackTokens = { childrenGap: 20 }; */
const sliderAriaValueText = (value: number) => `${value} percent`;
const sliderValueFormat = (value: number) => `${value}%`;

export interface ISliderProps{
    label: string ;
    min : number ;
    max : number ;
    step : number ;
    defaultValue : number ; 
    showValue : boolean;
    snapToStep : boolean;
    disabled : boolean;
    stackStyles :  Partial<IStackStyles>;
    stackTokens :IStackTokens ;
    originFromZero : boolean;
}

export const MySlider: React.FC<ISliderProps> = ({
    label,
    min,
    max,
    step,
    defaultValue,
    showValue,
    snapToStep,
    disabled,
    stackTokens,
    stackStyles,
    originFromZero,
}) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const sliderOnChange = (value: number) => setSliderValue(value);
  return (
    <Stack tokens={stackTokens} styles={stackStyles}>
      <Slider />
      <Slider label={label} min={min} max={max} step={step} defaultValue={defaultValue} showValue={showValue} snapToStep={snapToStep} />
      <Slider label={label} min={min} max={max} step={step} defaultValue={defaultValue} showValue={showValue} disabled={disabled} />
      <Slider
        label={label}
        max={max}
        value={sliderValue}
        showValue={showValue}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={sliderOnChange}
      />
      <Slider
        label={label}
        max={max}
        ariaValueText={sliderAriaValueText}
        valueFormat={sliderValueFormat}
        showValue={showValue}
      />
      <Slider label={label} min={min} max={max} step={step} defaultValue={defaultValue} showValue={showValue} originFromZero={originFromZero} />
    </Stack>
  );
};
