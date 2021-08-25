import * as React from 'react';
import { Rating, RatingSize } from '@fluentui/react';


export interface IRatingProps {
    max : number ;
    size : RatingSize;
    defaultRating : number ;
    ariaLabel : string;
    ariaLabelFormat : string;
}

export const MyRating: React.FC<IRatingProps> = ({
    max,
    size,
    defaultRating,
    ariaLabel,
    ariaLabelFormat
}) => {
      
  return (
    <div>
      Large stars:
      <Rating
        max={5}
        size={1}
        defaultRating={defaultRating}
        ariaLabel={ariaLabel}
        ariaLabelFormat={ariaLabelFormat}
      />
    </div>
  );
};