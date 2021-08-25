import * as React from 'react';
import { Shimmer, ShimmerElementType, IShimmerElement, ThemeProvider, mergeStyles } from '@fluentui/react';

const wrapperClass = mergeStyles({
  padding: 2,
  selectors: {
    '& > .ms-Shimmer-container': {
      margin: '10px 0',
    },
  },
});
/* const shimmerWithElementFirstRow = [
  { type: ShimmerElementType.circle },
  { type: ShimmerElementType.gap, width: '2%' },
  { type: ShimmerElementType.line },
]; */
export interface IShimmerWithElementFirstRow {
    type : ShimmerElementType
    width?: string ;
}
/* const shimmerWithElementSecondRow = [
  { type: ShimmerElementType.circle, height: 24 },
  { type: ShimmerElementType.gap, width: '2%' },
  { type: ShimmerElementType.line, height: 16, width: '20%' },
  { type: ShimmerElementType.gap, width: '5%' },
  { type: ShimmerElementType.line, height: 16, width: '20%' },
  { type: ShimmerElementType.gap, width: '10%' },
  { type: ShimmerElementType.line, height: 16, width: '15%' },
  { type: ShimmerElementType.gap, width: '10%' },
  { type: ShimmerElementType.line, height: 16 },
]; */
export interface IShimmerWithElementSecondRow{
    type : ShimmerElementType
    width?: string ;
    height?: number ;
}
/* const shimmerWithElementThirdRow = [
  { type: ShimmerElementType.circle, height: 24 },
  { type: ShimmerElementType.gap, width: '2%' },
  { type: ShimmerElementType.line, height: 16, width: '20%' },
  { type: ShimmerElementType.gap, width: '5%' },
  { type: ShimmerElementType.line, height: 16, width: '20%' },
  { type: ShimmerElementType.gap, width: '10%' },
  { type: ShimmerElementType.line, height: 16, width: '15%' },
  { type: ShimmerElementType.gap, width: '10%' },
  { type: ShimmerElementType.line, height: 16 },
]; */
export interface IShimmerWithElementThirdRow {
    type : ShimmerElementType,
    width?: string;
    height?: number ;
}

export interface IShimmerProps {
    shimmerWithElementFirstRow : IShimmerWithElementFirstRow[];
    shimmerWithElementSecondRow :IShimmerWithElementSecondRow[];
    shimmerWithElementThirdRow : IShimmerWithElementThirdRow[];
    headerText : string;

}
export const MyShimmer: React.FC<IShimmerProps> = ({
    shimmerWithElementFirstRow,
    shimmerWithElementSecondRow,
    shimmerWithElementThirdRow,
    headerText,
    
}) => {
  return (
    <ThemeProvider className={wrapperClass}>
      {headerText}
      <Shimmer />
      <Shimmer width="75%" />
      <Shimmer width="50%" />
      {headerText}
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      <Shimmer shimmerElements={shimmerWithElementSecondRow} />
      <Shimmer width="70%" shimmerElements={shimmerWithElementThirdRow} />
      {headerText}
      
    </ThemeProvider>
  );
};
